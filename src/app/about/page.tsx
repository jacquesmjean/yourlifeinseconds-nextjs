import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | YourLifeInSeconds",
  description:
    "I grew up in Haiti and walked into a library for the first time at 18. YourLifeInSeconds is what came out of the counting I've done since.",
  openGraph: {
    title: "About | YourLifeInSeconds",
    description:
      "I grew up in Haiti and walked into a library for the first time at 18. YourLifeInSeconds is what came out of the counting I've done since.",
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
            jobTitle: "Founder, YourLifeInSeconds",
            description:
              "Founder of YourLifeInSeconds.com, a perspective platform for time and life.",
            url: "https://yourlifeinseconds.com/about",
            image: "https://yourlifeinseconds.com/founder.png",
            sameAs: [
              "https://linkedin.com/in/jacquesmjean",
              "https://x.com/jacquesmjean",
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
        {/* ═══════════ Hero ═══════════ */}
        <section className="pt-28 pb-16 px-6 text-center">
          <div className="max-w-[800px] mx-auto">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
              FOUNDER
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-text-primary">Jacques M. </span>
              <span className="text-gradient">Jean</span>
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              I grew up in Haiti. I walked into a library for the first time at 18. It
              changed what I thought my life could be.
            </p>
          </div>
        </section>

        {/* ═══════════ Photo + The Journey ═══════════ */}
        <section className="py-20 bg-brand-bg-secondary">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Photo + Social */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[380px] aspect-[3/4] rounded-2xl bg-gradient-to-br from-brand-card to-brand-elevated border border-subtle overflow-hidden">
                  <Image
                    src="/founder.png"
                    alt="Jacques M. Jean - Founder of YourLifeInSeconds.com"
                    width={380}
                    height={507}
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-3 mt-6">
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
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* The Journey */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  <span className="text-text-primary">The Journey Behind</span>
                  <br />
                  <span className="text-accent">The Platform</span>
                </h2>

                <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-blue rounded-full" />

                <p className="text-lg text-text-secondary leading-relaxed">
                  I was born in Haiti. I walked into a library for the first time at 18,
                  in a country I didn&apos;t yet know. That afternoon I saw how much of my
                  life I had not yet spent — and how much of it I didn&apos;t know how to
                  spend yet.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed">
                  Since then I&apos;ve built technology for Honeywell, Invensys, and
                  Schneider Electric across 15 countries. I&apos;ve built three public
                  libraries in Haiti through Universal Learning Centre, a foundation I
                  started so more kids would walk through the door I walked through.
                  I&apos;ve built a company, raised a family, and watched time do what it
                  always does.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed">
                  At some point, I started counting. My own seconds. The ones behind me.
                  The ones still ahead.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed">
                  YourLifeInSeconds came out of that counting. It&apos;s the place I wish
                  existed when I was 18 — not to tell me what to do with my life, but to
                  let me see it clearly.
                </p>

                <p className="text-lg text-text-primary font-semibold leading-relaxed">
                  I&apos;m not here to sell you productivity. Productivity is easy.
                  Perspective is the hard thing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ Quote ═══════════ */}
        <section className="py-20 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-brand-card border border-subtle rounded-2xl p-10 sm:p-14">
              <div className="text-6xl text-accent/30 leading-none mb-6">&ldquo;</div>
              <p className="text-2xl sm:text-3xl italic text-text-primary leading-relaxed mb-8">
                Most of us spend our lives without ever really seeing them. We measure
                weeks in meetings. Years in milestones. We forget we have a budget.
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
        </section>

        {/* ═══════════ What Drives Every Tool ═══════════ */}
        <section className="py-20 px-6 bg-brand-bg-secondary">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                What drives every tool we build.
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Four principles. All of them rooted in lived experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "See, don't perform.",
                  desc: "Every tool is a mirror, not a scoreboard. We show. You decide.",
                },
                {
                  title: "Numbers carry meaning.",
                  desc: "Data without framing is noise. YLIS always gives you the framing.",
                },
                {
                  title: "Slow beats fast.",
                  desc: "Perspective needs breath. We don't optimize for bounce-and-return.",
                },
                {
                  title: "Nobody counts alone.",
                  desc: "The Circle exists because seeing your seconds is the start. Sharing them is the point.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-brand-card rounded-xl p-8 border border-subtle hover:border-accent-dim transition-all"
                >
                  <h3 className="text-lg font-bold text-text-primary mb-3">{p.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ Impact Stats ═══════════ */}
        <section className="py-20 bg-brand-bg-secondary px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent font-mono mb-2">
                  2.4M+
                </div>
                <p className="text-text-secondary">Lives Counted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent font-mono mb-2">
                  180+
                </div>
                <p className="text-text-secondary">Countries Reached</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent font-mono mb-2">
                  10
                </div>
                <p className="text-text-secondary">Tools Built</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent font-mono mb-2">
                  3
                </div>
                <p className="text-text-secondary">Libraries in Haiti</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ Final CTA ═══════════ */}
        <section className="py-20 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 leading-tight">
              Reading about life is one thing.{" "}
              <span className="text-gradient">Seeing your own is another.</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto">
              Enter your birthdate. See what&apos;s actually there.
            </p>
            <Link
              href="/#life-clock"
              className="press-active px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow inline-block"
            >
              Start Counting →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

