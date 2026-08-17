import Hero from "@/components/Hero";
import SavoirFaire from "@/components/SavoirFaire";
import Portfolio from "@/components/Portfolio";
import Approche from "@/components/Approche";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <SavoirFaire showLink />
      <Portfolio
        showLink
        title="Réalisations"
        description="Retrouvez l'ensemble de nos projets d'aménagement intérieur, parquet et cuisine réalisés sur la Côte Basque."
      />
      <Approche />
      <FAQ showLink />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
