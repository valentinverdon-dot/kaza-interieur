import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  SITE_URL,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_URL,
} from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const GOOGLE_ADS_ID = "AW-18494243436";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rénovation et aménagement intérieur au Pays basque | Kaza",
    template: "%s | Kaza",
  },
  description:
    "Kaza Intérieur accompagne vos projets de rénovation et d’aménagement intérieur à Anglet, Biarritz, Bayonne et sur la Côte basque.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rénovation et aménagement intérieur au Pays basque | Kaza",
    description:
      "Kaza Intérieur accompagne vos projets de rénovation et d’aménagement intérieur à Anglet, Biarritz, Bayonne et sur la Côte basque.",
    url: SITE_URL,
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
    title: "Rénovation et aménagement intérieur au Pays basque | Kaza",
    description:
      "Kaza Intérieur accompagne vos projets de rénovation et d’aménagement intérieur à Anglet, Biarritz, Bayonne et sur la Côte basque.",
    images: [{ url: SOCIAL_IMAGE_URL, alt: SOCIAL_IMAGE_ALT }],
  },
  keywords: [
    "rénovation",
    "aménagement intérieur",
    "Côte Basque",
    "Anglet",
    "cuisine",
    "parquet",
    "Kaza",
    "Valentin Verdon",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
