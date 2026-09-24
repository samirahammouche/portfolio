"use client";

import { useState } from "react";
import { site } from "../data/site";

const links = [
  ["Work", "#projects"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/60 bg-bg/75 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main">
        <a href="#top" className="font-display text-lg font-semibold hover:text-accent transition-colors">
          {site.name}
        </a>

        {/* Desktop navigation */}
        <ul className="hidden sm:flex items-center gap-6 text-sm text-mute">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="hover:text-ink transition-colors">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resume}
              className="rounded-lg border border-line px-3 py-1.5 text-ink hover:border-accent transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu button and resume link */}
        <div className="flex sm:hidden items-center gap-3">
          <a
            href={site.resume}
            className="rounded-lg border border-line px-2.5 py-1 text-xs text-ink hover:border-accent transition-colors"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-line p-2 text-mute hover:text-ink hover:border-accent transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="border-t border-line/60 bg-bg/95 backdrop-blur px-6 py-4 sm:hidden">
          <ul className="flex flex-col space-y-3 text-base text-mute">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-accent transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
