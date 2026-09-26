import Link from "next/link";
import {
  Home,
  LayoutGrid,
  DoorClosed,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

/** Silhouette meuble bas + évier — style outline Lucide */
function KitchenFurnitureIcon({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className,
  ...props
}: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={props["aria-hidden"]}
    >
      {/* Évier */}
      <path d="M8 3h8a1 1 0 0 1 1 1v3H7V4a1 1 0 0 1 1-1z" />
      <path d="M10 5.5h4" />
      {/* Plan de travail */}
      <path d="M3 8h18" />
      {/* Caisson / meuble bas */}
      <rect x="4" y="8" width="16" height="13" rx="1" />
      {/* Portes */}
      <path d="M12 8v13" />
      {/* Poignées */}
      <path d="M10 14v2" />
      <path d="M14 14v2" />
    </svg>
  );
}

export const savoirFaireCards: {
  title: string;
  description: string;
  icon: LucideIcon | typeof KitchenFurnitureIcon;
  href: string;
  linkLabel: string;
}[] = [
  {
    title: "Rénovation intérieure",
    description:
      "Transformation et rénovation de vos espaces : préparation, cloisons, sols, équipements et finitions.",
    icon: Home,
    href: "/services/renovation-interieure",
    linkLabel: "Découvrir la rénovation intérieure",
  },
  {
    title: "Parquet & sols",
    description:
      "Pose de parquet et revêtements de sol, préparation adaptée du support, plinthes et finitions.",
    icon: LayoutGrid,
    href: "/services/pose-parquet",
    linkLabel: "Découvrir parquet & sols",
  },
  {
    title: "Agencement intérieur",
    description:
      "Dressings, placards, rangements, menuiserie intérieure et solutions d’aménagement adaptées à votre espace.",
    icon: DoorClosed,
    href: "/services/amenagement-interieur",
    linkLabel: "Découvrir l’aménagement",
  },
];

export const services = [
  {
    title: "Cuisine",
    slug: "cuisine",
    description:
      "Pose et aménagement de cuisines sur mesure : plans de travail, rangements et crédences pour un espace fonctionnel et esthétique.",
    longDescription:
      "Je vous accompagne dans l'aménagement de votre cuisine : pose d'éléments, plans de travail, crédences et rangements. Chaque projet est pensé pour allier fonctionnalité quotidienne et esthétique, avec un souci constant de la qualité d'exécution et du respect des délais.",
  },
  {
    title: "Parquet",
    slug: "parquet",
    description:
      "Pose de parquet massif, contrecollé ou stratifié. Pose collée ou flottante, selon votre support et vos usages.",
    longDescription:
      "Pose de parquet massif, contrecollé ou stratifié, en pose collée ou flottante selon votre support, votre chauffage et vos usages. Je vous conseille sur le choix des matériaux et réalise une pose soignée, conforme aux règles de l'art, pour un résultat durable et élégant.",
  },
  {
    title: "Aménagement",
    slug: "amenagement",
    description:
      "Dressings, placards, cloisons et aménagements intérieurs sur mesure pour optimiser chaque mètre carré de votre logement.",
    longDescription:
      "Dressings, placards, cloisons, rangements sur mesure : j'optimise chaque mètre carré de votre logement. Que ce soit pour une résidence principale ou secondaire sur la Côte Basque, je conçois des aménagements pratiques, discrets et parfaitement intégrés à votre intérieur.",
  },
];

type SavoirFaireProps = {
  showLink?: boolean;
};

export default function SavoirFaire({ showLink = false }: SavoirFaireProps) {
  return (
    <section className="section-pad bg-secondary">
      <div className="container-site">
        <FadeIn>
          <p className="text-center text-xs font-semibold tracking-[0.22em] text-gray-500 uppercase">
            VOTRE PROJET
          </p>
          <h2 className="heading-h2 mt-3 text-center !mb-0">
            Un accompagnement pour transformer votre intérieur
          </h2>
          <div className="body-text mx-auto mt-5 max-w-3xl space-y-5 text-center text-gray-600">
            <p>
              Vous souhaitez rénover une pièce, transformer plusieurs espaces
              ou repenser votre intérieur ?
            </p>
            <p>
              Kaza Intérieur vous accompagne dans la réalisation de votre
              projet, avec un interlocuteur de proximité pour simplifier les
              travaux et assurer une exécution soignée.
            </p>
            <p>
              Nous intervenons directement sur nos métiers et pouvons nous
              entourer de professionnels partenaires lorsque le projet
              nécessite d&apos;autres compétences.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="mt-12">
          <p className="text-center text-xs font-semibold tracking-[0.22em] text-gray-500 uppercase">
            NOS SAVOIR-FAIRE
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {savoirFaireCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={i * 100} as="article">
                <div className="sf-card h-full">
                  <Icon
                    size={60}
                    strokeWidth={1.5}
                    color="#1a2e4a"
                    className="mx-auto"
                    aria-hidden
                  />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link
                    href={card.href}
                    className="mt-5 inline-block text-sm font-bold text-accent transition-colors hover:text-primary"
                  >
                    {card.linkLabel} →
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {showLink && (
          <FadeIn className="mt-12 text-center" delay={400}>
            <Link
              href="/services"
              className="btn-cta inline-block bg-accent px-8 py-3.5 text-sm font-bold tracking-wider text-white"
            >
              Voir nos services
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export { KitchenFurnitureIcon };
