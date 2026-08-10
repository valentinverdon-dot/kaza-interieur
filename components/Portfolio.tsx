"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";

export const featuredProjects = [
  {
    title: "Cuisine",
    image: "/projects/project-1-cuisine/Cuisine_8.webp",
    tone: "#1a2e4a",
  },
  {
    title: "Parquet",
    image: "/projects/project-2-parquet/Parquet_3.jpeg",
    tone: "#5c4033",
  },
  {
    title: "Aménagement",
    image: "/projects/project-3-amenagement/Amenagement_7.webp",
    tone: "#4a6741",
  },
];

type Project = (typeof featuredProjects)[number];

type PortfolioProps = {
  showLink?: boolean;
  title?: string;
  description?: string;
};

export default function Portfolio({
  showLink = false,
  title = "Réalisations",
  description = "Retrouvez l'ensemble de nos projets d'aménagement intérieur, parquet et cuisine réalisés sur la Côte Basque.",
}: PortfolioProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn>
          <h2 className="heading-h2 text-center !mb-4">{title}</h2>
          <p className="body-text mx-auto max-w-2xl text-center text-gray-600">
            {description}
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label={`Voir ${project.title}`}
              >
                <div className="portfolio-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="portfolio-overlay">
                    <span>{project.title}</span>
                  </div>
                </div>
                <p className="mt-3 text-center text-sm font-semibold text-primary">
                  {project.title}
                </p>
              </button>
            </FadeIn>
          ))}
        </div>

        {showLink && (
          <FadeIn className="mt-10 text-center" delay={200}>
            <Link href="/realisations" className="btn-outline">
              Voir toutes les réalisations
            </Link>
          </FadeIn>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center bg-white/90 text-primary transition-colors duration-300 hover:bg-white"
              aria-label="Fermer"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">
                {selected.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Projet réalisé par Kaza — Valentin Verdon, Anglet (Pays
                Basque).
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
