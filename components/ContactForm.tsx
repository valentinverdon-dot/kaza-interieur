"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  dark?: boolean;
  horizontal?: boolean;
};

export default function ContactForm({
  dark = false,
  horizontal = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Demande de devis – ${name}`);
    const phoneLine = phone ? `\nTéléphone : ${phone}` : "";
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}${phoneLine}\n\nMessage :\n${message}`,
    );
    window.location.href = `mailto:valentinverdon@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (horizontal) {
    return (
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex-1">
            <label htmlFor="cta-name" className="sr-only">
              Nom
            </label>
            <input
              id="cta-name"
              name="name"
              type="text"
              required
              placeholder="Nom"
              className="form-input"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cta-email" className="sr-only">
              Email
            </label>
            <input
              id="cta-email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="form-input"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="cta-message" className="sr-only">
            Message
          </label>
          <textarea
            id="cta-message"
            name="message"
            required
            placeholder="Décrivez votre projet, type de travaux..."
            className="form-input form-textarea"
          />
        </div>
        <div className="mt-5 text-center">
          <button type="submit" className="btn-submit">
            DEMANDER UN DEVIS
          </button>
        </div>
        {submitted && (
          <p
            className={`mt-4 text-center text-sm ${dark ? "text-white/80" : "text-gray-600"}`}
          >
            Votre client mail va s&apos;ouvrir pour envoyer la demande.
          </p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Nom"
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Votre téléphone"
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Décrivez votre projet, type de travaux..."
          className="form-input form-textarea"
        />
      </div>
      <button type="submit" className="btn-submit w-full sm:w-auto">
        DEMANDER UN DEVIS
      </button>
      {submitted && (
        <p className={`text-sm ${dark ? "text-white/80" : "text-gray-600"}`}>
          Votre client mail va s&apos;ouvrir pour envoyer la demande.
        </p>
      )}
    </form>
  );
}
