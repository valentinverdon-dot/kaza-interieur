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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const website = String(data.get("website") ?? "");

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, website }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const statusMessage = () => {
    if (status === "sending") {
      return (
        <p className={`text-sm ${dark ? "text-white/80" : "text-gray-600"}`}>
          Envoi en cours...
        </p>
      );
    }
    if (status === "success") {
      return (
        <p className="text-sm font-medium text-green-600">
          ✓ Votre demande a bien été envoyée. Je vous recontacte sous 24h.
        </p>
      );
    }
    if (status === "error") {
      return (
        <p className="text-sm font-medium text-red-600">
          Une erreur est survenue. Merci de réessayer ou de m&apos;appeler directement au 06 20 40 03 72.
        </p>
      );
    }
    return null;
  };

  if (horizontal) {
    return (
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl">
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="cta-website">Site internet</label>
          <input
            id="cta-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
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
              minLength={2}
              maxLength={100}
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
              maxLength={254}
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
            minLength={10}
            maxLength={5000}
            placeholder="Décrivez votre projet, type de travaux..."
            className="form-input form-textarea"
          />
        </div>
        <div className="mt-5 text-center">
          <button type="submit" disabled={status === "sending"} className="btn-submit">
            {status === "sending" ? "ENVOI..." : "DEMANDER UN DEVIS"}
          </button>
        </div>
        <div
          className={status === "idle" ? "" : "mt-4 text-center"}
          aria-live="polite"
          aria-atomic="true"
        >
          {statusMessage()}
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Site internet</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="name" className="sr-only">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={100}
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
          maxLength={254}
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
          maxLength={30}
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
        minLength={10}
        maxLength={5000}
        placeholder="Décrivez votre projet, type de travaux..."
          className="form-input form-textarea"
        />
      </div>
      <button type="submit" disabled={status === "sending"} className="btn-submit w-full sm:w-auto">
        {status === "sending" ? "ENVOI..." : "DEMANDER UN DEVIS"}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {statusMessage()}
      </div>
    </form>
  );
}
