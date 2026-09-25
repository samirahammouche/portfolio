import Section from "./Section";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { site } from "../data/site";

const links: [string, string, string][] = [
  ["Email", `mailto:${site.email}`, site.email],
  ["LinkedIn", site.linkedin, "Connect with me"],
  ["GitHub", site.github, "Browse my code"],
];

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {links.map(([label, href, hint]) => (
              <li key={label}>
                <a
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  className="flex justify-between py-4 transition-colors hover:text-accent"
                >
                  <span className="font-medium">{label}</span>
                  <span className="text-mute">{hint}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}><ContactForm /></Reveal>
      </div>
    </Section>
  );
}
