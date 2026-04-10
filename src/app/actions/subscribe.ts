"use server";

// Subscribe action. Wires to Resend Audiences.
//
// Setup (one env var — audience is auto-discovered):
//   1. Sign up at https://resend.com and create an Audience
//   2. Create a Full Access API key
//   3. Set in Vercel: RESEND_API_KEY=re_xxx
//   4. Redeploy
//
// Optional: set RESEND_AUDIENCE_ID to pin a specific audience. If unset,
// we call GET /audiences on the first invocation and cache the first
// audience's ID in module scope for the life of the server instance.

export type SubscribeResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_RE =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Simple in-memory cache so we don't hit /audiences on every submission.
let cachedAudienceId: string | null = null;

async function resolveAudienceId(apiKey: string): Promise<string | null> {
  if (process.env.RESEND_AUDIENCE_ID) return process.env.RESEND_AUDIENCE_ID;
  if (cachedAudienceId) return cachedAudienceId;

  try {
    const res = await fetch("https://api.resend.com/audiences", {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      data?: Array<{ id: string; name?: string }>;
    };
    const first = json.data?.[0]?.id;
    if (first) {
      cachedAudienceId = first;
      return first;
    }
  } catch {
    // swallow — return null and let caller surface a generic error
  }
  return null;
}

export async function subscribe(formData: FormData): Promise<SubscribeResult> {
  // Honeypot — bots fill every field.
  const honey = formData.get("website");
  if (typeof honey === "string" && honey.length > 0) {
    return { ok: true }; // silently drop
  }

  const emailRaw = formData.get("email");
  if (typeof emailRaw !== "string") {
    return { ok: false, error: "Invalid email." };
  }
  const email = emailRaw.trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: "Email signup isn't configured yet. Please try again later.",
    };
  }

  const audienceId = await resolveAudienceId(apiKey);
  if (!audienceId) {
    return {
      ok: false,
      error:
        "Couldn't reach the email service. Please try again in a moment.",
    };
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
        cache: "no-store",
      }
    );
    if (!res.ok) {
      // Resend returns 409 if the contact already exists — treat as success.
      if (res.status === 409) return { ok: true };
      return { ok: false, error: "Something went wrong. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}
