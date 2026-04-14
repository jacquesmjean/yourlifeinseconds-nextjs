'use client';

import React, { useState, useMemo } from 'react';

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const parseNumber = (s: string): number => {
  const n = parseFloat(s.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
};

const formatNumber = (value: number): string =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);

// Compound growth solver: years to reach a target given monthly contribution
// FV = PMT * (((1+r)^n - 1) / r), where r is monthly rate, n is months
const yearsToReach = (target: number, monthlyContribution: number): number => {
  if (monthlyContribution <= 0) return Infinity;
  const annualRate = 0.07;
  const r = annualRate / 12;
  // n = ln(1 + target*r/PMT) / ln(1+r)
  const inside = 1 + (target * r) / monthlyContribution;
  if (inside <= 0) return Infinity;
  const n = Math.log(inside) / Math.log(1 + r);
  return n / 12;
};

const BudgetPlanner: React.FC = () => {
  const [income, setIncome] = useState<string>('4,000');
  const [needsPct, setNeedsPct] = useState<number>(50);
  const [wantsPct, setWantsPct] = useState<number>(30);
  const [savingsPct, setSavingsPct] = useState<number>(20);

  const monthlyIncome = useMemo(() => parseNumber(income), [income]);

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/[^0-9.]/g, '');
    if (v) {
      const n = parseFloat(v);
      if (!Number.isNaN(n)) v = formatNumber(n);
    }
    setIncome(v);
  };

  // When one slider moves, redistribute to keep total = 100
  const handleSlider = (which: 'needs' | 'wants' | 'savings', value: number) => {
    const clamped = Math.max(0, Math.min(100, value));
    if (which === 'needs') {
      const remaining = 100 - clamped;
      const otherTotal = wantsPct + savingsPct || 1;
      const newWants = Math.round((wantsPct / otherTotal) * remaining);
      const newSavings = 100 - clamped - newWants;
      setNeedsPct(clamped);
      setWantsPct(newWants);
      setSavingsPct(newSavings);
    } else if (which === 'wants') {
      const remaining = 100 - clamped;
      const otherTotal = needsPct + savingsPct || 1;
      const newNeeds = Math.round((needsPct / otherTotal) * remaining);
      const newSavings = 100 - clamped - newNeeds;
      setWantsPct(clamped);
      setNeedsPct(newNeeds);
      setSavingsPct(newSavings);
    } else {
      const remaining = 100 - clamped;
      const otherTotal = needsPct + wantsPct || 1;
      const newNeeds = Math.round((needsPct / otherTotal) * remaining);
      const newWants = 100 - clamped - newNeeds;
      setSavingsPct(clamped);
      setNeedsPct(newNeeds);
      setWantsPct(newWants);
    }
  };

  const needs = (monthlyIncome * needsPct) / 100;
  const wants = (monthlyIncome * wantsPct) / 100;
  const savings = (monthlyIncome * savingsPct) / 100;

  const years100k = yearsToReach(100000, savings);
  const years1m = yearsToReach(1_000_000, savings);

  // Example allocations within needs (rent 60%, food 20%, utilities 10%, transport 10%)
  const rent = needs * 0.6;
  const food = needs * 0.2;
  const utilities = needs * 0.1;
  const transport = needs * 0.1;
  // Wants: entertainment 40%, dining 35%, hobbies 25%
  const entertainment = wants * 0.4;
  const dining = wants * 0.35;
  const hobbies = wants * 0.25;
  // Savings: emergency 35%, retirement 40%, debt 25%
  const emergency = savings * 0.35;
  const retirement = savings * 0.4;
  const debt = savings * 0.25;

  return (
    <div className="space-y-6">
      {/* Input */}
      <div className="rounded-2xl border border-subtle bg-brand-card p-6 sm:p-8">
        <label
          htmlFor="bp-income"
          className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
        >
          Monthly After-Tax Income
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">
            $
          </span>
          <input
            id="bp-income"
            type="text"
            inputMode="decimal"
            value={income}
            onChange={handleIncomeChange}
            aria-label="Monthly after-tax income"
            className="w-full rounded-lg border border-subtle bg-brand-input py-3 pl-8 pr-4 font-mono text-lg text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="4,000"
          />
        </div>
      </div>

      {/* Custom splits */}
      <div className="rounded-2xl border border-subtle bg-brand-card p-6 sm:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-text-primary">Your Split</h2>
          <button
            type="button"
            onClick={() => {
              setNeedsPct(50);
              setWantsPct(30);
              setSavingsPct(20);
            }}
            className="press-active text-xs font-mono uppercase tracking-wider text-accent hover:underline"
          >
            Reset to 50/30/20
          </button>
        </div>

        <div className="space-y-5">
          {/* Needs */}
          <div>
            <div className="mb-1 flex items-baseline justify-between">
              <label htmlFor="bp-needs" className="text-sm font-semibold text-text-primary">
                Needs
              </label>
              <span className="font-mono text-accent">{needsPct}%</span>
            </div>
            <input
              id="bp-needs"
              type="range"
              min={0}
              max={100}
              value={needsPct}
              onChange={(e) => handleSlider('needs', parseInt(e.target.value, 10))}
              className="w-full accent-accent"
              aria-label="Needs percentage"
            />
          </div>
          {/* Wants */}
          <div>
            <div className="mb-1 flex items-baseline justify-between">
              <label htmlFor="bp-wants" className="text-sm font-semibold text-text-primary">
                Wants
              </label>
              <span className="font-mono text-accent">{wantsPct}%</span>
            </div>
            <input
              id="bp-wants"
              type="range"
              min={0}
              max={100}
              value={wantsPct}
              onChange={(e) => handleSlider('wants', parseInt(e.target.value, 10))}
              className="w-full accent-accent"
              aria-label="Wants percentage"
            />
          </div>
          {/* Savings */}
          <div>
            <div className="mb-1 flex items-baseline justify-between">
              <label htmlFor="bp-savings" className="text-sm font-semibold text-text-primary">
                Savings / Debt
              </label>
              <span className="font-mono text-accent">{savingsPct}%</span>
            </div>
            <input
              id="bp-savings"
              type="range"
              min={0}
              max={100}
              value={savingsPct}
              onChange={(e) => handleSlider('savings', parseInt(e.target.value, 10))}
              className="w-full accent-accent"
              aria-label="Savings percentage"
            />
          </div>
        </div>
      </div>

      {/* Buckets */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Needs */}
        <div className="rounded-2xl border border-subtle bg-brand-card p-6">
          <div className="mb-1 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Needs ({needsPct}%)
          </div>
          <div className="mb-3 font-mono text-2xl font-bold text-gradient">
            {formatCurrency(needs)}
          </div>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li>~{formatCurrency(rent)} rent</li>
            <li>~{formatCurrency(food)} food</li>
            <li>~{formatCurrency(utilities)} utilities</li>
            <li>~{formatCurrency(transport)} transport</li>
          </ul>
        </div>

        {/* Wants */}
        <div className="rounded-2xl border border-subtle bg-brand-card p-6">
          <div className="mb-1 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Wants ({wantsPct}%)
          </div>
          <div className="mb-3 font-mono text-2xl font-bold text-gradient">
            {formatCurrency(wants)}
          </div>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li>~{formatCurrency(entertainment)} entertainment</li>
            <li>~{formatCurrency(dining)} dining out</li>
            <li>~{formatCurrency(hobbies)} hobbies</li>
          </ul>
        </div>

        {/* Savings */}
        <div className="rounded-2xl border border-accent-dim bg-brand-card p-6">
          <div className="mb-1 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Savings / Debt ({savingsPct}%)
          </div>
          <div className="mb-3 font-mono text-2xl font-bold text-gradient">
            {formatCurrency(savings)}
          </div>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li>~{formatCurrency(emergency)} emergency</li>
            <li>~{formatCurrency(retirement)} retirement</li>
            <li>~{formatCurrency(debt)} debt paydown</li>
          </ul>
        </div>
      </div>

      {/* On-brand callout */}
      <div className="rounded-2xl border border-accent-dim bg-brand-elevated p-6 sm:p-8">
        <div className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
          Wealth Trajectory (7% annual return)
        </div>
        {savings > 0 ? (
          <p className="text-lg text-text-secondary">
            At {formatCurrency(savings)}/month, you&rsquo;ll hit{' '}
            <span className="font-mono font-bold text-gradient">$100K</span> in{' '}
            <span className="font-mono font-bold text-accent">
              {Number.isFinite(years100k) ? years100k.toFixed(1) : '∞'} years
            </span>{' '}
            and{' '}
            <span className="font-mono font-bold text-gradient">$1M</span> in{' '}
            <span className="font-mono font-bold text-accent">
              {Number.isFinite(years1m) ? years1m.toFixed(1) : '∞'} years
            </span>
            .
          </p>
        ) : (
          <p className="text-lg text-text-secondary">
            Enter an income and allocate a savings percentage to see your wealth trajectory.
          </p>
        )}
      </div>
    </div>
  );
};

export default BudgetPlanner;
