import { SITE_URL } from "@/lib/site-config";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Kaza Intérieur",
  alternateName: "Kaza",
  url: SITE_URL,
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
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Anglet" },
    { "@type": "City", name: "Biarritz" },
    { "@type": "City", name: "Bayonne" },
  ],
  knowsAbout: [
    "Pose de cuisine",
    "Pose de parquet",
    "Aménagement intérieur",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
      ],
      opens: "08:00",
      closes: "19:00",
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
