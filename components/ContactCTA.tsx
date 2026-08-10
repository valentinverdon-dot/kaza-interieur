import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export default function ContactCTA() {
  return (
    <section className="bg-secondary py-[60px]">
      <div className="container-site text-center">
        <FadeIn>
          <h2 className="heading-h2 mb-0">Un projet ? Parlons-en ensemble</h2>
          <p className="body-text mx-auto mt-4 max-w-2xl text-gray-600">
            Pour étudier la faisabilité de votre projet et établir un devis,
            n&apos;hésitez pas à me contacter via le formulaire ci-dessous.
          </p>
        </FadeIn>

        <FadeIn className="mt-10" delay={150}>
          <ContactForm horizontal />
        </FadeIn>
      </div>
    </section>
  );
}
