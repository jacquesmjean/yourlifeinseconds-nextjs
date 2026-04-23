import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Life Design Tools — Calculators & Planners',
  description: 'Free calculators and planners to align your life, balance outcomes, and design your future. Tax reality, retirement, debt, investment, and more.',
};

type Tool = {
  name: string;
  desc: string;
  icon: string;
  link?: string;
  cta?: string;
  featured?: boolean;
  comingSoon?: boolean;
};

const tools: Tool[] = [
  { name: "Global Life Clock", desc: "Calculate your life in seconds and see exactly how much time remains.", icon: "⏰", link: "/#life-clock", cta: "Start Life Clock", featured: true },
  { name: "$1M Tax Reality", desc: "See what you actually keep from $1 million after taxes.", icon: "💲", link: "/#tax-reality", cta: "Run the Reality Check", featured: true },
  { name: "Hours of Your Life Budget", desc: "Every expense converted into hours of working life sold.", icon: "⏳", link: "/tools/hours-of-life", cta: "Run the Budget" },
  { name: "Seconds Sold to Debt", desc: "The seconds of your life you owe to every dollar of debt — at your hourly rate, with interest.", icon: "⛓️", link: "/tools/seconds-sold-to-debt", cta: "Calculate the Cost" },
  { name: "Seconds to Freedom", desc: "How many seconds until you stop selling them — your financial-independence countdown.", icon: "🗝️", link: "/tools/seconds-to-freedom", cta: "Start the Countdown" },
  { name: "Degree in Seconds", desc: "Years of life, seconds of interest, lifetime return — the honest cost of a degree.", icon: "🎓", link: "/tools/degree-in-seconds", cta: "Run the Math" },
  { name: "The Waiting Tax", desc: "Every day you wait, you pay. Watch the live ticker of what procrastination has cost you so far.", icon: "🧾", link: "/tools/cost-of-wait", cta: "See My Tax" },
  { name: "Regret Minimizer", desc: "If your time ended in an hour, who have you not called? Name your values and see where your week actually goes.", icon: "⚖️", link: "/tools/regret-minimizer", cta: "Read My Drift" },
  { name: "Legacy ROI", desc: "Most people track financial ROI. Almost nobody tracks impact-per-hour. Score the ripple of your time.", icon: "🌳", link: "/tools/legacy-roi", cta: "Score My Legacy" },
  { name: "Standard of Living Time-Traveler", desc: "A dollar is not a dollar. Slide from 1950 to 2050 and see what your income actually buys across decades.", icon: "🕰️", link: "/tools/standard-of-living-time-traveler", cta: "Travel Through Time" },
];

export default function ToolsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-brand-bg text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">CALCULATORS & PLANNERS</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Life Design <span className="text-gradient">Tools</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Calculators and planners to align your life, balance outcomes, and design your future.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => {
              const base = `bg-brand-card border rounded-xl p-6 relative group ${
                tool.featured ? 'border-accent-dim sm:col-span-2' : 'border-subtle'
              }`;
              const hover = tool.comingSoon
                ? 'opacity-60'
                : 'hover:border-accent-dim hover:-translate-y-1 transition-all';

              return (
                <div key={tool.name} className={`${base} ${hover}`}>
                  {tool.featured && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/20">
                      Featured
                    </span>
                  )}
                  {tool.comingSoon && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-text-muted/10 text-text-muted text-[10px] font-mono font-semibold px-2 py-1 rounded-full border border-subtle tracking-wider uppercase">
                      Coming Soon
                    </span>
                  )}
                  <div className="text-3xl mb-4">{tool.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-text-primary">{tool.name}</h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">{tool.desc}</p>
                  {tool.comingSoon ? (
                    <span className="inline-flex items-center gap-1 text-text-muted text-sm font-medium cursor-not-allowed">
                      In development
                    </span>
                  ) : (
                    <Link
                      href={tool.link!}
                      className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:gap-2 transition-all"
                    >
                      {tool.cta}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Start Where You Are */}
      <section className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Where You Are</h2>
            <p className="text-text-secondary text-lg">Choose your entry point based on what matters most to you right now.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⏱', title: 'I want clarity on my life', desc: 'Understand your time, weeks remaining, and life allocation.', cta: 'Calculate My Life', link: '/#life-clock', primary: true },
              { icon: '💰', title: 'I want to understand my money', desc: 'See the real cost of your decisions and true tax impact.', cta: 'Run Simulation', link: '/#tax-reality', primary: false },
              { icon: '📈', title: 'I want to optimize my future', desc: 'Deep-dive articles on what actually moves the needle.', cta: 'Read Insights', link: '/insights', primary: false },
            ].map((entry) => (
              <div key={entry.title} className="bg-brand-card border border-subtle rounded-xl p-8 flex flex-col">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-2xl mb-6">{entry.icon}</div>
                <h3 className="text-xl font-bold mb-3">{entry.title}</h3>
                <p className="text-text-secondary mb-6 flex-1">{entry.desc}</p>
                <Link
                  href={entry.link}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    entry.primary
                      ? 'bg-gradient-to-r from-accent to-accent-blue text-brand-bg hover:shadow-glow'
                      : 'border-2 border-subtle text-text-primary hover:border-accent-dim'
                  }`}
                >
                  {entry.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
            THE CIRCLE
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Counting is the start. <span className="text-gradient">The Circle is the rest.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Membership unlocks unlimited tools, perspective partners matched with someone living differently than you, monthly Fireside sessions, and the full Perspective Library. From $5/month.
          </p>
          <Link
            href="/membership"
            className="press-active inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow"
          >
            Become a Member &rarr;
          </Link>
          <p className="text-text-muted text-xs mt-6">
            First 100 members get Curious at $3/month for life.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to see your life clearly?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">Start with the free Life Clock, then unlock deeper insights with your Personal Report.</p>
          <Link
            href="/#life-clock"
            className="px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow inline-block"
          >
            Calculate My Life
          </Link>
        </div>
      </section>
    </>
  );
}

