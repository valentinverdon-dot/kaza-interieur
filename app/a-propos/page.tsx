import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "À propos",
  description:
    "Valentin Verdon, poseur spécialisé en aménagement intérieur depuis 2020 — cuisine, parquet et aménagement sur la Côte Basque.",
  path: "/a-propos",
});

export default function AProposPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn>
          <h1 className="heading-h1 mb-10">À propos</h1>
        </FadeIn>

        <div className="flex flex-col items-start gap-10 md:gap-12 lg:flex-row lg:gap-16">
          <FadeIn className="w-full shrink-0 lg:w-[300px]">
            <div className="relative mx-auto aspect-[300/400] w-full max-w-[300px] overflow-hidden rounded-lg lg:mx-0">
              <Image
                src="/about/valentin_verdon.webp"
                alt="Valentin Verdon — Kaza"
                fill
                className="object-cover"
                sizes="300px"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn
            className="body-text w-full flex-1 space-y-6 leading-[1.8] text-[#333]"
            delay={100}
          >
            <p>
              Je suis Valentin Verdon, poseur spécialisé en aménagement
              intérieur depuis 2020. J&apos;aime ce métier pour sa rigueur et sa
              créativité. Ma formation m&apos;a permis de maîtriser chaque
              détail : cuisine, parquet, placards, aménagements. C&apos;est dans
              ces petits gestes précis que réside la qualité.
            </p>
            <p>
              Mes clients apprécient mon sérieux, ma discrétion, ma capacité à
              respecter les délais et les budgets. Je travaille principalement
              pour des particuliers sur la côte basque.
            </p>
            <p>
              Mon objectif : transformer vos espaces avec passion et qualité, en
              respectant votre quotidien et votre tranquillité.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="btn-cta inline-block bg-accent px-8 py-3 text-center text-sm font-semibold tracking-wider text-white"
              >
                DEMANDER UN DEVIS
              </Link>
              <a
                href="tel:0620400372"
                className="btn-outline inline-block px-8 py-3 text-center text-sm font-semibold tracking-wider"
              >
                APPELEZ-MOI
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
