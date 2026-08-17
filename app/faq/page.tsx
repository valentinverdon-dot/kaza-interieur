import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import { allFaqs } from "@/lib/faq";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Foire aux questions",
  description:
    "Retrouvez toutes les réponses à vos questions sur mes prestations d'aménagement intérieur — cuisine, parquet et aménagement sur la Côte Basque.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <FAQ
        asPage
        items={allFaqs}
        showIntro
        intro="Retrouvez toutes les réponses à vos questions sur mes prestations d'aménagement intérieur."
      />

      <section className="bg-secondary py-[60px]">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="heading-h2 mb-0">Une autre question ?</h2>
            <p className="body-text mx-auto mt-4 max-w-xl text-gray-600">
              Je suis à votre disposition pour répondre à vos interrogations et
              étudier votre projet.
            </p>
            <Link
              href="/contact"
              className="btn-cta mt-8 inline-block bg-accent px-10 py-3.5 text-sm font-bold tracking-wider text-white"
            >
              Contactez-moi
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
