'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

type IconProps = { className?: string; size?: number };
const ArrowRight = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

/**
 * Iterate monthly: balance_{t+1} = balance_t * (1 + r) + contribution.
 * Stop when balance >= target. Cap at 100 years to avoid runaway loops.
 */
function monthsToTarget(current: number, monthlyContrib: number, target: number, annualReturn: number): number {
  if (current >= target) return 0;
  const r = annualReturn / 100 / 12;
  if (monthlyContrib <= 0 && r <= 0) return Infinity;
  let balance = current;
  let months = 0;
  const MAX = 12 * 100;
  while (balance < target && months < MAX) {
    balance = balance * (1 + r) + monthlyContrib;
    months++;
  }
  return months >= MAX ? Infinity : months;
}

function formatCompactSeconds(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return '∞';
  if (seconds >= 1e9) return `${(seconds / 1e9).toFixed(2)}B`;
  if (seconds >= 1e6) return `${(seconds / 1e6).toFixed(2)}M`;
  if (seconds >= 1e3) return `${(seconds / 1e3).toFixed(1)}K`;
  return Math.round(seconds).toLocaleString();
}

function formatUSD(n: number): string {
  if (!isFinite(n)) return '∞';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function SecondsToFreedom() {
  const [age, setAge] = useState('32');
  const [savings, setSavings] = useState('45000');
  const [monthlyContrib, setMonthlyContrib] = useState('1500');
  const [annualExpenses, setAnnualExpenses] = useState('50000');
  const [expectedReturn, setExpectedReturn] = useState('7');

  const result = useMemo(() => {
    const currentAge = parseFloat(age) || 0;
    const current = parseFloat(savings) || 0;
    const contrib = parseFloat(monthlyContrib) || 0;
    const expenses = parseFloat(annualExpenses) || 0;
    const returnPct = parseFloat(expectedReturn) || 0;

    // Trinity-study 4% rule → FI number = 25 × annual expenses
    const fiNumber = expenses * 25;
    const months = monthsToTarget(current, contrib, fiNumber, returnPct);
    const years = isFinite(months) ? months / 12 : Infinity;
    const fiAge = isFinite(years) ? currentAge + years : Infinity;
    const seconds = isFinite(years) ? years * 365.25 * 86400 : Infinity;

    // "What if +$500/mo"
    const months500 = monthsToTarget(current, contrib + 500, fiNumber, returnPct);
    const yearsSaved = isFinite(months) && isFinite(months500) ? (months - months500) / 12 : 0;

    return { fiNumber, months, years, fiAge, seconds, yearsSaved };
  }, [age, savings, monthlyContrib, annualExpenses, expectedReturn]);

  return (
    <main className="bg-brand-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Link href="/tools" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-8">
          ← All Tools
        </Link>

        <div className="text-center mb-12">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">LIFE DESIGN TOOL</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Seconds to <span className="text-gradient">Freedom</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Financial independence is the day you stop selling your seconds. This is your countdown — using the Trinity-study 4% rule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-brand-card border border-subtle rounded-xl p-6">
            <h2 className="text-lg font-bold mb-6">Your Trajectory</h2>
            <div className="space-y-5">
              <Field label="Current Age" value={age} onChange={setAge} />
              <Field label="Current Savings / Investments" prefix="$" value={savings} onChange={setSavings} />
              <Field label="Monthly Contribution" prefix="$" value={monthlyContrib} onChange={setMonthlyContrib} />
              <Field label="Annual Expenses (today's dollars)" prefix="$" value={annualExpenses} onChange={setAnnualExpenses} />
              <Field label="Expected Annual Return" suffix="%" value={expectedReturn} onChange={setExpectedReturn} />
            </div>

            <div className="mt-6 pt-6 border-t border-subtle">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Your FI Number</p>
              <p className="text-2xl font-bold font-mono text-accent">{formatUSD(result.fiNumber)}</p>
              <p className="text-[11px] text-text-muted mt-1">25× your annual expenses — the Trinity 4% rule.</p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {!isFinite(result.seconds) ? (
              <div className="bg-status-warning/10 border border-status-warning/40 rounded-xl p-8 text-center">
                <div className="text-5xl mb-3">⏳</div>
                <h3 className="text-xl font-bold text-status-warning mb-2">Freedom is more than 100 years away.</h3>
                <p className="text-text-secondary text-sm">
                  Increase contributions, lower expenses, or raise expected return. Small changes compound.
                </p>
              </div>
            ) : (
              <>
                {/* Hero */}
                <div className="bg-gradient-to-br from-brand-card to-brand-card-hover border border-accent-dim rounded-xl p-8 text-center">
                  <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-3">SECONDS UNTIL FREEDOM</p>
                  <p className="text-6xl lg:text-7xl font-bold font-mono text-gradient mb-2">
                    {formatCompactSeconds(result.seconds)}
                  </p>
                  <p className="text-text-secondary text-sm">
                    That's <strong className="text-text-primary">{result.years.toFixed(1)} years</strong> — you'd reach FI at <strong className="text-text-primary">age {Math.round(result.fiAge)}</strong>.
                  </p>
                </div>

                {/* Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                    <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">YEARS</p>
                    <p className="text-3xl font-bold font-mono text-accent">{result.years.toFixed(1)}</p>
                  </div>
                  <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                    <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">MONTHS</p>
                    <p className="text-3xl font-bold font-mono text-accent">{Math.round(result.months).toLocaleString()}</p>
                  </div>
                  <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                    <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">FI AT AGE</p>
                    <p className="text-3xl font-bold font-mono text-accent">{Math.round(result.fiAge)}</p>
                  </div>
                </div>

                {/* What if */}
                {result.yearsSaved > 0 && (
                  <div className="bg-gradient-to-br from-accent/10 to-accent-blue/5 border border-accent-dim rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🚀</span>
                      <h3 className="font-bold text-accent">Add $500/mo to contributions?</h3>
                    </div>
                    <p className="text-sm text-text-secondary">
                      You'd reach freedom <strong className="text-accent font-mono">{result.yearsSaved.toFixed(1)} years earlier</strong>.
                      That's <strong className="text-text-primary">{formatCompactSeconds(result.yearsSaved * 365.25 * 86400)} seconds</strong> of your life back — at the end when they're worth the most.
                    </p>
                  </div>
                )}
              </>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/tools/hours-of-life"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
              >
                Next: Hours of Your Life Budget
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/insights"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-subtle text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-accent-dim transition-colors"
              >
                Read "Designing a Life That Is Yours"
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({ label, prefix, suffix, value, onChange }: {
  label: string; prefix?: string; suffix?: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">{label}</label>
      <div className="relative">
        {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-brand-input border border-subtle rounded-lg py-3 ${prefix ? 'pl-7' : 'pl-3'} ${suffix ? 'pr-8' : 'pr-3'} text-text-primary font-mono focus:border-accent-dim focus:outline-none transition-colors`}
        />
        {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">{suffix}</span>}
      </div>
    </div>
  );
}
