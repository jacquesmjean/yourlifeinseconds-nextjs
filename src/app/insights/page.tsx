import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The Science of Time — Insights & Deep Dives | YourLifeInSeconds",
  description:
    "Explore deep dives on time, money, work, and life design. Understand where your life actually goes and how to take it back.",
  keywords: [
    "life design",
    "time management",
    "seconds in a lifetime",
    "productivity insights",
    "financial clarity",
    "time scarcity",
    "life optimization",
    "work life balance",
    "time allocation",
    "personal finance",
  ],
  openGraph: {
    title: "The Science of Time — Insights & Deep Dives",
    description:
      "Deep dives on time, money, work, and life design. Knowledge is the first step to control.",
    url: "https://yourlifeinseconds.com/insights",
    siteName: "YourLifeInSeconds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Science of Time — Insights & Deep Dives",
    description:
      "Deep dives on time, money, work, and life design. Knowledge is the first step to control.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many seconds are in a lifetime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An average 80-year lifespan contains approximately 2,522,880,000 seconds (roughly 2.5 billion seconds). Your actual lifetime seconds depend on your age, location, and health factors.",
      },
    },
    {
      "@type": "Question",
      name: "How many seconds are in a year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are 31,536,000 seconds in a standard 365-day year.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Time Scarcity Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Time Scarcity Score is a personalized metric showing how many seconds you have remaining based on WHO life expectancy data for your region.",
      },
    },
    {
      "@type": "Question",
      name: "How much time do we spend sleeping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average person spends approximately 26 years sleeping over an 80-year lifetime, roughly 820 million seconds or one-third of your total lifespan.",
      },
    },
  ],
};

/* ─── Icon Components ─── */
const ClockIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  </div>
);
const BuildingIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round">
      <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  </div>
);
const GearIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  </div>
);
const PeopleIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-pink-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  </div>
);
const AlertIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
    </svg>
  </div>
);
const DollarIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6" />
    </svg>
  </div>
);
const RocketIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09ZM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  </div>
);
const PenIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-teal-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
      <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  </div>
);
/* Strategy icons */
const CheckShieldIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" />
    </svg>
  </div>
);
const PhoneIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round">
      <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
    </svg>
  </div>
);
const GridIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-blue-400/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  </div>
);
const HourglassIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-orange-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round">
      <path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  </div>
);
const BranchIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-lime-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="2" strokeLinecap="round">
      <path d="M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M18 9c0 4-6 6-6 6s-6 2-6 6" />
    </svg>
  </div>
);
const SparkIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-yellow-500/15 flex items-center justify-center mb-4">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  </div>
);

/* ─── Essential Deep Dives ─── */
const deepDives = [
  {
    category: "TIME & REALITY",
    title: "Where Your Life Actually Goes (It's Not What You Think)",
    desc: "You think you know where your time goes. You don't. Discover the shocking reality of your daily time breakdown.",
    slug: "where-your-life-actually-goes",
    icon: ClockIcon,
  },
  {
    category: "WORK & IDENTITY",
    title: "The Psychology of Work (Why You Defend Your Own Cage)",
    desc: "Work isn't just what you do. It's who you are. And that's the problem. Explore the psychological trap of labor.",
    slug: "psychology-of-work",
    icon: BuildingIcon,
  },
  {
    category: "SYSTEMS & SOCIETY",
    title: "School Trained You to Trade Time (The Real Industrial Trap)",
    desc: "School didn't teach you to think. It taught you to trade time for grades. Break the pattern of industrial compliance.",
    slug: "school-trained-you",
    icon: GearIcon,
  },
  {
    category: "RELATIONSHIPS & IDENTITY",
    title: "Marriage and the Disappearance of Self",
    desc: "Marriage is beautiful, but it's where most people lose themselves. Learn to maintain identity in a partnership.",
    slug: "marriage-and-self",
    icon: PeopleIcon,
  },
  {
    category: "TIME & PERSPECTIVE",
    title: "You're Not Busy. You're Misallocated.",
    desc: "Everyone says they're busy. No one is. They're just misallocating their time across 168 hours a week.",
    slug: "not-busy-misallocated",
    icon: AlertIcon,
  },
  {
    category: "MONEY & TIME",
    title: "What Money Actually Is",
    desc: "Money isn't currency. Money is time. Learn how to calculate your true exchange rate of life energy.",
    slug: "what-money-is",
    icon: DollarIcon,
  },
  {
    category: "POSSIBILITY & IMPACT",
    title: "What If You Took Back 2 Hours a Day",
    desc: "Two hours. That's all it would take to change your entire life. Discover the compounding math of reclaimed time.",
    slug: "take-back-two-hours",
    icon: RocketIcon,
  },
  {
    category: "LIFE DESIGN & INTENTION",
    title: "Designing a Life That Is Yours",
    desc: "Most people don't design their lives; they inherit them. Learn to architect a life on your own terms.",
    slug: "designing-your-life",
    icon: PenIcon,
  },
];

/* ─── Strategy & Analysis ─── */
const strategyArticles = [
  {
    category: "TIME & PERSPECTIVE",
    title: "How Much Time Do You Actually Control?",
    desc: "Strip away obligations, maintenance, and survival requirements to find the tiny sliver of time that is actually yours.",
    slug: "time-you-control",
    icon: CheckShieldIcon,
  },
  {
    category: "TIME & PERSPECTIVE",
    title: "The Cost of Distraction",
    desc: "A detailed analysis of the 'Invisible Tax' levied on your life by digital noise and fragmented focus.",
    slug: "cost-of-distraction",
    icon: PhoneIcon,
  },
  {
    category: "TIME & PERSPECTIVE",
    title: "Your Life in Weeks (Not Years)",
    desc: "Visualizing your existence in 4,000 weeks. Why shifting from years to weeks creates immediate clarity.",
    slug: "life-in-weeks",
    icon: GridIcon,
  },
  {
    category: "TIME & PERSPECTIVE",
    title: "Why Most People Run Out of Time Without Realizing",
    desc: "The autopilot trap: How routines compress time and why decades feel like a blur when we aren't paying attention.",
    slug: "running-out-of-time",
    icon: HourglassIcon,
  },
  {
    category: "TIME & PERSPECTIVE",
    title: "You Don't Have a Time Problem",
    desc: "The problem isn't the number of hours in the day — it's the 'Awareness Gap' in how those hours are allocated.",
    slug: "not-a-time-problem",
    icon: BranchIcon,
  },
  {
    category: "TIME & PERSPECTIVE",
    title: "The 1-Hour Shift That Changes Your Life",
    desc: "The mathematics of reallocation. What happens when you move just 60 minutes a day from reaction to intention.",
    slug: "one-hour-shift",
    icon: SparkIcon,
  },
  {
    category: "MONEY & TIME",
    title: "Debt Is Paid With Years, Not Dollars",
    desc: "Interest is not a fee. It is a voluntary life-tax on your future seconds. See what your debt really costs.",
    slug: "debt-is-paid-with-years",
    icon: DollarIcon,
  },
  {
    category: "MONEY & TIME",
    title: "Freedom Is a Math Problem, Not a Feeling",
    desc: "Financial independence is not a vibe. It is a specific number, a specific date, and a specific countdown.",
    slug: "freedom-is-a-math-problem",
    icon: HourglassIcon,
  },
  {
    category: "MONEY & TIME",
    title: "Your Expenses Aren't Priced in Dollars",
    desc: "Every price tag has a second price tag nobody shows you — the hours of your life it costs.",
    slug: "priced-in-hours-not-dollars",
    icon: CheckShieldIcon,
  },
  {
    category: "EDUCATION & TIME",
    title: "The Degree Doesn't Owe You a Life",
    desc: "College ROI statistics are a lie of averages. Understand survivorship bias, opportunity cost, and the real breakeven age.",
    slug: "degree-doesnt-owe-you-a-life",
    icon: GearIcon,
  },
];

/* ─── Quick Reference Data ─── */
const quickData = [
  { value: "~2.5B", label: "Seconds in a Lifetime", sub: "Based on 80-year average" },
  { value: "29,200", label: "Days in a Human Life", sub: "80 years × 365 days" },
  { value: "701,280", label: "Hours in a Lifetime", sub: "Only ~467K awake" },
  { value: "?", label: "Seconds I Have Lived", sub: "Calculate yours now" },
];

export default function InsightsPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ════════ Page Header ════════ */}
      <section className="pt-28 pb-16 bg-brand-bg text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-dim bg-accent/5 mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
              The Science of Time
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Knowledge is the First Step to{" "}
            <span className="text-gradient">Control.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-4">
            We spend our lives as if we have an infinite supply of seconds. These deep
            dives are designed to break that illusion and give you the tools to reclaim
            your most valuable asset.
          </p>
          <p className="text-sm text-text-muted">
            Built to help you see what your life is actually worth — in seconds.
          </p>
        </div>
      </section>

      {/* ════════ Essential Deep Dives ════════ */}
      <section className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-12 border-b border-subtle pb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-primary">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Essential Deep Dives
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deepDives.map((article) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-2">
                    <Icon />
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                    {article.desc}
                  </p>
                  <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    See Your Breakdown
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ Mid-Page CTA ════════ */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center p-12 sm:p-16 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] border border-subtle rounded-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Most People Never See What They Actually Keep.
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto">
              You just saw it. Now go deeper.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#life-clock"
                className="px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold rounded-lg hover:shadow-glow transition-shadow inline-block"
              >
                Analyze My Time
              </Link>
              <Link
                href="/#tax-reality"
                className="px-8 py-4 border border-subtle text-text-secondary font-bold rounded-lg hover:border-accent-dim hover:text-text-primary transition-all inline-block"
              >
                Run the $1M Reality Check
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ Strategy & Analysis ════════ */}
      <section className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-12 border-b border-subtle pb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-primary">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
            </svg>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Strategy &amp; Analysis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyArticles.map((article) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-2">
                    <Icon />
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                    {article.desc}
                  </p>
                  <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    See Your Breakdown
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ Email Capture ════════ */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <EmailCapture variant="inline" />
        </div>
      </section>

      {/* ════════ Quick Reference Data ════════ */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-12 border-b border-subtle pb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-primary">
              <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
            </svg>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Quick Reference Data
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickData.map((item) => (
              <Link key={item.label} href="/#life-clock">
                <div className="bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 hover:shadow-glow transition-all">
                  <h3 className="font-bold text-text-primary mb-1">
                    {item.label}
                  </h3>
                  <p className="text-text-muted text-xs">{item.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Final CTA ════════ */}
      <section className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center p-12 sm:p-16 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] border border-subtle rounded-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Stop Drifting. Start Designing.
            </h2>
            <p className="text-text-secondary text-lg mb-2 max-w-md mx-auto">
              Reading these articles is the first step. The second step is facing your own data.
            </p>
            <p className="text-text-muted text-base mb-8">
              Calculate your Life Score and see the reality of your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#life-clock"
                className="px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow inline-block"
              >
                Analyze My Time
              </Link>
              <Link
                href="/tools"
                className="px-10 py-4 border border-subtle text-text-secondary font-bold text-lg rounded-lg hover:border-accent-dim hover:text-text-primary transition-all inline-block"
              >
                Explore All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
