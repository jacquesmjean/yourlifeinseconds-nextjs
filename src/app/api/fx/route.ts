// Server-side FX rates proxy. Calls open.er-api.com for live exchange
// rates so the client doesn't need a CSP exception for an external API.
// Returns { base, rates, updated } or { error: "..." }.
//
// open.er-api.com is free (no API key) and updates rates daily. Rates
// are cached for 1 hour at the edge since they don't change faster.

export const dynamic = "force-dynamic";

const ALLOWED_CURRENCIES = [
  "USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "HKD", "SGD",
  "NZD", "KRW", "INR", "MXN", "BRL", "ZAR", "SEK", "NOK", "DKK", "AED",
] as const;
const ALLOWED_SET = new Set<string>(ALLOWED_CURRENCIES);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const base = (searchParams.get("base") || "USD").toUpperCase();

  if (!ALLOWED_SET.has(base)) {
    return Response.json({ error: "Invalid base currency" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${base}`, {
      signal: AbortSignal.timeout(5000),
      // Revalidate hourly — rates don't change faster than that on this API
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return Response.json(
        { error: "Upstream API error" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as {
      result?: string;
      base_code?: string;
      rates?: Record<string, number>;
      time_last_update_unix?: number;
    };

    if (data.result !== "success" || !data.rates) {
      return Response.json(
        { error: "Invalid upstream response" },
        { status: 502 }
      );
    }

    // Trim to just the currencies we support to keep payload small
    const trimmedRates: Record<string, number> = {};
    for (const code of ALLOWED_CURRENCIES) {
      const rate = data.rates[code];
      if (typeof rate === "number") {
        trimmedRates[code] = rate;
      }
    }

    return Response.json(
      {
        base: data.base_code ?? base,
        rates: trimmedRates,
        updated: data.time_last_update_unix ?? Math.floor(Date.now() / 1000),
      },
      {
        headers: {
          "Cache-Control": "public, max-age=600, s-maxage=3600",
        },
      }
    );
  } catch {
    return Response.json(
      { error: "Network error or timeout" },
      { status: 503 }
    );
  }
}
