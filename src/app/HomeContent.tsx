'use client';

import Link from 'next/link';
import LifeClockWizard from '@/components/LifeClockWizard';
import TaxReality from '@/components/TaxReality';
import EmailCapture from '@/components/EmailCapture';

export default function HomeContent() {
  return (
    <>
      <style jsx>{`
        @keyframes clock-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes clock-rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-clock-rotate { animation: clock-rotate 60s linear infinite; }
        .animate-clock-rotate-reverse { animation: clock-rotate-reverse 90s linear infinite; }
      `}</style>

      {/* ═══════════ Hero ═══════════ */}
      <section
        id="hero"
        className="bg-gradient-to-b from-brand-bg via-brand-bg to-brand-bg-secondary flex items-center relative overflow-hidden pt-32 sm:pt-36 pb-20"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xs sm:text-sm font-mono font-semibold tracking-widest uppercase text-accent">
                SEE YOUR LIFE IN SECONDS
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                You have a limited number of <span className="text-gradient">seconds</span>.
                <br />
                Let&apos;s count them together.
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary max-w-lg">
                A perspective platform for time and life. Count your seconds. See where they
                go. Meet others counting theirs differently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#life-clock"
                  className="press-active px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-semibold rounded-lg hover:shadow-glow transition-shadow text-center"
                >
                  Enter My Birthdate →
                </Link>
                <Link
                  href="/tools"
                  className="press-active px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors text-center"
                >
                  See the Tools
                </Link>
              </div>

              <p className="text-text-muted text-xs font-mono">
                Your data never leaves your browser.
              </p>
            </div>

            {/* Decorative Clock */}
            <div className="hidden lg:flex justify-center items-center relative h-[500px]">
              <div className="absolute w-96 h-96 rounded-full border-2 border-accent/20 animate-clock-rotate" />
              <div className="absolute w-72 h-72 rounded-full border-2 border-accent/10 animate-clock-rotate-reverse" />
              <div className="relative w-48 h-48 bg-brand-card border-2 border-accent rounded-full flex flex-col items-center justify-center shadow-glow z-10">
                <p className="text-text-muted text-xs font-mono mb-2">seconds in</p>
                <p className="text-3xl font-bold font-mono text-accent">80 yrs</p>
                <p className="text-text-muted text-xs font-mono mt-2">2.52B</p>
              </div>
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 30}deg) translateY(-192px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ How It Works ═══════════ */}
      <section id="how-it-works" className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Three questions. <span className="text-gradient">One mirror.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The Life Clock isn&apos;t a productivity widget. It&apos;s a mirror for the life
              you&apos;re already living.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Enter your birthdate',
                desc: "That's the only data we need.",
              },
              {
                num: '02',
                title: 'Choose your region',
                desc: 'Life expectancy shifts the math.',
              },
              {
                num: '03',
                title: 'See what you have',
                desc: 'Then decide what to do with it.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="backdrop-blur-md bg-brand-card/80 border border-subtle rounded-xl p-8 hover:border-accent-dim hover:-translate-y-1 transition-all relative"
              >
                <span className="absolute top-4 right-6 text-5xl font-bold font-mono text-accent/10">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Tools Preview ═══════════ */}
      <section id="tools" className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
              THE TOOLS
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ten mirrors. <span className="text-gradient">Each shows you something different.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Every tool here reframes something most people never see clearly. Start anywhere.
              Come back often.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Life Clock', desc: 'Your life in seconds — and what remains.', href: '#life-clock' },
              { title: 'Hours of Life', desc: 'What an hour of your time is actually worth.', href: '/tools/hours-of-life' },
              { title: 'Legacy ROI', desc: 'What lasts after the seconds are spent.', href: '/tools/legacy-roi' },
              { title: 'Regret Minimizer', desc: 'Decisions viewed from the end of your life.', href: '/tools/regret-minimizer' },
            ].map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 transition-all flex flex-col"
              >
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {t.title}
                </h3>
                <p className="text-text-secondary text-sm flex-1 mb-4">{t.desc}</p>
                <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Open →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/tools"
              className="press-active px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors inline-block"
            >
              See all ten tools →
            </Link>
          </div>
        </div>
      </section>

      {/* Life Clock + Tax Reality calculators */}
      <LifeClockWizard />
      <TaxReality />

      {/* ═══════════ The Circle ═══════════ */}
      <section id="circle" className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
              THE CIRCLE
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Find others who are <span className="text-gradient">counting differently.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Once you see your seconds, the next question is who you&apos;re spending them with.
              The Circle is where people ask those questions together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-brand-card border border-accent-dim rounded-xl p-8 relative">
              <span className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                COMING SOON
              </span>
              <h3 className="text-2xl font-bold mb-3">Perspective Partners</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Matched with someone whose life looks nothing like yours. Write to them. Listen
                to them. Count differently.
              </p>
              <Link
                href="/membership"
                className="press-active block w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-semibold rounded-lg hover:shadow-glow transition-shadow text-center"
              >
                Join the waitlist →
              </Link>
            </div>
            <div className="bg-brand-card border border-subtle rounded-xl p-8 hover:border-accent-dim transition-colors relative">
              <span className="absolute top-6 right-6 text-[10px] font-mono font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                MEMBERS
              </span>
              <h3 className="text-2xl font-bold mb-3">Fireside Sessions</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Eight people. One real question. Ninety minutes, live.{' '}
                <em>&ldquo;What is enough?&rdquo; &ldquo;The second career.&rdquo; &ldquo;The meeting you haven&apos;t had yet.&rdquo;</em>
              </p>
              <Link
                href="/circle/firesides"
                className="press-active block w-full px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors text-center"
              >
                See the next session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ The Perspective Library Preview ═══════════ */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
              THE PERSPECTIVE LIBRARY
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Questions worth <span className="text-gradient">sitting with.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Essays, reflections, and deep dives on time, meaning, and how we actually spend
              the seconds we have.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '31,536,000', label: 'Seconds in a Year' },
              { num: '~2.5B', label: 'Avg. Lifetime Seconds' },
              { num: '86,400', label: 'Seconds in a Day' },
              { num: '26 yrs', label: 'Spent Sleeping' },
            ].map((item) => (
              <Link href="/insights" key={item.label}>
                <div className="backdrop-blur-md bg-brand-card/80 border border-subtle rounded-xl p-8 hover:border-accent-dim hover:-translate-y-1 hover:shadow-glow transition-all">
                  <p className="text-4xl font-bold text-accent font-mono mb-4">{item.num}</p>
                  <h3 className="font-bold text-text-primary">{item.label}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/insights"
              className="press-active px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors inline-block"
            >
              Open the Library →
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <EmailCapture variant="banner" />
        </div>
      </section>

      {/* From the Library — Featured Articles */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
              FROM THE LIBRARY
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Articles worth <span className="text-gradient">your time.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Where Your Life Actually Goes',
                desc: 'The daily time breakdown most people never see.',
                slug: '/where-your-life-actually-goes',
                tag: 'TIME & REALITY',
              },
              {
                title: 'What Money Actually Is',
                desc: "Money isn't currency. It's stored time. This changes everything.",
                slug: '/what-money-is',
                tag: 'MONEY & TIME',
              },
              {
                title: 'The 1-Hour Shift That Changes Your Life',
                desc: 'Move 60 minutes a day from reaction to intention. See the math.',
                slug: '/one-hour-shift',
                tag: 'STRATEGY',
              },
            ].map((a) => (
              <Link
                key={a.slug}
                href={a.slug}
                className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 transition-all flex flex-col"
              >
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mb-4">
                  {a.tag}
                </span>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {a.title}
                </h3>
                <p className="text-text-secondary text-sm flex-1 mb-4">{a.desc}</p>
                <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/insights"
              className="press-active px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors inline-block"
            >
              Open the full Library →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ The Letter ═══════════ */}
      <section className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
              THE LETTER
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Say something to the version of you who&apos;ll read this in{' '}
              <span className="text-gradient">20 years.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              The Legacy Letter is a voice memo to your future self. Three questions. Your own
              words. Kept forever.
            </p>
            <Link
              href="/tools/legacy-letter"
              className="press-active inline-block px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-semibold rounded-lg hover:shadow-glow transition-shadow"
            >
              Start Your Letter →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ Final CTA ═══════════ */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center p-16 bg-gradient-to-br from-accent/8 to-accent-blue/5 border border-accent-dim rounded-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              You won&apos;t remember most of the days <span className="text-gradient">you have left.</span>
              <br />
              Make the ones you do count differently.
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
              Every second you spend here is a second aimed at the rest.
            </p>
            <Link
              href="#life-clock"
              className="press-active px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow inline-block"
            >
              Enter My Birthdate →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

