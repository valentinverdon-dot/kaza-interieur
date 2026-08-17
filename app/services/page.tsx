import Image from "next/image";
import Link from "next/link";
import { services } from "@/components/SavoirFaire";
import FadeIn from "@/components/FadeIn";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Cuisine, parquet et aménagement intérieur — les prestations Kaza sur la Côte Basque.",
  path: "/services",
});

const serviceImages: Record<
  string,
  { src: string; alt: string; width: number; height: number }
> = {
  cuisine: {
    src: "/services/service-cuisine.webp",
    alt: "Pose et aménagement de cuisine sur mesure par Kaza",
    width: 600,
    height: 400,
  },
  parquet: {
    src: "/services/service-parquet.webp",
    alt: "Pose de parquet contrecollé par Kaza sur la Côte Basque",
    width: 600,
    height: 400,
  },
  amenagement: {
    src: "/services/service-amenagement.webp",
    alt: "Aménagement intérieur sur mesure par Kaza : dressings, placards, cloisons",
    width: 600,
    height: 400,
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="container-site section-pad py-16 lg:py-24">
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Prestations
          </p>
          <h1 className="heading-h1 mt-3">Nos services</h1>
          <p className="body-text mt-6 max-w-2xl text-gray-600">
            Trois domaines d&apos;expertise pour accompagner vos projets
            d&apos;aménagement intérieur sur la Côte Basque — cuisine, parquet
            et aménagement.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {services.map((service, i) => {
            const image = serviceImages[service.slug];

            return (
              <FadeIn
                key={service.slug}
                delay={i * 80}
                as="article"
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto max-h-[400px] w-full rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold text-primary">
                    {service.title}
                  </h2>
                  <p className="body-text mt-4 text-gray-600">
                    {service.longDescription}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-cta mt-6 inline-block bg-accent px-6 py-3 text-sm font-bold tracking-wider text-white"
                  >
                    Demander un devis
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
