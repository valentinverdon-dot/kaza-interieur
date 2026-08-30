import type { Metadata } from "next";
import {
  SITE_URL,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_URL,
} from "@/lib/site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataOptions): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const socialTitle = path === "/" ? title : `${title} | Kaza`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: index
      ? undefined
      : {
          index: false,
          follow: true,
        },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: "Kaza Intérieur",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: SOCIAL_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: SOCIAL_IMAGE_URL, alt: SOCIAL_IMAGE_ALT }],
    },
  };
}
