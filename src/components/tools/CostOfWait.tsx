'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type IconProps = { className?: string; size?: number };
const ArrowRight = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

type Preset = {
  id: string;
  label: string;
  dailyCost: number;
  note: string;
};

// Presets give users a realistic starting point so the counter does not look fake.
const PRESETS: Preset[] = [
  { id: 'business', label: 'Start my own business', dailyCost: 274, note: 'Median small-business owner earns ~$100K/yr (~$274/day)' },
  { id: 'invest', label: 'Start investing', dailyCost: 13.7, note: '$500/mo invested at 7% = $13.70/day you are missing' },
  { id: 'book', label: 'Write my book', dailyCost: 41, note: 'Self-published authors average ~$15K/yr (~$41/day)' },
  { id: 'course', label: 'Launch my course', dailyCost: 82, note: 'Typical course creator does ~$30K/yr (~$82/day)' },
  { id: 'raise', label: 'Ask for a raise', dailyCost: 27, note: 'Avg raise is ~$10K/yr (~$27/day of unclaimed pay)' },
  { id: 'custom', label: 'Something else', dailyCost: 50, note: 'Set your own number below' },
];

function formatUSD(n: number, digits = 0): string {
  if (!isFinite(n)) return '∞';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: digits });
}

function formatInt(n: number): string {
  if (!isFinite(n)) return '∞';
  return Math.round(n).toLocaleString();
}

export default function CostOfWait() {
  const [presetId, setPresetId] = useState<string>('business');
  const [customDaily, setCustomDaily] = useState('50');
  const [daysWaited, setDaysWaited] = useState('365');
  const [goalName, setGoalName] = useState('');

  const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[0];
  const effectiveDaily = presetId === 'custom' ? (parseFloat(customDaily) || 0) : preset.dailyCost;

  // Live ticker — redraw every 200ms so the counter feels alive.
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 200);
    return () => clearInterval(id);
  }, []);

  // Snapshot when the user changed an input — the live counter grows from there.
  const snapshot = useMemo(() => {
    const days = Math.max(0, parseFloat(daysWaited) || 0);
    const dailyCost = Math.max(0, effectiveDaily);
    const baseTax = days * dailyCost;
    const perSecond = dailyCost / 86400;
    const startedAt = Date.now();
    return { baseTax, perSecond, startedAt, days, dailyCost };
  }, [daysWaited, effectiveDaily]);

  const liveTax = snapshot.baseTax + snapshot.perSecond * ((Date.now() - snapshot.startedAt) / 1000);

  // Comparisons — turn the abstract number into something visceral.
  const hoursAtMinWage = snapshot.baseTax / 7.25; // federal min wage
  const monthsOfRent = snapshot.baseTax / 1850; // US median 1BR
  const yearsAtAvgSalary = snapshot.baseTax / 60000;

  return (
    <main className="bg-brand-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Link href="/tools" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-8">
          ← All Tools
        </Link>

        <div className="text-center mb-12">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">TOUGH-LOVE TOOL</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            The <span className="text-gradient">Waiting Tax</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every day you wait, you pay. Here is what it has cost you so far — and what it keeps costing, by the second.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-brand-card border border-subtle rounded-xl p-6">
            <h2 className="text-lg font-bold mb-6">What Are You Waiting On?</h2>

            <div className="space-y-5">
              {/* Preset */}
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Goal</label>
                <div className="grid grid-cols-1 gap-2">
                  {PRESETS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPresetId(p.id)}
                      className={`text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                        presetId === p.id
                          ? 'border-accent-dim bg-accent/10 text-text-primary'
                          : 'border-subtle text-text-secondary hover:border-accent-dim hover:text-text-primary'
                      }`}
                    >
                      <span className="font-semibold">{p.label}</span>
                      <span className="block text-[11px] text-text-muted mt-0.5">{p.note}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional custom name */}
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Name It (Optional)</label>
                <input
                  type="text"
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                  placeholder={preset.label}
                  className="w-full bg-brand-input border border-subtle rounded-lg py-3 px-3 text-text-primary focus:border-accent-dim focus:outline-none transition-colors"
                />
              </div>

              {/* Custom daily cost (only for "custom") */}
              {presetId === 'custom' && (
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Daily Cost of Waiting</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">$</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      value={customDaily}
                      onChange={(e) => setCustomDaily(e.target.value)}
                      className="w-full bg-brand-input border border-subtle rounded-lg py-3 pl-7 pr-3 text-text-primary font-mono focus:border-accent-dim focus:outline-none transition-colors"
                    />
                  </div>
                  <p className="text-[11px] text-text-muted mt-1">Lost income, missed health gains, unclaimed opportunity — your call.</p>
                </div>
              )}

              {/* Days waited */}
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Days You Have Been Waiting</label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={daysWaited}
                  onChange={(e) => setDaysWaited(e.target.value)}
                  className="w-full bg-brand-input border border-subtle rounded-lg py-3 px-3 text-text-primary font-mono focus:border-accent-dim focus:outline-none transition-colors"
                />
                <p className="text-[11px] text-text-muted mt-1">365 = one year. 1825 = five years.</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-subtle">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Running Rate</p>
              <p className="text-2xl font-bold font-mono text-accent">{formatUSD(effectiveDaily)}/day</p>
              <p className="text-[11px] text-text-muted mt-1">That is {formatUSD(effectiveDaily / 86400, 4)} every second you keep waiting.</p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero counter */}
            <div className="bg-gradient-to-br from-brand-card to-brand-card-hover border border-accent-dim rounded-xl p-8 text-center">
              <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-3">TOTAL WAITING TAX</p>
              <p className="text-5xl lg:text-7xl font-bold font-mono text-gradient mb-2 tabular-nums">
                {formatUSD(liveTax, 2)}
              </p>
              <p className="text-text-secondary text-sm">
                And counting — {formatUSD(snapshot.perSecond, 4)}/sec while you read this.
              </p>
              {tick && null /* tick keeps the component re-rendering */}
            </div>

            {/* Visceral comparisons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">HOURS AT MIN WAGE</p>
                <p className="text-3xl font-bold font-mono text-accent">{formatInt(hoursAtMinWage)}</p>
                <p className="text-[11px] text-text-muted mt-1">$7.25/hr federal</p>
              </div>
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">MONTHS OF RENT</p>
                <p className="text-3xl font-bold font-mono text-accent">{formatInt(monthsOfRent)}</p>
                <p className="text-[11px] text-text-muted mt-1">US median 1BR</p>
              </div>
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">YEARS AT AVG SALARY</p>
                <p className="text-3xl font-bold font-mono text-accent">{yearsAtAvgSalary.toFixed(2)}</p>
                <p className="text-[11px] text-text-muted mt-1">$60K/yr benchmark</p>
              </div>
            </div>

            {/* Share hook */}
            <div className="bg-gradient-to-br from-accent/10 to-accent-blue/5 border border-accent-dim rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🧾</span>
                <h3 className="font-bold text-accent">Your Receipt</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {goalName || preset.label} —{' '}
                <strong className="text-text-primary">{snapshot.days.toFixed(0)} days</strong> of waiting at{' '}
                <strong className="text-text-primary">{formatUSD(snapshot.dailyCost)}/day</strong> = a <strong className="text-accent font-mono">{formatUSD(snapshot.baseTax)}</strong> Waiting Tax.
                You are still paying it, every second.
              </p>
              <p className="text-sm text-text-secondary mt-3">
                The only way to stop the meter is to start.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/the-waiting-tax"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
              >
                Read &quot;The Waiting Tax&quot;
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/tools/seconds-to-freedom"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-subtle text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-accent-dim transition-colors"
              >
                Calculate Seconds to Freedom
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
