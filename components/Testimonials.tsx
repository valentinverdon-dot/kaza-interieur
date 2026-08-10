import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    quote:
      "Très bonne expérience avec Kaza, qui a réalisé chez moi la pose d'une cuisine. Valentin est professionnel, toujours de bons conseils, et aime le travail bien fait. Je recommande ++",
    name: "Laurent J.",
    stars: 5,
  },
  {
    quote:
      "Pose de parquet impeccable dans notre appartement à Biarritz. Discret, ponctuel et à l'écoute. Un vrai artisan de confiance.",
    name: "Valerie F.",
    stars: 5,
  },
  {
    quote:
      "Aménagement dressing réalisé avec un grand soin. Budget respecté, chantier propre. Merci Valentin !",
    name: "Sophie M.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-secondary">
      <div className="container-site">
        <FadeIn>
          <p className="text-center text-sm font-semibold tracking-widest text-accent uppercase">
            Témoignages
          </p>
          <h2 className="heading-h2 mt-3 text-center !mb-0">
            Ce qu&apos;ils pensent de nous
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100} as="article">
              <blockquote className="flex h-full flex-col bg-white p-8 shadow-sm">
                <span
                  className="text-4xl leading-none font-serif text-accent"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="mt-2 flex-1 text-base leading-relaxed text-gray-600 italic">
                  {t.quote}
                </p>
                <footer className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                  <cite className="text-sm font-bold text-primary not-italic">
                    {t.name}
                  </cite>
                  <span
                    className="text-sm text-amber-500"
                    aria-label={`${t.stars} étoiles`}
                  >
                    {"⭐".repeat(t.stars)}
                  </span>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
