import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const BG = "#0a0e1a";
const CARD = "#151b2e";
const ACCENT = "#00d4aa";
const ACCENT_BLUE = "#00b4d8";
const TEXT = "#f0f2f8";
const MUTED = "#8892a8";

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const remaining = searchParams.get("r");
  const percent = searchParams.get("p");

  const hasResult =
    remaining !== null && !Number.isNaN(Number(remaining));

  const remainingNum = hasResult ? Number(remaining) : null;
  const percentNum =
    percent !== null && !Number.isNaN(Number(percent))
      ? Math.max(0, Math.min(100, Number(percent)))
      : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0,212,170,0.12), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,180,216,0.10), transparent 50%)`,
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: TEXT,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_BLUE})`,
              color: BG,
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            LS
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
            Your Life <span style={{ color: ACCENT, marginLeft: 8 }}>In Seconds</span>
          </div>
        </div>

        {/* Main */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {hasResult && remainingNum !== null ? (
            <>
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  color: MUTED,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Seconds Remaining
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 110,
                  fontWeight: 800,
                  lineHeight: 1,
                  background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_BLUE} 100%)`,
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {formatNumber(remainingNum)}
              </div>
              {percentNum !== null && (
                <div
                  style={{
                    display: "flex",
                    fontSize: 32,
                    color: MUTED,
                    marginTop: 24,
                  }}
                >
                  {percentNum.toFixed(0)}% of life used
                </div>
              )}
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  fontSize: 80,
                  fontWeight: 800,
                  color: TEXT,
                  lineHeight: 1.05,
                  maxWidth: 900,
                }}
              >
                Every second counts.
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 80,
                  fontWeight: 800,
                  lineHeight: 1.05,
                  marginTop: 8,
                  background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_BLUE} 100%)`,
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Do you know yours?
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 32,
                  color: MUTED,
                  marginTop: 32,
                  maxWidth: 900,
                }}
              >
                A free life clock. Find out how many seconds you&apos;ve lived and how many
                remain.
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: MUTED,
            fontSize: 24,
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>yourlifeinseconds.com</div>
          <div
            style={{
              display: "flex",
              padding: "12px 24px",
              background: CARD,
              border: `1px solid ${ACCENT}`,
              color: ACCENT,
              borderRadius: 8,
            }}
          >
            Calculate yours →
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
