import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

const APP_DIR = path.join(process.cwd(), "app");

const EXCLUDED_SEGMENTS = new Set(["api"]);

const ROUTE_METADATA: Record<
  string,
  Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">
> = {
  "/": { changeFrequency: "weekly", priority: 1 },
  "/services": { changeFrequency: "monthly", priority: 0.9 },
  "/realisations": { changeFrequency: "monthly", priority: 0.9 },
  "/a-propos": { changeFrequency: "yearly", priority: 0.8 },
  "/contact": { changeFrequency: "yearly", priority: 0.8 },
  "/faq": { changeFrequency: "monthly", priority: 0.7 },
  "/mentions-legales": { changeFrequency: "yearly", priority: 0.5 },
  "/politique-confidentialite": { changeFrequency: "yearly", priority: 0.5 },
};

const DEFAULT_METADATA = {
  changeFrequency: "monthly" as const,
  priority: 0.6,
};

function isRouteGroup(segment: string): boolean {
  return segment.startsWith("(") && segment.endsWith(")");
}

function isDynamicSegment(segment: string): boolean {
  return segment.startsWith("[");
}

function isPrivateSegment(segment: string): boolean {
  return segment.startsWith("_");
}

function collectRoutes(
  dir: string,
  urlPath = ""
): Array<{ path: string; pageFile: string }> {
  const routes: Array<{ path: string; pageFile: string }> = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (
      entry.isFile() &&
      (entry.name === "page.tsx" || entry.name === "page.ts")
    ) {
      routes.push({
        path: urlPath || "/",
        pageFile: fullPath,
      });
      continue;
    }

    if (!entry.isDirectory()) continue;
    if (isPrivateSegment(entry.name) || EXCLUDED_SEGMENTS.has(entry.name)) {
      continue;
    }
    if (isDynamicSegment(entry.name)) continue;
    if (entry.name.startsWith("@")) continue;

    const segment = isRouteGroup(entry.name) ? "" : `/${entry.name}`;
    routes.push(...collectRoutes(fullPath, urlPath + segment));
  }

  return routes;
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const routes = collectRoutes(APP_DIR);

  return routes.map(({ path: routePath, pageFile }) => {
    const { mtime } = fs.statSync(pageFile);
    const metadata = ROUTE_METADATA[routePath] ?? DEFAULT_METADATA;

    return {
      url: `${SITE_URL}${routePath === "/" ? "" : routePath}`,
      lastModified: mtime,
      ...metadata,
    };
  });
}
