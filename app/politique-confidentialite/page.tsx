import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles — Kaza, Valentin Verdon.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-white">
      <article className="mx-auto max-w-[800px] px-4 py-[60px] sm:px-6">
        <h1 className="mb-10 text-[40px] font-bold leading-tight text-[#1a2e4a]">
          Politique de confidentialité
        </h1>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Responsable du traitement
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Valentin Verdon — Kaza
            <br />
            6 allée du Professeur Henri Gavel, 64600 Anglet
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
            Données collectées
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Ce site collecte uniquement les données que vous transmettez
            volontairement via le formulaire de contact : nom, adresse email,
            numéro de téléphone (facultatif) et contenu de votre message.
          </p>
          <p className="mt-4 text-base leading-[1.7] text-[#333]">
            Aucune donnée n&apos;est collectée à votre insu. Ce site n&apos;utilise
            aucun outil de mesure d&apos;audience ni aucun cookie de suivi
            publicitaire.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Finalité du traitement
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Les données transmises via le formulaire sont utilisées
            exclusivement pour répondre à votre demande, établir un devis et
            assurer le suivi de votre projet.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Base légale
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Le traitement repose sur votre consentement, exprimé par l&apos;envoi
            volontaire du formulaire de contact.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Durée de conservation
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Les données sont conservées pendant la durée nécessaire au
            traitement de votre demande, puis archivées conformément aux durées
            légales de conservation applicables (notamment 3 ans à compter du
            dernier contact pour les données de prospection, et 10 ans pour les
            documents comptables en cas de prestation réalisée).
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Destinataires
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Vos données ne sont ni vendues, ni cédées, ni transmises à des tiers
            à des fins commerciales. Elles sont uniquement traitées par Valentin
            Verdon.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Vos droits
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
            droit d&apos;accès, de rectification, d&apos;effacement, de
            limitation et d&apos;opposition au traitement de vos données.
          </p>
          <p className="mt-4 text-base leading-[1.7] text-[#333]">
            Pour exercer ces droits, contactez :{" "}
            <a
              href="mailto:valentinverdon@gmail.com"
              className="text-[#1a2e4a] underline underline-offset-2 hover:text-[#e74c3c]"
            >
              valentinverdon@gmail.com
            </a>
          </p>
          <p className="mt-4 text-base leading-[1.7] text-[#333]">
            Vous disposez également du droit d&apos;introduire une réclamation
            auprès de la CNIL (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a2e4a] underline underline-offset-2 hover:text-[#e74c3c]"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Cookies
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Ce site n&apos;utilise pas de cookies de suivi, d&apos;analyse ou de
            publicité. Seuls des cookies techniques strictement nécessaires au
            fonctionnement du site peuvent être déposés.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-3 text-2xl font-semibold text-[#1a2e4a]">
            Sécurité
          </h2>
          <p className="text-base leading-[1.7] text-[#333]">
            Les données transmises sont protégées par le protocole HTTPS.
            Valentin Verdon met en œuvre les mesures appropriées pour préserver
            la sécurité et la confidentialité de vos informations.
          </p>
        </section>
      </article>
    </div>
  );
}
