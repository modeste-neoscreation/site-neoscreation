import Image from "next/image";

const CALENDLY = "https://calendly.com/neoscreation/appel-de-decouverte";
const LINKEDIN = "https://www.linkedin.com/in/modeste-kambala-13aa08106/";
const INSTAGRAM = "https://www.instagram.com/modeste.creation/";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-[var(--border)] bg-[var(--surface)] px-0 py-16 md:py-20"
    >
      <div className="container-neos flex flex-col gap-14 md:flex-row md:justify-between">
        <div>
          <a href="#" className="inline-flex items-center">
            <Image
              src="/assets/images/logo_neoscreation.png"
              alt="Neos Creation"
              width={240}
              height={40}
              className="h-9 w-auto md:h-10"
            />
          </a>
          <p className="mt-5 max-w-sm text-[var(--muted)] leading-relaxed">
            Vidéo explicative et motion design pour SaaS & startups. Studio basé à{" "}
            <strong className="font-semibold text-white">Paris</strong>, briefs
            et livraisons à distance (visio, fichiers cloud).
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--muted)] transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6.94 6.5A2.44 2.44 0 1 1 2.06 6.5a2.44 2.44 0 0 1 4.88 0Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M4.5 10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M9 14.2c.4-2.2 1.9-4.2 4.8-4.2 3.2 0 5.2 2.1 5.2 6.2V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--muted)] transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M17.5 6.7h.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-fancy mt-8"
          >
            Prendre rendez-vous
          </a>
        </div>

        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-dim)]">
              Navigation
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#realisations"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a
                  href="#offre"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  Offre
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-dim)]">
              Localisation
            </p>
            <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
              Paris, France
              <br />
              <span className="text-[var(--muted-dim)]">
                Rendez-vous en visio ou sur Paris selon disponibilités.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="container-neos mt-16 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--muted-dim)] md:text-left">
        © {new Date().getFullYear()} Neos Creation, Paris. Tous droits réservés.
      </div>
    </footer>
  );
}
