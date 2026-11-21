"use client";

import { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <nav className="mx-auto max-w-6xl px-6" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="inline-flex items-center gap-3" aria-label="Ogar Emma - Home">
            <span className="h-2 w-2 bg-electric-blue" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-tight text-white">Ogar Emma</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-transparent pb-1 text-sm text-muted transition-colors hover:border-electric-blue hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="hidden items-center gap-2 text-sm font-medium text-electric-blue transition-colors hover:text-white sm:inline-flex"
            >
              Get in touch
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </a>

            <button
              type="button"
              className="p-2 text-muted transition-colors hover:text-white md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-3">
            {[...navItems, { href: "#contact", label: "Get in touch" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-border py-3 text-sm text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
