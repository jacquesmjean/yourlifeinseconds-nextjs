'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

type IconProps = { className?: string; size?: number };
const ArrowRight = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

/** Total amount paid on a standard 10-year student loan at r% APR. */
function loanTotalCost(principal: number, aprPct: number, years: number): number {
  if (principal <= 0) return 0;
  const r = aprPct / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal;
  const PMT = (principal * r) / (1 - Math.pow(1 + r, -n));
  return PMT * n;
}

function formatCompactSeconds(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return '∞';
  const abs = Math.abs(seconds);
  const sign = seconds < 0 ? '-' : '';
  if (abs >= 1e9) return `${sign}${(abs / 1e9).toFixed(2)}B`;
  if (abs >= 1e6) return `${sign}${(abs / 1e6).toFixed(2)}M`;
  if (abs >= 1e3) return `${sign}${(abs / 1e3).toFixed(1)}K`;
  return `${sign}${Math.round(abs).toLocaleString()}`;
}

function formatUSD(n: number): string {
  if (!isFinite(n)) return '∞';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function DegreeInSeconds() {
  const [tuition, setTuition] = useState('72000');
  const [years, setYears] = useState('4');
  const [altSalary, setAltSalary] = useState('42000');
  const [gradSalary, setGradSalary] = useState('68000');
  const [loanRate, setLoanRate] = useState('6.5');
  const [currentAge, setCurrentAge] = useState('18');
  const [retireAge, setRetireAge] = useState('65');

  const result = useMemo(() => {
    const T = parseFloat(tuition) || 0;
    const Y = parseFloat(years) || 0;
    const alt = parseFloat(altSalary) || 0;
    const grad = parseFloat(gradSalary) || 0;
    const r = parseFloat(loanRate) || 0;
    const age = parseFloat(currentAge) || 0;
    const retire = parseFloat(retireAge) || 0;

    // Lost wages during school (opportunity cost)
    const opportunityCost = alt * Y;

    // Loan total cost (10yr standard repayment)
    const loanTotal = loanTotalCost(T, r, 10);
    const loanInterest = loanTotal - T;

    // Total investment in the degree (dollars out of pocket over a lifetime)
    const totalCost = opportunityCost + loanTotal;

    // Post-grad hourly wage (50 wks × 40 hrs = 2000 working hrs)
    const postGradHourly = grad / 2000 || 0;

    // Seconds of post-grad work to pay off the interest alone
    const interestSeconds = postGradHourly > 0 ? (loanInterest / postGradHourly) * 3600 : Infinity;

    // Lifetime earnings premium (grad - alt) over remaining working years
    const workingYearsAfter = Math.max(0, retire - age - Y);
    const lifetimePremium = (grad - alt) * workingYearsAfter;

    // Net lifetime ROI
    const netROI = lifetimePremium - totalCost;

    // Breakeven year after graduation
    const annualPremium = grad - alt;
    const breakevenYears = annualPremium > 0 ? totalCost / annualPremium : Infinity;
    const breakevenAge = age + Y + breakevenYears;

    return {
      opportunityCost, loanTotal, loanInterest, totalCost,
      postGradHourly, interestSeconds,
      lifetimePremium, netROI,
      breakevenYears, breakevenAge,
      workingYearsAfter,
    };
  }, [tuition, years, altSalary, gradSalary, loanRate, currentAge, retireAge]);

  const isPositiveROI = result.netROI > 0;

  return (
    <main className="bg-brand-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Link href="/tools" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-8">
          ← All Tools
        </Link>

        <div className="text-center mb-12">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">LIFE DESIGN TOOL</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Degree in <span className="text-gradient">Seconds</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Years of life spent, seconds of interest paid, lifetime return earned. The honest cost of a degree — in the only unit that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-brand-card border border-subtle rounded-xl p-6">
            <h2 className="text-lg font-bold mb-6">The Equation</h2>
            <div className="space-y-5">
              <Field label="Total Tuition (4 years or full program)" prefix="$" value={tuition} onChange={setTuition} />
              <Field label="Years in Program" value={years} onChange={setYears} />
              <Field label="Salary WITHOUT Degree" prefix="$" value={altSalary} onChange={setAltSalary} />
              <Field label="Salary WITH Degree" prefix="$" value={gradSalary} onChange={setGradSalary} />
              <Field label="Student Loan Rate" suffix="%" value={loanRate} onChange={setLoanRate} />
              <div className="grid grid-cols-2 gap-3">
                <Field label="Age Now" value={currentAge} onChange={setCurrentAge} />
                <Field label="Retire At" value={retireAge} onChange={setRetireAge} />
              </div>
            </div>
            <p className="mt-6 text-xs text-text-muted leading-relaxed">
              Loan modeled on a standard 10-year repayment. All math happens in your browser.
            </p>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero */}
            <div className={`rounded-xl p-8 text-center border ${
              isPositiveROI
                ? 'bg-gradient-to-br from-brand-card to-brand-card-hover border-accent-dim'
                : 'bg-gradient-to-br from-status-danger/10 to-brand-card border-status-danger/40'
            }`}>
              <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-3">NET LIFETIME ROI</p>
              <p className={`text-6xl lg:text-7xl font-bold font-mono mb-2 ${isPositiveROI ? 'text-gradient' : 'text-status-danger'}`}>
                {result.netROI >= 0 ? '+' : ''}{formatUSD(result.netROI)}
              </p>
              <p className="text-text-secondary text-sm">
                {isPositiveROI
                  ? `Your earnings premium (${formatUSD(result.lifetimePremium)}) exceeds your total investment (${formatUSD(result.totalCost)}).`
                  : `Your total investment (${formatUSD(result.totalCost)}) exceeds your lifetime premium (${formatUSD(result.lifetimePremium)}).`}
              </p>
            </div>

            {/* Cost breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-brand-card border border-subtle rounded-xl p-5">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">YEARS OF LIFE</p>
                <p className="text-2xl font-bold font-mono text-text-primary">{years}</p>
                <p className="text-xs text-text-muted mt-1">Spent in school.</p>
              </div>
              <div className="bg-brand-card border border-subtle rounded-xl p-5">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">OPPORTUNITY COST</p>
                <p className="text-2xl font-bold font-mono text-text-primary">{formatUSD(result.opportunityCost)}</p>
                <p className="text-xs text-text-muted mt-1">Wages you didn't earn.</p>
              </div>
              <div className="bg-brand-card border border-status-warning/30 rounded-xl p-5">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-status-warning mb-2">INTEREST SECONDS</p>
                <p className="text-2xl font-bold font-mono text-status-warning">{formatCompactSeconds(result.interestSeconds)}</p>
                <p className="text-xs text-text-muted mt-1">Of post-grad work, owed to the lender as pure toll ({formatUSD(result.loanInterest)}).</p>
              </div>
            </div>

            {/* Breakeven */}
            {isFinite(result.breakevenYears) && result.breakevenYears > 0 ? (
              <div className="bg-brand-card border border-subtle rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⚖️</span>
                  <h3 className="font-bold text-text-primary">Breakeven</h3>
                </div>
                <p className="text-2xl font-bold text-accent font-mono">
                  {result.breakevenYears.toFixed(1)} years after graduation
                  <span className="text-sm text-text-muted ml-2">(age {Math.round(result.breakevenAge)})</span>
                </p>
                <p className="text-xs text-text-muted mt-2">
                  The year the degree's earnings premium finally exceeds everything you paid (tuition + interest + lost wages).
                </p>
              </div>
            ) : (
              <div className="bg-status-warning/5 border border-status-warning/30 rounded-xl p-6">
                <p className="text-sm text-text-secondary">
                  At these numbers, the degree never breaks even — the salary uplift doesn't cover the full cost before retirement.
                </p>
              </div>
            )}

            {/* Context */}
            <div className="bg-gradient-to-br from-accent/5 to-transparent border border-subtle rounded-xl p-6">
              <h3 className="text-sm font-bold text-text-primary mb-3">What this doesn't capture</h3>
              <ul className="space-y-1.5 text-xs text-text-muted">
                <li>• Career optionality — some roles simply require the credential.</li>
                <li>• Network, meaning, and identity — real, but not measurable here.</li>
                <li>• Risk — you might not finish; alt-salary might not materialize.</li>
                <li>• The seconds themselves — 4 years of your 20s are not dollars.</li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/tools"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
              >
                All Tools
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/insights/school-trained-you"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-subtle text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-accent-dim transition-colors"
              >
                Read "School Trained You to Trade Time"
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
