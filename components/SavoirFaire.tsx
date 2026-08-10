import Link from "next/link";
import {
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
}[] = [
  {
    title: "Cuisine",
    description:
      "Pose et aménagement de cuisines sur mesure : plans de travail, rangements et crédences pour un espace fonctionnel et esthétique.",
    icon: KitchenFurnitureIcon,
  },
  {
    title: "Parquet",
    description:
      "Pose de parquet massif, contrecollé ou stratifié. Pose collée ou flottante, selon votre support et vos usages.",
    icon: LayoutGrid,
  },
  {
    title: "Aménagement",
    description:
      "Dressings, placards, cloisons et aménagements intérieurs sur mesure pour optimiser chaque mètre carré de votre logement.",
    icon: DoorClosed,
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
            MON SAVOIR FAIRE
          </p>
          <p className="body-text mx-auto mt-5 max-w-3xl text-center text-gray-600">
            En tant qu&apos;artisan français indépendant depuis 2020, je mets mon
            expertise au service de vos projets. Cuisine, parquet et aménagement
            intérieur : trois domaines pour des réalisations durables et sur
            mesure. Chaque projet bénéficie de mon engagement personnel pour un
            résultat à la hauteur de vos attentes.
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
