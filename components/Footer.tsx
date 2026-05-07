import Image from "next/image";

const CALENDLY = "https://calendly.com/neoscreation/appel-de-decouverte";

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
