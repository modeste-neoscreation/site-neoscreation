"use client";

import { useRef } from "react";

const VIMEO_SUFFIX = "&player_id=0&app_id=58479";

const videos = [
  `https://player.vimeo.com/video/1189922823?h=adcad503ce&badge=0&autopause=0${VIMEO_SUFFIX}`,
  `https://player.vimeo.com/video/1189923938?h=a71d923d99&badge=0&autopause=0${VIMEO_SUFFIX}`,
  `https://player.vimeo.com/video/1189925216?h=5e07c5a562&badge=0&autopause=0${VIMEO_SUFFIX}`,
  `https://player.vimeo.com/video/1189926759?h=e325a30c10&badge=0&autopause=0${VIMEO_SUFFIX}`,
  `https://player.vimeo.com/video/1189927852?h=43d46cb5d1&badge=0&autopause=0${VIMEO_SUFFIX}`,
  `https://player.vimeo.com/video/1189928796?h=51537f3534&badge=0&autopause=0${VIMEO_SUFFIX}`,
  `https://player.vimeo.com/video/1189929650?h=9b408e970b&badge=0&autopause=0${VIMEO_SUFFIX}`,
  `https://player.vimeo.com/video/1189930981?h=fcb1987fb3&badge=0&autopause=0${VIMEO_SUFFIX}`,
  `https://player.vimeo.com/video/1189931567?h=3f952e2ce3&badge=0&autopause=0${VIMEO_SUFFIX}`,
  `https://player.vimeo.com/video/1189932374?h=5e6149bc17&badge=0&autopause=0${VIMEO_SUFFIX}`,
];

export function Portfolio() {
  const scrollerRef = useRef<HTMLUListElement | null>(null);

  const scrollByCards = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(320, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="realisations"
      className="scroll-mt-24 border-t border-[var(--border)] py-20 md:py-28"
      aria-labelledby="portfolio-heading"
    >
      <div className="container-neos">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="portfolio-heading"
              className="font-display text-3xl text-white md:text-5xl"
            >
              Nos derniers projets
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCards("left")}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-transparent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
              aria-label="Défiler vers la gauche"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("right")}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-transparent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
              aria-label="Défiler vers la droite"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent md:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent md:w-24"
          aria-hidden
        />

        <ul
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-10"
        >
            {videos.map((src, idx) => (
              <li
                key={`${src}-${idx}`}
                className="w-[96vw] shrink-0 snap-start overflow-hidden rounded-[15px] border border-[var(--border)] bg-black sm:w-[90vw] md:w-[78vw] lg:w-[520px] xl:w-[620px]"
              >
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full border-0"
                    src={src}
                    title={
                      idx === 0
                        ? "Diet Mate - Vidéo explicative"
                        : idx === 1
                          ? "GoWork - Vidéo explicative"
                          : idx === 2
                            ? "Pipeline - Vidéo explicative"
                            : idx === 3
                              ? "VCV - Vidéo explicative"
                              : idx === 4
                                ? "WeWed - Vidéo explicative"
                                : idx === 5
                                  ? "Korsus - Vidéo explicative"
                                  : idx === 6
                                    ? "PulseQR - Vidéo explicative"
                                    : idx === 7
                                      ? "Studlas - Vidéo explicative"
                                      : idx === 8
                                        ? "Ituivy - Vidéo explicative"
                                        : idx === 9
                                          ? "Obo Kaz - Vidéo explicative"
                                          : `Réalisation ${idx + 1}`
                    }
                    loading="eager"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
