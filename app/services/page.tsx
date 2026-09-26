import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Rénovation et aménagement intérieur au Pays basque",
  description:
    "Découvrez les prestations de Kaza Intérieur pour vos projets de rénovation et d’aménagement à Anglet, Biarritz, Bayonne et sur la Côte basque.",
  path: "/services",
});

const services = [
  {
    title: "Rénovation intérieure",
    slug: "renovation",
    description:
      "Transformation d’un appartement ou d’une maison, réorganisation des espaces, cloisons, sols, agencement et finitions : Kaza Intérieur vous accompagne pour organiser et réaliser votre projet de rénovation.",
    href: "/services/renovation-interieure",
    linkLabel: "Découvrir la rénovation intérieure",
    image: {
      src: "/services/service-renovation.webp",
      alt: "Travaux d’aménagement intérieur réalisés par Kaza sur la Côte basque",
    },
  },
  {
    title: "Aménagement intérieur",
    slug: "amenagement",
    description:
      "Dressings, placards, rangements, habillages et solutions d’aménagement : nous optimisons votre intérieur pour créer des espaces fonctionnels, cohérents et adaptés à vos usages.",
    href: "/services/amenagement-interieur",
    linkLabel: "Découvrir l’aménagement intérieur",
    image: {
      src: "/services/service-amenagement.webp",
      alt: "Aménagement intérieur sur mesure par Kaza : dressings, placards, cloisons",
    },
  },
  {
    title: "Parquet & sols",
    slug: "parquet",
    description:
      "Pose de parquet massif ou contrecollé, sol stratifié et autres revêtements adaptés au projet, avec contrôle du support, préparation lorsque nécessaire, plinthes et finitions.",
    href: "/services/pose-parquet",
    linkLabel: "Découvrir parquet & sols",
    image: {
      src: "/services/service-parquet.webp",
      alt: "Pose de parquet contrecollé par Kaza sur la Côte Basque",
    },
  },
  {
    title: "Cuisine",
    slug: "cuisine",
    description:
      "Installation de cuisine, plans de travail, équipements et finitions : nous intégrons la cuisine dans votre projet d’aménagement ou de rénovation avec une attention particulière portée à la qualité de pose.",
    href: "/services/pose-cuisine",
    linkLabel: "Découvrir la pose de cuisine",
    image: {
      src: "/services/service-cuisine.webp",
      alt: "Pose et aménagement de cuisine sur mesure par Kaza",
    },
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="container-site section-pad py-16 lg:py-24">
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            PRESTATIONS
          </p>
          <h1 className="heading-h1 mt-3">
            Rénovation et aménagement intérieur au Pays basque
          </h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            Kaza Intérieur vous accompagne dans vos projets de rénovation et de
            transformation à Anglet, Biarritz, Bayonne et sur la Côte basque.
            Découvrez nos principaux domaines d’intervention.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {services.map((service, i) => (
            <FadeIn
              key={service.slug}
              delay={i * 80}
              as="article"
              id={service.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  {service.title}
                </h2>
                <p className="body-text mt-4 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={service.href}
                    className="btn-outline inline-block px-6 py-3 text-sm font-bold tracking-wider"
                  >
                    {service.linkLabel}
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-cta inline-block bg-accent px-6 py-3 text-sm font-bold tracking-wider text-white"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
