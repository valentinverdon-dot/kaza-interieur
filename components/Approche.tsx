import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "1",
    title: "Premier échange",
    description:
      "Nous échangeons sur votre projet, vos besoins, vos contraintes et votre budget.",
  },
  {
    number: "2",
    title: "Visite & étude du projet",
    description:
      "Nous étudions l’existant, les travaux nécessaires et les différentes solutions possibles.",
  },
  {
    number: "3",
    title: "Proposition & organisation",
    description:
      "Vous recevez une proposition détaillée. Nous définissons les différentes interventions et organisons le chantier.",
  },
  {
    number: "4",
    title: "Réalisation & suivi",
    description:
      "Les travaux sont réalisés avec un suivi du chantier jusqu’aux finitions et à la réception.",
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
            Votre projet, de l’étude à la réalisation
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
