import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cuisine, parquet et aménagement intérieur au Pays basque | Kaza",
    template: "%s | Kaza",
  },
  description:
    "Kaza réalise vos projets de cuisine, parquet et aménagement intérieur à Anglet, Biarritz, Bayonne et au Pays basque.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cuisine, parquet et aménagement intérieur au Pays basque | Kaza",
    description:
      "Kaza réalise vos projets de cuisine, parquet et aménagement intérieur à Anglet, Biarritz, Bayonne et au Pays basque.",
    url: SITE_URL,
    siteName: "Kaza Intérieur",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cuisine, parquet et aménagement intérieur au Pays basque | Kaza",
    description:
      "Kaza réalise vos projets de cuisine, parquet et aménagement intérieur à Anglet, Biarritz, Bayonne et au Pays basque.",
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
      </body>
    </html>
  );
}
