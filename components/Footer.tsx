import Link from "next/link";

const chezKazaLinks = [
  { href: "/realisations", label: "Réalisations" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.4-3.68 3.55-3.68 1.03 0 2.1.18 2.1.18v2.32h-1.18c-1.17 0-1.53.73-1.53 1.48v1.78h2.61l-.42 2.91h-2.19V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

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
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d0d7de] text-[#666] transition-colors hover:border-[#1a2e4a] hover:text-[#1a2e4a]"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d0d7de] text-[#666] transition-colors hover:border-[#e74c3c] hover:text-[#e74c3c]"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
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
