"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#realisations", label: "Réalisations" },
  { href: "#offre", label: "Offre" },
  { href: "#process", label: "Process" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const CALENDLY = "https://calendly.com/neoscreation/appel-de-decouverte";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/75 backdrop-blur-md">
      <div className="container-neos flex items-center justify-between gap-4 py-4">
        <a
          href="#"
          className="inline-flex items-center"
        >
          <Image
            src="/assets/images/logo_neoscreation.png"
            alt="Neos Creation"
            width={240}
            height={40}
            priority
            className="h-9 w-auto md:h-10"
          />
        </a>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Principal">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 font-heading text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-fancy-sm hidden sm:inline-flex"
          >
            Prendre un rendez-vous
          </a>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-[var(--border)] md:hidden">
          <nav className="container-neos flex flex-col py-3" aria-label="Mobile">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-2 py-3 font-heading text-sm font-medium uppercase tracking-wider text-[var(--muted)] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
