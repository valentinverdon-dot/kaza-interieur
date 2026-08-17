import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="bg-white py-[60px]">
      <div className="container-site flex flex-col items-center gap-10 lg:flex-row lg:gap-12">
        <FadeIn className="w-full lg:w-1/2">
          <h1 className="heading-h1">
            Rénovez votre intérieur avec confiance
          </h1>
          <div className="mt-5 max-w-xl space-y-5">
            <p className="body-text">
              Transformez votre intérieur avec un professionnel basé à
              Anglet, intervenant à Biarritz, Bayonne et dans les communes
              alentour.
            </p>
            <p className="body-text">
              Cuisine, parquet et aménagement intérieur : des projets réalisés
              avec passion et rigueur depuis 2020.
            </p>
            <p className="body-text">
              Mes clients apprécient mon sérieux, ma discrétion et ma capacité à
              transformer leurs espaces sans complication.
            </p>
          </div>
          <Link
            href="/services"
            className="btn-cta mt-8 inline-block bg-accent px-8 py-3.5 text-sm font-bold tracking-wider text-white"
          >
            DÉCOUVRIR NOS SERVICES
          </Link>
        </FadeIn>

        <FadeIn className="w-full lg:w-1/2" delay={120}>
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] lg:h-[500px]">
            <Image
              src="/hero.webp"
              alt="Valentin Verdon, artisan poseur en aménagement intérieur sur la Côte Basque"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
