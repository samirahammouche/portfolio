"use client";
import { useState } from "react";
import { site } from "../data/site";

const field = "w-full rounded-lg border border-line bg-panel px-4 py-3 outline-none transition focus:border-accent";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(site.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Failed to send message");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-1.5 block text-sm text-mute">Name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-mute">Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-mute">Message</span>
        <textarea name="message" rows={5} required className={field} />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-accent px-6 py-3 font-medium text-bg transition hover:brightness-110 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      <p role="status" className="text-sm">
        {status === "sent" && <span className="text-accent">Message sent. I'll reply soon.</span>}
        {status === "error" && (
          <span className="text-red-400">
            Message not sent. Try again or email{" "}
            <a href={`mailto:${site.email}`} className="underline hover:text-accent">
              {site.email}
            </a>
            .
          </span>
        )}
      </p>
    </form>
  );
}
