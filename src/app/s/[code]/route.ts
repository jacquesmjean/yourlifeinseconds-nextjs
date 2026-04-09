import { NextResponse } from "next/server";
import { decodeShortCode } from "@/lib/shortCode";
import { encodeLifeClockPayload } from "@/lib/lifeClockPayload";

// Short URL resolver: /s/<code> → /me?r=<base64url payload>
// 8-character share codes that fit comfortably in tweets and QR codes.

export async function GET(
  _req: Request,
  { params }: { params: { code: string } }
) {
  const payload = decodeShortCode(params.code.toLowerCase());
  if (!payload) {
    return NextResponse.redirect(new URL("/me", _req.url), 302);
  }
  const r = encodeLifeClockPayload(payload);
  return NextResponse.redirect(new URL(`/me?r=${r}`, _req.url), 302);
}
