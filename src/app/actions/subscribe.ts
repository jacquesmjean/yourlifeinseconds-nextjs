"use server";

// Subscribe action. Wires to Resend Audiences if RESEND_API_KEY + RESEND_AUDIENCE_ID
// are set, otherwise returns a configuration error so we never show a fake
// success state to the user.
//
// To enable:
//   1. Sign up at https://resend.com and create an Audience
//   2. Set env vars in your host (Vercel, etc.):
//        RESEND_API_KEY=re_xxx
//        RESEND_AUDIENCE_ID=aud_xxx
//   3. Redeploy

export type SubscribeResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_RE =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    // Do not lie to the user. Return an error so the UI can show it.
    return {
      ok: false,
      error:
        "Email signup isn't configured yet. Please try again later.",
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
