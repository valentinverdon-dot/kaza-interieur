"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export type GalleryImage = {
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  title: string;
  description: string;
  galleryLabel?: string;
  images: GalleryImage[];
  /** Desktop columns: 4 (cuisine) or 3 (parquet). Tablet stays 2, mobile 1. */
  columns?: 3 | 4;
};

const gridColsClass: Record<3 | 4, string> = {
  3: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
};

const imageSizes: Record<3 | 4, string> = {
  3: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  4: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
};

export default function ProjectGallery({
  title,
  description,
  galleryLabel = "Galerie du projet",
  images,
  columns = 4,
}: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, images.length]);

  if (!images.length) return null;

  const current = images[index];

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <FadeIn>
          <h2 className="heading-h2 !mb-5">{title}</h2>
          <p className="body-text mb-10 max-w-3xl text-gray-700">{description}</p>
          <p className="mb-5 text-sm font-medium tracking-wide text-gray-500 uppercase">
            {galleryLabel}
          </p>
        </FadeIn>

        <div className={gridColsClass[columns]}>
          {images.map((image, i) => (
            <FadeIn key={image.src} delay={i * 80}>
              <button
                type="button"
                onClick={() => openAt(i)}
                className="group relative block w-full overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label={`Agrandir ${image.alt}`}
              >
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={imageSizes[columns]}
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[rgba(26,46,74,0.45)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary transition-colors duration-300 hover:bg-white"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary transition-colors duration-300 hover:bg-white md:left-6"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary transition-colors duration-300 hover:bg-white md:right-6"
            aria-label="Photo suivante"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={1600}
              height={1200}
              className="max-h-[90vh] w-auto max-w-[90vw] object-contain"
              priority
            />
            <p className="mt-3 text-center text-sm text-white/80">
              {index + 1} / {images.length} — {current.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
