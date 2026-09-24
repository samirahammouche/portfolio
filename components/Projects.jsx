import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "../data/site";

function Frame({ p }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel">
      <div className="flex gap-1.5 border-b border-line px-4 py-3" aria-hidden>
        {[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-line" />)}
      </div>
      {p.image ? (
        <Image src={p.image} alt={`${p.title} screenshot`} width={1280} height={720} className="h-auto w-full" />
      ) : (
        <div className="grid aspect-video place-items-center px-6 text-center text-sm text-mute">
          Add a screenshot to /public/projects and set its path in data/site.js
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Selected work">
      <div>
        {projects.map((p, i) => (
          <Reveal key={p.title}>
            <article className="grid items-center gap-8 border-t border-line py-12 md:grid-cols-5 md:gap-12">
              <div className={`md:col-span-3 ${i % 2 ? "md:order-2" : ""}`}><Frame p={p} /></div>
              <div className="md:col-span-2">
                <h3 className="font-display text-3xl font-semibold">{p.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-mute">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-sm text-mute">
                  {p.stack.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1">{s}</li>)}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-accent px-5 py-2.5 font-medium text-bg transition hover:brightness-110">Live demo</a>
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-line px-5 py-2.5 font-medium transition hover:border-accent">Source code</a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
