import type { Metadata } from "next";
import { Inter, Outfit, Staatliches } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  weight: ["200", "400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const staatliches = Staatliches({
  weight: "400",
  variable: "--font-staatliches",
  subsets: ["latin"],
});

const siteUrl = "https://www.neoscreation.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Vidéo explicative SaaS & startups | Motion design | Neos Creation",
    template: "%s | Neos Creation",
  },
  description:
    "Vidéo explicative et motion design pour SaaS et startups. Message clarifié, livraison ~60 s en ~2 semaines, FR/EN. Réservez un appel découverte.",
  keywords: [
    "vidéo explicative SaaS",
    "vidéo explicative startup",
    "motion design B2B",
    "vidéo produit",
    "storytelling SaaS",
    "motion design Paris",
  ],
  authors: [{ name: "Neos Creation" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Neos Creation",
    title: "Vidéo explicative motion design pour SaaS et startups | Neos Creation",
    description:
      "Transformez la confusion de vos visiteurs en décision d’achat avec une vidéo explicative pensée pour la compréhension.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neos Creation, vidéo explicative SaaS & startups",
    description:
      "Motion design et vidéo explicative pour clarifier votre offre et vendre en moins de 60 secondes.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} ${staatliches.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
