import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Kaza — Valentin Verdon, aménagement intérieur Côte Basque.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white">
      <article className="mx-auto max-w-[800px] px-4 py-[60px] sm:px-6">
        <h1 className="mb-10 text-[40px] font-bold leading-tight text-[#1a2e4a]">
          Mentions légales
        </h1>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Éditeur du site
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Valentin Verdon — Kaza
            <br />
            Entreprise individuelle (auto-entrepreneur)
            <br />
            6 allée du Professeur Henri Gavel, 64600 Anglet, France
            <br />
            SIRET : 901 380 246 00032
            <br />
            Téléphone : 06 20 40 03 72
            <br />
            Email :{" "}
            <a
              href="mailto:valentinverdon@gmail.com"
              className="text-[#1a2e4a] underline underline-offset-2 hover:text-[#e74c3c]"
            >
              valentinverdon@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Directeur de la publication
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Valentin Verdon
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            TVA
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            TVA non applicable, article 293 B du Code général des impôts.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Hébergement
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Le site est hébergé par :
            <br />
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            <br />
            Site :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a2e4a] underline underline-offset-2 hover:text-[#e74c3c]"
            >
              vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Propriété intellectuelle
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            L&apos;ensemble des contenus présents sur ce site (textes,
            photographies, logo, éléments graphiques) est la propriété exclusive
            de Valentin Verdon, sauf mention contraire. Toute reproduction,
            représentation ou diffusion, totale ou partielle, sans autorisation
            écrite préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Assurances
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Valentin Verdon dispose d&apos;une assurance responsabilité civile
            professionnelle et d&apos;une garantie décennale pour l&apos;ensemble
            de ses interventions.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Médiation de la consommation
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Conformément à l&apos;article L.612-1 du Code de la consommation,
            tout consommateur a le droit de recourir gratuitement à un médiateur
            de la consommation en vue de la résolution amiable d&apos;un litige.
            Les coordonnées du médiateur compétent peuvent être communiquées sur
            simple demande.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Contact
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Pour toute question relative au site :{" "}
            <a
              href="mailto:valentinverdon@gmail.com"
              className="text-[#1a2e4a] underline underline-offset-2 hover:text-[#e74c3c]"
            >
              valentinverdon@gmail.com
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
