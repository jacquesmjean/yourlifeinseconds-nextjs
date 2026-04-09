import type { Metadata } from "next";
import LifeClockWizard, {
  decodeLifeClockPayload,
  type LifeClockPayload,
} from "@/components/LifeClockWizard";

interface SearchParams {
  r?: string;
}

// We regenerate OG per request so shares preview the recipient's numbers.
export const dynamic = "force-dynamic";

// Minimal life expectancy lookup (keep in sync with LifeClockWizard COUNTRIES).
const LIFE_EXPECTANCY: Record<string, number> = {
  US: 78.9, GB: 81.2, JP: 84.6, CA: 82.1, AU: 83.0, DE: 81.5, FR: 82.8,
  IT: 82.6, ES: 83.4, KR: 83.3, SG: 84.9, CH: 83.8, NZ: 82.3, NL: 82.0,
  SE: 83.1, NO: 83.0, DK: 81.5, BE: 81.8, IE: 82.3, FI: 82.1,
};

function computeResult(payload: LifeClockPayload) {
  const base = LIFE_EXPECTANCY[payload.country ?? "US"] ?? 78.9;
  const adj =
    payload.gender === "male" ? base - 2.5 : payload.gender === "female" ? base + 2.5 : base;
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

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const payload = searchParams.r ? decodeLifeClockPayload(searchParams.r) : null;
  const result = payload ? computeResult(payload) : null;

  const ogUrl = result
    ? `/api/og?r=${result.remaining}&p=${result.percent.toFixed(1)}`
    : "/api/og";

  const title = result
    ? `I have ${result.remaining.toLocaleString("en-US")} seconds left.`
    : "See Your Life in Real Time";
  const description = result
    ? `${result.percent.toFixed(0)}% of a life used. How many seconds do you have left?`
    : "Find out how many seconds you've lived and how many remain.";

  return {
    title,
    description,
    alternates: { canonical: searchParams.r ? `/me?r=${searchParams.r}` : "/me" },
    openGraph: {
      title,
      description,
      url: searchParams.r ? `/me?r=${searchParams.r}` : "/me",
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}

export default function MePage({ searchParams }: { searchParams: SearchParams }) {
  const payload = searchParams.r ? decodeLifeClockPayload(searchParams.r) : null;

  return (
    <div className="pt-[72px]">
      <LifeClockWizard initialPayload={payload ?? undefined} />
    </div>
  );
}
