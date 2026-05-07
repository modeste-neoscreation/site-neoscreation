export function Expertise() {
  return (
    <section
      className="scroll-mt-24 py-20 md:py-28"
      aria-labelledby="expertise-heading"
    >
      <div className="container-neos">
        <h2
          id="expertise-heading"
          className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
        >
          Pourquoi une vidéo explicative ?
        </h2>
        <p className="font-display mt-6 max-w-3xl text-3xl uppercase leading-tight tracking-wide text-white md:text-4xl md:leading-tight">
          Une offre SaaS trop dense fait fuir les décideurs avant même la démo.
        </p>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          Mon rôle :{" "}
          <strong className="font-semibold text-white">clarifier le message</strong>,{" "}
          prioriser ce qui vend, puis le traduire en vidéo courte pour que votre
          page et vos campagnes{" "}
          <strong className="font-semibold text-white">convertissent</strong>.
          Un travail de tri, de structure et de mouvement qui rend votre produit
          évident.
        </p>
      </div>
    </section>
  );
}
