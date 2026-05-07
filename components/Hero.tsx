const CALENDLY = "https://calendly.com/neoscreation/appel-de-decouverte";
/** Vimeo : ID + hash du lien privé / non listé */
const HERO_VIDEO_EMBED =
  "https://player.vimeo.com/video/1189903237?h=5004d14669&badge=0&autopause=0";

export function Hero() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden pb-16 pt-4 md:pb-24 md:pt-10"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {/* Lueur centrale type “light leak”, derrière la 2ᵉ ligne du titre et le haut du paragraphe */}
        <div className="absolute left-1/2 top-[clamp(7rem,22vw,11rem)] h-[min(72vw,26rem)] w-[min(140vw,56rem)] -translate-x-1/2 rounded-[50%] bg-[var(--accent-bloom)] opacity-[0.26] blur-[100px] md:top-[9.5rem] md:h-[28rem] md:w-[52rem] md:opacity-[0.22] md:blur-[120px]" />
        <div className="absolute left-1/2 top-[clamp(8rem,24vw,12rem)] h-[min(42vw,14rem)] w-[min(85vw,28rem)] -translate-x-1/2 rounded-[50%] bg-[var(--accent-backdrop-deep)] opacity-[0.2] blur-[72px] md:top-[11rem]" />
        <div className="absolute -left-32 top-1/4 size-[420px] rounded-full bg-[var(--accent-backdrop-deep)] opacity-[0.14] blur-[100px]" />
        <div className="absolute -right-24 bottom-0 size-[360px] rounded-full bg-[var(--accent-bloom-mid)] opacity-10 blur-[90px]" />
      </div>

      <div className="container-neos relative z-[1] flex flex-col items-center text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-black/40 px-2.5 py-0.5"
          aria-label="Note moyenne 4,5 sur 5"
        >
          <div className="flex items-center gap-0.5" aria-hidden>
            {/* 4 étoiles pleines */}
            {Array.from({ length: 4 }).map((_, i) => (
              <svg
                key={i}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[var(--highlight)]"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                  fill="currentColor"
                />
              </svg>
            ))}
            {/* 1 demi étoile */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[var(--highlight)]">
              <defs>
                <linearGradient id="halfStar" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="rgba(244,224,77,0.22)" />
                </linearGradient>
              </defs>
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                fill="url(#halfStar)"
              />
            </svg>
          </div>
          <p className="font-heading text-xs font-medium text-white">
            4,5<span className="text-[var(--muted)]">/5</span>
          </p>
          <span className="text-xs text-[var(--muted)]">•</span>
          <p className="text-xs leading-snug text-[var(--muted)]">
            Apprécié par les fondateurs accompagnés
          </p>
        </div>

        <h1
          id="hero-heading"
          className="font-display mx-auto mt-5 max-w-4xl text-[clamp(1.9rem,5.6vw,3.75rem)] leading-[1.02] text-white md:mt-6"
        >
          <span className="block px-1">
            Votre solution tech enfin{" "}
            <span className="text-[var(--accent)]">claire</span>
          </span>
          <span className="font-hero-tagline-local-serif block px-1 text-white">
            en motion-design
          </span>
        </h1>

        <p className="font-heading mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-[var(--muted)] md:text-xl md:leading-relaxed">
          Les visiteurs partent quand l’offre est floue. Je structure votre
          message et l’anime pour qu’ils comprennent la valeur et passent à
          l’action.
        </p>

        <div className="mx-auto mt-8 w-full max-w-2xl">
          <div className="overflow-hidden rounded-[15px] border border-[var(--border)] bg-black">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={HERO_VIDEO_EMBED}
                title="Extrait vidéo : offre claire en une minute"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary-fancy-sm">
            Réservez un appel
          </a>
          <a href="#realisations" className="btn-secondary-sm">
            Voir les réalisations
          </a>
        </div>
      </div>
    </section>
  );
}
