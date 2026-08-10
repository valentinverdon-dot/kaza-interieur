import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "1",
    title: "Premier contact",
    description:
      "Échangez avec moi sur votre projet via le formulaire en ligne ou par téléphone. Je vous recontacte rapidement.",
  },
  {
    number: "2",
    title: "Échange détaillé",
    description:
      "Nous discutons en détail de vos besoins et j'organise une visite sur place si nécessaire.",
  },
  {
    number: "3",
    title: "Devis personnalisé",
    description:
      "Je vous propose un devis transparent et détaillé, avec délais et matériaux proposés.",
  },
  {
    number: "4",
    title: "Réalisation",
    description:
      "Je réalise votre projet avec rigueur, dans les règles de l'art, en respectant les délais convenus.",
  },
];

export default function Approche() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn>
          <p className="text-center text-sm font-semibold tracking-widest text-accent uppercase">
            Comment ça marche ?
          </p>
          <h2 className="heading-h2 mt-3 text-center !mb-0">
            Une méthode simple et efficace pour réaliser vos projets
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100}>
              <div className="flex items-start gap-4">
                <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white">
                  {step.number}
                </span>
                <div className="min-w-0 pt-1">
                  <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
