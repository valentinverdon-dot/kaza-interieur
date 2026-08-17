import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/get-sitemap-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries();
}
