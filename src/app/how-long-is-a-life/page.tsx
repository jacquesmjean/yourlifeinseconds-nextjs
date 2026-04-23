import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How Long Is a Life? Every Lifetime, in Numbers | YourLifeInSeconds",
  description:
    "A typical human life is 2.5 billion seconds, 42 million minutes, and 29,220 days. See the full lifetime math — then calculate yours with the free Life Clock.",
  alternates: { canonical: "/how-long-is-a-life" },
  openGraph: {
    title: "How Long Is a Life? Every Lifetime, in Numbers",
    description:
      "The average human lifetime in seconds, minutes, hours, days, weeks, and years. Then calculate yours.",
    url: "https://yourlifeinseconds.com/how-long-is-a-life",
    siteName: "YourLifeInSeconds",
    type: "article",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "How Long Is a Life? Every Lifetime, in Numbers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Long Is a Life? Every Lifetime, in Numbers",
    description:
      "A typical life is 2.5 billion seconds. Here's the rest of the math.",
    images: ["/api/og"],
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
        text: "An average 80-year human lifetime contains approximately 2,522,880,000 seconds. That's 2.5 billion. Actual lifespan varies by country, health, and circumstance.",
      },
    },
    {
      "@type": "Question",
      name: "How many seconds have I lived?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roughly 31,536,000 seconds per year of your age. A 35-year-old has lived about 1.1 billion seconds. For your exact number ticking live, enter your birthdate into the Life Clock.",
      },
    },
    {
      "@type": "Question",
      name: "How many minutes are in a lifetime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 42,048,000 minutes across an 80-year life. That's 42 million — the number of decisions, moments, and breaths you get.",
      },
    },
    {
      "@type": "Question",
      name: "How many hours are in an average lifetime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 700,800 hours in an 80-year life. About 230,000 of those are spent sleeping, around 90,000 working. That leaves roughly 380,000 waking, non-working hours.",
      },
    },
    {
      "@type": "Question",
      name: "How many days are in a lifetime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 29,220 days in an 80-year life. Each day is exactly 86,400 seconds — the same for everyone, regardless of wealth or status.",
      },
    },
    {
      "@type": "Question",
      name: "How many weeks are in a lifetime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 4,174 weeks in an 80-year life. Visualized as a grid, that's enough to see every week at once on a single piece of paper.",
      },
    },
    {
      "@type": "Question",
      name: "How many months are in a lifetime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "960 months in an 80-year lifetime. Doesn't sound like many when you count them as a single number.",
      },
    },
    {
      "@type": "Question",
      name: "Is the average lifetime the same everywhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Life expectancy ranges from about 54 years in some countries to over 84 in others. The Life Clock uses your region's average when you enter your location.",
      },
    },
  ],
};

export default function HowLongIsALifePage() {
  const units = [
    { num: "2.5B", label: "Seconds", exact: "2,522,880,000" },
    { num: "42M", label: "Minutes", exact: "42,048,000" },
    { num: "700K", label: "Hours", exact: "700,800" },
    { num: "29,220", label: "Days", exact: null },
    { num: "4,174", label: "Weeks", exact: null },
    { num: "960", label: "Months", exact: null },
    { num: "80", label: "Years", exact: null },
    { num: "1", label: "Lifetime", exact: null },
  ];

  const hoursBreakdown = [
    { label: "Sleeping", hours: "230,000", percent: "33%" },
    { label: "Working (average career)", hours: "90,000", percent: "13%" },
    { label: "Commuting & errands", hours: "35,000", percent: "5%" },
    { label: "Eating & household", hours: "55,000", percent: "8%" },
    { label: "Everything else", hours: "~290,000", percent: "~41%" },
  ];

  const faqs = [
    {
      q: "How many seconds are in a lifetime?",
      a: "An average 80-year human lifetime contains approximately 2,522,880,000 seconds. That's 2.5 billion. Actual lifespan varies by country, health, and circumstance — the Life Clock calculates your region's specific number.",
    },
    {
      q: "How many seconds have I lived?",
      a: "Roughly 31,536,000 seconds per year of your age. A 35-year-old has lived about 1.1 billion seconds. For your exact count — down to the second, ticking live — enter your birthdate into the Life Clock.",
    },
    {
      q: "How many minutes are in a lifetime?",
      a: "About 42,048,000 minutes across an 80-year life. That's 42 million — the number of decisions, moments, and breaths you get.",
    },
    {
      q: "How many hours are in an average lifetime?",
      a: "Approximately 700,800 hours in an 80-year life. About 230,000 of those are spent sleeping, around 90,000 working. That leaves roughly 380,000 waking, non-working hours.",
    },
    {
      q: "How many days are in a lifetime?",
      a: "About 29,220 days in an 80-year life. A 90-year life adds about 3,650 more. Each day is exactly 86,400 seconds — the same for everyone.",
    },
    {
      q: "How many weeks are in a lifetime?",
      a: "Approximately 4,174 weeks in an 80-year life. Visualized as a grid, that's about how many you'd fit on a single piece of paper — enough to see all of them at once.",
    },
    {
      q: "How many months are in a lifetime?",
      a: "960 months in an 80-year lifetime. Doesn't sound like many when you count them as a single number.",
    },
    {
      q: "Is the average lifetime the same everywhere?",
      a: "No. Life expectancy ranges from about 54 years in some countries to over 84 in others. The Life Clock uses your region's average when you enter your location.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="bg-brand-bg min-h-screen pt-[72px]">
        {/* Hero */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-[800px] mx-auto">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
              THE NUMBERS
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How long is a <span className="text-gradient">life?</span>
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              A typical human life is about 80 years. Here&apos;s what that looks
              like in every unit of time — and what your actual number might be.
            </p>
          </div>
        </section>

        {/* Big Numbers Grid */}
        <section className="py-16 px-6 bg-brand-bg-secondary">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              An 80-year lifetime, in every unit.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {units.map((unit) => (
                <div
                  key={unit.label}
                  className="bg-brand-card border border-subtle rounded-xl p-6 text-center hover:border-accent-dim transition-colors"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-accent font-mono mb-2">
                    {unit.num}
                  </p>
                  <p className="text-text-secondary font-semibold uppercase tracking-wider text-xs">
                    {unit.label}
                  </p>
                  {unit.exact && (
                    <p className="text-text-muted text-xs font-mono mt-2">
                      {unit.exact}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* But you don't have an average life */}
        <section className="py-20 px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              But you don&apos;t have an average life.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              The numbers above describe the average human lifetime — roughly
              80 years, across most developed countries. Your actual number
              depends on where you live, how long ago you were born, and what
              you&apos;ve already spent.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              The{" "}
              <Link
                href="/#life-clock"
                className="text-accent hover:underline"
              >
                Life Clock
              </Link>{" "}
              gives you your specific number. Enter your birthdate. Choose your
              region. See exactly how many seconds, hours, and days you have
              left — in real time, ticking forward.
            </p>
            <Link
              href="/#life-clock"
              className="press-active inline-block px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-semibold rounded-lg hover:shadow-glow transition-shadow"
            >
              Calculate My Lifetime →
            </Link>
          </div>
        </section>

        {/* Hours Breakdown */}
        <section className="py-20 px-6 bg-brand-bg-secondary">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Where those hours actually go.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              An 80-year life contains about 700,800 hours. That sounds like a
              lot until you see where most of them go:
            </p>
            <ul className="space-y-4 mb-8">
              {hoursBreakdown.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between bg-brand-card border border-subtle rounded-xl p-5"
                >
                  <span className="text-text-primary">{row.label}</span>
                  <span className="text-accent font-mono font-semibold">
                    {row.hours} hrs{" "}
                    <span className="text-text-muted text-sm">
                      ({row.percent})
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-text-secondary leading-relaxed italic">
              That &ldquo;everything else&rdquo; — about 290,000 waking,
              non-working hours across 80 years — is your real life. Reading,
              eating, walking, loving, talking, watching, waiting. Less than you
              thought.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center leading-tight">
              Common questions about{" "}
              <span className="text-gradient">lifetime math.</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim transition-colors open:border-accent-dim"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-text-primary pr-4">
                      {item.q}
                    </h3>
                    <span className="text-accent text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-text-secondary mt-4 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-brand-bg-secondary">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6 leading-tight">
              Now see <span className="text-gradient">yours.</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              The averages are useful. Your number is the one that matters.
              Enter your birthdate and see how many seconds, hours, and days you
              have left of your specific life.
            </p>
            <Link
              href="/#life-clock"
              className="press-active px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow inline-block"
            >
              Start the Life Clock →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

