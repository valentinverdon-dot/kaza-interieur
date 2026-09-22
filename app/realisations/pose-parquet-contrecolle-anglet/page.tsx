import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-config";

const pagePath = "/realisations/pose-parquet-contrecolle-anglet";
const pageUrl = `${SITE_URL}${pagePath}`;

const salonImage =
  "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-salon.webp";
const couloirImage =
  "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-couloir.webp";
const chambreImage =
  "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-chambre.webp";

export const metadata = createPageMetadata({
  title: "Pose de parquet contrecollé à Anglet",
  description:
    "Réalisation à Anglet : pose collée de 66 m² de parquet contrecollé dans deux chambres et un salon-séjour, avec pose des plinthes.",
  path: pagePath,
  image: {
    url: `${SITE_URL}${salonImage}`,
    alt: "Parquet contrecollé posé dans un salon à Anglet",
    width: 1448,
    height: 1086,
  },
});

const specs = [
  { label: "Localisation", value: "Anglet" },
  { label: "Surface", value: "66 m²" },
  { label: "Revêtement", value: "Parquet contrecollé" },
  { label: "Pose", value: "Collée" },
  { label: "Pièces", value: "Salon-séjour + 2 chambres" },
];

const poseLayers = [
  "Chape",
  "Sous-couche acoustique",
  "Colle",
  "Parquet contrecollé",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Pose de parquet contrecollé à Anglet – 66 m²",
      description:
        "Réalisation à Anglet : pose collée de 66 m² de parquet contrecollé dans deux chambres et un salon-séjour, avec pose des plinthes.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/services/pose-parquet#service` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${salonImage}`,
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
          name: "Pose de parquet contrecollé à Anglet",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function PoseParquetContrecolleAngletPage() {
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
                Pose de parquet contrecollé à Anglet
              </li>
            </ol>
          </nav>

          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Réalisation à Anglet
          </p>
          <h1 className="heading-h1 mt-3">
            Pose de parquet contrecollé à Anglet – 66 m²
          </h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            Kaza Intérieur est intervenu à Anglet pour la pose de 66 m² de
            parquet contrecollé dans deux chambres ainsi que dans le
            salon-séjour.
          </p>
          <p className="body-text mt-4 max-w-2xl text-gray-600">
            Le projet comprenait la mise en œuvre du parquet en pose collée
            ainsi que la réalisation des finitions avec la pose des plinthes.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={salonImage}
            alt="Parquet contrecollé posé dans un salon à Anglet"
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="container-site pb-10 lg:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Le chantier
          </p>
          <h2 className="heading-h2 mt-3 !mb-0">
            Le projet de pose de parquet à Anglet
          </h2>
          <p className="body-text mt-5 text-gray-600">
            L&apos;intervention concernait environ 66 m², répartis entre le
            salon-séjour et deux chambres. L&apos;ensemble a été posé dans la
            continuité, afin de conserver une lecture homogène du sol d&apos;une
            pièce à l&apos;autre.
          </p>
        </div>

        <dl className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-5 border-y border-gray-100 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
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
            src={chambreImage}
            alt="Parquet contrecollé posé dans une chambre à Anglet"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
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
              Une pose collée avec sous-couche acoustique
            </h2>
            <p className="body-text mt-5 text-gray-600">
              Le parquet contrecollé a été posé sur une chape traditionnelle
              avec la mise en œuvre d&apos;une sous-couche acoustique compatible
              avec une pose collée.
            </p>
            <p className="body-text mt-4 text-gray-600">
              Le parquet a ensuite été collé sur cette sous-couche. Cette
              solution permet d&apos;associer les caractéristiques d&apos;une
              pose collée à une amélioration du confort acoustique.
            </p>
            <p className="body-text mt-4 text-gray-600">
              La pose a été réalisée sur l&apos;ensemble du salon-séjour et des
              deux chambres, en conservant une continuité visuelle entre les
              différents espaces. Elle s&apos;inscrit dans{" "}
              <Link
                href="/services/pose-parquet"
                className="font-semibold text-primary underline underline-offset-4 transition-colors duration-300 ease-out hover:text-accent"
              >
                notre service de pose de parquet
              </Link>{" "}
              à Anglet et au Pays Basque.
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
              src={couloirImage}
              alt="Pose de parquet contrecollé dans le couloir d'un logement à Anglet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-site py-10 lg:py-14">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={salonImage}
              alt="Parquet contrecollé posé dans un salon à Anglet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={chambreImage}
              alt="Parquet contrecollé posé dans une chambre à Anglet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl lg:mt-12">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Détails
          </p>
          <h2 className="heading-h2 mt-3 !mb-0">Sens de pose et finitions</h2>
          <p className="body-text mt-5 text-gray-600">
            Les lames ont été orientées dans le sens de la principale source de
            lumière naturelle afin d&apos;accompagner visuellement la lumière
            dans les pièces et de mettre en valeur le parquet.
          </p>
          <p className="body-text mt-4 text-gray-600">
            L&apos;intervention comprenait également la pose des plinthes et les
            finitions périphériques afin d&apos;obtenir un résultat propre et
            homogène dans l&apos;ensemble des espaces.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-[60px]">
        <div className="container-site text-center">
          <h2 className="heading-h2 mb-0">
            Vous avez un projet de parquet à Anglet ?
          </h2>
          <p className="body-text mx-auto mt-4 max-w-2xl text-gray-600">
            Kaza Intérieur intervient à Anglet, Biarritz, Bayonne et dans les
            communes environnantes pour la pose de parquet stratifié, contrecollé
            et massif.
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
