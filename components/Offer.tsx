const CALENDLY = "https://calendly.com/neoscreation/appel-de-decouverte";

const included = [
  "Audit & architecture du message (priorité à ce qui vend)",
  "Motion design ~60 s + sound design",
  "Voix-off professionnelle, français ou anglais",
  "Accompagnement d’un seul interlocuteur de A à Z",
  "Révisions illimitées jusqu’à validation finale",
  "Exports 16:9, 9:16 et 1:1 selon pack",
];

export function Offer() {
  return (
    <section
      id="offre"
      className="scroll-mt-24 py-20 md:py-28"
      aria-labelledby="offer-heading"
    >
      <div className="container-neos">
        <h2
          id="offer-heading"
          className="font-display text-3xl text-white md:text-5xl"
        >
          Mon offre
        </h2>
        <p className="font-heading mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Pack signature pour une vidéo qui explique vite, sans diluer la valeur
          produit.
        </p>

        <div className="mt-14">
          <div className="card-fancy-border max-w-3xl bg-gradient-to-br from-[var(--accent-backdrop-soft)] to-[var(--surface)] p-8">
            <h3 className="font-heading text-white">
              Votre vidéo explicative sous 2 semaines
            </h3>
            <ul className="mt-10 space-y-4">
              {included.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                  <span className="text-[var(--muted)]">{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-fancy mt-12"
            >
              Réserver un appel gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
