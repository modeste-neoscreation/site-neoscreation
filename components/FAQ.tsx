const items = [
  {
    q: "En combien de temps est livrée la vidéo ?",
    a: "Le pack Pitch ~60 s est livré en ~2 semaines après validation du script (selon vos retours). Pour des formats plus courts / déclinaisons : option express possible en 48h.",
  },
  {
    q: "Qui rédige le script ?",
    a: "On le co-construit. Je clarifie le message, je priorise ce qui vend, puis on valide ensemble avant animation (pas besoin d’un brief “parfait”).",
  },
  {
    q: "Combien de révisions sont incluses ?",
    a: "Révisions illimitées jusqu’à validation finale, dans le périmètre du brief.",
  },
  {
    q: "Quels fichiers et formats recevez-vous ?",
    a: "Exports Full HD pour le web et les réseaux : 16:9 paysage, 9:16 vertical et 1:1 carré. Détail des masters au brief.",
  },
  {
    q: "Quel budget prévoir ?",
    a: "Les tarifs démarrent à 697€ selon le format. Le pack Pitch (~60 s) est chiffré au devis en fonction de la complexité, de la voix-off et des déclinaisons.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="container-neos max-w-3xl">
        <h2
          id="faq-heading"
          className="font-display text-3xl text-white md:text-5xl"
        >
          Questions fréquentes
        </h2>
        <p className="font-heading mt-4 text-[var(--muted)]">
          Synthèse, détail au devis.
        </p>

        <div className="mt-12 space-y-3">
          {items.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-[12px] border border-[var(--border)] bg-[var(--surface)] px-5 py-1 open:bg-[var(--surface-elevated)]"
            >
              <summary className="cursor-pointer list-none py-4 font-heading font-semibold text-white outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {q}
                  <span className="font-display text-xl text-[var(--accent)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-[var(--border)] pb-5 pt-4 text-[var(--muted)] leading-relaxed">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
