import type { LifeClockPayload } from "./lifeClockPayload";

// Compact share code format (backend-free):
//   [ 5 char base36: days since 1900-01-01 (up to ~60M) ]
//   [ 2 char ISO country code, lowercase ]
//   [ 1 char gender: m / f / a ]
//
// Total: 8 chars. Example: k2a0us-a → dob=1990-01-01, country=US, gender=average.
//
// We intentionally drop time-of-birth from the short form to stay short;
// the full ?r= payload is still supported for anyone who wants precision.

const EPOCH = new Date("1900-01-01T00:00:00Z").getTime();
const MS_PER_DAY = 86400000;

function padLeft(s: string, len: number, ch = "0"): string {
  return s.length >= len ? s : ch.repeat(len - s.length) + s;
}

export function encodeShortCode(p: LifeClockPayload): string | null {
  const t = new Date(p.dob + "T00:00:00Z").getTime();
  if (Number.isNaN(t)) return null;
  const days = Math.round((t - EPOCH) / MS_PER_DAY);
  if (days < 0 || days > 60_000_000) return null;
  const dPart = padLeft(days.toString(36), 5);
  const cPart = (p.country ?? "US").slice(0, 2).toLowerCase();
  const gChar =
    p.gender === "male" ? "m" : p.gender === "female" ? "f" : "a";
  return `${dPart}${cPart}${gChar}`;
}

export function decodeShortCode(code: string): LifeClockPayload | null {
  if (!/^[0-9a-z]{5}[a-z]{2}[mfa]$/.test(code)) return null;
  const dPart = code.slice(0, 5);
  const cPart = code.slice(5, 7).toUpperCase();
  const gChar = code.slice(7);
  const days = parseInt(dPart, 36);
  if (Number.isNaN(days)) return null;
  const dob = new Date(EPOCH + days * MS_PER_DAY).toISOString().slice(0, 10);
  const gender =
    gChar === "m" ? "male" : gChar === "f" ? "female" : "average";
  return { dob, country: cPart, gender };
}
