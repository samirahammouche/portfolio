import { site } from "../data/site";

const links = [["Work", "#projects"], ["About", "#about"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/60 bg-bg/75 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main">
        <a href="#top" className="font-display text-lg font-semibold">{site.name}</a>
        <ul className="flex items-center gap-6 text-sm text-mute">
          {links.map(([label, href]) => (
            <li key={href} className="hidden sm:block"><a href={href} className="hover:text-ink transition-colors">{label}</a></li>
          ))}
          <li><a href={site.resume} className="rounded-lg border border-line px-3 py-1.5 text-ink hover:border-accent transition-colors">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}
