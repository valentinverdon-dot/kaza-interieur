import Link from "next/link";

const chezKazaLinks = [
  { href: "/realisations", label: "Réalisations" },
  { href: "/services", label: "Services" },
  { href: "/services/pose-cuisine", label: "Pose de cuisine" },
  { href: "/services/pose-parquet", label: "Pose de parquet" },
  { href: "/services/amenagement-interieur", label: "Aménagement intérieur" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-semibold tracking-[0.14em] text-[#888] uppercase">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#e74c3c] bg-[#f0f4f8] text-[#333]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-[60px] sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-8">
        {/* Colonne 1 — Marque */}
        <div>
          <Link href="/" className="inline-block text-[28px] font-medium tracking-[1px] leading-none">
            <span className="text-[#1a2e4a]">KA</span>
            <span className="text-[#e74c3c]">Z</span>
            <span className="text-[#1a2e4a]">A</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#555]">
            Aménagement intérieur, pensé pour votre confort.
          </p>
        </div>

        {/* Colonne 2 — Chez Kaza */}
        <div>
          <SectionTitle>Chez Kaza</SectionTitle>
          <ul className="mt-4 space-y-2.5 text-sm">
            {chezKazaLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#444] transition-colors hover:text-[#1a2e4a]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 — Infos pratiques */}
        <div>
          <SectionTitle>Infos pratiques</SectionTitle>
          <ul className="mt-4 space-y-2.5 text-sm text-[#444]">
            <li>Lun - Ven · 8h - 19h</li>
            <li>Sur rendez-vous le week-end</li>
            <li>Assurance RC Pro et décennale à jour</li>
            <li className="pt-1">
              <span className="block text-[#888]">Zone d&apos;intervention</span>
              <span className="mt-1 block">
                Anglet, Biarritz, Bayonne et alentours
              </span>
            </li>
          </ul>
        </div>

        {/* Colonne 4 — Contact */}
        <div>
          <SectionTitle>Contact</SectionTitle>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href="/contact"
                className="font-medium text-[#1a2e4a] transition-colors hover:text-[#e74c3c]"
              >
                Demander un devis
              </Link>
            </li>
            <li>
              <a
                href="tel:0620400372"
                className="text-[#444] transition-colors hover:text-[#1a2e4a]"
              >
                06 20 40 03 72
              </a>
            </li>
            <li>
              <a
                href="mailto:valentin@kaza-interieur.fr"
                className="text-[#444] transition-colors hover:text-[#1a2e4a]"
              >
                valentin@kaza-interieur.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e0e0e0]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-[#777] sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Kaza.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-[#1a2e4a]"
            >
              Mentions légales
            </Link>
            <span aria-hidden className="text-[#ccc]">
              |
            </span>
            <Link
              href="/conditions-generales"
              className="transition-colors hover:text-[#1a2e4a]"
            >
              Conditions générales
            </Link>
            <span aria-hidden className="text-[#ccc]">
              |
            </span>
            <Link
              href="/politique-confidentialite"
              className="transition-colors hover:text-[#1a2e4a]"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
