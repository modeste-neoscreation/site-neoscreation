"use client";

import { useRef } from "react";

const quotes = [
  {
    text: "« Modeste a tout de suite compris ma vision et mes enjeux. Au-delà de la vidéo, il a structuré mon idée, challengé chaque mot et clarifié mon positionnement pour un message clair, crédible et prêt pour les investisseurs. »",
    name: "Sylvie",
    role: "Fondatrice · Obò Kaz",
  },
  {
    text: "« Je voulais une vidéo explicative qui vulgarise une techno et parle à mon marché. La phase de structuration a clarifié ma vision et mon storytelling : une idée complexe est devenue un message simple et immédiatement compréhensible. »",
    name: "Axel",
    role: "Fondateur · VCV",
  },
  {
    text: "« La collaboration a été fluide et vous avez bien compris le cœur de PulseQR et avez su le traduire en une vidéo percutante et moderne. Vous m’avez bien communiqué l’avancement de la production hebdomadairement et j’ai été agréablement surpris du résultat ! Merci pour votre créativité et votre professionnalisme ! »",
    name: "Adams",
    role: "Fondateur · PulseQR",
  },
  {
    text: "« Merci pour tes services ce fut un reel plaisir de collaborer avec toi, tu as parfaitement compris l'univers de mon Saas et ton travail est remarquable ! Au plaisir de bénéficier de tes services une fois de plus. »",
    name: "Wassim",
    role: "Fondateur · Pipeline",
  },
];

export function Testimonials() {
  const scrollerRef = useRef<HTMLUListElement | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = 24;
    const step = card ? card.getBoundingClientRect().width + gap : 320;
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="temoignages"
      className="scroll-mt-24 border-t border-[var(--border)] bg-[var(--surface)]/35 py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-neos">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="testimonials-heading"
              className="font-display text-3xl text-white md:text-5xl"
            >
              Ils parlent de leur expérience
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-transparent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
              aria-label="Témoignages précédents"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-transparent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
              aria-label="Témoignages suivants"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-black to-transparent md:w-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-black to-transparent md:w-12"
            aria-hidden
          />

          <ul
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Liste des témoignages"
          >
            {quotes.map((q) => (
              <li
                key={q.role}
                className="flex min-h-[260px] w-[min(92vw,380px)] shrink-0 snap-start flex-col rounded-[15px] border border-[var(--border)] bg-black p-6 md:w-[calc((100%-1.5rem)/2)] md:p-8 lg:w-[calc((100%-3rem)/3)] lg:min-w-0"
              >
                <p className="flex-1 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {q.text}
                </p>
                <footer className="mt-8 border-t border-[var(--border)] pt-5 md:mt-10 md:pt-6">
                  <p className="font-heading font-semibold text-white">{q.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted-dim)]">{q.role}</p>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
