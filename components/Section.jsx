import Reveal from "./Reveal";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-12">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
