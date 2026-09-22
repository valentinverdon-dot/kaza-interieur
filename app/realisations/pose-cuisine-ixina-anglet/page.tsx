import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-config";

const pagePath = "/realisations/pose-cuisine-ixina-anglet";
const pageUrl = `${SITE_URL}${pagePath}`;

const cuisineEnsembleImage =
  "/projects/cuisine-noire-anglet/pose-cuisine-ixina-anglet.webp";
const ilotImage =
  "/projects/cuisine-noire-anglet/cuisine-noire-bois-ilot-anglet.webp";
const cuisineEquipeeImage =
  "/projects/cuisine-noire-anglet/installation-cuisine-equipee-anglet.webp";

export const metadata = createPageMetadata({
  title: "Pose de cuisine Ixina à Anglet",
  description:
    "Réalisation à Anglet : installation d'une cuisine Ixina noire et bois avec îlot central dans une maison neuve, complétée par la pose d'un parquet contrecollé.",
  path: pagePath,
  image: {
    url: `${SITE_URL}${ilotImage}`,
    alt: "Cuisine noire et bois avec îlot central à Anglet",
    width: 1600,
    height: 1200,
  },
});

const specs = [
  { label: "Localisation", value: "Anglet" },
  { label: "Projet", value: "Installation de cuisine" },
  { label: "Cuisine", value: "Ixina" },
  { label: "Configuration", value: "Avec îlot central" },
  { label: "Contexte", value: "Maison neuve" },
  { label: "Sol", value: "Parquet contrecollé" },
];

const interventionSteps = [
  "Assemblage des meubles",
  "Implantation et îlot",
  "Plan de travail et crédences",
  "Équipements",
  "Parquet et finitions",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Pose d'une cuisine Ixina avec îlot à Anglet",
      description:
        "Réalisation à Anglet : installation d'une cuisine Ixina noire et bois avec îlot central dans une maison neuve, complétée par la pose d'un parquet contrecollé.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/services/pose-cuisine#service` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${ilotImage}`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Réalisations",
          item: `${SITE_URL}/realisations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pose d'une cuisine Ixina avec îlot à Anglet",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function PoseCuisineIxinaAngletPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="container-site grid items-center gap-10 pt-16 pb-12 lg:grid-cols-2 lg:gap-16 lg:pt-20 lg:pb-16">
        <div className="min-w-0">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/realisations"
                  className="transition-colors hover:text-accent"
                >
                  Réalisations
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="min-w-0 break-words text-primary">
                Pose d&apos;une cuisine Ixina avec îlot à Anglet
              </li>
            </ol>
          </nav>

          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Réalisation à Anglet
          </p>
          <h1 className="heading-h1 mt-3">
            Pose d&apos;une cuisine Ixina avec îlot à Anglet
          </h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            À Anglet, Kaza Intérieur a assuré l&apos;installation d&apos;une
            cuisine Ixina noire et bois avec îlot central dans une maison
            neuve. L&apos;intervention comprenait l&apos;assemblage et la pose
            des meubles, le plan de travail, les crédences, l&apos;intégration
            des équipements et les finitions. La pose du parquet contrecollé a
            également été réalisée dans le cadre du même chantier.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={ilotImage}
            alt="Cuisine noire et bois avec îlot central à Anglet"
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_55%]"
          />
        </div>
      </section>

      <section className="container-site pb-10 lg:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Le chantier
          </p>
          <h2 className="heading-h2 mt-3 !mb-0">
            Une cuisine Ixina installée dans une maison neuve
          </h2>
          <p className="body-text mt-5 text-gray-600">
            Le projet concernait une maison neuve. Kaza Intérieur a pris en
            charge l&apos;installation complète de la cuisine, de l&apos;assemblage
            des meubles jusqu&apos;aux finitions, ainsi que la pose du parquet
            contrecollé.
          </p>
        </div>

        <dl className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-5 border-y border-gray-100 py-6 sm:grid-cols-3">
          {specs.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm font-bold text-primary">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 lg:mt-10 lg:aspect-[16/9]">
          <Image
            src={cuisineEnsembleImage}
            alt="Pose d'une cuisine Ixina à Anglet"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover object-[center_58%]"
          />
        </div>
      </section>

      <section className="bg-secondary py-10 lg:py-14">
        <div className="container-site grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Installation
            </p>
            <h2 className="heading-h2 mt-3 !mb-0">
              Installation d&apos;une cuisine avec îlot central
            </h2>
            <p className="body-text mt-5 text-gray-600">
              Les meubles ont été assemblés, puis implantés et installés dans
              la pièce, y compris l&apos;îlot central. Chaque élément a été posé
              et réglé afin d&apos;obtenir un alignement propre de l&apos;ensemble.
            </p>

            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Équipements
            </p>
            <h2 className="heading-h2 mt-3 !mb-0">
              Plan de travail, crédences et équipements
            </h2>
            <p className="body-text mt-5 text-gray-600">
              L&apos;intervention comprenait la pose du plan de travail et les
              découpes nécessaires, la pose des crédences, l&apos;intégration
              des équipements électroménagers, ainsi que l&apos;installation de
              l&apos;évier et du mitigeur.
            </p>
            <p className="body-text mt-4 text-gray-600">
              Cette réalisation illustre concrètement{" "}
              <Link
                href="/services/pose-cuisine"
                className="font-semibold text-primary underline underline-offset-4 transition-colors duration-300 ease-out hover:text-accent"
              >
                notre service de pose de cuisine
              </Link>{" "}
              à Anglet et au Pays Basque.
            </p>

            <ol
              aria-label="Étapes de l'intervention"
              className="mt-6 space-y-1.5 text-sm font-semibold text-primary"
            >
              {interventionSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span className="text-accent" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={cuisineEquipeeImage}
              alt="Cuisine Ixina équipée avec îlot et colonnes à Anglet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_48%]"
            />
          </div>
        </div>
      </section>

      <section className="container-site py-10 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Sol et finitions
          </p>
          <h2 className="heading-h2 mt-3 !mb-0">
            Une cuisine complétée par la pose du parquet
          </h2>
          <p className="body-text mt-5 text-gray-600">
            Dans le cadre du même chantier, Kaza Intérieur a également réalisé
            la pose du parquet contrecollé. Les finitions de la cuisine ont
            ensuite été complétées par la pose des plinthes, les réglages et un
            contrôle visuel de l&apos;ensemble.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-[60px]">
        <div className="container-site text-center">
          <h2 className="heading-h2 mb-0">
            Vous avez un projet de cuisine à Anglet ?
          </h2>
          <p className="body-text mx-auto mt-4 max-w-2xl text-gray-600">
            Kaza Intérieur intervient à Anglet, Biarritz, Bayonne et dans les
            communes environnantes pour la pose de cuisine, quelle que soit
            l&apos;enseigne choisie.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services/pose-cuisine"
              className="btn-cta inline-block w-full bg-accent px-8 py-3.5 text-center text-sm font-bold tracking-wider text-white sm:w-auto"
            >
              Découvrir notre service de pose de cuisine
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-block w-full px-8 py-3.5 text-center text-sm font-bold tracking-wider sm:w-auto"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
