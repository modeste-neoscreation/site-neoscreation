const siteUrl = "https://www.neoscreation.fr";

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Neos Creation",
  url: siteUrl,
  description:
    "Studio de vidéo explicative et motion design pour SaaS et startups à Paris : voix-off FR/EN, livraison rapide.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "City",
    name: "Paris",
  },
  offers: {
    "@type": "Offer",
    name: "Vidéo explicative 60 secondes",
    description:
      "Accompagnement stratégique, motion design et livraison multi-formats en environ deux semaines.",
  },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "En combien de temps est livrée la vidéo ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le pack Pitch ~60 s vise une livraison en environ 2 semaines après validation du script (selon vos délais de retours). Pour des formats plus courts et des déclinaisons, une option express en 48h est possible.",
      },
    },
    {
      "@type": "Question",
      name: "Qui rédige le script ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le script est co-construit : clarification du message, priorisation des arguments, puis validation avant passage au motion design. Pas besoin d’un brief parfait.",
      },
    },
    {
      "@type": "Question",
      name: "Les révisions sont-elles incluses ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les révisions sont illimitées jusqu’à validation finale, dans le périmètre défini au brief.",
      },
    },
    {
      "@type": "Question",
      name: "Quels formats recevez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exports Full HD adaptés au web et aux réseaux : notamment 16:9 paysage, 9:16 vertical et 1:1 carré, selon votre pack ou les options choisies.",
      },
    },
    {
      "@type": "Question",
      name: "Quel budget prévoir ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les tarifs démarrent à 697€ selon le format. Le pack Pitch (~60 s) est chiffré au devis selon la complexité, la voix-off et les déclinaisons.",
      },
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
