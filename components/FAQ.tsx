"use client";

import Link from "next/link";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { homeFaqs, type FaqItem } from "@/lib/faq";

type FAQProps = {
  items?: FaqItem[];
  showLink?: boolean;
  showIntro?: boolean;
  intro?: string;
  /** Page dédiée : h1 + pas d'eyebrow */
  asPage?: boolean;
};

export default function FAQ({
  items = homeFaqs,
  showLink = false,
  showIntro = true,
  intro = "Quelques réponses aux questions les plus fréquentes sur mes prestations de cuisine, parquet et aménagement intérieur.",
  asPage = false,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad bg-white">
      <div className="container-site max-w-3xl">
        <FadeIn>
          {asPage ? (
            <h1 className="heading-h1 mb-6 text-center">Foire aux questions</h1>
          ) : (
            <>
              <p className="text-center text-sm font-semibold tracking-widest text-accent uppercase">
                Informations
              </p>
              <h2 className="heading-h2 mt-3 text-center !mb-4">
                Foire aux questions
              </h2>
            </>
          )}
          {showIntro && (
            <p className="body-text mx-auto max-w-xl text-center text-gray-600">
              {intro}
            </p>
          )}
        </FadeIn>

        <FadeIn className="mt-10" delay={120}>
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {items.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-primary">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-accent transition-transform duration-300 ease-out ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
                  >
                    <p className="text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {showLink && (
          <FadeIn className="mt-8 text-center" delay={180}>
            <Link
              href="/faq"
              className="text-sm font-semibold text-primary underline underline-offset-4 transition-colors duration-300 ease-out hover:text-accent"
            >
              Voir toutes les questions
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
