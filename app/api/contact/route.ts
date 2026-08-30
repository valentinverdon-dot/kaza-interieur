import { Resend } from "resend";
import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/site-config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimits = new Map<string, RateLimitEntry>();

function getClientIp(headers: Headers): string | null {
  const forwardedFor = headers.get("x-forwarded-for");
  const firstForwardedIp = forwardedFor?.split(",")[0]?.trim();

  return firstForwardedIp || headers.get("x-real-ip")?.trim() || null;
}

function checkRateLimit(ip: string | null): {
  allowed: boolean;
  retryAfterSeconds?: number;
} {
  if (!ip) return { allowed: true };

  const now = Date.now();

  if (rateLimits.size > 500) {
    for (const [key, entry] of rateLimits) {
      if (entry.resetAt <= now) rateLimits.delete(key);
    }
  }

  const current = rateLimits.get(ip);
  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1_000)),
    };
  }

  current.count += 1;
  return { allowed: true };
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character] ?? character;
  });
}

function readField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    const requestOrigin = new URL(request.url).origin;
    const productionOrigin = new URL(SITE_URL).origin;

    if (origin && origin !== requestOrigin && origin !== productionOrigin) {
      return NextResponse.json({ error: "Origine invalide" }, { status: 403 });
    }

    const rateLimit = checkRateLimit(getClientIp(request.headers));
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Trop de demandes. Merci de réessayer plus tard." },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSeconds ?? 60),
          },
        }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY manquante");
      return NextResponse.json(
        { error: "Service temporairement indisponible" },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 20_000) {
      return NextResponse.json({ error: "Requête trop volumineuse" }, { status: 413 });
    }

    const body: unknown = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
    }

    const payload = body as Record<string, unknown>;
    const name = readField(payload.name);
    const email = readField(payload.email).toLowerCase();
    const phone = readField(payload.phone);
    const message = readField(payload.message);
    const website = readField(payload.website);

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      name.length < 2 ||
      name.length > 100 ||
      email.length > 254 ||
      !EMAIL_PATTERN.test(email) ||
      phone.length > 30 ||
      message.length < 10 ||
      message.length > 5_000
    ) {
      return NextResponse.json(
        { error: "Champs invalides" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const subjectName = name.replace(/[\r\n]+/g, " ");
    const phoneLine = safePhone
      ? `<p><strong>Téléphone :</strong> ${safePhone}</p>`
      : "";

    const { error } = await resend.emails.send({
      from: "Kaza <onboarding@resend.dev>",
      to: "valentinverdon@gmail.com",
      replyTo: email,
      subject: `Demande de devis – ${subjectName}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        ${phoneLine}
        <p><strong>Message :</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur serveur:", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
