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

const FROM_ADDRESS = "Your Life In Seconds <hello@yourlifeinseconds.com>";

async function sendWelcomeEmail(apiKey: string, email: string): Promise<void> {
  // Fire-and-forget. We never block subscribe on this — if Resend's /emails
  // endpoint fails, the contact is still in the audience and the user still
  // sees success. Errors are logged for visibility but not surfaced.
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [email],
        subject: "Welcome to Your Life In Seconds",
        html: WELCOME_HTML,
        text: WELCOME_TEXT,
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[subscribe] welcome email failed:", res.status, body);
    }
  } catch (err) {
    console.error("[subscribe] welcome email threw:", err);
  }
}

const WELCOME_TEXT = `Welcome to Your Life In Seconds.

You just signed up for the Time-in-Seconds Weekly — one short email, once a week, about the math of your life.

Here's what you can expect:
- A single idea about time, money, or the intersection of both
- No fluff, no upsells, no daily inbox clutter
- Unsubscribe any time — one click

While you wait for the first issue, try these:
- Global Life Clock: https://yourlifeinseconds.com/#life-clock
- The $1M Tax Reality: https://yourlifeinseconds.com/#tax-reality
- Where Your Life Actually Goes: https://yourlifeinseconds.com/where-your-life-actually-goes

Every second counts.

— Jacques
Your Life In Seconds
https://yourlifeinseconds.com`;

const WELCOME_HTML = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#e4e4e7;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <p style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#22d3ee;margin:0 0 16px 0;">TIME-IN-SECONDS WEEKLY</p>
    <h1 style="font-size:28px;font-weight:700;line-height:1.2;margin:0 0 24px 0;color:#ffffff;">Welcome. Every second counts.</h1>
    <p style="font-size:16px;line-height:1.6;color:#a1a1aa;margin:0 0 16px 0;">You just signed up for one short email a week about the math of your life — time, money, and the intersection of both.</p>
    <p style="font-size:16px;line-height:1.6;color:#a1a1aa;margin:0 0 24px 0;">No fluff. No upsells. No daily inbox clutter. Unsubscribe any time.</p>
    <div style="border-top:1px solid #27272a;margin:32px 0;"></div>
    <p style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#22d3ee;margin:0 0 16px 0;">WHILE YOU WAIT</p>
    <p style="font-size:15px;line-height:1.6;color:#a1a1aa;margin:0 0 12px 0;">&rarr; <a href="https://yourlifeinseconds.com/#life-clock" style="color:#22d3ee;text-decoration:none;">Calculate your life in seconds</a></p>
    <p style="font-size:15px;line-height:1.6;color:#a1a1aa;margin:0 0 12px 0;">&rarr; <a href="https://yourlifeinseconds.com/#tax-reality" style="color:#22d3ee;text-decoration:none;">See the $1M tax reality</a></p>
    <p style="font-size:15px;line-height:1.6;color:#a1a1aa;margin:0 0 12px 0;">&rarr; <a href="https://yourlifeinseconds.com/where-your-life-actually-goes" style="color:#22d3ee;text-decoration:none;">Where your life actually goes</a></p>
    <div style="border-top:1px solid #27272a;margin:32px 0;"></div>
    <p style="font-size:14px;line-height:1.6;color:#71717a;margin:0;">&mdash; Jacques<br/><a href="https://yourlifeinseconds.com" style="color:#71717a;text-decoration:underline;">yourlifeinseconds.com</a></p>
  </div>
</body>
</html>`;

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
      // Resend returns 409 if the contact already exists — treat as success
      // but skip the welcome email so repeat submitters don't get spammed.
      if (res.status === 409) return { ok: true };
      return { ok: false, error: "Something went wrong. Please try again." };
    }
    // Contact added successfully — send welcome email. Non-blocking: we
    // await it so serverless doesn't kill the request mid-flight, but any
    // failure is logged and swallowed so the user still sees success.
    await sendWelcomeEmail(apiKey, email);
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}
