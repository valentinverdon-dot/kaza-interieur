import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kaza — Aménagement intérieur Côte Basque",
    template: "%s | Kaza",
  },
  description:
    "Depuis 2020, Valentin Verdon (Kaza) réalise cuisine, parquet et aménagement intérieur pour des résidences de la Côte Basque. Qualité, discrétion, respect des délais.",
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
