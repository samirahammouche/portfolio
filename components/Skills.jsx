import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Section from "./Section";
import Reveal from "./Reveal";

const skills = [
  [FaHtml5, "HTML"], [FaCss3Alt, "CSS"], [SiTailwindcss, "Tailwind CSS"], [FaJs, "JavaScript"],
  [FaReact, "React.js"], [SiNextdotjs, "Next.js"], [FaGitAlt, "Git"], [FaFigma, "Figma"],
];

export default function Skills() {
  return (
    <Section id="skills" title="Tools I work with">
      <Reveal>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {skills.map(([Icon, name]) => (
            <li key={name} className="group flex flex-col gap-4 bg-bg p-6 transition-colors hover:bg-panel">
              <Icon size={32} className="text-mute transition-colors group-hover:text-accent" aria-hidden />
              <span className="font-medium">{name}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
