/**
 * Logos clients affichés dans la bande défilante.
 * Remplacez les fichiers dans /public/clients/ par vos vrais logos (PNG ou SVG, fond transparent conseillé).
 */
export type ClientLogo = {
  alt: string;
  /** Chemin relatif à /public */
  src: string;
  /** Facteur d’échelle optionnel (ex: 1.2 = +20%) */
  scale?: number;
};

export const clientLogos: ClientLogo[] = [
  { alt: "Dietmate", src: "/assets/images/clients_logo/logo_dietmate.png", scale: 1.7 },
  { alt: "GoWork", src: "/assets/images/clients_logo/logo_gowork.png" },
  { alt: "Ituivy", src: "/assets/images/clients_logo/logo_ituivy.png", scale: 2.38 },
  { alt: "Mandle", src: "/assets/images/clients_logo/logo_mandle.png" },
  { alt: "Pipeline", src: "/assets/images/clients_logo/logo_pipeline.png", scale: 2.38 },
  { alt: "PulseQR", src: "/assets/images/clients_logo/logo_pulseqr.png", scale: 1.3 },
  { alt: "WED", src: "/assets/images/clients_logo/logo_wed.png", scale: 2.38 },
];
