"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/realisations", label: "RÉALISATIONS" },
  { href: "/services", label: "SERVICES" },
  { href: "/a-propos", label: "À PROPOS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 flex-col justify-center leading-none">
          <span className="inline-block text-[28px] font-medium tracking-[1px] leading-none">
            <span className="text-[#1a2e4a]">KA</span>
            <span className="text-[#e74c3c]">Z</span>
            <span className="text-[#1a2e4a]">A</span>
          </span>
          <span className="mt-2.5 hidden text-[10px] tracking-[1px] text-[#666666] md:block">
            AMÉNAGEMENT INTÉRIEUR — CÔTE BASQUE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-wider transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="btn-cta hidden bg-accent px-5 py-2.5 text-xs font-bold tracking-wider text-white md:inline-block"
        >
          DEMANDER UN DEVIS
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 text-sm font-semibold tracking-wider ${
                  pathname === link.href ? "text-accent" : "text-primary"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 bg-accent px-5 py-3 text-center text-xs font-bold tracking-wider text-white"
              onClick={() => setOpen(false)}
            >
              DEMANDER UN DEVIS
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
