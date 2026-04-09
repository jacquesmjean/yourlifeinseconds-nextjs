import { decodeLifeClockPayload } from "@/lib/lifeClockPayload";
import { decodeShortCode } from "@/lib/shortCode";

// Iframe-embeddable micro-widget. Returned as raw HTML so it bypasses the
// root layout (no navbar/footer). Framing is explicitly allowed via a
// route-specific header override in next.config.mjs.
//
// Usage:
//   <iframe src="https://yourlifeinseconds.com/embed?s=k2a0usa" width="320" height="140" frameborder="0"></iframe>

export const dynamic = "force-dynamic";

const LIFE_EXPECTANCY: Record<string, number> = {
  US: 78.9, GB: 81.2, JP: 84.6, CA: 82.1, AU: 83.0, DE: 81.5, FR: 82.8,
  IT: 82.6, ES: 83.4, KR: 83.3, SG: 84.9, CH: 83.8, NZ: 82.3, NL: 82.0,
  SE: 83.1, NO: 83.0, DK: 81.5, BE: 81.8, IE: 82.3, FI: 82.1,
};

function compute(payload: {
  dob: string;
  country?: string;
  gender?: "male" | "female" | "average";
}) {
  const base = LIFE_EXPECTANCY[payload.country ?? "US"] ?? 78.9;
  const adj =
    payload.gender === "male"
      ? base - 2.5
      : payload.gender === "female"
        ? base + 2.5
        : base;
  const birth = new Date(payload.dob);
  if (isNaN(birth.getTime())) return null;
  const death = new Date(birth);
  death.setFullYear(death.getFullYear() + Math.floor(adj));
  const total = Math.floor((death.getTime() - birth.getTime()) / 1000);
  const used = Math.floor((Date.now() - birth.getTime()) / 1000);
  const remaining = Math.max(0, total - used);
  const percent = Math.min(100, Math.max(0, (used / total) * 100));
  return { remaining, percent };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const r = url.searchParams.get("r");
  const s = url.searchParams.get("s");

  const payload = s
    ? decodeShortCode(s.toLowerCase())
    : r
      ? decodeLifeClockPayload(r)
      : null;

  const result = payload ? compute(payload) : null;

  const href = s
    ? `https://yourlifeinseconds.com/s/${encodeURIComponent(s)}`
    : "https://yourlifeinseconds.com/";

  const body = result
    ? `
      <div class="label">Seconds Remaining</div>
      <div class="big">${result.remaining.toLocaleString("en-US")}</div>
      <div class="meta">${Math.round(result.percent)}% of life used · <span class="brand">yourlifeinseconds.com</span></div>
    `
    : `
      <div class="label">Your Life In Seconds</div>
      <div class="headline">How many seconds do you have left?</div>
      <div class="meta"><span class="brand">Calculate yours →</span></div>
    `;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="robots" content="noindex,follow" />
<title>Your Life In Seconds</title>
<style>
  :root { color-scheme: dark; }
  html, body { margin: 0; padding: 0; height: 100%; background: transparent; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  a.card {
    display: block;
    text-decoration: none;
    color: #f0f2f8;
    padding: 20px 24px;
    border-radius: 12px;
    background: linear-gradient(135deg, #151b2e 0%, #0a0e1a 100%);
    border: 1px solid rgba(0,212,170,0.3);
    box-sizing: border-box;
    min-height: 100vh;
  }
  a.card:hover { border-color: rgba(0,212,170,0.6); }
  .label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #8892a8; font-family: ui-monospace, "JetBrains Mono", monospace; margin-bottom: 6px; }
  .big { font-size: 32px; font-weight: 800; font-family: ui-monospace, "JetBrains Mono", monospace; background: linear-gradient(135deg, #00f5c8, #00b4d8); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; line-height: 1.1; }
  .headline { font-size: 20px; font-weight: 700; line-height: 1.2; margin-top: 4px; }
  .meta { margin-top: 10px; font-size: 12px; color: #8892a8; font-family: ui-monospace, "JetBrains Mono", monospace; }
  .brand { color: #00d4aa; }
</style>
</head>
<body>
  <a class="card" href="${escapeHtml(href)}" target="_top" rel="noopener">${body}</a>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // Route-specific: allow framing anywhere. Overrides any global DENY.
      "Content-Security-Policy": "frame-ancestors *",
      "X-Frame-Options": "",
      "Cache-Control": "public, max-age=60, s-maxage=300",
    },
  });
}
