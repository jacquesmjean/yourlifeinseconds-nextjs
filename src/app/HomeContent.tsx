'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import LifeClockWizard from '@/components/LifeClockWizard';
import TaxReality from '@/components/TaxReality';
import EmailCapture from '@/components/EmailCapture';

export default function HomeContent() {
  const [secondsCalculatedToday, setSecondsCalculatedToday] = useState(0);
  const [averagePersonSeconds, setAveragePersonSeconds] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const startingSeconds = 1243680;
    setSecondsCalculatedToday(startingSeconds);
    setAveragePersonSeconds(1576800000);

    const todayInterval = setInterval(() => {
      setSecondsCalculatedToday((prev) => prev + Math.floor(Math.random() * 50000) + 10000);
    }, 2000);

    const personInterval = setInterval(() => {
      setAveragePersonSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(todayInterval);
      clearInterval(personInterval);
    };
  }, []);

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'YourLifeInSeconds Life Clock',
        description: 'Calculate your life in seconds and discover the true scarcity of time',
        applicationCategory: 'ProductivityApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
      {
        '@type': 'HowTo',
        name: 'How to Calculate Your Life in Seconds',
        step: [
          { '@type': 'HowToStep', position: '1', name: 'Enter Birthday', text: 'Input your birth date into the Life Clock calculator' },
          { '@type': 'HowToStep', position: '2', name: 'Choose Region', text: 'Select your region to account for life expectancy factors' },
          { '@type': 'HowToStep', position: '3', name: 'Unlock Your Clarity', text: 'Receive your personalized Time Scarcity Score and insights' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How many seconds are in a lifetime?', acceptedAnswer: { '@type': 'Answer', text: 'An average 80-year lifespan contains approximately 2,522,880,000 seconds.' } },
          { '@type': 'Question', name: 'How many seconds are in a year?', acceptedAnswer: { '@type': 'Answer', text: 'There are 31,536,000 seconds in a standard year (365 days).' } },
          { '@type': 'Question', name: 'What is a Time Scarcity Score?', acceptedAnswer: { '@type': 'Answer', text: 'Your Time Scarcity Score is a personalized metric that shows how many seconds you have remaining.' } },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <style jsx>{`
        @keyframes clock-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes clock-rotate-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-clock-rotate { animation: clock-rotate 20s linear infinite; }
        .animate-clock-rotate-reverse { animation: clock-rotate-reverse 25s linear infinite; }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen bg-gradient-to-b from-brand-bg via-brand-bg to-brand-bg-secondary flex items-center relative overflow-hidden pt-[72px]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xs sm:text-sm font-mono font-semibold tracking-widest uppercase text-accent">
                THE #1 LIFE PRODUCTIVITY TOOL
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Every Second <span className="text-gradient">Counts</span>. Do You Know Your<span className="text-gradient">s</span>?
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary max-w-lg">
                Discover the <strong className="text-text-primary">true scarcity</strong> of your time. Free, private, and grounded in real WHO life-expectancy data.
              </p>

              <div className="bg-brand-card border border-subtle rounded-lg p-6 inline-block">
                <p className="text-text-muted text-sm font-mono mb-2">Seconds Calculated Today</p>
                <p className="text-4xl font-bold font-mono text-accent">
                  {isClient ? (secondsCalculatedToday / 1000000).toFixed(1) : '0.0'}M
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#life-clock" className="px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-semibold rounded-lg hover:shadow-glow transition-shadow text-center">
                  Calculate My Life
                </Link>
                <Link href="#how-it-works" className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors text-center">
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Animated Clock */}
            <div className="hidden lg:flex justify-center items-center relative h-[500px]">
              <div className="absolute w-96 h-96 rounded-full border-2 border-accent/20 animate-clock-rotate" />
              <div className="absolute w-72 h-72 rounded-full border-2 border-accent/10 animate-clock-rotate-reverse" />
              <div className="relative w-48 h-48 bg-brand-card border-2 border-accent rounded-full flex flex-col items-center justify-center shadow-glow z-10">
                <p className="text-text-muted text-xs font-mono mb-2">Age 30 Remaining</p>
                <p className="text-3xl font-bold font-mono text-accent">{isClient ? (averagePersonSeconds / 1000000000).toFixed(1) : '1.5'}B</p>
                <p className="text-text-muted text-xs font-mono mt-2">seconds</p>
              </div>
              {[...Array(12)].map((_, i) => (
                <div key={i} className="absolute w-2 h-2 bg-accent rounded-full" style={{ top: '50%', left: '50%', transform: `rotate(${i * 30}deg) translateY(-192px)` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">HOW IT WORKS</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Three Steps to <span className="text-gradient">Clarity</span></h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">Unlock a perspective on life that numbers alone can reveal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', icon: '🎂', title: 'Enter Your Birthday', desc: 'Select your date of birth. That\'s the only data we need to start your calculation.' },
              { num: '02', icon: '🌍', title: 'Choose Your Region', desc: 'We use WHO life expectancy data specific to your country for accurate projections.' },
              { num: '03', icon: '✨', title: 'Unlock Your Clarity', desc: 'See your life visualized in seconds, with your Time Scarcity Score and financial value.' },
            ].map((step) => (
              <div key={step.num} className="bg-brand-card border border-subtle rounded-xl p-8 hover:border-accent-dim hover:-translate-y-1 transition-all relative">
                <span className="absolute top-4 right-6 text-5xl font-bold font-mono text-accent/10">{step.num}</span>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-2xl mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">FREE TOOLS</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Calculators for <span className="text-gradient">Real Clarity</span></h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">Two tools. Zero fluff. Just the numbers that actually matter.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-brand-card border border-accent-dim rounded-xl p-8 relative">
              <span className="inline-block bg-gradient-to-r from-accent to-accent-blue text-brand-bg text-xs font-bold px-3 py-1 rounded-full mb-6">MOST POPULAR</span>
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-3">Global Life Clock</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">Calculate your life in seconds. See how many you&apos;ve used, how many remain, and your real-time Time Scarcity Score.</p>
              <div className="space-y-3 mb-8">
                {['Real-time second counter', 'WHO life expectancy data', 'Time Scarcity Score', 'Shareable results card'].map((f) => (
                  <div key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /><span className="text-text-secondary text-sm">{f}</span></div>
                ))}
              </div>
              <Link href="#life-clock" className="block w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-semibold rounded-lg hover:shadow-glow transition-shadow text-center">Start Life Clock</Link>
            </div>
            <div className="bg-brand-card border border-subtle rounded-xl p-8 hover:border-accent-dim transition-colors">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">$1M Tax Reality</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">Earning $1 million sounds great — until you see what&apos;s left. Discover the hidden costs that silently erode your wealth.</p>
              <div className="space-y-3 mb-8">
                {['State + federal tax modeling', 'Hidden cost breakdown', 'Real purchasing power', 'Time-to-earn calculations'].map((f) => (
                  <div key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /><span className="text-text-secondary text-sm">{f}</span></div>
                ))}
              </div>
              <Link href="#tax-reality" className="block w-full px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors text-center">Calculate Tax Reality</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <LifeClockWizard />
      <TaxReality />

      {/* Insights Preview */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">INSIGHTS HUB</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Popular <span className="text-gradient">Time Questions</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '31,536,000', label: 'Seconds in a Year' },
              { num: '~2.5B', label: 'Avg. Lifetime Seconds' },
              { num: '86,400', label: 'Seconds in a Day' },
              { num: '26 yrs', label: 'Spent Sleeping' },
            ].map((item) => (
              <Link href="/insights" key={item.label}>
                <div className="bg-brand-card border border-subtle rounded-xl p-8 hover:border-accent-dim hover:-translate-y-1 hover:shadow-glow transition-all">
                  <p className="text-4xl font-bold text-accent font-mono mb-4">{item.num}</p>
                  <h3 className="font-bold text-text-primary">{item.label}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/insights" className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors inline-block">Explore All Insights</Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: 'Free', label: 'No Paywall' },
              { val: 'Private', label: 'No Account Needed' },
              { val: 'WHO', label: 'Life-Expectancy Source' },
              { val: '14', label: 'Insight Essays' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold font-mono text-gradient mb-2">{s.val}</p>
                <p className="text-text-muted text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <EmailCapture variant="banner" />
        </div>
      </section>

      {/* Viral Share / Testimonials */}
      <section className="py-20 bg-brand-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">WHAT PEOPLE SAY</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">This Changes How You See <span className="text-gradient">Everything</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I calculated my life at 35. I have 1.4 billion seconds left. Seeing that number changed how I spend every single day.",
                name: "Sarah K.",
                role: "Product Manager",
                metric: "1.4B seconds left",
              },
              {
                quote: "The $1M Tax Reality tool showed me I only keep $585K. I restructured my entire financial plan the next morning.",
                name: "David R.",
                role: "Software Engineer",
                metric: "$585K after taxes",
              },
              {
                quote: "I shared my Life Score with my team. Within a week, 40 people had calculated theirs. This tool spreads itself.",
                name: "Maria L.",
                role: "Startup Founder",
                metric: "40 team shares",
              },
            ].map((t) => (
              <div key={t.name} className="bg-brand-card border border-subtle rounded-xl p-8 hover:border-accent-dim transition-all flex flex-col">
                <div className="text-accent/30 text-4xl font-serif mb-4">&ldquo;</div>
                <p className="text-text-primary text-base leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div className="flex items-center justify-between pt-4 border-t border-subtle">
                  <div>
                    <p className="text-text-primary font-semibold text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.role}</p>
                  </div>
                  <span className="text-accent font-mono text-xs font-bold bg-accent/10 px-2 py-1 rounded">{t.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deep Dives — Viral Content Loop */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">DEEP DIVES</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Articles People Can&apos;t Stop <span className="text-gradient">Sharing</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Where Your Life Actually Goes", desc: "The shocking daily time breakdown most people never see.", slug: "/where-your-life-actually-goes", tag: "TIME & REALITY" },
              { title: "What Money Actually Is", desc: "Money isn't currency. It's stored time. This changes everything.", slug: "/what-money-is", tag: "MONEY & TIME" },
              { title: "The 1-Hour Shift That Changes Your Life", desc: "Move 60 minutes a day from reaction to intention. See the math.", slug: "/one-hour-shift", tag: "STRATEGY" },
            ].map((a) => (
              <Link key={a.slug} href={a.slug} className="group bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim hover:-translate-y-1 transition-all flex flex-col">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mb-4">{a.tag}</span>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">{a.title}</h3>
                <p className="text-text-secondary text-sm flex-1 mb-4">{a.desc}</p>
                <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/insights" className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors inline-block">Explore All 14 Deep Dives →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center p-16 bg-gradient-to-br from-accent/8 to-accent-blue/5 border border-accent-dim rounded-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Time Is <span className="text-gradient">Running Out.</span></h2>
            <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">Every second you spend reading this is a second you&apos;ll never get back. Make the rest count.</p>
            <Link href="#life-clock" className="px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow inline-block">
              Start My Life Clock Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
