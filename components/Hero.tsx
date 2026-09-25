"use client";

import { useEffect, useState } from "react";
import { site } from "../data/site";

const initials = site.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

function TypedName() {
  const [visibleName, setVisibleName] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleName(site.name);
      return;
    }

    let characterIndex = 0;
    const timer = window.setInterval(() => {
      characterIndex += 1;
      setVisibleName(site.name.slice(0, characterIndex));

      if (characterIndex >= site.name.length) {
        window.clearInterval(timer);
      }
    }, 45);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-block">
      {/* Ghost text reserves the exact layout dimensions from the start to eliminate CLS */}
      <span className="invisible select-none" aria-hidden="true">
        {site.name}
      </span>
      {/* Visible typing animation layer */}
      <span className="absolute inset-0" aria-hidden="true">
        {visibleName}
        <span className="ml-1 inline-block h-[0.85em] w-[0.08em] animate-pulse bg-accent align-[-0.08em]" />
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[94vh] items-center overflow-hidden pt-24">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1fr_auto]">
        <div>
          <div className="hero-fade-1">
            <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-tighter">
              <TypedName />
            </h1>
          </div>
          <div className="hero-fade-2">
            <p className="mt-4 font-display text-2xl text-accent md:text-3xl">{site.role}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{site.description}</p>
          </div>
          <div className="hero-fade-3 mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-accent px-6 py-3 font-medium text-bg transition hover:brightness-110">View my work</a>
            <a href={site.resume} download className="rounded-lg border border-line px-6 py-3 font-medium transition hover:border-accent">Download resume</a>
          </div>
        </div>
        <div className="hero-fade-4">
          <div className="grid h-40 w-40 place-items-center rounded-full border-2 border-accent/60 bg-panel font-display text-5xl font-semibold text-accent md:h-60 md:w-60 md:text-7xl">
            {initials}
          </div>
        </div>
      </div>
    </section>
  );
}
