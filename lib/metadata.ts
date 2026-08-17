import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const socialTitle = path === "/" ? title : `${title} | Kaza`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: "Kaza Intérieur",
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
