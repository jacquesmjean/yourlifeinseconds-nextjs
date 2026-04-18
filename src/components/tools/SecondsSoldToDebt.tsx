'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

type IconProps = { className?: string; size?: number };
const ArrowRight = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const Zap = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

/**
 * Standard amortization: months to pay off a fixed-payment loan.
 * n = -ln(1 - (r * P) / PMT) / ln(1 + r)
 * r = monthly rate, P = balance, PMT = monthly payment.
 * Returns Infinity if the payment doesn't cover interest.
 */
function monthsToPayoff(balance: number, apr: number, monthlyPayment: number): number {
  if (balance <= 0) return 0;
  if (monthlyPayment <= 0) return Infinity;
  const r = apr / 100 / 12;
  if (r === 0) return balance / monthlyPayment;
  const interestOnly = balance * r;
  if (monthlyPayment <= interestOnly) return Infinity; // never pays off
  return -Math.log(1 - (r * balance) / monthlyPayment) / Math.log(1 + r);
}

function formatCompactSeconds(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return '∞';
  if (seconds >= 1e9) return `${(seconds / 1e9).toFixed(2)}B`;
  if (seconds >= 1e6) return `${(seconds / 1e6).toFixed(2)}M`;
  if (seconds >= 1e3) return `${(seconds / 1e3).toFixed(1)}K`;
  return Math.round(seconds).toLocaleString();
}

function formatUSD(n: number): string {
  if (!isFinite(n) || isNaN(n)) return '∞';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function formatLiberationDate(months: number): string {
  if (!isFinite(months)) return 'Never at this rate';
  const d = new Date();
  d.setMonth(d.getMonth() + Math.round(months));
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export default function SecondsSoldToDebt() {
  const [balance, setBalance] = useState('18500');
  const [apr, setApr] = useState('22.5');
  const [payment, setPayment] = useState('450');
  const [hourlyWage, setHourlyWage] = useState('32');

  const result = useMemo(() => {
    const P = parseFloat(balance) || 0;
    const r = parseFloat(apr) || 0;
    const PMT = parseFloat(payment) || 0;
    const wage = parseFloat(hourlyWage) || 0;

    const months = monthsToPayoff(P, r, PMT);
    const totalPaid = isFinite(months) ? PMT * months : Infinity;
    const interest = isFinite(totalPaid) ? totalPaid - P : Infinity;

    const secondsPrincipal = wage > 0 ? (P / wage) * 3600 : 0;
    const secondsInterest = wage > 0 && isFinite(interest) ? (interest / wage) * 3600 : Infinity;
    const secondsTotal = wage > 0 && isFinite(totalPaid) ? (totalPaid / wage) * 3600 : Infinity;

    // What if payment doubled?
    const doubledMonths = monthsToPayoff(P, r, PMT * 2);
    const doubledTotal = isFinite(doubledMonths) ? PMT * 2 * doubledMonths : Infinity;
    const doubledInterest = isFinite(doubledTotal) ? doubledTotal - P : Infinity;
    const monthsSaved = isFinite(months) && isFinite(doubledMonths) ? months - doubledMonths : 0;
    const interestSaved = isFinite(interest) && isFinite(doubledInterest) ? interest - doubledInterest : 0;

    return {
      months, totalPaid, interest,
      secondsPrincipal, secondsInterest, secondsTotal,
      doubledMonths, monthsSaved, interestSaved,
      neverPaysOff: !isFinite(months),
    };
  }, [balance, apr, payment, hourlyWage]);

  const yearsToPayoff = isFinite(result.months) ? result.months / 12 : Infinity;

  return (
    <main className="bg-brand-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Breadcrumb */}
        <Link href="/tools" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-8">
          ← All Tools
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">LIFE DESIGN TOOL</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Seconds <span className="text-gradient">Sold to Debt</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every dollar of debt is seconds of your life owed to someone else. See the real price — principal, interest, and the liberation date at your current payment rate.
          </p>
        </div>

        {/* Grid: Inputs + Results */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-brand-card border border-subtle rounded-xl p-6">
            <h2 className="text-lg font-bold mb-6">Your Debt</h2>

            <div className="space-y-5">
              <Field label="Total Debt Balance" prefix="$" value={balance} onChange={setBalance} />
              <Field label="APR (annual interest rate)" suffix="%" value={apr} onChange={setApr} />
              <Field label="Monthly Payment" prefix="$" value={payment} onChange={setPayment} />
              <Field label="Your Hourly Wage (after tax)" prefix="$" value={hourlyWage} onChange={setHourlyWage} />
            </div>

            <p className="mt-6 text-xs text-text-muted leading-relaxed">
              We treat this like a standard amortizing loan. All computation happens on your device — nothing leaves your browser.
            </p>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {result.neverPaysOff ? (
              <div className="bg-status-danger/10 border border-status-danger/40 rounded-xl p-8 text-center">
                <div className="text-5xl mb-3">⚠️</div>
                <h3 className="text-xl font-bold text-status-danger mb-2">This payment never pays off the debt.</h3>
                <p className="text-text-secondary text-sm">
                  At <strong>{apr}%</strong> APR on <strong>{formatUSD(parseFloat(balance) || 0)}</strong>, your payment of <strong>{formatUSD(parseFloat(payment) || 0)}</strong>/mo is less than the monthly interest. The balance grows forever. Increase the payment to see the real cost.
                </p>
              </div>
            ) : (
              <>
                {/* Hero metric */}
                <div className="bg-gradient-to-br from-brand-card to-brand-card-hover border border-accent-dim rounded-xl p-8 text-center">
                  <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-3">SECONDS OF LIFE OWED</p>
                  <p className="text-6xl lg:text-7xl font-bold font-mono text-gradient mb-2">
                    {formatCompactSeconds(result.secondsTotal)}
                  </p>
                  <p className="text-text-secondary text-sm">
                    That's <strong className="text-text-primary">{yearsToPayoff.toFixed(1)} years</strong> of payments — {formatUSD(result.totalPaid)} over {Math.round(result.months)} months.
                  </p>
                </div>

                {/* Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-brand-card border border-subtle rounded-xl p-5">
                    <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">SECONDS ON PRINCIPAL</p>
                    <p className="text-2xl font-bold font-mono text-text-primary">{formatCompactSeconds(result.secondsPrincipal)}</p>
                    <p className="text-xs text-text-muted mt-1">Working time to repay what you borrowed.</p>
                  </div>
                  <div className="bg-brand-card border border-status-warning/30 rounded-xl p-5">
                    <p className="text-xs font-mono font-semibold tracking-widest uppercase text-status-warning mb-2">SECONDS ON INTEREST</p>
                    <p className="text-2xl font-bold font-mono text-status-warning">{formatCompactSeconds(result.secondsInterest)}</p>
                    <p className="text-xs text-text-muted mt-1">Pure toll: {formatUSD(result.interest)} of your life, paid for the privilege of borrowing.</p>
                  </div>
                </div>

                {/* Liberation date */}
                <div className="bg-brand-card border border-subtle rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🗝️</span>
                    <h3 className="font-bold text-text-primary">Liberation Date</h3>
                  </div>
                  <p className="text-2xl font-bold text-accent font-mono">{formatLiberationDate(result.months)}</p>
                  <p className="text-xs text-text-muted mt-2">
                    The exact month you stop working for this debt — at your current payment rate.
                  </p>
                </div>

                {/* What if */}
                {result.monthsSaved > 0 && (
                  <div className="bg-gradient-to-br from-accent/10 to-accent-blue/5 border border-accent-dim rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="text-accent" size={18} />
                      <h3 className="font-bold text-accent">Double Your Payment?</h3>
                    </div>
                    <p className="text-sm text-text-secondary mb-4">
                      If you paid <strong className="text-text-primary">{formatUSD(parseFloat(payment) * 2 || 0)}</strong>/mo instead:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-text-muted">Months saved</p>
                        <p className="text-xl font-bold font-mono text-accent">{Math.round(result.monthsSaved)}</p>
                        <p className="text-[11px] text-text-muted">≈ {(result.monthsSaved / 12).toFixed(1)} years of life</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">Interest saved</p>
                        <p className="text-xl font-bold font-mono text-accent">{formatUSD(result.interestSaved)}</p>
                        <p className="text-[11px] text-text-muted">Never owed to the lender.</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/tools/seconds-to-freedom"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
              >
                Next: Seconds to Freedom
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/insights"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-subtle text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-accent-dim transition-colors"
              >
                Read "What Money Actually Is"
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
