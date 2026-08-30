import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-config";

const pagePath = "/services/pose-cuisine";
const pageUrl = `${SITE_URL}${pagePath}`;

export const metadata = createPageMetadata({
  title: "Pose de cuisine à Anglet, Biarritz et Bayonne",
  description:
    "Pose et rénovation de cuisine à Anglet, Biarritz et Bayonne : préparation de la pièce, meubles, plan de travail, équipements et finitions.",
  path: pagePath,
});

const services = [
  {
    title: "Meubles et implantation",
    description:
      "Montage, fixation et réglage des meubles bas, colonnes et éléments hauts selon le plan de votre cuisiniste.",
  },
  {
    title: "Plans de travail",
    description:
      "Prise de cotes, découpes et ajustements pour intégrer l’évier, la plaque de cuisson et les différents raccords.",
  },
  {
    title: "Équipements",
    description:
      "Mise en place de l’électroménager encastrable, de l’évier, de la robinetterie et des accessoires prévus au projet.",
  },
  {
    title: "Finitions",
    description:
      "Pose des joues, fileurs, plinthes, crédences et joints de finition pour un ensemble propre et harmonieux.",
  },
];

const steps = [
  {
    number: "01",
    title: "Analyse du projet",
    description:
      "Étude du plan de cuisine, des meubles commandés, de la pièce et des contraintes techniques avant le chantier.",
  },
  {
    number: "02",
    title: "Préparation de la pièce",
    description:
      "Dépose éventuelle, contrôle des murs et du sol, puis préparation des emplacements et passages nécessaires.",
  },
  {
    number: "03",
    title: "Pose de la cuisine",
    description:
      "Montage, fixation, mise à niveau et alignement des meubles conformément au plan d’implantation.",
  },
  {
    number: "04",
    title: "Équipements et finitions",
    description:
      "Découpe du plan de travail, intégration des équipements, pose des habillages et contrôle final de l’ensemble.",
  },
];

const faqItems = [
  {
    question: "Pouvez-vous poser une cuisine achetée chez une autre enseigne ?",
    answer:
      "Oui. Vous choisissez et achetez votre cuisine auprès de l’enseigne de votre choix. Kaza étudie le plan et les éléments commandés afin de préparer et réaliser leur installation dans votre logement.",
  },
  {
    question: "Quel est le prix d’une pose de cuisine ?",
    answer:
      "Le tarif dépend du nombre de meubles, du type de plan de travail, des découpes, des équipements à intégrer, de l’état de la pièce et des finitions souhaitées. Un devis détaillé est établi après l’étude du projet.",
  },
  {
    question: "Pouvez-vous déposer l’ancienne cuisine ?",
    answer:
      "Oui. La dépose de l’ancienne cuisine et la préparation de la pièce peuvent être intégrées à la prestation selon l’état des lieux et le projet prévu.",
  },
  {
    question: "Intervenez-vous sur la plomberie et l’électricité ?",
    answer:
      "Kaza peut préparer les emplacements et les passages nécessaires en fonction du plan technique. Les modifications et raccordements relevant d’un plombier ou d’un électricien sont réalisés par les professionnels compétents.",
  },
  {
    question: "Posez-vous le plan de travail et l’électroménager ?",
    answer:
      "Oui. La prestation peut comprendre la découpe et la pose du plan de travail ainsi que l’intégration de l’évier, de la plaque, du four, du lave-vaisselle et des autres équipements prévus au projet.",
  },
  {
    question: "Combien de temps faut-il pour poser une cuisine ?",
    answer:
      "La durée dépend de la configuration, du nombre d’éléments, de la préparation nécessaire et des finitions. Le délai estimé et l’organisation des différentes interventions sont précisés avant le début du chantier.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Pose de cuisine à Anglet, Biarritz et Bayonne",
      serviceType: "Pose et rénovation de cuisine",
      description:
        "Pose de cuisines achetées par le client, avec préparation de la pièce, montage des meubles, plans de travail, équipements et finitions.",
      url: pageUrl,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "City", name: "Anglet" },
        { "@type": "City", name: "Biarritz" },
        { "@type": "City", name: "Bayonne" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Prestations de pose de cuisine",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Montage et pose de meubles de cuisine" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Découpe et pose de plan de travail" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Pose de crédence et finitions" },
          },
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
          name: "Pose de cuisine",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function PoseCuisinePage() {
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
            Pose de cuisine
          </p>
          <h1 className="heading-h1 mt-3">
            Pose de cuisine à Anglet, Biarritz et Bayonne
          </h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            Vous achetez votre cuisine auprès de l’enseigne de votre choix et
            Kaza prend en charge son installation. De la préparation de la
            pièce aux derniers réglages, chaque élément est posé avec précision
            pour obtenir une cuisine fonctionnelle et soignée.
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
            src="/services/service-cuisine.webp"
            alt="Découpe d’un plan de travail pendant la pose d’une cuisine par Kaza"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-gray-100 bg-secondary">
        <div className="container-site grid grid-cols-1 gap-6 py-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Cuisine achetée par vos soins",
            "Préparation selon le projet",
            "Pose et finitions contrôlées",
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
            La prestation
          </p>
          <h2 className="heading-h2 mt-3">Une installation précise jusque dans les détails</h2>
          <p className="body-text mt-5 text-gray-600">
            La pose est réalisée à partir du plan fourni par votre cuisiniste et
            adaptée aux contraintes réelles de la pièce.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
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
              Pose de cuisine
            </p>
            <h2 className="mt-3 text-3xl font-bold">Vos meubles, installés avec précision</h2>
            <p className="body-text mt-5 !text-white">
              Kaza contrôle le plan, assemble les caissons, fixe et aligne les
              meubles, puis réalise les découpes et les réglages nécessaires.
              Vous restez libre de choisir votre cuisine auprès de l’enseigne
              qui correspond à votre budget et à vos envies.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Rénovation et préparation
            </p>
            <h2 className="mt-3 text-3xl font-bold">Une pièce prête pour la nouvelle implantation</h2>
            <p className="body-text mt-5 !text-white">
              Selon le projet, Kaza peut déposer l’ancienne cuisine, préparer
              les murs et le sol ainsi que les emplacements et passages prévus
              au plan technique. Les travaux et raccordements qui relèvent d’un
              plombier ou d’un électricien sont réalisés par les professionnels
              compétents.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Rénovation de cuisine à Anglet
            </p>
            <h2 className="heading-h2 mt-3">De la préparation à la pose des équipements</h2>
            <p className="body-text mt-5 text-gray-600">
              Ce chantier comprend la dépose de l’ancienne cuisine, la
              préparation de la pièce, la rénovation des murs et du sol puis la
              pose d’une nouvelle cuisine achetée par le client.
            </p>
            <p className="body-text mt-4 text-gray-600">
              Les meubles, le plan de travail, l’évier et l’électroménager ont
              été intégrés selon le plan d’implantation, avec une attention
              particulière portée aux alignements, aux découpes et aux
              finitions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src="/projects/project-1-cuisine/Cuisine_2.webp"
                  alt="Montage des meubles pendant la rénovation d’une cuisine à Anglet"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-[center_52%]"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500">
                Montage, fixation et alignement des meubles
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src="/projects/project-1-cuisine/Cuisine_7.webp"
                  alt="Cuisine blanche rénovée et installée par Kaza à Anglet"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-[center_52%]"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500">
                Résultat après la pose des équipements et des finitions
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
          <h2 className="heading-h2 mt-3">Une pose organisée étape par étape</h2>
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
                Réalisations cuisine
              </p>
              <h2 className="heading-h2 mt-3">Des ajustements soignés pour chaque implantation</h2>
              <p className="body-text mt-5 max-w-3xl text-gray-600">
                L’alignement des façades, l’intégration des appareils et les
                découpes du plan de travail sont contrôlés pour obtenir un
                résultat fonctionnel et homogène.
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
                src: "/projects/project-1-cuisine/Cuisine_3.webp",
                alt: "Réglage des façades de meubles pendant une pose de cuisine à Anglet",
              },
              {
                src: "/projects/project-1-cuisine/Cuisine_5.webp",
                alt: "Plan de travail et électroménager intégrés dans une cuisine à Anglet",
              },
              {
                src: "/projects/project-1-cuisine/Cuisine_8.webp",
                alt: "Vue d’ensemble d’une cuisine blanche posée par Kaza à Anglet",
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
                  className="object-cover object-[center_52%]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site section-pad grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Zone d’intervention
          </p>
          <h2 className="heading-h2 mt-3">La Côte basque et ses alentours</h2>
          <p className="body-text mt-5 text-gray-600">
            Kaza intervient principalement à Anglet, Biarritz, Bayonne et dans
            les communes alentour pour la pose et la rénovation de votre
            cuisine.
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
          <h2 className="text-3xl font-bold">Vous avez un projet de cuisine ?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Envoyez votre plan et les informations sur votre cuisine pour
            obtenir une première réponse et un devis adapté à votre projet.
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
