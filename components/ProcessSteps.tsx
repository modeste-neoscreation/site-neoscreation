const steps = [
  {
    n: "1",
    title: "Audit & architecture du message",
    body: "On isole l’essentiel : promesse, différenciation, preuves, ce qui doit tenir dans les 60 secondes. Script validé ensemble avant de passer à l’animation.",
  },
  {
    n: "2",
    title: "Motion design & livraison",
    body: "Montage ~60 s, voix-off pro, sound design, révisions illimitées jusqu’à validation finale, puis fichiers prêts à diffuser.",
  },
];

export function ProcessSteps() {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-t border-[var(--border)] bg-[var(--surface)]/40 py-20 md:py-28"
      aria-labelledby="process-heading"
    >
      <div className="container-neos">
        <h2
          id="process-heading"
          className="font-display text-3xl text-white md:text-5xl"
        >
          Votre vidéo explicative en 2 étapes
        </h2>
        <p className="font-heading mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Du message validé à la livraison multi-formats.
        </p>

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-[15px] border border-[var(--border)] bg-black p-8"
            >
              <span className="badge-fancy flex size-11 items-center justify-center rounded-full font-display text-lg">
                {s.n}
              </span>
              <h3 className="font-heading mt-8 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
