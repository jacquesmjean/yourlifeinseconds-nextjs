// Server-side geolocation proxy. Calls ipapi.co for the visitor's
// country code so the client doesn't need a CSP exception for an
// external API. Returns { country: "XX" } or { country: null }.

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  let country: string | null = null;

  try {
    // Forward the visitor's IP. On Vercel, the client IP is in
    // x-forwarded-for; ipapi.co uses the requester's IP by default.
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim();

    const url = ip
      ? `https://ipapi.co/${ip}/country_code/`
      : "https://ipapi.co/country_code/";

    const res = await fetch(url, {
      signal: AbortSignal.timeout(3000),
      cache: "no-store",
    });

    if (res.ok) {
      const text = (await res.text()).trim().toUpperCase();
      if (/^[A-Z]{2}$/.test(text)) {
        country = text;
      }
    }
  } catch {
    // Timeout or network error — return null, wizard keeps its default.
  }

  return Response.json(
    { country },
    {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=300",
      },
    }
  );
}
