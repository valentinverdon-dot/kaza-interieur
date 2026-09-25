import { SITE_URL } from "@/lib/site-config";

const localBusiness = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Kaza Intérieur",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Kaza Intérieur",
      alternateName: "Kaza",
      description:
        "Entreprise de rénovation et d’aménagement intérieur à Anglet, Biarritz, Bayonne et sur la Côte basque.",
      url: SITE_URL,
      logo: `${SITE_URL}/kaza-logo.svg`,
      image: `${SITE_URL}/hero.webp`,
      telephone: "+33620400372",
      email: "valentin@kaza-interieur.fr",
      founder: {
        "@type": "Person",
        name: "Valentin Verdon",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "6 allée du Professeur Henri Gavel",
        postalCode: "64600",
        addressLocality: "Anglet",
        addressRegion: "Nouvelle-Aquitaine",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Anglet" },
        { "@type": "City", name: "Biarritz" },
        { "@type": "City", name: "Bayonne" },
      ],
      knowsAbout: [
        "Rénovation intérieure",
        "Aménagement intérieur",
        "Pose de parquet",
        "Pose de cuisine",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Prestations Kaza Intérieur",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rénovation intérieure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aménagement intérieur",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Pose de parquet" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Pose de cuisine" },
          },
        ],
      },
    },
  ],
};

export default function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
      }}
    />
  );
}
