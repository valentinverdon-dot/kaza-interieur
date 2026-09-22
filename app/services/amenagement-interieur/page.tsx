import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site-config";

const pagePath = "/services/amenagement-interieur";
const pageUrl = `${SITE_URL}${pagePath}`;

export const metadata = createPageMetadata({
  title: "Aménagement intérieur à Anglet, Biarritz et Bayonne",
  description:
    "Aménagement intérieur à Anglet, Biarritz et Bayonne : dressings, placards, mobilier intégré, cloisons, habillages et finitions.",
  path: pagePath,
});

const services = [
  {
    title: "Dressings et placards",
    description:
      "Création et pose de rangements adaptés à la pièce, aux volumes disponibles et à vos usages quotidiens.",
  },
  {
    title: "Mobilier intégré",
    description:
      "Bibliothèques, bureaux, meubles TV et rangements sous escalier pensés pour s’intégrer naturellement à votre intérieur.",
  },
  {
    title: "Cloisons et habillages",
    description:
      "Création ou modification de cloisons légères en plaques de plâtre, coffrages, niches et habillages pour structurer l’espace.",
  },
  {
    title: "Finitions associées",
    description:
      "Rebouchage, reprises légères, ponçage et mise en peinture lorsque ces travaux complètent l’aménagement réalisé par Kaza.",
  },
];

const steps = [
  {
    number: "01",
    title: "Comprendre vos besoins",
    description:
      "Visite de la pièce, prise de mesures et échange sur les usages, le style recherché et les contraintes du projet.",
  },
  {
    number: "02",
    title: "Définir la solution",
    description:
      "Choix de l’implantation, des matériaux et des finitions, puis établissement d’un devis clair avant le démarrage.",
  },
  {
    number: "03",
    title: "Préparer et réaliser",
    description:
      "Préparation de la pièce, fabrication ou adaptation des éléments et organisation des différentes étapes du chantier.",
  },
  {
    number: "04",
    title: "Poser et contrôler",
    description:
      "Installation, réglages, finitions et contrôle de l’ensemble avant le nettoyage et la réception du chantier.",
  },
];

const faqItems = [
  {
    question: "Quels types d’aménagements intérieurs réalisez-vous ?",
    answer:
      "Kaza réalise notamment des dressings, placards, bibliothèques, bureaux, meubles intégrés, rangements sous escalier, claustras, cloisons légères, niches et habillages. La faisabilité est étudiée selon la pièce et l’usage recherché.",
  },
  {
    question: "Proposez-vous des aménagements entièrement sur mesure ?",
    answer:
      "Oui. Selon la nature du projet, les éléments peuvent être fabriqués directement par Kaza ou avec l’appui d’un partenaire spécialisé, puis posés et ajustés sur place par un interlocuteur unique.",
  },
  {
    question: "Pouvez-vous créer ou modifier une cloison en placo ?",
    answer:
      "Oui. Kaza peut créer ou modifier une cloison légère en plaques de plâtre et réaliser certains coffrages, niches ou habillages lorsque ces travaux participent à l’aménagement de la pièce.",
  },
  {
    question: "Réalisez-vous aussi les travaux de peinture ?",
    answer:
      "Kaza peut assurer les reprises courantes, le ponçage et la mise en peinture nécessaires à la finition de l’aménagement. La peinture est proposée en complément du projet, et non comme une prestation indépendante de rénovation complète.",
  },
  {
    question: "Pouvez-vous également poser le sol ou aménager une cuisine ?",
    answer:
      "Oui. Kaza dispose de prestations dédiées à la pose de parquet et à la pose de cuisine. Elles peuvent être intégrées à un projet d’aménagement plus global lorsque la configuration du chantier le nécessite.",
  },
  {
    question: "Comment est calculé le prix d’un aménagement intérieur ?",
    answer:
      "Le prix dépend des dimensions, des matériaux, du niveau de personnalisation, des travaux préparatoires et des finitions. Une visite et une prise de mesures permettent d’établir un devis détaillé adapté au projet.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Aménagement intérieur à Anglet, Biarritz et Bayonne",
      serviceType: "Aménagement intérieur et agencement sur mesure",
      description:
        "Conception et réalisation de dressings, placards, mobilier intégré, cloisons légères, habillages et finitions associées.",
      url: pageUrl,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "City", name: "Anglet" },
        { "@type": "City", name: "Biarritz" },
        { "@type": "City", name: "Bayonne" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Prestations d’aménagement intérieur",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Dressings et placards" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Mobilier intégré" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Cloisons et habillages" },
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
          name: "Aménagement intérieur",
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

export default function AmenagementInterieurPage() {
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
            Aménagement intérieur
          </p>
          <h1 className="heading-h1 mt-3">
            Aménagement intérieur à Anglet, Biarritz et Bayonne
          </h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            Kaza transforme, structure et optimise vos espaces grâce à des
            aménagements adaptés : rangements, mobilier intégré, cloisons et
            habillages. De la conception aux finitions, votre projet est suivi
            avec un interlocuteur unique.
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
            src="/services/service-amenagement.webp"
            alt="Pose d’un habillage mural en tasseaux et d’un meuble intégré par Kaza"
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
            "Conception adaptée à l’espace",
            "Fabrication selon le projet",
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
            Les possibilités
          </p>
          <h2 className="heading-h2 mt-3">Des solutions pensées pour votre intérieur</h2>
          <p className="body-text mt-5 text-gray-600">
            Chaque projet part de la configuration réelle de la pièce, de vos
            besoins de rangement et du résultat que vous souhaitez obtenir.
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
              Agencement sur mesure
            </p>
            <h2 className="mt-3 text-3xl font-bold">Chaque mètre carré devient utile</h2>
            <p className="body-text mt-5 !text-white">
              Un renfoncement, un dessous d’escalier ou un mur disponible peut
              accueillir un rangement parfaitement intégré. Selon le projet,
              les éléments sont fabriqués directement par Kaza ou avec l’appui
              d’un partenaire spécialisé, puis posés et réglés sur place.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Transformation de la pièce
            </p>
            <h2 className="mt-3 text-3xl font-bold">Un ensemble cohérent, jusqu’aux finitions</h2>
            <p className="body-text mt-5 !text-white">
              Lorsque l’aménagement le demande, Kaza peut également créer une
              cloison légère, réaliser un coffrage ou un habillage et assurer
              les reprises et la peinture nécessaires à une finition propre.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Le déroulement
          </p>
          <h2 className="heading-h2 mt-3">Un projet cadré de la prise de mesures à la pose</h2>
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
                Réalisation à Bayonne
              </p>
              <h2 className="heading-h2 mt-3">
                Aménagement d’un escalier sur mesure à Bayonne
              </h2>
              <p className="body-text mt-5 max-w-3xl text-gray-600">
                Dans cette maison, Kaza Intérieur a réalisé un aménagement en
                bois sur mesure autour de l’escalier : placards intégrés,
                marches et contremarches, dans un espace réduit.
              </p>
            </div>
            <Link
              href="/realisations/amenagement-escalier-sur-mesure-bayonne"
              className="btn-outline inline-block px-6 py-3 text-sm font-bold tracking-wider"
            >
              Voir cette réalisation
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                src: "/projects/project-3-amenagement/Amenagement_7.webp",
                alt: "Aménagement d’escalier sur mesure dans une maison à Bayonne",
                caption: "L’escalier après la réalisation des marches et contremarches",
              },
              {
                src: "/projects/project-3-amenagement/Amenagement_6.webp",
                alt: "Escalier aménagé dans un volume réduit à Bayonne",
                caption: "Un aménagement calé sur un espace réduit",
              },
              {
                src: "/projects/project-3-amenagement/Amenagement_5.webp",
                alt: "Marches en bois d’un palier quart-tournant à Bayonne",
                caption: "Détail des marches en bois",
              },
            ].map((image) => (
              <figure key={image.src}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-[center_70%]"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-gray-500">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site section-pad">
        <div className="grid gap-8 rounded-lg bg-primary p-8 text-white lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Prestations complémentaires
            </p>
            <h2 className="mt-3 text-3xl font-bold">Un projet qui comprend aussi le sol ou la cuisine ?</h2>
            <p className="body-text mt-5 !text-white">
              Kaza peut réunir plusieurs interventions dans un même chantier
              afin de conserver une organisation et des finitions cohérentes.
            </p>
          </div>
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-end">
            <Link
              href="/services/pose-parquet"
              className="inline-block bg-white px-6 py-3 text-center text-sm font-bold tracking-wider text-primary transition-colors hover:bg-secondary"
            >
              Découvrir la pose de parquet
            </Link>
            <Link
              href="/services/pose-cuisine"
              className="inline-block border border-white px-6 py-3 text-center text-sm font-bold tracking-wider text-white transition-colors hover:bg-white hover:text-primary"
            >
              Découvrir la pose de cuisine
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site section-pad grid gap-12 pt-0 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Zone d’intervention
          </p>
          <h2 className="heading-h2 mt-3">La Côte basque et ses alentours</h2>
          <p className="body-text mt-5 text-gray-600">
            Kaza intervient principalement à Anglet, Biarritz, Bayonne et dans
            les communes alentour pour vos projets d’aménagement intérieur.
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
          <h2 className="text-3xl font-bold">Vous souhaitez transformer un espace ?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Présentez-nous la pièce, vos besoins et vos premières idées pour
            obtenir une réponse claire et un devis adapté à votre projet.
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
