import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-config";

const pagePath = "/realisations/pose-parquet-massif-biarritz";
const pageUrl = `${SITE_URL}${pagePath}`;

const enCoursImage =
  "/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-en-cours.webp";
const chambreImage =
  "/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-chambre.webp";

export const metadata = createPageMetadata({
  title: "Pose de parquet massif à Biarritz",
  description:
    "Réalisation à Biarritz : pose collée de 10 m² de parquet massif sur chape béton dans une chambre, avec pose des plinthes et finitions.",
  path: pagePath,
  image: {
    url: `${SITE_URL}${chambreImage}`,
    alt: "Parquet massif et plinthes après pose dans une chambre à Biarritz",
    width: 932,
    height: 1688,
  },
});

const specs = [
  { label: "Localisation", value: "Biarritz" },
  { label: "Surface", value: "10 m²" },
  { label: "Pièce", value: "Chambre" },
  { label: "Parquet", value: "Massif" },
  { label: "Pose", value: "Collée" },
  { label: "Support", value: "Chape béton" },
];

const poseLayers = ["Chape béton", "Colle", "Parquet massif"];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Pose de parquet massif à Biarritz – 10 m²",
      description:
        "Réalisation à Biarritz : pose collée de 10 m² de parquet massif sur chape béton dans une chambre, avec pose des plinthes et finitions.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/services/pose-parquet#service` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${chambreImage}`,
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
          name: "Pose de parquet massif à Biarritz",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function PoseParquetMassifBiarritzPage() {
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
                Pose de parquet massif à Biarritz
              </li>
            </ol>
          </nav>

          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Réalisation à Biarritz
          </p>
          <h1 className="heading-h1 mt-3">
            Pose de parquet massif à Biarritz – 10 m²
          </h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            À Biarritz, Kaza Intérieur a réalisé la pose collée d&apos;un
            parquet massif dans une chambre de 10 m². Le parquet a été collé
            directement sur la chape béton, sans sous-couche, puis complété par
            la pose des plinthes et les finitions au niveau du seuil.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={chambreImage}
            alt="Parquet massif et plinthes après pose dans une chambre à Biarritz"
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_42%]"
          />
        </div>
      </section>

      <section className="container-site pb-10 lg:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Le chantier
          </p>
          <h2 className="heading-h2 mt-3 !mb-0">
            Le projet de pose de parquet à Biarritz
          </h2>
          <p className="body-text mt-5 text-gray-600">
            L&apos;intervention concernait une seule pièce : une chambre de
            10 m². Le parquet massif y a été posé en collage, du support
            jusqu&apos;aux finitions de la pièce.
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

        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 lg:mt-10">
          <Image
            src={enCoursImage}
            alt="Pose collée de parquet massif en cours dans une chambre à Biarritz"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover object-[center_48%]"
          />
        </div>
      </section>

      <section className="bg-secondary py-10 lg:py-14">
        <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Mise en œuvre
            </p>
            <h2 className="heading-h2 mt-3 !mb-0">
              Un parquet massif posé en collage direct
            </h2>
            <p className="body-text mt-5 text-gray-600">
              Le parquet massif a été collé directement sur la chape béton, sans
              sous-couche. Les lames sont ainsi fixées au support par la colle.
            </p>
            <p className="body-text mt-4 text-gray-600">
              Pour une pose collée, la qualité du support est importante : il
              doit permettre une mise en œuvre propre. Ici, le parquet a été
              collé directement sur cette chape.
            </p>
            <p className="body-text mt-4 text-gray-600">
              Cette chambre illustre concrètement{" "}
              <Link
                href="/services/pose-parquet"
                className="font-semibold text-primary underline underline-offset-4 transition-colors duration-300 ease-out hover:text-accent"
              >
                notre service de pose de parquet
              </Link>{" "}
              à Biarritz et au Pays Basque.
            </p>

            <ol
              aria-label="Complexe de pose"
              className="mt-6 space-y-1.5 text-sm font-semibold text-primary"
            >
              {poseLayers.map((layer, index) => (
                <li key={layer} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span className="text-accent" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                  {layer}
                </li>
              ))}
            </ol>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={chambreImage}
              alt="Parquet massif et plinthes après pose dans une chambre à Biarritz"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_42%]"
            />
          </div>
        </div>
      </section>

      <section className="container-site py-10 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Détails
          </p>
          <h2 className="heading-h2 mt-3 !mb-0">Les finitions de la chambre</h2>
          <p className="body-text mt-5 text-gray-600">
            L&apos;intervention comprenait la pose des plinthes, les finitions
            périphériques et l&apos;ajustement au niveau du seuil, afin
            d&apos;obtenir des raccords nets autour de la pièce.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-[60px]">
        <div className="container-site text-center">
          <h2 className="heading-h2 mb-0">
            Vous avez un projet de parquet à Biarritz ?
          </h2>
          <p className="body-text mx-auto mt-4 max-w-2xl text-gray-600">
            Kaza Intérieur intervient à Biarritz, Anglet, Bayonne et dans les
            communes environnantes pour la pose de parquet stratifié,
            contrecollé et massif.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services/pose-parquet"
              className="btn-cta inline-block w-full bg-accent px-8 py-3.5 text-center text-sm font-bold tracking-wider text-white sm:w-auto"
            >
              Découvrir notre service de pose de parquet
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
