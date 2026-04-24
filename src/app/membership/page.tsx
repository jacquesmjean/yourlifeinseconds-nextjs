import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership | YourLifeInSeconds",
  description:
    "Two tiers for people who want counting to become a practice. Curious is $5/mo. Connected is $15/mo. First 100 members lock in $3/mo for life.",
  openGraph: {
    title: "Membership | YourLifeInSeconds",
    description:
      "Curious $5/mo. Connected $15/mo. First 100 members get $3/mo for life.",
    type: "website",
  },
  alternates: { canonical: "/membership" },
};

// Stripe Payment Link URLs. Public by design — these are client-side links.
const STRIPE_CURIOUS = "https://buy.stripe.com/dRmfZhe3J2GNg8B9u70oM05";
const STRIPE_CONNECTED = "https://buy.stripe.com/9B600j6BhepvbSl5dR0oM06";
const STRIPE_FOUNDING = "https://buy.stripe.com/fZuaEXaRx3KRaOheOr0oM07";

export default function MembershipPage() {
  const tiers = [
    {
      id: "curious",
      name: "Curious",
      tagline: "For the one who wants to see clearly.",
      price: "$5",
      period: "/mo",
      annual: "Billed monthly. Cancel anytime.",
      featured: false,
      href: STRIPE_CURIOUS,
      features: [
        "Every tool on YourLifeInSeconds, unlocked",
        "AI journaling (50 prompts a month)",
        "Legacy Letter Generator — full version",
        "Weekly Time Audit",
        "One Perspective Partner match",
        "Full Perspective Library",
        "Member community",
      ],
      cta: "Start with Curious — $5/mo →",
    },
    {
      id: "connected",
      name: "Connected",
      tagline: "For the one who wants to go further — with others.",
      price: "$15",
      period: "/mo",
      annual: "Billed monthly. Cancel anytime.",
      featured: true,
      href: STRIPE_CONNECTED,
      features: [
        "Everything in Curious",
        "Monthly Fireside — eight people, one real question, ninety minutes live",
        "30-day Perspective Challenges",
        "Unlimited AI coach",
        "First access to new tools",
        "Early invitations to experimental experiences",
      ],
      cta: "Join Connected — $15/mo →",
    },
  ];

  const faqs = [
    {
      q: "Can I cancel anytime?",
      a: "Yes. One click from the Stripe customer portal linked in your receipt. No questions, no retention calls.",
    },
    {
      q: "Will my price ever go up?",
      a: "Not for existing members. If you join at $5, you stay at $5. Founding members locked in at $3/mo keep $3/mo as long as the subscription stays active.",
    },
    {
      q: "Why a subscription instead of a one-time purchase?",
      a: "Because perspective isn't a one-time thing. The Life Clock you looked at last year is a different clock now. Membership exists because counting is an ongoing practice, not a transaction.",
    },
    {
      q: "How do Fireside sessions work?",
      a: "Eight people, one life question, ninety minutes, live on video. A trained facilitator (often Jacques himself, early on) guides the conversation. Themes rotate monthly — \"The 7 hours we'll never get back,\" \"What is enough?,\" \"The meeting you haven't had yet.\" Sessions are never recorded.",
    },
    {
      q: "Who will I be matched with as a Perspective Partner?",
      a: "Someone whose life looks different from yours — different country, different stage, different path. That's the whole point. Matching is slow and careful, not algorithmic-fast.",
    },
    {
      q: "Do you offer student or hardship pricing?",
      a: "Yes. Email us at hello@yourlifeinseconds.com. Haiti, Gabon, and other developing regions get automatic hardship pricing on request.",
    },
    {
      q: "Can I pay in my local currency?",
      a: "Yes. Adaptive Pricing is on — if you're outside the US, Stripe shows the price in your local currency and converts at the card network's mid-market rate. No hidden FX markup from us.",
    },
    {
      q: "I already paid for a Life Score. What happens?",
      a: "Every past Life Score customer gets three free months of Curious — on the house. Email hello@yourlifeinseconds.com with your old receipt and we'll comp you in.",
    },
  ];

  return (
    <main className="bg-brand-bg min-h-screen">
      {/* Founding Member Banner — clickable, goes straight to $3 Stripe link */}
      <a
        href={STRIPE_FOUNDING}
        className="block bg-gradient-to-r from-accent to-accent-blue text-brand-bg py-3 px-6 text-center text-sm font-semibold mt-[72px] hover:brightness-110 transition-all"
      >
        First 100 members get Curious at $3/month for life → claim your seat
      </a>

      {/* Hero */}
      <section className="pt-16 pb-12 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
            MEMBERSHIP
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Two ways to count <span className="text-gradient">differently</span>.
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            YourLifeInSeconds is free to visit. Free to count. Membership is for people who
            want counting to become a practice — meet others doing the same, sit with harder
            questions, and leave something behind.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="py-16 px-6 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl p-8 flex flex-col relative ${
                  tier.featured
                    ? "bg-gradient-to-br from-accent/10 to-brand-card border-2 border-accent shadow-glow"
                    : "bg-brand-card border border-subtle"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-brand-bg text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    MOST CHOSEN
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-text-muted text-sm mb-6">{tier.tagline}</p>
                <div className="mb-8">
                  <p className="text-5xl font-bold font-mono text-accent">
                    {tier.price}
                    <span className="text-xl text-text-muted">{tier.period}</span>
                  </p>
                  <p className="text-text-muted text-sm mt-2">{tier.annual}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-text-secondary leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className={`press-active w-full px-6 py-3 font-semibold rounded-lg text-center transition-all ${
                    tier.featured
                      ? "bg-gradient-to-r from-accent to-accent-blue text-brand-bg hover:shadow-glow"
                      : "border-2 border-accent text-accent hover:bg-accent/10"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-text-muted text-xs text-center mt-8 max-w-xl mx-auto">
            Prices shown in USD. Outside the US? Stripe shows your local currency at checkout.
            Secure payment via Stripe. Cancel anytime in one click.
          </p>
        </div>
      </section>

      {/* Quiet Alternative */}
      <section className="py-12 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-text-secondary italic leading-relaxed">
            Not ready to join? The Life Clock and every tool are free, forever. Count whenever
            you need to. We&apos;ll be here.
          </p>
          <Link
            href="/tools"
            className="inline-block mt-4 text-accent font-semibold hover:underline"
          >
            Explore the free tools →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-brand-bg-secondary">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Questions worth <span className="text-gradient">answering.</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim transition-colors open:border-accent-dim"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-text-primary pr-4">{item.q}</h3>
                  <span className="text-accent text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-text-secondary mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Founding 100 CTA */}
      <section id="founding" className="py-20 px-6 bg-brand-bg">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
            FOUNDING MEMBERS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Be among the first <span className="text-gradient">100.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-4 max-w-xl mx-auto">
            Curious at <strong className="text-text-primary">$3/month for life</strong>. First
            100 members only. Once the seats are gone, they&apos;re gone.
          </p>
          <p className="text-text-muted text-sm mb-10 max-w-xl mx-auto">
            Same access as Curious. Lower price, locked in for as long as you stay.
          </p>
          <a
            href={STRIPE_FOUNDING}
            className="press-active inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow"
          >
            Claim Founding Price — $3/mo →
          </a>
          <p className="text-text-muted text-xs mt-6">
            Secure payment via Stripe. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-brand-bg-secondary">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8 leading-tight">
            You have a limited number of seconds.{" "}
            <span className="text-gradient">Spend some of them with us.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={STRIPE_FOUNDING}
              className="press-active inline-block px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold rounded-lg hover:shadow-glow transition-shadow"
            >
              Founding — $3/mo →
            </a>
            <a
              href={STRIPE_CURIOUS}
              className="press-active inline-block px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-colors"
            >
              Curious — $5/mo →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
