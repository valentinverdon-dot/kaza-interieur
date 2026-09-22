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
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  image,
}: PageMetadataOptions): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const socialTitle = path === "/" ? title : `${title} | Kaza`;
  const socialImage = {
    url: image?.url ?? SOCIAL_IMAGE_URL,
    width: image?.width ?? 1200,
    height: image?.height ?? 630,
    alt: image?.alt ?? SOCIAL_IMAGE_ALT,
  };

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
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}
