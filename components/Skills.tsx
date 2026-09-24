import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiPython, SiFlask, SiFastapi, SiPostgresql } from "react-icons/si";
import Section from "./Section";
import Reveal from "./Reveal";

const groups: { title: string; items: [IconType, string][] }[] = [
  {
    title: "Frontend",
    items: [
      [FaHtml5, "HTML"], [FaCss3Alt, "CSS"], [SiTailwindcss, "Tailwind CSS"], [FaJs, "JavaScript"],
      [SiTypescript, "TypeScript"], [FaReact, "React.js"], [SiNextdotjs, "Next.js"],
    ],
  },
  { title: "Backend", items: [[SiPython, "Python"], [SiFlask, "Flask"], [SiFastapi, "FastAPI"]] },
  { title: "Data", items: [[FaDatabase, "SQL"], [SiPostgresql, "PostgreSQL"]] },
  { title: "Tools", items: [[FaGitAlt, "Git"], [FaFigma, "Figma"]] },
];

export default function Skills() {
  return (
    <Section id="skills" title="Tools I work with">
      <Reveal className="space-y-8">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-3 font-display text-lg text-mute">{g.title}</h3>
            <ul className="flex flex-wrap gap-3">
              {g.items.map(([Icon, name]) => (
                <li key={name} className="group flex items-center gap-3 rounded-lg border border-line px-4 py-3 transition-colors hover:border-accent hover:bg-panel">
                  <Icon size={22} className="text-mute transition-colors group-hover:text-accent" aria-hidden />
                  <span className="font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}