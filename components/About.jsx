import Section from "./Section";
import Reveal from "./Reveal";
import { site } from "../data/site";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-mute">
          {site.about.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="divide-y divide-line border-y border-line">
            {site.facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 py-4">
                <dt className="text-mute">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
