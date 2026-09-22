import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-config";

const pagePath = "/realisations/amenagement-escalier-sur-mesure-bayonne";
const pageUrl = `${SITE_URL}${pagePath}`;

const heroImage = "/projects/project-3-amenagement/Amenagement_7.webp";
const volumeImage = "/projects/project-3-amenagement/Amenagement_6.webp";
const paliersImage = "/projects/project-3-amenagement/Amenagement_5.webp";
const descenteImage = "/projects/project-3-amenagement/Amenagement_4.webp";
const etageImage = "/projects/project-3-amenagement/Amenagement_2.webp";

export const metadata = createPageMetadata({
  title: "Aménagement d'escalier sur mesure à Bayonne",
  description:
    "Réalisation à Bayonne : création d'un aménagement en bois sur mesure autour d'un escalier, avec placards, marches et contremarches.",
  path: pagePath,
  image: {
    url: `${SITE_URL}${heroImage}`,
    alt: "Aménagement d'escalier sur mesure dans une maison à Bayonne",
    width: 2000,
    height: 3555,
  },
});

const specs = [
  { label: "Localisation", value: "Bayonne" },
  { label: "Type de bien", value: "Maison" },
  { label: "Projet", value: "Aménagement sur mesure" },
  { label: "Réalisation", value: "Placards et escalier" },
  { label: "Matériau", value: "Bois" },
  { label: "Contrainte", value: "Espace réduit" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Aménagement d'un escalier sur mesure à Bayonne",
      description:
        "Réalisation à Bayonne : création d'un aménagement en bois sur mesure autour d'un escalier, avec placards, marches et contremarches.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/services/amenagement-interieur#service` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${heroImage}`,
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
          name: "Aménagement d'un escalier sur mesure à Bayonne",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function AmenagementEscalierSurMesureBayonnePage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="container-site grid items-center gap-10 pt-16 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-20 lg:pb-16">
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
                Aménagement d&apos;un escalier sur mesure à Bayonne
              </li>
            </ol>
          </nav>

          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Réalisation à Bayonne
          </p>
          <h1 className="heading-h1 mt-3">
            Aménagement d&apos;un escalier sur mesure à Bayonne
          </h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            Dans cette maison à Bayonne, Kaza Intérieur a réalisé un
            aménagement en bois sur mesure autour de l&apos;escalier. Le projet
            associe des placards intégrés à la réalisation des marches et des
            contremarches, dans un espace réduit qui demandait des ajustements
            précis.
          </p>
        </div>

        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={heroImage}
            alt="Aménagement d'escalier sur mesure dans une maison à Bayonne"
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-[center_70%]"
          />
        </div>
      </section>

      <section className="container-site pb-10 lg:pb-14">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-5 border-y border-gray-100 py-6 sm:grid-cols-3">
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
      </section>

      <section className="bg-secondary py-10 lg:py-14">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Contrainte
            </p>
            <h2 className="heading-h2 mt-3 !mb-0">
              Un aménagement adapté à l&apos;espace existant
            </h2>
            <p className="body-text mt-5 text-gray-600">
              L&apos;escalier s&apos;inscrit dans un volume réduit. L&apos;aménagement
              a dû s&apos;adapter à cette géométrie, plutôt que l&apos;inverse.
            </p>
            <p className="body-text mt-4 text-gray-600">
              Chaque élément a été conçu et réalisé sur mesure pour suivre le
              passage existant et conserver une circulation claire.
            </p>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200 lg:aspect-[4/5]">
            <Image
              src={volumeImage}
              alt="Escalier aménagé dans un volume réduit à Bayonne"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[center_72%]"
            />
          </div>
        </div>
      </section>

      <section className="container-site py-10 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Rangements
          </p>
          <h2 className="heading-h2 mt-3 !mb-0">
            Des placards intégrés autour de l&apos;escalier
          </h2>
          <p className="body-text mt-5 text-gray-600">
            Kaza Intérieur a réalisé des placards sur mesure, pensés comme une
            partie de l&apos;aménagement de l&apos;escalier. Leur conception
            s&apos;est calée sur le volume disponible, afin d&apos;ajouter des
            rangements sans encombrer le passage.
          </p>
          <p className="body-text mt-4 text-gray-600">
            Cette menuiserie intérieure s&apos;inscrit dans un projet
            d&apos;aménagement sur mesure, où les rangements et l&apos;escalier
            ont été traités ensemble.
          </p>
        </div>
      </section>

      <section className="container-site py-10 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Escalier
          </p>
          <h2 className="heading-h2 mt-3 !mb-0">
            Marches et contremarches en bois
          </h2>
          <p className="body-text mt-5 text-gray-600">
            Les marches et les contremarches ont été réalisées en bois, en
            s&apos;ajustant à l&apos;escalier existant. L&apos;objectif était
            d&apos;obtenir un ensemble cohérent sur l&apos;ensemble du passage.
          </p>
          <p className="body-text mt-4 text-gray-600">
            Ce chantier d&apos;aménagement intérieur au Pays Basque illustre{" "}
            <Link
              href="/services/amenagement-interieur"
              className="font-semibold text-primary underline underline-offset-4 transition-colors duration-300 ease-out hover:text-accent"
            >
              nos prestations d&apos;aménagement intérieur
            </Link>
            , de la menuiserie autour de l&apos;escalier jusqu&apos;aux
            finitions liées à ces ouvrages.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={paliersImage}
              alt="Marches en bois d'un palier quart-tournant à Bayonne"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-[center_65%]"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={descenteImage}
              alt="Marches et contremarches en bois vues depuis le haut de l'escalier à Bayonne"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-[center_55%]"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={etageImage}
              alt="Escalier en bois vu depuis l'étage dans une maison à Bayonne"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-[center_60%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-[60px]">
        <div className="container-site text-center">
          <h2 className="heading-h2 mb-0">
            Vous avez un projet d&apos;aménagement intérieur ?
          </h2>
          <p className="body-text mx-auto mt-4 max-w-2xl text-gray-600">
            Kaza Intérieur conçoit et réalise des aménagements sur mesure à
            Bayonne, Anglet, Biarritz et dans les communes environnantes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services/amenagement-interieur"
              className="btn-cta inline-block w-full bg-accent px-8 py-3.5 text-center text-sm font-bold tracking-wider text-white sm:w-auto"
            >
              Découvrir nos prestations d&apos;aménagement intérieur
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
