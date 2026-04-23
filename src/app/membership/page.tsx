import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Membership | YourLifeInSeconds",
  description:
    "Three ways to count differently. YLIS is free to visit. Membership is for those who want to go further — meet others doing the same, sit with harder questions, leave something behind.",
  openGraph: {
    title: "Membership | YourLifeInSeconds",
    description:
      "Three ways to count differently. YLIS is free to visit. Membership is for those who want to go further.",
    type: "website",
  },
};

export default function MembershipPage() {
  const tiers = [
    {
      id: "curious",
      name: "Curious",
      tagline: "For the curious.",
      price: "$5",
      period: "/mo",
      annual: "or $48/year ($4/mo effective)",
      featured: false,
      features: [
        "Unlimited tools",
        "AI journaling (50 prompts/month)",
        "Legacy Letter Generator (full version)",
        "Weekly Time Audit",
        "One perspective partner match",
        "Full Perspective Library access",
        "Member community",
      ],
      cta: "Start Counting — $5/mo →",
    },
    {
      id: "connected",
      name: "Connected",
      tagline: "For those who want to go further.",
      price: "$15",
      period: "/mo",
      annual: "or $144/year ($12/mo effective)",
      featured: true,
      features: [
        "Everything in Curious",
        "Monthly Fireside session — 8 people, live",
        "Perspective challenges (30-day journeys)",
        "Unlimited AI coach",
        "Priority access to new tools",
        "Early invitations to experimental experiences",
      ],
      cta: "Join Connected — $15/mo →",
    },
    {
      id: "legacy",
      name: "Legacy",
      tagline: "For those thinking about what they leave behind.",
      price: "$49",
      period: "/mo",
      annual: "or $480/year",
      featured: false,
      features: [
        "Everything in Connected",
        "Legacy Documents suite — letters, values memo, ethical will",
        "Quarterly Legacy Circle — 8 people, guided, live",
        "Annual personal planning session",
        "Named member of the founding Legacy Circle",
      ],
      cta: "Join Legacy — $49/mo →",
    },
  ];

  const faqs = [
    {
      q: "Is there a free trial?",
      a: "Curious members get a 14-day trial — no charge if you cancel in that window. Connected and Legacy are billed from day one.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. One click from your member dashboard. No questions, no retention calls.",
    },
    {
      q: "How do Fireside sessions work?",
      a: "Eight people, one life question, ninety minutes, live on video. A trained facilitator (often Jacques himself, early on) guides the conversation. Themes rotate monthly — \"The 7 hours we'll never get back,\" \"What is enough?,\" \"The meeting you haven't had yet.\" Sessions are never recorded.",
    },
    {
      q: "Who will I be matched with as a perspective partner?",
      a: "Someone whose life looks different from yours — different country, different stage, different path. That's the whole point. Matching is slow and careful, not algorithmic-fast.",
    },
    {
      q: "What's in the Legacy Documents suite?",
      a: "AI-assisted templates for ethical wills, letters to children, values memoranda, and a personal time budget you revisit annually.",
    },
    {
      q: "Why isn't YLIS a one-time purchase?",
      a: "Because perspective isn't a one-time thing. The Life Clock you looked at last year is a different clock now. Membership exists because counting is an ongoing practice, not a transaction.",
    },
    {
      q: "Do you offer student or hardship pricing?",
      a: "Yes. Email us at hello@yourlifeinseconds.com. We're building this to be seen, not gated. Haiti, Gabon, and other developing regions get automatic hardship pricing on request.",
    },
    {
      q: "I already paid for a Life Score. What happens?",
      a: "Every past Life Score customer gets three free months of Curious — on the house. We'll reach out directly.",
    },
  ];

  return (
    <main className="bg-brand-bg min-h-screen">
      {/* Founding Member Banner */}
      <div className="bg-gradient-to-r from-accent to-accent-blue text-brand-bg py-3 px-6 text-center text-sm font-semibold mt-[72px]">
        First 100 members get Curious at $3/month for life. Limited time. Limited seats.
      </div>

      {/* Hero */}
      <section className="pt-16 pb-12 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
            MEMBERSHIP
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Three ways to count <span className="text-gradient">differently</span>.
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            YourLifeInSeconds is free to visit. Free to count. Membership is for those who
            want to go further — meet others doing the same, sit with harder questions, and
            leave something behind.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="py-16 px-6 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl p-8 flex flex-col relative ${
                  tier.featured
                    ? "bg-gradient-to-br from-accent/10 to-brand-card border-2 border-accent md:-mt-4 md:mb-4 shadow-glow"
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
                <Link
                  href="#waitlist"
                  className={`press-active w-full px-6 py-3 font-semibold rounded-lg text-center transition-all ${
                    tier.featured
                      ? "bg-gradient-to-r from-accent to-accent-blue text-brand-bg hover:shadow-glow"
                      : "border-2 border-accent text-accent hover:bg-accent/10"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet Alternative */}
      <section className="py-12 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-text-secondary italic leading-relaxed">
            Not ready to join? The Life Clock and tools are free, forever. Count whenever you
            need to. We&apos;ll be here.
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

      {/* Waitlist */}
      <section id="waitlist" className="py-20 px-6 bg-brand-bg">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
            FOUNDING MEMBERS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Be among the first <span className="text-gradient">100.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Stripe goes live within two weeks. Drop your email and we&apos;ll send the Founding
            Member invite the moment it opens — $3/month for life, for the first 100 only.
          </p>
          <EmailCapture variant="inline" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-brand-bg-secondary">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8 leading-tight">
            You have a limited number of seconds.{" "}
            <span className="text-gradient">Spend some of them with us.</span>
          </h2>
          <Link
            href="#waitlist"
            className="press-active inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow"
          >
            Join the Founding 100 →
          </Link>
        </div>
      </section>
    </main>
  );
}

