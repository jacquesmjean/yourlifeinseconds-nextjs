'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';

type IconProps = { className?: string; size?: number };
const ArrowRight = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

// Anchor points (nominal USD, approximate).
// CPI uses BLS All Urban Consumers index (1982-84 = 100).
// Years beyond 2025 are extrapolated with 2.5% annual inflation.
// The point is the shape of the curve, not four decimals of precision.
type Anchor = {
  year: number;
  cpi: number;
  gas: number;         // $/gallon
  movie: number;       // $/ticket
  bigmac: number;      // $/burger (0 if pre-1970)
  rent: number;        // $/month, median 1BR
  beef: number;        // $/lb, ground beef
  minWage: number;     // federal minimum wage
};

const ANCHORS: Anchor[] = [
  { year: 1950, cpi: 24.1,  gas: 0.27, movie: 0.53, bigmac: 0,    rent: 42,   beef: 0.55, minWage: 0.75 },
  { year: 1960, cpi: 29.6,  gas: 0.31, movie: 0.69, bigmac: 0,    rent: 71,   beef: 0.50, minWage: 1.00 },
  { year: 1970, cpi: 38.8,  gas: 0.36, movie: 1.55, bigmac: 0.65, rent: 108,  beef: 0.65, minWage: 1.60 },
  { year: 1980, cpi: 82.4,  gas: 1.25, movie: 2.69, bigmac: 1.00, rent: 243,  beef: 1.85, minWage: 3.10 },
  { year: 1990, cpi: 130.7, gas: 1.16, movie: 4.23, bigmac: 2.20, rent: 447,  beef: 1.63, minWage: 3.80 },
  { year: 2000, cpi: 172.2, gas: 1.51, movie: 5.39, bigmac: 2.40, rent: 602,  beef: 1.63, minWage: 5.15 },
  { year: 2010, cpi: 218.1, gas: 2.79, movie: 7.89, bigmac: 3.73, rent: 840,  beef: 2.68, minWage: 7.25 },
  { year: 2020, cpi: 258.8, gas: 2.17, movie: 9.37, bigmac: 5.67, rent: 1104, beef: 3.73, minWage: 7.25 },
  { year: 2025, cpi: 322.0, gas: 3.22, movie: 11.50, bigmac: 5.69, rent: 1395, beef: 5.50, minWage: 7.25 },
];

// Interpolate an anchor value for a given year. Clamps at both ends;
// post-2025 inflates at 2.5% annually off 2025 anchors.
function valueAt(year: number, field: keyof Omit<Anchor, 'year'>): number {
  if (year <= ANCHORS[0].year) return ANCHORS[0][field];
  if (year >= 2025) {
    const last = ANCHORS[ANCHORS.length - 1];
    const yearsOut = year - last.year;
    return last[field] * Math.pow(1.025, yearsOut);
  }
  for (let i = 0; i < ANCHORS.length - 1; i++) {
    const a = ANCHORS[i];
    const b = ANCHORS[i + 1];
    if (year >= a.year && year <= b.year) {
      const t = (year - a.year) / (b.year - a.year);
      return a[field] + (b[field] - a[field]) * t;
    }
  }
  return ANCHORS[ANCHORS.length - 1][field];
}

function formatUSD(n: number, digits = 0): string {
  if (!isFinite(n)) return '∞';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: digits });
}

function formatInt(n: number): string {
  if (!isFinite(n)) return '∞';
  return Math.round(n).toLocaleString();
}

export default function StandardOfLivingTimeTraveler() {
  const [salary, setSalary] = useState('75000');
  const [year, setYear] = useState(1985);

  // The reference point — today.
  const nowYear = 2025;

  const result = useMemo(() => {
    const income = Math.max(0, parseFloat(salary) || 0);
    const cpiNow = valueAt(nowYear, 'cpi');
    const cpiYear = valueAt(year, 'cpi');

    // Equivalent salary in the selected year's dollars (CPI-adjusted).
    const equivIncome = income * (cpiYear / cpiNow);

    // Hourly equivalent (assuming 2080 hours/year).
    const hourlyNow = income / 2080;

    return {
      income,
      equivIncome,
      hourlyNow,
      pricesNow: {
        gas: valueAt(nowYear, 'gas'),
        movie: valueAt(nowYear, 'movie'),
        bigmac: valueAt(nowYear, 'bigmac'),
        rent: valueAt(nowYear, 'rent'),
        beef: valueAt(nowYear, 'beef'),
        minWage: valueAt(nowYear, 'minWage'),
        cpi: cpiNow,
      },
      pricesYear: {
        gas: valueAt(year, 'gas'),
        movie: valueAt(year, 'movie'),
        bigmac: valueAt(year, 'bigmac'),
        rent: valueAt(year, 'rent'),
        beef: valueAt(year, 'beef'),
        minWage: valueAt(year, 'minWage'),
        cpi: cpiYear,
      },
    };
  }, [salary, year]);

  // Purchasing power: your NOMINAL dollars (today's cash) measured against
  // that year's prices. We deliberately do NOT inflate your income for the
  // "then" column — the whole point is to show what your money buys when you
  // teleport it backward or forward without adjusting for wage inflation.
  const buyingPower = (hourly: number, price: number) => (price > 0 ? hourly / price : 0);

  const nowBuys = {
    gas:    buyingPower(result.hourlyNow, result.pricesNow.gas),
    movie:  buyingPower(result.hourlyNow, result.pricesNow.movie),
    bigmac: buyingPower(result.hourlyNow, result.pricesNow.bigmac),
    rent:   result.pricesNow.rent > 0  ? result.income / 12 / result.pricesNow.rent : 0,
    beef:   buyingPower(result.hourlyNow, result.pricesNow.beef),
  };
  const yearBuys = {
    gas:    buyingPower(result.hourlyNow, result.pricesYear.gas),
    movie:  buyingPower(result.hourlyNow, result.pricesYear.movie),
    bigmac: buyingPower(result.hourlyNow, result.pricesYear.bigmac),
    rent:   result.pricesYear.rent > 0  ? result.income / 12 / result.pricesYear.rent : 0,
    beef:   buyingPower(result.hourlyNow, result.pricesYear.beef),
  };

  return (
    <main className="bg-brand-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Link href="/tools" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-8">
          ← All Tools
        </Link>

        <div className="text-center mb-12">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">INFLATION, MADE PERSONAL</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Standard of Living <span className="text-gradient">Time-Traveler</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A dollar is not a dollar. Drag the slider and watch what your income actually buys across decades of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-brand-card border border-subtle rounded-xl p-6">
            <h2 className="text-lg font-bold mb-6">Your Reality (Today)</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Your Annual Income</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="w-full bg-brand-input border border-subtle rounded-lg py-3 pl-7 pr-3 text-text-primary font-mono focus:border-accent-dim focus:outline-none transition-colors"
                  />
                </div>
                <p className="text-[11px] text-text-muted mt-1">
                  That is {formatUSD(result.hourlyNow, 2)}/hour at 2,080 hours/year.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  Travel to Year: <span className="text-accent font-mono text-base">{year}</span>
                </label>
                <input
                  type="range"
                  min={1950}
                  max={2050}
                  step={1}
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value, 10))}
                  className="w-full accent-accent"
                />
                <div className="flex justify-between text-[10px] text-text-muted font-mono mt-1">
                  <span>1950</span>
                  <span>1975</span>
                  <span>2000</span>
                  <span>2025</span>
                  <span>2050</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <p className="text-[11px] text-text-muted w-full">Quick jumps:</p>
                {[1950, 1970, 1985, 2000, 2010, 2040].map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYear(y)}
                    className={`text-[11px] px-2 py-1 rounded-full border transition-colors ${
                      year === y
                        ? 'border-accent-dim bg-accent/10 text-accent'
                        : 'border-subtle text-text-secondary hover:border-accent-dim hover:text-accent'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-subtle">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Equivalent Salary in {year}</p>
              <p className="text-2xl font-bold font-mono text-accent">{formatUSD(result.equivIncome)}</p>
              <p className="text-[11px] text-text-muted mt-1">
                {year >= 2025
                  ? `Projected at 2.5% inflation from 2025.`
                  : `CPI-adjusted from ${nowYear} back to ${year}.`}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero */}
            <div className="bg-gradient-to-br from-brand-card to-brand-card-hover border border-accent-dim rounded-xl p-8">
              <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-3 text-center">
                TELEPORT YOUR {formatUSD(result.income)} TO {year}
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-[11px] font-mono text-text-muted tracking-widest uppercase mb-1">TODAY&apos;S PRICES</p>
                  <p className="text-4xl lg:text-5xl font-bold font-mono text-gradient">{formatUSD(result.hourlyNow, 2)}</p>
                  <p className="text-[11px] text-text-muted mt-1">per hour</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono text-text-muted tracking-widest uppercase mb-1">{year} PRICES</p>
                  <p className="text-4xl lg:text-5xl font-bold font-mono text-gradient">{formatUSD(result.hourlyNow, 2)}</p>
                  <p className="text-[11px] text-text-muted mt-1">
                    per hour &mdash; but worth{' '}
                    <strong className="text-accent">
                      {year < nowYear
                        ? `${((result.pricesNow.cpi / result.pricesYear.cpi)).toFixed(1)}×`
                        : `${((result.pricesNow.cpi / result.pricesYear.cpi) * 100).toFixed(0)}%`}
                    </strong>{' '}
                    of today
                  </p>
                </div>
              </div>
            </div>

            {/* Side-by-side comparison */}
            <div className="bg-brand-card border border-subtle rounded-xl p-6">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">What Your Nominal {formatUSD(result.income)} Buys</p>
              <p className="text-[11px] text-text-muted mb-4">Your income is held constant. Only the prices change.</p>
              <ComparisonRow label="Gallons of gas"              now={nowBuys.gas}    year={yearBuys.gas}    />
              <ComparisonRow label="Movie tickets"               now={nowBuys.movie}  year={yearBuys.movie}  />
              {result.pricesYear.bigmac > 0 && (
                <ComparisonRow label="Big Macs"                 now={nowBuys.bigmac} year={yearBuys.bigmac} />
              )}
              <ComparisonRow label="Pounds of ground beef"       now={nowBuys.beef}   year={yearBuys.beef}   />
              <ComparisonRow label="Months of median 1BR rent (from a full year of income)" now={nowBuys.rent}   year={yearBuys.rent}  isRent />
            </div>

            {/* Share hook */}
            <div className="bg-gradient-to-br from-accent/10 to-accent-blue/5 border border-accent-dim rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🕰️</span>
                <h3 className="font-bold text-accent">The shareable truth</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                &ldquo;If I teleported my <strong className="text-text-primary">{formatUSD(result.income)}</strong> to{' '}
                <strong className="text-text-primary">{year}</strong> at {year}&apos;s prices, it would cover{' '}
                <strong className="text-accent font-mono">{yearBuys.rent.toFixed(1)}</strong> months of rent.
                Today it covers{' '}
                <strong className="text-accent font-mono">{nowBuys.rent.toFixed(1)}</strong>.&rdquo;
              </p>
              <p className="text-sm text-text-secondary mt-3">
                Inflation is not an abstraction. It is a vote against your income, taken every day.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/a-dollar-in-1985"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
              >
                Read &quot;A Dollar in 1985&quot;
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/tools/seconds-to-freedom"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-subtle text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-accent-dim transition-colors"
              >
                Run Seconds to Freedom
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ComparisonRow({ label, now, year, isRent }: { label: string; now: number; year: number; isRent?: boolean }) {
  const diff = year - now;
  const pct = now > 0 ? ((year / now - 1) * 100) : 0;
  const more = diff > 0;
  return (
    <div className="flex items-center justify-between py-3 border-b border-subtle last:border-0 gap-4">
      <p className="text-sm text-text-secondary flex-1">{label}</p>
      <div className="flex items-center gap-6 flex-shrink-0">
        <div className="text-right">
          <p className="text-[10px] font-mono text-text-muted uppercase">Today</p>
          <p className="text-lg font-bold font-mono text-text-primary">{isRent ? now.toFixed(1) : formatInt(now)}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-mono text-text-muted uppercase">Then</p>
          <p className="text-lg font-bold font-mono text-accent">{isRent ? year.toFixed(1) : formatInt(year)}</p>
        </div>
        <div className={`text-right min-w-[60px] ${more ? 'text-status-success' : 'text-status-warning'}`}>
          <p className="text-[10px] font-mono uppercase">Diff</p>
          <p className="text-sm font-bold font-mono">{more ? '+' : ''}{pct.toFixed(0)}%</p>
        </div>
      </div>
    </div>
  );
}
