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
  "/projects/project-3-amenagement/Amenagement_7.webp",
  "/projects/project-3-amenagement/Amenagement_6.webp",
  "/projects/project-3-amenagement/Amenagement_5.webp",
  "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-salon.webp",
  "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-couloir.webp",
  "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-chambre.webp",
  "/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-chambre.webp",
  "/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-en-cours.webp",
  "/projects/cuisine-noire-anglet/pose-cuisine-ixina-anglet.webp",
  "/projects/cuisine-noire-anglet/cuisine-noire-bois-ilot-anglet.webp",
  "/projects/cuisine-noire-anglet/installation-cuisine-equipee-anglet.webp",
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
    url: `${SITE_URL}/services/pose-parquet`,
    lastModified: "2026-09-22",
    images: [
      `${SITE_URL}/services/service-parquet.webp`,
      `${SITE_URL}/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-salon.webp`,
      `${SITE_URL}/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-couloir.webp`,
      `${SITE_URL}/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-chambre.webp`,
      `${SITE_URL}/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-en-cours.webp`,
      `${SITE_URL}/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-chambre.webp`,
    ],
  },
  {
    url: `${SITE_URL}/services/pose-cuisine`,
    lastModified: "2026-09-22",
    images: [
      `${SITE_URL}/services/service-cuisine.webp`,
      `${SITE_URL}/projects/project-1-cuisine/Cuisine_2.webp`,
      `${SITE_URL}/projects/project-1-cuisine/Cuisine_3.webp`,
      `${SITE_URL}/projects/project-1-cuisine/Cuisine_5.webp`,
      `${SITE_URL}/projects/project-1-cuisine/Cuisine_7.webp`,
      `${SITE_URL}/projects/project-1-cuisine/Cuisine_8.webp`,
      `${SITE_URL}/projects/cuisine-noire-anglet/pose-cuisine-ixina-anglet.webp`,
      `${SITE_URL}/projects/cuisine-noire-anglet/cuisine-noire-bois-ilot-anglet.webp`,
      `${SITE_URL}/projects/cuisine-noire-anglet/installation-cuisine-equipee-anglet.webp`,
    ],
  },
  {
    url: `${SITE_URL}/services/amenagement-interieur`,
    lastModified: "2026-09-22",
    images: [
      `${SITE_URL}/services/service-amenagement.webp`,
      `${SITE_URL}/projects/project-3-amenagement/Amenagement_7.webp`,
      `${SITE_URL}/projects/project-3-amenagement/Amenagement_6.webp`,
      `${SITE_URL}/projects/project-3-amenagement/Amenagement_5.webp`,
    ],
  },
  {
    url: `${SITE_URL}/realisations`,
    lastModified: "2026-09-22",
    images: projectImages,
  },
  {
    url: `${SITE_URL}/realisations/pose-parquet-contrecolle-anglet`,
    lastModified: "2026-09-22",
    images: [
      `${SITE_URL}/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-salon.webp`,
      `${SITE_URL}/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-couloir.webp`,
      `${SITE_URL}/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-chambre.webp`,
    ],
  },
  {
    url: `${SITE_URL}/realisations/pose-parquet-massif-biarritz`,
    lastModified: "2026-09-22",
    images: [
      `${SITE_URL}/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-chambre.webp`,
      `${SITE_URL}/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-en-cours.webp`,
    ],
  },
  {
    url: `${SITE_URL}/realisations/pose-cuisine-ikea-anglet`,
    lastModified: "2026-09-22",
    images: [
      `${SITE_URL}/projects/project-1-cuisine/Cuisine_8.webp`,
      `${SITE_URL}/projects/project-1-cuisine/Cuisine_5.webp`,
      `${SITE_URL}/projects/project-1-cuisine/Cuisine_2.webp`,
    ],
  },
  {
    url: `${SITE_URL}/realisations/pose-cuisine-ixina-anglet`,
    lastModified: "2026-09-22",
    images: [
      `${SITE_URL}/projects/cuisine-noire-anglet/pose-cuisine-ixina-anglet.webp`,
      `${SITE_URL}/projects/cuisine-noire-anglet/cuisine-noire-bois-ilot-anglet.webp`,
      `${SITE_URL}/projects/cuisine-noire-anglet/installation-cuisine-equipee-anglet.webp`,
    ],
  },
  {
    url: `${SITE_URL}/realisations/amenagement-escalier-sur-mesure-bayonne`,
    lastModified: "2026-09-22",
    images: [
      `${SITE_URL}/projects/project-3-amenagement/Amenagement_7.webp`,
      `${SITE_URL}/projects/project-3-amenagement/Amenagement_6.webp`,
      `${SITE_URL}/projects/project-3-amenagement/Amenagement_5.webp`,
      `${SITE_URL}/projects/project-3-amenagement/Amenagement_4.webp`,
      `${SITE_URL}/projects/project-3-amenagement/Amenagement_2.webp`,
    ],
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
