import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

const projectImages = [
  ...Array.from(
    { length: 8 },
    (_, index) => `/projects/project-1-cuisine/Cuisine_${index + 1}.webp`,
  ),
  ...Array.from(
    { length: 6 },
    (_, index) => `/projects/project-2-parquet/Parquet_${index + 1}.jpeg`,
  ),
  ...Array.from(
    { length: 8 },
    (_, index) => `/projects/project-3-amenagement/Amenagement_${index + 1}.webp`,
  ),
].map((image) => `${SITE_URL}${image}`);

const routes: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    lastModified: "2026-08-30",
    images: [`${SITE_URL}/hero.webp`],
  },
  {
    url: `${SITE_URL}/services`,
    lastModified: "2026-08-30",
    images: [
      `${SITE_URL}/services/service-cuisine.webp`,
      `${SITE_URL}/services/service-parquet.webp`,
      `${SITE_URL}/services/service-amenagement.webp`,
    ],
  },
  {
    url: `${SITE_URL}/realisations`,
    lastModified: "2026-08-28",
    images: projectImages,
  },
  {
    url: `${SITE_URL}/a-propos`,
    lastModified: "2026-08-28",
    images: [`${SITE_URL}/about/valentin_verdon.webp`],
  },
  { url: `${SITE_URL}/faq`, lastModified: "2026-08-28" },
  { url: `${SITE_URL}/contact`, lastModified: "2026-08-28" },
];

export function getSitemapEntries(): MetadataRoute.Sitemap {
  return routes;
}
