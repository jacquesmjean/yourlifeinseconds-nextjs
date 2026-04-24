import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/membership/success' },
  title: "Welcome to the Circle | YourLifeInSeconds",
  description:
    "You're in. Here's what happens next.",
  robots: { index: false, follow: false }, // Don't index confirmation pages
};

type Tier = "curious" | "connected" | "founding";

interface PageProps {
  searchParams: { tier?: string };
}

const TIER_CONTENT: Record<Tier, {
  eyebrow: string;
  headline: string;
  sub: string;
  nextSteps: string[];
}> = {
  curious: {
    eyebrow: "WELCOME TO CURIOUS",
    headline: "You're in.",
    sub: "Every tool, unlocked. Your Perspective Partner match starts now.",
    nextSteps: [
      "Check your email for your welcome message and receipt (from hello@yourlifeinseconds.com).",
      "You now have access to every tool. Start with the Legacy Letter Generator — most members say it's the first one that changes something.",
      "Your Perspective Partner match takes up to seven days. We do it by hand, not algorithm.",
      "Manage your subscription any time from the Stripe receipt we just sent you.",
    ],
  },
  connected: {
    eyebrow: "WELCOME TO CONNECTED",
    headline: "You're in. All of it.",
    sub: "Every tool, your Partner match, and a seat at the next Fireside.",
    nextSteps: [
      "Check your email for your welcome message and receipt (from hello@yourlifeinseconds.com).",
      "You'll get an invite to the next monthly Fireside within seven days. Eight people. One real question. Ninety minutes live.",
      "Your first 30-day Perspective Challenge drops in your inbox tomorrow.",
      "Every tool is unlocked. The unlimited AI coach is ready when you are.",
      "Manage your subscription any time from the Stripe receipt we just sent you.",
    ],
  },
  founding: {
    eyebrow: "WELCOME, FOUNDING MEMBER",
    headline: "You locked it in.",
    sub: "$3/month for life. You were one of the first 100.",
    nextSteps: [
      "Check your email for your Founding welcome and receipt (from hello@yourlifeinseconds.com).",
      "Your Founding price stays $3/mo for as long as your subscription stays active. It won't go up. Ever.",
      "You have full Curious access — every tool, AI journaling, Legacy Letter Generator, Weekly Time Audits, and a Perspective Partner match.",
      "Your Perspective Partner match takes up to seven days. We do it by hand.",
      "We'll recognize Founding members specifically in future community moments. You helped build this.",
      "Manage your subscription any time from the Stripe receipt we just sent you.",
    ],
  },
};

function normalizeTier(raw: string | undefined): Tier {
  if (raw === "connected") return "connected";
  if (raw === "founding") return "founding";
  return "curious"; // default fallback
}

export default function MembershipSuccessPage({ searchParams }: PageProps) {
  const tier = normalizeTier(searchParams.tier);
  const content = TIER_CONTENT[tier];

  return (
    <main className="bg-brand-bg min-h-screen pt-[72px]">
      {/* Hero */}
      <section className="pt-20 pb-12 px-6 text-center">
        <div className="max-w-[720px] mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-8">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-accent"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
            {content.eyebrow}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            {content.headline}
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            {content.sub}
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 px-6">
        <div className="max-w-[720px] mx-auto">
          <div className="bg-brand-card border border-subtle rounded-2xl p-8 sm:p-10">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
              WHAT HAPPENS NEXT
            </p>
            <ol className="space-y-5">
              {content.nextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-mono font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-text-secondary leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Start here
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/tools/legacy-letter"
              className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 transition-all flex flex-col"
            >
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                Legacy Letter
              </h3>
              <p className="text-text-secondary text-sm mb-3 flex-1">
                A letter to someone who matters, from the life you&apos;re already living.
              </p>
              <span className="text-accent text-sm font-semibold">Open →</span>
            </Link>
            <Link
              href="/#life-clock"
              className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 transition-all flex flex-col"
            >
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                Life Clock
              </h3>
              <p className="text-text-secondary text-sm mb-3 flex-1">
                Count your seconds. See what remains.
              </p>
              <span className="text-accent text-sm font-semibold">Open →</span>
            </Link>
            <Link
              href="/tools"
              className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 transition-all flex flex-col"
            >
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                All Tools
              </h3>
              <p className="text-text-secondary text-sm mb-3 flex-1">
                Ten mirrors. Each shows you something different.
              </p>
              <span className="text-accent text-sm font-semibold">Open →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-text-secondary leading-relaxed">
            Questions? Reply to your welcome email or write us at{" "}
            <a
              href="mailto:hello@yourlifeinseconds.com"
              className="text-accent font-semibold hover:underline"
            >
              hello@yourlifeinseconds.com
            </a>
            . We read every message.
          </p>
          <p className="text-text-muted text-sm mt-4 italic">
            — Jacques
          </p>
        </div>
      </section>
    </main>
  );
}
