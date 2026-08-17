import ContactForm from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contactez Valentin Verdon – Kaza à Anglet pour un devis cuisine, parquet ou aménagement intérieur.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
          Un projet ? Parlons-en ensemble
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
          Décrivez-moi votre projet cuisine, parquet ou aménagement. Je vous
          recontacte rapidement pour échanger et, si besoin, organiser une
          visite sur place.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold text-primary">Coordonnées</h2>
              <ul className="mt-4 space-y-3 text-base text-gray-600">
                <li>
                  <span className="font-semibold text-primary">Nom :</span>{" "}
                  Valentin Verdon - Kaza
                </li>
                <li>
                  <span className="font-semibold text-primary">Téléphone :</span>{" "}
                  <a
                    href="tel:0620400372"
                    className="text-accent hover:underline"
                  >
                    06 20 40 03 72
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-primary">Email :</span>{" "}
                  <a
                    href="mailto:valentin@kaza-interieur.fr"
                    className="text-accent hover:underline"
                  >
                    valentin@kaza-interieur.fr
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-primary">
                    Zone d&apos;intervention :
                  </span>{" "}
                  Anglet, Biarritz, Bayonne et alentours
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-accent bg-secondary p-6">
              <p className="text-sm leading-relaxed text-gray-600 italic">
                &ldquo;Depuis 2020, je transforme les intérieurs avec sérieux et
                discrétion. Mes clients apprécient mon écoute et ma capacité à
                concrétiser leurs projets.&rdquo;
              </p>
            </div>

            <a
              href="tel:0620400372"
              className="inline-block bg-primary px-8 py-3.5 text-sm font-bold tracking-wider text-white transition-opacity hover:opacity-90"
            >
              APPELEZ-MOI
            </a>
          </div>

          <div className="bg-secondary p-6 sm:p-8">
            <h2 className="text-lg font-bold text-primary">
              Demander un devis
            </h2>
            <p className="mt-2 mb-6 text-sm text-gray-600">
              Remplissez le formulaire - Je reviendrai vers vous sous 24h
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
