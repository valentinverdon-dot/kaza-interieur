import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="bg-white py-[60px]">
      <div className="container-site flex flex-col items-center gap-10 lg:flex-row lg:gap-12">
        <FadeIn className="w-full lg:w-1/2">
          <h1 className="heading-h1">
            Rénovation et aménagement intérieur au Pays basque
          </h1>
          <div className="mt-5 max-w-xl space-y-5">
            <p className="body-text">
              Kaza Intérieur vous accompagne dans vos projets de rénovation et
              de transformation à Anglet, Biarritz, Bayonne et alentours.
            </p>
            <p className="body-text">
              De l&apos;aménagement aux travaux de finition, nous vous
              accompagnons pour créer un intérieur cohérent, fonctionnel et
              durable.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-cta mt-8 inline-block bg-accent px-8 py-3.5 text-sm font-bold tracking-wider text-white"
          >
            Parler de mon projet
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
              preload
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
