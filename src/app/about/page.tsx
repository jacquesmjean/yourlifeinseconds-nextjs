import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jacques M. Jean — Founder | YourLifeInSeconds",
  description:
    "Meet Jacques M. Jean — Global Technologist, Humanitarian Innovator, and Multi-Venture Founder. Built to help you see what your life is actually worth.",
  openGraph: {
    title: "Jacques M. Jean — Founder | YourLifeInSeconds",
    description:
      "Meet the founder behind YourLifeInSeconds.com. Solving overlooked problems with simple, powerful solutions.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jacques M. Jean",
            jobTitle: "Global Technologist, Humanitarian Innovator, Multi-Venture Founder",
            description:
              "Founder of YourLifeInSeconds.com. Solving overlooked problems with simple, powerful solutions.",
            url: "https://yourlifeinseconds.com/about",
            image: "https://yourlifeinseconds.com/images/founder.jpg",
            sameAs: [
              "https://linkedin.com/in/jacquesmjean",
              "https://twitter.com/jacquesmjean",
              "https://instagram.com/jacquesmjean",
            ],
            affiliation: {
              "@type": "Organization",
              name: "YourLifeInSeconds.com",
            },
          }),
        }}
      />

      <main className="bg-brand-bg">
        {/* ════════ Hero ════════ */}
        <section className="pt-28 pb-16 px-6 text-center">
          <div className="max-w-[800px] mx-auto">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
              FOUNDER
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-text-primary">Jacques M. </span>
              <span className="text-gradient">Jean</span>
            </h1>
            <p className="text-accent text-lg sm:text-xl mb-8">
              Built to help you see what your life is actually worth &mdash; in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#life-clock"
                className="px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold rounded-lg hover:shadow-glow transition-shadow"
              >
                Analyze My Time
              </Link>
              <a
                href="https://buy.stripe.com/7sY6oHf7Nftzf4xeOr0oM01"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-accent/10 border border-accent text-accent font-bold rounded-lg hover:bg-accent/20 transition-colors"
              >
                Get My Life Score &mdash; $9
              </a>
            </div>
          </div>
        </section>

        {/* ════════ Photo + Bio ════════ */}
        <section className="py-20 bg-brand-bg-secondary">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="w-full max-w-[380px] aspect-[3/4] rounded-2xl bg-gradient-to-br from-brand-card to-brand-elevated border border-subtle overflow-hidden">
                  <img src="/founder.png" alt="Jacques M. Jean - Founder of YourLifeInSeconds.com" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Bio */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                  <span className="text-text-primary">Jacques M. </span>
                  <span className="text-accent">Jean</span>
                </h2>
                <p className="text-text-secondary text-lg mb-6">
                  Global Technologist, Humanitarian Innovator, Multi-Venture Founder
                </p>

                {/* Accent bar */}
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-blue rounded-full mb-8" />

                <blockquote className="mb-8">
                  <p className="text-xl sm:text-2xl italic text-text-primary leading-relaxed">
                    &ldquo;Solving overlooked problems with simple, powerful solutions.&rdquo;
                  </p>
                </blockquote>

                {/* Social icons */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com/in/jacquesmjean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-card border border-subtle hover:border-accent-dim hover:text-accent text-text-muted transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/jacquesmjean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-card border border-subtle hover:border-accent-dim hover:text-accent text-text-muted transition-all"
                    aria-label="X / Twitter"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/jacquesmjean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-card border border-subtle hover:border-accent-dim hover:text-accent text-text-muted transition-all"
                    aria-label="Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a
                    href="https://yourlifeinseconds.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-card border border-subtle hover:border-accent-dim hover:text-accent text-text-muted transition-all"
                    aria-label="Website"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ Mid-Page CTA ════════ */}
        <section className="py-16 px-6">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center p-10 sm:p-14 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] border border-subtle rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Reading about life is one thing. Seeing your own is another.
              </h2>
              <p className="text-text-secondary mb-8">
                Calculate your life in seconds and see what most people never do.
              </p>
              <Link
                href="/#life-clock"
                className="px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold rounded-lg hover:shadow-glow transition-shadow inline-block"
              >
                Calculate My Life Now
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ The Journey ════════ */}
        <section className="py-20 bg-brand-bg-secondary">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Story Column */}
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  <span className="text-text-primary">The Journey Behind</span>
                  <br />
                  <span className="text-accent">The Vision</span>
                </h2>

                <p className="text-lg text-text-secondary leading-relaxed">
                  Jacques M. Jean isn&apos;t just a technologist; he is a rebuilder. Born from an immigrant
                  background and shaped by the relentless pursuit of opportunity, his life has been a
                  testament to resilience.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed">
                  But success wasn&apos;t a straight line. Jacques faced the crushing weight of loss,
                  the heartbreak of divorce, and the total reset of financial collapse. In those dark
                  moments, he realized that traditional financial advice often ignores the human heart.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed">
                  He had to rebuild his life from the ground up &mdash; emotionally, financially, and
                  spiritually. And in that process, he discovered something powerful: most people never
                  see where their time actually goes. They drift through decades without measuring what
                  matters most.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed">
                  That insight became YourLifeInSeconds.com &mdash; a platform built not from theory,
                  but from lived experience. Every calculator, every insight, every article was born
                  from the hard-won wisdom of someone who lost everything and built it back better.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed">
                  Today, Jacques leads a mission to ensure no one has to navigate that journey alone
                  without a map. Through data-driven tools and unflinching honesty about how we spend
                  our time, he&apos;s helping millions of people around the world see their lives
                  clearly &mdash; and design them intentionally.
                </p>
              </div>

              {/* Quote Column */}
              <div className="lg:col-span-2 flex items-start lg:items-center">
                <div className="bg-brand-card border border-subtle rounded-2xl p-8 w-full">
                  {/* Large quote mark */}
                  <div className="text-6xl text-accent/30 font-serif leading-none mb-4">
                    &ldquo;
                  </div>
                  <p className="text-xl italic text-text-primary leading-relaxed mb-6">
                    &ldquo;I built this because I lived it. I know what it feels like to lose
                    everything, and I know what it takes to build it back better. My mission is
                    to ensure no one has to navigate that journey alone without a map.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">JJ</span>
                    </div>
                    <div>
                      <p className="font-bold text-text-primary text-sm">Jacques M. Jean</p>
                      <p className="text-text-muted text-xs">Founder, YourLifeInSeconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ What Drives Us ════════ */}
        <section className="py-20 px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                What Drives Every Tool We Build
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Four principles rooted in lived experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-brand-card rounded-xl p-8 border border-subtle hover:border-accent-dim transition-all">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Truth Over Comfort</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We show you what&apos;s real, even when it&apos;s uncomfortable. Growth starts with honesty.
                </p>
              </div>

              <div className="bg-brand-card rounded-xl p-8 border border-subtle hover:border-accent-dim transition-all">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Clarity Over Complexity</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Simple tools that reveal truth. Understanding over information overload.
                </p>
              </div>

              <div className="bg-brand-card rounded-xl p-8 border border-subtle hover:border-accent-dim transition-all">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Purpose Over Profit</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Built to serve humanity&apos;s deepest need: understanding who we are and why we&apos;re here.
                </p>
              </div>

              <div className="bg-brand-card rounded-xl p-8 border border-subtle hover:border-accent-dim transition-all">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Data Over Opinion</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Your life is too important to be guided by guesses. We use facts, figures, and calculations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ Impact Stats ════════ */}
        <section className="py-20 bg-brand-bg-secondary px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent font-mono mb-2">2.4M+</div>
                <p className="text-text-secondary">Lives Calculated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent font-mono mb-2">180+</div>
                <p className="text-text-secondary">Countries Reached</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent font-mono mb-2">12+</div>
                <p className="text-text-secondary">Tools Built</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent font-mono mb-2">4.9/5</div>
                <p className="text-text-secondary">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ Final CTA ════════ */}
        <section className="py-20 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Your Time is the Only Thing You Can&apos;t Get Back.
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto">
              Jacques built this platform so you never have to wonder where your life went.
              See it. Measure it. Design it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#life-clock"
                className="px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow"
              >
                Calculate My Life
              </Link>
              <Link
                href="/insights"
                className="px-10 py-4 border border-subtle text-text-secondary font-bold text-lg rounded-lg hover:border-accent-dim hover:text-text-primary transition-all"
              >
                Read the Insights
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
