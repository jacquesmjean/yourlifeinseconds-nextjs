'use client';

import React, { useState, useMemo } from 'react';
// Inline SVG icon components (no external dependency)
type IconProps = { className?: string; size?: number };
const Share2 = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
);
const Linkedin = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
);
const Twitter = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

interface TaxCalculation {
  grossIncome: number;
  federalTax: number;
  stateTax: number;
  ficaTax: number;
  inflationErosion: number;
  netIncome: number;
  effectiveRate: number;
}

interface FormInput {
  grossIncome: string;
  state: string;
  filingStatus: 'single' | 'married' | 'head_of_household';
}

// Top marginal state income tax rates (2024 tax year).
// These are the rates that apply to the highest income bracket — the
// relevant figure for a $1M earner. Nine states + NH (wages) impose
// no state income tax on earned income.
// Rates are directional; consult a tax professional for exact liability.
const STATES: Array<{ code: string; name: string; rate: number }> = [
  { code: "AL", name: "Alabama", rate: 0.05 },
  { code: "AK", name: "Alaska", rate: 0 },
  { code: "AZ", name: "Arizona", rate: 0.025 },
  { code: "AR", name: "Arkansas", rate: 0.044 },
  { code: "CA", name: "California", rate: 0.133 },
  { code: "CO", name: "Colorado", rate: 0.044 },
  { code: "CT", name: "Connecticut", rate: 0.0699 },
  { code: "DE", name: "Delaware", rate: 0.066 },
  { code: "DC", name: "District of Columbia", rate: 0.1075 },
  { code: "FL", name: "Florida", rate: 0 },
  { code: "GA", name: "Georgia", rate: 0.0539 },
  { code: "HI", name: "Hawaii", rate: 0.11 },
  { code: "ID", name: "Idaho", rate: 0.058 },
  { code: "IL", name: "Illinois", rate: 0.0495 },
  { code: "IN", name: "Indiana", rate: 0.0305 },
  { code: "IA", name: "Iowa", rate: 0.057 },
  { code: "KS", name: "Kansas", rate: 0.057 },
  { code: "KY", name: "Kentucky", rate: 0.04 },
  { code: "LA", name: "Louisiana", rate: 0.0425 },
  { code: "ME", name: "Maine", rate: 0.0715 },
  { code: "MD", name: "Maryland", rate: 0.0575 },
  { code: "MA", name: "Massachusetts", rate: 0.09 }, // 5% + 4% millionaire surtax
  { code: "MI", name: "Michigan", rate: 0.0425 },
  { code: "MN", name: "Minnesota", rate: 0.0985 },
  { code: "MS", name: "Mississippi", rate: 0.047 },
  { code: "MO", name: "Missouri", rate: 0.048 },
  { code: "MT", name: "Montana", rate: 0.059 },
  { code: "NE", name: "Nebraska", rate: 0.0584 },
  { code: "NV", name: "Nevada", rate: 0 },
  { code: "NH", name: "New Hampshire", rate: 0 },
  { code: "NJ", name: "New Jersey", rate: 0.1075 },
  { code: "NM", name: "New Mexico", rate: 0.059 },
  { code: "NY", name: "New York", rate: 0.109 },
  { code: "NC", name: "North Carolina", rate: 0.045 },
  { code: "ND", name: "North Dakota", rate: 0.025 },
  { code: "OH", name: "Ohio", rate: 0.035 },
  { code: "OK", name: "Oklahoma", rate: 0.0475 },
  { code: "OR", name: "Oregon", rate: 0.099 },
  { code: "PA", name: "Pennsylvania", rate: 0.0307 },
  { code: "RI", name: "Rhode Island", rate: 0.0599 },
  { code: "SC", name: "South Carolina", rate: 0.062 },
  { code: "SD", name: "South Dakota", rate: 0 },
  { code: "TN", name: "Tennessee", rate: 0 },
  { code: "TX", name: "Texas", rate: 0 },
  { code: "UT", name: "Utah", rate: 0.0465 },
  { code: "VT", name: "Vermont", rate: 0.0875 },
  { code: "VA", name: "Virginia", rate: 0.0575 },
  { code: "WA", name: "Washington", rate: 0 },
  { code: "WV", name: "West Virginia", rate: 0.0482 },
  { code: "WI", name: "Wisconsin", rate: 0.0765 },
  { code: "WY", name: "Wyoming", rate: 0 },
];

const STATE_TAX_RATES: Record<string, number> = Object.fromEntries(
  STATES.map((s) => [s.code, s.rate])
);

const calculateFederalTax = (
  income: number,
  filingStatus: 'single' | 'married' | 'head_of_household'
): number => {
  let tax = 0;
  let brackets: Array<[number, number]> = [];

  if (filingStatus === 'single') {
    brackets = [
      [11600, 0.1],
      [47150, 0.12],
      [100525, 0.22],
      [191950, 0.24],
      [243725, 0.32],
      [609350, 0.35],
      [Infinity, 0.37],
    ];
  } else if (filingStatus === 'married') {
    brackets = [
      [23200, 0.1],
      [94300, 0.12],
      [201050, 0.22],
      [383900, 0.24],
      [487450, 0.32],
      [731200, 0.35],
      [Infinity, 0.37],
    ];
  } else {
    // Head of Household
    brackets = [
      [16550, 0.1],
      [63100, 0.12],
      [100500, 0.22],
      [191950, 0.24],
      [243700, 0.32],
      [609350, 0.35],
      [Infinity, 0.37],
    ];
  }

  let previousLimit = 0;
  for (const [limit, rate] of brackets) {
    const taxableInThisBracket = Math.min(income, limit) - previousLimit;
    if (taxableInThisBracket > 0) {
      tax += taxableInThisBracket * rate;
    }
    if (income <= limit) break;
    previousLimit = limit;
  }

  return tax;
};

const calculateFICA = (income: number): number => {
  const socialSecurityCap = 168600;
  const socialSecurityTax = Math.min(income, socialSecurityCap) * 0.062;
  const medicareTax = income * 0.0145;

  let additionalMedicare = 0;
  if (income > 200000) {
    additionalMedicare = (income - 200000) * 0.009;
  }

  return socialSecurityTax + medicareTax + additionalMedicare;
};

const calculateTaxes = (input: FormInput): TaxCalculation => {
  const gross = parseFloat(input.grossIncome.replace(/[^0-9.]/g, '')) || 0;
  const federal = calculateFederalTax(gross, input.filingStatus);
  const state = gross * STATE_TAX_RATES[input.state];
  const fica = calculateFICA(gross);
  const inflation = gross * 0.03;
  const net = gross - federal - state - fica - inflation;
  const effectiveRate = gross > 0 ? (net / gross) * 100 : 0;

  return {
    grossIncome: gross,
    federalTax: federal,
    stateTax: state,
    ficaTax: fica,
    inflationErosion: inflation,
    netIncome: net,
    effectiveRate: effectiveRate,
  };
};

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const TaxReality: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInput>({
    grossIncome: '1,000,000',
    state: 'CA',
    filingStatus: 'single',
  });

  const [showResults, setShowResults] = useState(false);

  const calculation = useMemo(
    () => calculateTaxes(formInput),
    [formInput]
  );

  const handleGrossIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9.]/g, '');

    // Format with commas
    if (value) {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        value = formatNumber(numValue);
      }
    }

    setFormInput({ ...formInput, grossIncome: value });
  };

  const handleReveal = () => {
    setShowResults(true);
  };

  const yearsToEarn = calculation.netIncome / (29 * 40 * 52);
  const keepPercentage = calculation.effectiveRate.toFixed(1);

  const shareTextLinkedIn = `I just used the $1M Tax Reality Calculator from @YourLifeInSeconds and discovered something shocking about taxes. 📊\n\nWith $1M gross income, I actually keep only ${keepPercentage}% after federal, state, FICA, and inflation.\n\nTax transparency matters. Check yours: [link]`;

  const shareTextX = `The $1M tax reality check 🤯\n\n$1M gross income → Only ${keepPercentage}% actually kept after taxes & inflation\n\nCalc from @yourlifeinsecsnd`;

  return (
    <section
      id="tax-reality"
      className="bg-brand-bg-secondary py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            $1M TAX REALITY TOOL
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Think $1 Million{' '}
            <span className="text-gradient">Is a Lot?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Discover how much you actually keep after federal taxes, state taxes, FICA, and inflation erode your earnings.
          </p>
        </div>

        {/* Input Card */}
        <div className="mb-8 rounded-2xl border border-border-subtle bg-brand-card p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Annual Gross Income */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Annual Gross Income
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">
                  $
                </span>
                <input
                  type="text"
                  value={formInput.grossIncome}
                  onChange={handleGrossIncomeChange}
                  className="w-full rounded-lg border border-border-subtle bg-brand-input py-3 pl-8 pr-4 font-mono text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="1,000,000"
                />
              </div>
            </div>

            {/* State */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                State
              </label>
              <select
                value={formInput.state}
                onChange={(e) =>
                  setFormInput({ ...formInput, state: e.target.value })
                }
                className="w-full rounded-lg border border-border-subtle bg-brand-input py-3 px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              >
                {STATES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name} ({(s.rate * 100).toFixed(s.rate === 0 ? 0 : 2)}%)
                  </option>
                ))}
              </select>
            </div>

            {/* Filing Status */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Filing Status
              </label>
              <select
                value={formInput.filingStatus}
                onChange={(e) =>
                  setFormInput({
                    ...formInput,
                    filingStatus: e.target.value as
                      | 'single'
                      | 'married'
                      | 'head_of_household',
                  })
                }
                className="w-full rounded-lg border border-border-subtle bg-brand-input py-3 px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              >
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="head_of_household">Head of Household</option>
              </select>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleReveal}
            className="mt-8 w-full rounded-lg bg-gradient-to-r from-accent to-accent-bright py-4 font-semibold text-brand-bg shadow-lg hover:shadow-xl transition-shadow"
          >
            Reveal My Tax Reality
          </button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-8">
            {/* Waterfall Chart */}
            <div className="rounded-2xl border border-border-subtle bg-brand-card p-8">
              <h3 className="mb-8 text-xl font-bold text-text-primary">
                Your Tax Waterfall
              </h3>

              <div className="space-y-6">
                {/* Gross Income */}
                <div>
                  <div className="mb-2 flex items-end justify-between">
                    <span className="font-semibold text-text-primary">
                      Gross Income
                    </span>
                    <span className="font-mono text-lg font-bold text-accent">
                      {formatCurrency(calculation.grossIncome)}
                    </span>
                  </div>
                  <div className="h-12 w-full rounded-lg bg-accent/20"></div>
                </div>

                {/* Federal Tax */}
                <div>
                  <div className="mb-2 flex items-end justify-between">
                    <span className="font-semibold text-text-primary">
                      Federal Tax
                    </span>
                    <span className="font-mono text-lg font-bold text-status-danger">
                      -{formatCurrency(calculation.federalTax)}
                    </span>
                  </div>
                  <div
                    className="h-12 rounded-lg bg-status-danger/20"
                    style={{
                      width: `${(calculation.federalTax / calculation.grossIncome) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* State Tax */}
                <div>
                  <div className="mb-2 flex items-end justify-between">
                    <span className="font-semibold text-text-primary">
                      State Tax
                    </span>
                    <span className="font-mono text-lg font-bold text-status-warning">
                      -{formatCurrency(calculation.stateTax)}
                    </span>
                  </div>
                  <div
                    className="h-12 rounded-lg bg-status-warning/20"
                    style={{
                      width: `${(calculation.stateTax / calculation.grossIncome) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* FICA */}
                <div>
                  <div className="mb-2 flex items-end justify-between">
                    <span className="font-semibold text-text-primary">
                      FICA &amp; Medicare
                    </span>
                    <span className="font-mono text-lg font-bold text-status-info">
                      -{formatCurrency(calculation.ficaTax)}
                    </span>
                  </div>
                  <div
                    className="h-12 rounded-lg bg-status-info/20"
                    style={{
                      width: `${(calculation.ficaTax / calculation.grossIncome) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Inflation Erosion */}
                <div>
                  <div className="mb-2 flex items-end justify-between">
                    <span className="font-semibold text-text-primary">
                      Inflation Erosion (3%)
                    </span>
                    <span className="font-mono text-lg font-bold text-text-muted">
                      -{formatCurrency(calculation.inflationErosion)}
                    </span>
                  </div>
                  <div
                    className="h-12 rounded-lg bg-text-muted/10"
                    style={{
                      width: `${(calculation.inflationErosion / calculation.grossIncome) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Net Income */}
                <div>
                  <div className="mb-2 flex items-end justify-between">
                    <span className="font-semibold text-text-primary">
                      What You Actually Keep
                    </span>
                    <span className="font-mono text-xl font-bold text-gradient">
                      {formatCurrency(calculation.netIncome)}
                    </span>
                  </div>
                  <div className="h-16 w-full rounded-lg border-2 border-accent bg-accent/10"></div>
                </div>
              </div>
            </div>

            {/* Insight Box */}
            <div className="rounded-2xl border border-border-subtle bg-brand-elevated p-8">
              <h3 className="mb-4 text-xl font-bold text-text-primary">
                The Real Numbers
              </h3>
              <div className="space-y-3 text-lg">
                <p className="text-text-secondary">
                  You keep{' '}
                  <span className="font-mono font-bold text-accent">
                    {keepPercentage}%
                  </span>{' '}
                  of every dollar earned.
                </p>
                <p className="text-text-secondary">
                  At the U.S. median hourly wage of{' '}
                  <span className="font-mono font-bold text-accent">$29/hr</span>
                  , it would take{' '}
                  <span className="font-mono font-bold text-accent">
                    {formatNumber(Math.ceil(yearsToEarn))} years
                  </span>{' '}
                  of full-time work to earn what you keep.
                </p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex gap-4">
              <a
                href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shareTextLinkedIn)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-subtle bg-brand-card py-4 font-semibold text-text-primary hover:border-accent-dim hover:bg-brand-elevated transition-colors"
              >
                <Linkedin size={20} />
                Share on LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTextX)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-subtle bg-brand-card py-4 font-semibold text-text-primary hover:border-accent-dim hover:bg-brand-elevated transition-colors"
              >
                <Twitter size={20} />
                Share on X
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TaxReality;
