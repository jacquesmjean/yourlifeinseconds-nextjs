export interface LifeClockPayload {
  dob: string; // YYYY-MM-DD
  tob?: string; // HH:mm
  country?: string;
  gender?: "male" | "female" | "average";
}

export function encodeLifeClockPayload(p: LifeClockPayload): string {
  const json = JSON.stringify(p);
  if (typeof window === "undefined") {
    return Buffer.from(json).toString("base64url");
  }
  return btoa(json)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function decodeLifeClockPayload(s: string): LifeClockPayload | null {
  try {
    const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
    const padded = b64 + "===".slice((b64.length + 3) % 4);
    const json =
      typeof window === "undefined"
        ? Buffer.from(padded, "base64").toString("utf-8")
        : atob(padded);
    const parsed = JSON.parse(json);
    if (
      typeof parsed !== "object" ||
      !parsed ||
      typeof parsed.dob !== "string"
    ) {
      return null;
    }
    return parsed as LifeClockPayload;
  } catch {
    return null;
  }
}
