import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-config";

const pagePath = "/services/renovation-interieure";
const pageUrl = `${SITE_URL}${pagePath}`;

export const metadata = createPageMetadata({
  title: "Rénovation intérieure à Anglet, Biarritz et Bayonne",
  description:
    "Kaza Intérieur accompagne vos projets de rénovation intérieure à Anglet, Biarritz et Bayonne : cloisons, sols, agencement, cuisine et finitions.",
  path: pagePath,
});

const situations = [
  "Rénovation d’un appartement ou d’une maison",
  "Rénovation avant emménagement",
  "Transformation de plusieurs pièces",
  "Réorganisation des volumes",
  "Modernisation d’un intérieur existant",
  "Rénovation des sols et des aménagements",
];

const workFamilies: {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    title: "Cloisons & transformation des espaces",
    description:
      "Création ou modification de cloisons, doublages, faux plafonds et travaux de placo pour adapter la distribution et les volumes de votre intérieur.",
  },
  {
    title: "Parquet & revêtements de sol",
    description:
      "Pose de parquet massif ou contrecollé, sol stratifié et autres revêtements adaptés au projet, avec contrôle et préparation du support lorsque nécessaire.",
    href: "/services/pose-parquet",
    linkLabel: "Découvrir la pose de parquet",
  },
  {
    title: "Agencement & menuiserie intérieure",
    description:
      "Dressings, placards, rangements, habillages et solutions d’aménagement permettant d’optimiser les volumes et les usages.",
    href: "/services/amenagement-interieur",
    linkLabel: "Découvrir l’aménagement intérieur",
  },
  {
    title: "Cuisine",
    description:
      "Dépose de l’existant, préparation de l’espace, installation des meubles, plans de travail, équipements et finitions dans le cadre du projet de rénovation.",
    href: "/services/pose-cuisine",
    linkLabel: "Découvrir la pose de cuisine",
  },
  {
    title: "Finitions & travaux complémentaires",
    description:
      "Selon le projet, certaines interventions complémentaires peuvent être nécessaires, notamment en peinture, plomberie ou électricité. Lorsqu’elles ne relèvent pas directement de nos métiers, elles peuvent être réalisées avec des professionnels partenaires adaptés aux travaux.",
  },
];

const steps = [
  {
    number: "01",
    title: "Premier échange",
    description:
      "Nous échangeons sur votre projet, vos besoins, vos contraintes et votre budget.",
  },
  {
    number: "02",
    title: "Visite & étude du projet",
    description:
      "Nous analysons l’existant, les transformations souhaitées et les différentes interventions nécessaires.",
  },
  {
    number: "03",
    title: "Proposition & organisation",
    description:
      "Nous définissons les prestations, le déroulement du chantier et l’organisation des différentes interventions.",
  },
  {
    number: "04",
    title: "Réalisation & suivi",
    description:
      "Les travaux sont réalisés avec un suivi du chantier jusqu’aux finitions.",
  },
];

const featuredWorks = [
  {
    title: "Pose de parquet à Anglet",
    description:
      "Pose collée de parquet contrecollé dans un salon, un couloir et des chambres, avec plinthes et finitions.",
    href: "/realisations/pose-parquet-contrecolle-anglet",
    image:
      "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-salon.webp",
    alt: "Parquet contrecollé posé dans un salon à Anglet",
  },
  {
    title: "Pose de cuisine à Anglet",
    description:
      "Dépose de l’ancienne cuisine, préparation de la pièce et installation d’une cuisine IKEA en L, jusqu’aux finitions.",
    href: "/realisations/pose-cuisine-ikea-anglet",
    image: "/projects/project-1-cuisine/Cuisine_8.webp",
    alt: "Cuisine blanche équipée posée par Kaza à Anglet",
  },
  {
    title: "Agencement à Bayonne",
    description:
      "Aménagement en bois sur mesure autour d’un escalier : placards intégrés, marches et contremarches.",
    href: "/realisations/amenagement-escalier-sur-mesure-bayonne",
    image: "/projects/project-3-amenagement/Amenagement_7.webp",
    alt: "Aménagement d’escalier sur mesure dans une maison à Bayonne",
  },
];

const faqItems = [
  {
    question:
      "Quels types de projets de rénovation intérieure réalisez-vous ?",
    answer:
      "Kaza Intérieur peut intervenir sur la transformation des espaces, les cloisons et travaux de placo, les sols, l’agencement, la cuisine et les finitions, selon la nature du projet. Chaque demande est étudiée afin de définir les interventions réellement nécessaires.",
  },
  {
    question:
      "Pouvez-vous intervenir sur plusieurs pièces lors du même projet ?",
    answer:
      "Oui. Selon la nature et l’ampleur du projet, plusieurs espaces peuvent être intégrés dans une même étude et une même organisation de chantier.",
  },
  {
    question: "Pouvez-vous coordonner plusieurs interventions ?",
    answer:
      "Kaza Intérieur réalise directement les travaux correspondant à ses métiers et peut s’entourer de professionnels partenaires lorsque des compétences complémentaires sont nécessaires. L’objectif est de penser les différentes interventions ensemble afin de faciliter l’organisation du chantier.",
  },
  {
    question: "Réalisez-vous les travaux de plomberie et d’électricité ?",
    answer:
      "Ces interventions peuvent être nécessaires dans certains projets. Lorsqu’elles nécessitent un professionnel spécialisé, Kaza peut travailler avec des partenaires adaptés dans le cadre de l’organisation du projet.",
  },
  {
    question: "Intervenez-vous dans les appartements et les maisons ?",
    answer:
      "Oui. Les projets peuvent concerner un appartement comme une maison, après étude de l’existant et des contraintes du logement.",
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "Kaza Intérieur intervient principalement à Anglet, Biarritz, Bayonne et dans les communes environnantes sur la Côte basque.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Rénovation intérieure à Anglet, Biarritz et Bayonne",
      serviceType: "Rénovation intérieure",
      description:
        "Accompagnement de projets de rénovation intérieure à Anglet, Biarritz et Bayonne : cloisons, sols, agencement, cuisine et finitions.",
      url: pageUrl,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "City", name: "Anglet" },
        { "@type": "City", name: "Biarritz" },
        { "@type": "City", name: "Bayonne" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Prestations de rénovation intérieure",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloisons et transformation des espaces",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Parquet et revêtements de sol",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Agencement et menuiserie intérieure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Pose de cuisine" },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rénovation intérieure",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RenovationInterieurePage() {
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
            Rénovation intérieure
          </p>
          <h1 className="heading-h1 mt-3">
            Rénovation intérieure à Anglet, Biarritz et Bayonne
          </h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            Vous souhaitez rénover un appartement, une maison ou transformer
            plusieurs pièces ?
          </p>
          <p className="body-text mt-4 max-w-2xl text-gray-600">
            Kaza Intérieur vous accompagne dans votre projet de rénovation sur
            la Côte basque, de l’étude des travaux jusqu’aux finitions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-cta bg-accent px-7 py-3.5 text-sm font-bold tracking-wider text-white"
            >
              Parler de mon projet
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
            src="/services/service-renovation.webp"
            alt="Chantier de rénovation intérieure avec pose de cloison"
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
            "Étude du projet",
            "Cloisons, sols et agencement",
            "Organisation des interventions",
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
            Votre projet
          </p>
          <h2 className="heading-h2 mt-3">
            Transformez votre intérieur selon vos besoins
          </h2>
          <p className="body-text mt-5 text-gray-600">
            Rénover un intérieur implique souvent plusieurs interventions :
            modifier la distribution d’une pièce, reprendre les sols, créer de
            nouveaux aménagements ou encore préparer les espaces avant les
            finitions.
          </p>
          <p className="body-text mt-4 text-gray-600">
            Kaza Intérieur étudie votre projet dans son ensemble afin de
            proposer une organisation cohérente des travaux et des différentes
            interventions.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {situations.map((item) => (
            <li
              key={item}
              className="border-l-2 border-accent pl-4 text-left text-sm font-semibold text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Les prestations
            </p>
            <h2 className="heading-h2 mt-3">
              Les travaux que nous pouvons intégrer à votre projet
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {workFamilies.map((item) => (
              <article
                key={item.title}
                className={`rounded-lg bg-white p-8 ${
                  item.title === "Finitions & travaux complémentaires"
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="body-text mt-4 max-w-3xl text-gray-600">
                  {item.description}
                </p>
                {item.href && item.linkLabel && (
                  <Link
                    href={item.href}
                    className="mt-5 inline-block text-sm font-bold text-accent transition-colors hover:text-primary"
                  >
                    {item.linkLabel} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary text-white">
        <div className="container-site mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Organisation du chantier
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Un projet, plusieurs interventions
          </h2>
          <p className="body-text mt-5 !text-white">
            Une rénovation intérieure nécessite souvent de faire intervenir
            plusieurs compétences dans un ordre précis.
          </p>
          <p className="body-text mt-4 !text-white">
            Kaza Intérieur prend directement en charge ses métiers et peut
            s’entourer de professionnels partenaires lorsque le projet
            nécessite des compétences complémentaires.
          </p>
          <p className="body-text mt-4 !text-white">
            L’objectif est de penser les différentes interventions dans leur
            ensemble afin de faciliter l’organisation du chantier et d’assurer
            la cohérence du projet.
          </p>
        </div>
      </section>

      <section className="container-site section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Le déroulement
          </p>
          <h2 className="heading-h2 mt-3">
            Votre projet, de l’étude à la réalisation
          </h2>
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Projets réalisés
            </p>
            <h2 className="heading-h2 mt-3">Quelques réalisations</h2>
            <p className="body-text mt-5 text-gray-600">
              Quelques projets de parquet, de cuisine et d’agencement réalisés
              sur la Côte basque. Ils illustrent des compétences pouvant
              s’intégrer à un projet de rénovation intérieure.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredWorks.map((project) => (
              <article key={project.href}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">
                  {project.title}
                </h3>
                <p className="body-text mt-3 text-gray-600">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="mt-4 inline-block text-sm font-bold text-accent transition-colors hover:text-primary"
                >
                  Voir cette réalisation →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site section-pad grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Zone d’intervention
          </p>
          <h2 className="heading-h2 mt-3">
            Rénovation intérieure sur la Côte basque
          </h2>
          <p className="body-text mt-5 text-gray-600">
            Kaza Intérieur intervient principalement à Anglet, Biarritz,
            Bayonne et dans les communes environnantes pour vos projets de
            rénovation et d’aménagement intérieur.
          </p>
          <p className="body-text mt-4 text-gray-600">
            Chaque projet commence par une étude de l’existant afin
            d’identifier les travaux nécessaires, les contraintes du logement
            et l’organisation adaptée au chantier.
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
          <h2 className="text-3xl font-bold">
            Vous avez un projet de rénovation ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Parlons de votre projet et des transformations que vous souhaitez
            apporter à votre intérieur.
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
