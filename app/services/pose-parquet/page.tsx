import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-config";

const pagePath = "/services/pose-parquet";
const pageUrl = `${SITE_URL}${pagePath}`;

export const metadata = createPageMetadata({
  title: "Pose de parquet à Anglet, Biarritz et Bayonne",
  description:
    "Pose de parquet massif, contrecollé ou stratifié à Anglet, Biarritz et Bayonne : pose flottante ou collée, sous-couche, plinthes et finitions.",
  path: pagePath,
});

const parquetTypes = [
  {
    title: "Parquet massif",
    description:
      "Un sol authentique et durable, choisi selon les contraintes du support, la pièce et le rendu recherché.",
  },
  {
    title: "Parquet contrecollé",
    description:
      "Une solution stable et polyvalente, adaptée à de nombreux projets en pose flottante ou collée.",
  },
  {
    title: "Sol stratifié",
    description:
      "Une alternative décorative au parquet, résistante et facile à entretenir, généralement posée en flottant.",
  },
];

const steps = [
  {
    number: "01",
    title: "Analyse du projet",
    description:
      "Échange sur vos usages, vos attentes esthétiques, la surface et les contraintes du logement.",
  },
  {
    number: "02",
    title: "Contrôle du support",
    description:
      "Vérification de l'état, de la planéité et de la compatibilité du support avec la pose envisagée.",
  },
  {
    number: "03",
    title: "Pose du revêtement",
    description:
      "Mise en œuvre soignée du parquet, de la sous-couche éventuelle et des raccords entre les pièces.",
  },
  {
    number: "04",
    title: "Finitions",
    description:
      "Pose des plinthes, finitions acryliques et contrôle final de l’ensemble du chantier.",
  },
];

const faqItems = [
  {
    question: "Quel est le prix d’une pose de parquet ?",
    answer:
      "Le tarif dépend du type de parquet, de la méthode de pose, de l’état du sol existant, de la surface et des finitions demandées. Un devis clair et détaillé est établi après l’analyse de votre projet.",
  },
  {
    question: "Faut-il choisir une pose flottante ou collée ?",
    answer:
      "La pose flottante convient à de nombreux parquets contrecollés et sols stratifiés. La pose collée, souvent utilisée pour le parquet massif ou contrecollé, fixe directement les lames sur un sol préparé. Le choix dépend du parquet, du support et des contraintes de votre logement.",
  },
  {
    question: "La sous-couche acoustique est-elle nécessaire ?",
    answer:
      "En pose flottante, une sous-couche est nécessaire, sauf lorsqu’elle est déjà intégrée au revêtement. Elle est choisie selon la nature du support et les besoins acoustiques du logement.",
  },
  {
    question: "Pouvez-vous poser les plinthes et réaliser les finitions ?",
    answer:
      "Oui. La prestation comprend la découpe et la pose des plinthes ainsi que les finitions acryliques pour obtenir un résultat propre et uniforme.",
  },
  {
    question: "Faut-il retirer l’ancien sol avant la pose ?",
    answer:
      "Pas systématiquement. Certains revêtements peuvent être conservés s’ils sont stables, suffisamment plats et compatibles avec le nouveau parquet. L’état du sol et le passage sous les portes sont vérifiés avant de retenir la solution adaptée.",
  },
  {
    question: "Combien de temps dure un chantier de parquet ?",
    answer:
      "La durée dépend de la surface, du nombre de pièces, de la préparation nécessaire et des finitions. Le délai estimé et l’organisation du chantier sont précisés avant le début des travaux.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Pose de parquet à Anglet, Biarritz et Bayonne",
      serviceType: "Pose de parquet",
      description:
        "Pose de parquet massif, contrecollé et de sol stratifié, en pose flottante ou collée, avec plinthes et finitions.",
      url: pageUrl,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "City", name: "Anglet" },
        { "@type": "City", name: "Biarritz" },
        { "@type": "City", name: "Bayonne" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Prestations de pose de parquet",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose flottante" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose collée" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose de plinthes et finitions" } },
        ],
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
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pose de parquet",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function PoseParquetPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="container-site grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Pose de parquet
          </p>
          <h1 className="heading-h1 mt-3">
            Pose de parquet à Anglet, Biarritz et Bayonne
          </h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            Kaza vous accompagne dans le choix et la pose de votre parquet :
            massif, contrecollé ou sol stratifié, en pose flottante ou collée.
            Le support, les usages et les finitions sont étudiés pour obtenir un
            résultat durable et harmonieux.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-cta bg-accent px-7 py-3.5 text-sm font-bold tracking-wider text-white"
            >
              Demander un devis
            </Link>
            <a
              href="tel:0620400372"
              className="btn-outline px-7 py-3.5 text-sm font-bold tracking-wider"
            >
              06 20 40 03 72
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/services/service-parquet.webp"
            alt="Pose de parquet en bois par Kaza au Pays basque"
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-gray-100 bg-secondary">
        <div className="container-site grid grid-cols-1 gap-6 py-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Conseil adapté au support",
            "Protection du chantier",
            "Finitions contrôlées",
            "RC Pro & décennale à jour",
          ].map((item) => (
            <p key={item} className="text-sm font-semibold text-primary">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="container-site section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Les revêtements
          </p>
          <h2 className="heading-h2 mt-3">Quel parquet choisir ?</h2>
          <p className="body-text mt-5 text-gray-600">
            Le bon revêtement dépend de l&apos;usage de la pièce, de votre budget,
            du support existant et de l&apos;esthétique recherchée.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {parquetTypes.map((item) => (
            <article key={item.title} className="rounded-lg bg-secondary p-8">
              <h3 className="text-xl font-bold text-primary">{item.title}</h3>
              <p className="body-text mt-4 text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-primary text-white">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Pose flottante
            </p>
            <h2 className="mt-3 text-3xl font-bold">Rapide et polyvalente</h2>
            <p className="body-text mt-5 !text-white">
              Les lames sont assemblées entre elles sans être collées au sol.
              Elles reposent sur une sous-couche adaptée au support et aux
              besoins acoustiques du logement. Les découpes et les seuils sont
              réalisés avec précision, tandis qu&apos;un espace est conservé en
              périphérie afin de permettre au parquet de se dilater
              naturellement.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Pose collée
            </p>
            <h2 className="mt-3 text-3xl font-bold">Une excellente tenue dans le temps</h2>
            <p className="body-text mt-5 !text-white">
              Le parquet est collé directement sur le sol, après avoir vérifié
              qu&apos;il est propre, sec, stable et suffisamment plat. Cette
              technique demande une préparation rigoureuse et crée une liaison
              directe entre le sol et le parquet.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Pose collée à Biarritz
            </p>
            <h2 className="heading-h2 mt-3">
              Parquet massif dans une chambre de 10 m²
            </h2>
            <p className="body-text mt-5 text-gray-600">
              Ce chantier illustre les différentes étapes d&apos;une pose collée :
              application régulière de la colle sur le support, mise en place
              progressive des lames de parquet massif, respect des jeux
              périphériques puis réalisation des finitions.
            </p>
            <p className="body-text mt-4 text-gray-600">
              Le collage direct permet d&apos;obtenir un parquet stable et un rendu
              chaleureux, ici adapté à la rénovation d&apos;une chambre à Biarritz.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src="/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-en-cours.webp"
                  alt="Pose collée de parquet massif en cours dans une chambre à Biarritz"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-[center_48%]"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500">
                Encollage du support et pose progressive des lames
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src="/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-chambre.webp"
                  alt="Chambre de 10 mètres carrés avec parquet massif collé à Biarritz"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-[center_42%]"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500">
                Résultat après la pose du parquet et des plinthes
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="container-site section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Le déroulement
          </p>
          <h2 className="heading-h2 mt-3">Une pose préparée étape par étape</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="border-t-2 border-accent pt-6">
              <span className="text-sm font-bold text-accent">{step.number}</span>
              <h3 className="mt-3 text-lg font-bold text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-site">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                Pose flottante à Anglet
              </p>
              <h2 className="heading-h2 mt-3">
                Parquet contrecollé sur une surface de 66 m²
              </h2>
              <p className="body-text mt-5 max-w-3xl text-gray-600">
                Pose flottante sur sous-couche acoustique dans le salon, le
                couloir et les chambres. Le chantier comprend également les
                plinthes et leurs finitions acryliques.
              </p>
            </div>
            <Link
              href="/realisations"
              className="btn-outline inline-block px-6 py-3 text-sm font-bold tracking-wider"
            >
              Voir toutes les réalisations
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                src: "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-salon.webp",
                alt: "Parquet contrecollé posé dans un salon à Anglet",
              },
              {
                src: "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-couloir.webp",
                alt: "Pose flottante de parquet contrecollé dans un couloir à Anglet",
              },
              {
                src: "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-chambre.webp",
                alt: "Parquet contrecollé avec plinthes dans une chambre à Anglet",
              },
            ].map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site section-pad grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Zone d&apos;intervention
          </p>
          <h2 className="heading-h2 mt-3">La Côte basque et ses alentours</h2>
          <p className="body-text mt-5 text-gray-600">
            Kaza intervient principalement à Anglet, Biarritz, Bayonne et dans
            les communes alentour pour vos projets de pose de parquet et
            d&apos;aménagement intérieur.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Questions fréquentes
          </p>
          <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-primary">
                  {item.question}
                  <span className="text-xl text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 pr-10 text-sm leading-7 text-gray-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-white">
        <div className="container-site py-14 text-center lg:py-16">
          <h2 className="text-3xl font-bold">Vous avez un projet de parquet ?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Présentez votre projet à Kaza pour obtenir une première réponse et
            un devis adapté à votre intérieur.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block bg-white px-8 py-3.5 text-sm font-bold tracking-wider text-primary transition-colors hover:bg-secondary"
          >
            Parler de mon projet
          </Link>
        </div>
      </section>
    </div>
  );
}
