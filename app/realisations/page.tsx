import Link from "next/link";
import ProjectCuisine from "@/components/ProjectCuisine";
import ProjectParquet from "@/components/ProjectParquet";
import ProjectAmenagement from "@/components/ProjectAmenagement";
import FadeIn from "@/components/FadeIn";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Réalisations cuisine, parquet et aménagement intérieur",
  description:
    "Découvrez les réalisations Kaza en cuisine, parquet et aménagement intérieur au Pays basque.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <section className="section-pad bg-white !pb-0">
        <div className="container-site">
          <FadeIn>
            <h1 className="heading-h1 mb-6 text-center">Nos réalisations</h1>
            <p className="body-text mx-auto max-w-2xl text-center text-gray-600">
              Découvrez quelques-uns de mes projets de cuisine, de parquet et
              d&apos;aménagement intérieur réalisés à Anglet, Biarritz, Bayonne
              et dans les communes alentour.
            </p>
          </FadeIn>
        </div>
      </section>

      <ProjectCuisine />
      <ProjectParquet />
      <ProjectAmenagement />

      <section className="bg-secondary py-[60px]">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="heading-h2 mb-0">Un projet similaire en tête ?</h2>
            <p className="body-text mx-auto mt-4 max-w-2xl text-gray-600">
              Vous avez un projet d&apos;aménagement ? Parlons-en ensemble.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="btn-cta inline-block bg-accent px-8 py-3.5 text-sm font-bold tracking-wider text-white"
              >
                DEMANDER UN DEVIS
              </Link>
              <a
                href="tel:0620400372"
                className="btn-outline inline-block px-8 py-3.5 text-sm font-bold tracking-wider"
              >
                APPELEZ-MOI
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
