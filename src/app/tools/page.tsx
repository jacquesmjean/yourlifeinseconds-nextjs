import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Life Design Tools — Calculators That Measure Time',
  description: 'Tools that convert money, debt, education, and regret into the only unit that actually matters — seconds of your life.',
};

type ToolStatus = 'live' | 'soon';

interface Tool {
  name: string;
  desc: string;
  icon: string;
  link: string;
  cta: string;
  featured?: boolean;
  status: ToolStatus;
}

// Curated lineup. Every tool converts a life decision into seconds.
// Off-brand generic utilities (currency converter, relocation, etc.) were retired.
const tools: Tool[] = [
  // Live
  { name: "$1M Tax Reality", desc: "See what you actually keep from $1 million after taxes — the hours of life you trade for the net.", icon: "💲", link: "/#tax-reality", cta: "Run the Reality Check", featured: true, status: 'live' },

  // Reframed time-money tools
  { name: "Hours of Your Life Budget", desc: "Every expense converted into hours of working life sold.", icon: "⏳", link: "/tools/hours-of-life", cta: "Run the Budget", status: 'live' },
  { name: "Seconds Sold to Debt", desc: "The seconds of your life you owe to every dollar of debt — at your hourly rate, with interest.", icon: "⛓️", link: "/tools/seconds-sold-to-debt", cta: "Calculate the Cost", status: 'live' },
  { name: "Seconds to Freedom", desc: "How many seconds until you stop selling them — your financial-independence countdown.", icon: "🗝️", link: "/tools/seconds-to-freedom", cta: "Start the Countdown", status: 'live' },
  { name: "Degree in Seconds", desc: "Years of life, seconds of interest, lifetime return — the honest cost of a degree.", icon: "🎓", link: "/tools/degree-in-seconds", cta: "Run the Math", status: 'live' },

  // New time-clarity tools
  { name: "Regret Minimizer", desc: "Your top 3 values vs. how your seconds actually get spent. The gap is the regret.", icon: "💭", link: "/tools/regret-minimizer", cta: "Coming Soon", status: 'soon' },
  { name: "Cost of Wait", desc: "The waiting tax. A live counter of every second you delay starting what matters.", icon: "⏰", link: "/tools/cost-of-wait", cta: "Coming Soon", status: 'soon' },
  { name: "Seconds That Outlive You", desc: "Legacy ROI — the 20-year ripple of every hour you spend mentoring, building, creating.", icon: "🌱", link: "/tools/seconds-that-outlive-you", cta: "Coming Soon", status: 'soon' },
  { name: "Time Capsule", desc: "Send a message to your future self at an exact second in time — 10, 20, 30 years from now.", icon: "📮", link: "/tools/time-capsule", cta: "Coming Soon", status: 'soon' },
  { name: "Purchasing Power of a Second", desc: "What one second of your work bought in 1970, what it buys now, and what it will buy in 2070.", icon: "📉", link: "/tools/purchasing-power", cta: "Coming Soon", status: 'soon' },
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
      <section id="tools-grid" className="py-16 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => {
              const isSoon = tool.status === 'soon';
              return (
                <div
                  key={tool.name}
                  className={`bg-brand-card border rounded-xl p-6 transition-all relative group ${
                    tool.featured ? 'border-accent-dim sm:col-span-2' : 'border-subtle'
                  } ${isSoon ? 'opacity-75' : 'hover:border-accent-dim hover:-translate-y-1'}`}
                >
                  {tool.featured && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/20">
                      ⭐ Featured
                    </span>
                  )}
                  {isSoon && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-text-muted/10 text-text-muted text-[10px] font-semibold px-2 py-0.5 rounded-full border border-text-muted/20 uppercase tracking-wider">
                      Coming Soon
                    </span>
                  )}
                  <div className="text-3xl mb-4">{tool.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-text-primary">{tool.name}</h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">{tool.desc}</p>
                  {isSoon ? (
                    <span className="inline-flex items-center gap-1 text-text-muted text-sm font-semibold">
                      {tool.cta}
                    </span>
                  ) : (
                    <Link
                      href={tool.link}
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
              { icon: '📈', title: 'I want to optimize my future', desc: 'Model your debt-free date, financial-independence seconds, and legacy ROI.', cta: 'Explore the Tools', link: '#tools-grid', primary: false },
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

      {/* Pricing Section */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Turn Insight Into <span className="text-gradient">Action</span></h2>
            <p className="text-text-secondary text-lg">Get comprehensive reports that go deeper than the tools.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Single Report — $9 */}
            <div className="bg-brand-card border border-subtle rounded-xl p-8 text-center flex flex-col">
              <h3 className="text-xl font-bold mb-2">Single Life Insight</h3>
              <div className="text-5xl font-bold my-4">$9</div>
              <p className="text-text-secondary mb-6 flex-1">See where your time actually goes and what your future looks like if nothing changes.</p>
              <ul className="text-left space-y-2 mb-8 text-sm text-text-secondary">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Personalized Life Report</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Time Scarcity Score</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Life allocation breakdown</li>
              </ul>
              <a
                href="https://buy.stripe.com/7sY6oHf7Nftzf4xeOr0oM01"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all"
              >
                Get Report — $9
              </a>
            </div>

            {/* Bundle — $19 */}
            <div className="bg-brand-card border border-accent-dim rounded-xl overflow-hidden text-center flex flex-col relative">
              <div className="bg-gradient-to-r from-accent to-accent-blue py-2 text-brand-bg text-sm font-bold tracking-wider">
                MOST POPULAR
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">Life Insights Bundle</h3>
                <div className="text-5xl font-bold text-accent my-4">$19</div>
                <p className="text-text-secondary mb-6 flex-1">Life Report + Strategy Report + Design System at a bundled discount.</p>
                <ul className="text-left space-y-2 mb-8 text-sm text-text-secondary">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Everything in Single</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Strategy Report</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Life Design System</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Save 30% vs. individual</li>
                </ul>
                <a
                  href="https://buy.stripe.com/bJeeVd8Jp5SZe0teOr0oM02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-semibold rounded-lg hover:shadow-glow transition-all"
                >
                  Get Bundle — $19
                </a>
              </div>
            </div>

            {/* Full System — $49 */}
            <div className="bg-brand-card border border-subtle rounded-xl p-8 text-center flex flex-col">
              <h3 className="text-xl font-bold mb-2">Full Life System</h3>
              <div className="text-5xl font-bold my-4">$49</div>
              <p className="text-text-secondary mb-6 flex-1">The complete platform for total life clarity, strategy, and long-term transformation.</p>
              <ul className="text-left space-y-2 mb-8 text-sm text-text-secondary">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Everything in Bundle</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Priority support</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Lifetime updates</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Advanced financial tools</li>
              </ul>
              <a
                href="https://buy.stripe.com/fZu5kD7Fl4OV1dH7lZ0oM04"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all"
              >
                Get Full System — $49
              </a>
            </div>
          </div>
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
