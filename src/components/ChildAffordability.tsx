'use client';

import React, { useState, useMemo } from 'react';

// Reuse US states list (names only — cost-of-living multipliers below)
const STATES: Array<{ code: string; name: string }> = [
  { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' }, { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' },
  { code: 'DC', name: 'District of Columbia' }, { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' }, { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' }, { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' }, { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' }, { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' }, { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' }, { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' }, { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
];

// Directional cost-of-living multipliers. High-cost metros on the coasts ~1.3x,
// upper-mid-cost 1.15x, average 1.0x, and low-cost South/Midwest 0.85–0.95x.
const COL_MULT: Record<string, number> = {
  HI: 1.3, CA: 1.3, MA: 1.3, NY: 1.3, NJ: 1.3, CT: 1.3, DC: 1.3,
  WA: 1.15, OR: 1.15, CO: 1.15, MD: 1.15, VA: 1.15, IL: 1.15,
  NH: 1.1, RI: 1.1, VT: 1.1, AK: 1.1, MN: 1.05, DE: 1.05, PA: 1.05,
  AZ: 1.0, NV: 1.0, UT: 1.0, ME: 1.0, WI: 0.95, MI: 0.95, FL: 1.0,
  NC: 0.95, GA: 0.95, TX: 0.95, MT: 0.95, WY: 0.95, ID: 0.95, NM: 0.9,
  NE: 0.9, IA: 0.9, KS: 0.9, MO: 0.9, IN: 0.9, OH: 0.9, SC: 0.9,
  TN: 0.9, KY: 0.88, LA: 0.88, AL: 0.85, AR: 0.85, MS: 0.85,
  WV: 0.85, OK: 0.85, ND: 0.95, SD: 0.9,
};

const BASE_COST = 310000; // USDA $310K per child to age 18 (directional, 2024 dollars)
const TOTAL_YEARS = 18;

const CATEGORIES: Array<{ name: string; pct: number; color: string }> = [
  { name: 'Housing', pct: 0.29, color: 'bg-accent' },
  { name: 'Food', pct: 0.18, color: 'bg-accent-blue' },
  { name: 'Childcare/Education', pct: 0.16, color: 'bg-accent-bright' },
  { name: 'Transportation', pct: 0.15, color: 'bg-status-info' },
  { name: 'Healthcare', pct: 0.09, color: 'bg-status-warning' },
  { name: 'Clothing', pct: 0.06, color: 'bg-status-danger' },
  { name: 'Other', pct: 0.07, color: 'bg-text-muted' },
];

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value: number): string =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);

const ChildAffordability: React.FC = () => {
  const [state, setState] = useState<string>('CA');
  const [kids, setKids] = useState<number>(1);
  const [years, setYears] = useState<number>(18);
  const [wage, setWage] = useState<string>('29');

  const numWage = useMemo(() => {
    const n = parseFloat(wage.replace(/[^0-9.]/g, ''));
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [wage]);

  const multiplier = COL_MULT[state] ?? 1.0;
  const perKid = BASE_COST * multiplier * (Math.min(years, TOTAL_YEARS) / TOTAL_YEARS);
  const total = perKid * kids;
  const monthly = total / (years * 12);
  const annual = total / years;

  const workingHours = numWage > 0 ? total / numWage : 0;
  const workingYears = workingHours / (40 * 52);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-2xl border border-subtle bg-brand-card p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label
              htmlFor="ca-state"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              State
            </label>
            <select
              id="ca-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full rounded-lg border border-subtle bg-brand-input py-3 px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              {STATES.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="ca-kids"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              Number of Kids
            </label>
            <input
              id="ca-kids"
              type="number"
              min={1}
              max={10}
              value={kids}
              onChange={(e) => setKids(Math.max(1, parseInt(e.target.value || '1', 10)))}
              className="w-full rounded-lg border border-subtle bg-brand-input py-3 px-4 font-mono text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <div>
            <label
              htmlFor="ca-years"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              Years to Project
            </label>
            <input
              id="ca-years"
              type="number"
              min={1}
              max={18}
              value={years}
              onChange={(e) =>
                setYears(Math.min(18, Math.max(1, parseInt(e.target.value || '1', 10))))
              }
              className="w-full rounded-lg border border-subtle bg-brand-input py-3 px-4 font-mono text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <div>
            <label
              htmlFor="ca-wage"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              Your Wage ($/hr)
            </label>
            <input
              id="ca-wage"
              type="text"
              inputMode="decimal"
              value={wage}
              onChange={(e) => setWage(e.target.value.replace(/[^0-9.]/g, ''))}
              className="w-full rounded-lg border border-subtle bg-brand-input py-3 px-4 font-mono text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="29"
            />
          </div>
        </div>
        <p className="mt-4 text-xs text-text-muted">
          Base: USDA ~$310K per child to age 18 (2024 dollars), adjusted by a directional
          cost-of-living multiplier for your state ({multiplier.toFixed(2)}x). Directional only —
          not a precise forecast.
        </p>
      </div>

      {/* Totals */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-accent-dim bg-brand-card p-6">
          <div className="mb-1 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Total Cost
          </div>
          <div className="font-mono text-2xl font-bold text-gradient">
            {formatCurrency(total)}
          </div>
          <div className="mt-1 text-xs text-text-muted">over {years} years</div>
        </div>
        <div className="rounded-2xl border border-subtle bg-brand-card p-6">
          <div className="mb-1 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Per Kid
          </div>
          <div className="font-mono text-2xl font-bold text-text-primary">
            {formatCurrency(perKid)}
          </div>
          <div className="mt-1 text-xs text-text-muted">{kids} kid{kids === 1 ? '' : 's'}</div>
        </div>
        <div className="rounded-2xl border border-subtle bg-brand-card p-6">
          <div className="mb-1 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Annual
          </div>
          <div className="font-mono text-2xl font-bold text-text-primary">
            {formatCurrency(annual)}
          </div>
        </div>
        <div className="rounded-2xl border border-subtle bg-brand-card p-6">
          <div className="mb-1 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Monthly
          </div>
          <div className="font-mono text-2xl font-bold text-text-primary">
            {formatCurrency(monthly)}
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="rounded-2xl border border-subtle bg-brand-card p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-bold text-text-primary">Cost Breakdown</h2>
        <div className="space-y-4">
          {CATEGORIES.map((cat) => {
            const value = total * cat.pct;
            return (
              <div key={cat.name}>
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-text-primary">
                    {cat.name}{' '}
                    <span className="text-text-muted font-mono">
                      ({(cat.pct * 100).toFixed(0)}%)
                    </span>
                  </span>
                  <span className="font-mono text-accent">{formatCurrency(value)}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-brand-input">
                  <div
                    className={`h-2 rounded-full ${cat.color}`}
                    style={{ width: `${cat.pct * 100}%` }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* On-brand callout */}
      {numWage > 0 && (
        <div className="rounded-2xl border border-accent-dim bg-brand-elevated p-6 sm:p-8">
          <div className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Life Cost
          </div>
          <p className="text-lg text-text-secondary">
            At{' '}
            <span className="font-mono font-bold text-accent">
              ${numWage.toFixed(2)}/hr
            </span>
            , this total equals{' '}
            <span className="font-mono font-bold text-gradient">
              {formatNumber(workingHours)} working hours
            </span>{' '}
            —{' '}
            <span className="font-mono font-bold text-gradient">
              {workingYears.toFixed(1)} years
            </span>{' '}
            of full-time work traded for your kids.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChildAffordability;
