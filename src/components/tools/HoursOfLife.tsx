'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

type IconProps = { className?: string; size?: number };
const ArrowRight = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const Trash = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
);
const Plus = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);

interface Expense {
  id: number;
  name: string;
  amount: string;
}

function formatCompactSeconds(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return '∞';
  if (seconds >= 1e9) return `${(seconds / 1e9).toFixed(2)}B`;
  if (seconds >= 1e6) return `${(seconds / 1e6).toFixed(2)}M`;
  if (seconds >= 1e3) return `${(seconds / 1e3).toFixed(1)}K`;
  return Math.round(seconds).toLocaleString();
}

function formatHours(n: number): string {
  if (!isFinite(n)) return '∞';
  return n.toLocaleString('en-US', { maximumFractionDigits: 1 });
}

export default function HoursOfLife() {
  const [grossAnnual, setGrossAnnual] = useState('85000');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [taxRate, setTaxRate] = useState('25');
  const [workingYears, setWorkingYears] = useState('40');
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, name: 'Rent / Mortgage', amount: '1850' },
    { id: 2, name: 'Car payment + insurance', amount: '620' },
    { id: 3, name: 'Groceries + dining', amount: '700' },
    { id: 4, name: 'Subscriptions + phone', amount: '185' },
    { id: 5, name: 'Utilities', amount: '210' },
  ]);

  const result = useMemo(() => {
    const gross = parseFloat(grossAnnual) || 0;
    const hpw = parseFloat(hoursPerWeek) || 0;
    const tax = parseFloat(taxRate) || 0;
    const years = parseFloat(workingYears) || 0;

    const workingHoursPerYear = hpw * 50; // 50 wks assuming 2 vacation
    const netHourly = workingHoursPerYear > 0 ? (gross * (1 - tax / 100)) / workingHoursPerYear : 0;

    const items = expenses.map((e) => {
      const amount = parseFloat(e.amount) || 0;
      const monthlyHours = netHourly > 0 ? amount / netHourly : 0;
      const annualHours = monthlyHours * 12;
      const lifetimeHours = annualHours * years;
      const lifetimeSeconds = lifetimeHours * 3600;
      return { ...e, amount, monthlyHours, annualHours, lifetimeHours, lifetimeSeconds };
    });

    const totalMonthlyHours = items.reduce((s, i) => s + i.monthlyHours, 0);
    const totalAnnualHours = totalMonthlyHours * 12;
    const totalLifetimeHours = totalAnnualHours * years;
    const totalLifetimeSeconds = totalLifetimeHours * 3600;

    const sortedItems = [...items].sort((a, b) => b.monthlyHours - a.monthlyHours);
    const maxMonthlyHours = sortedItems[0]?.monthlyHours || 1;

    return {
      netHourly, items, sortedItems, maxMonthlyHours,
      totalMonthlyHours, totalAnnualHours, totalLifetimeHours, totalLifetimeSeconds,
    };
  }, [grossAnnual, hoursPerWeek, taxRate, workingYears, expenses]);

  const addExpense = () => {
    const nextId = (expenses[expenses.length - 1]?.id ?? 0) + 1;
    setExpenses([...expenses, { id: nextId, name: 'New expense', amount: '0' }]);
  };

  const updateExpense = (id: number, field: 'name' | 'amount', value: string) => {
    setExpenses(expenses.map((e) => (e.id === id ? { ...e, [field]: value } : e)));
  };

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <main className="bg-brand-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <Link href="/tools" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-8">
          ← All Tools
        </Link>

        <div className="text-center mb-12">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">LIFE DESIGN TOOL</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hours of Your <span className="text-gradient">Life Budget</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every expense is hours of working life sold. See what you're actually trading — in hours, not dollars.
          </p>
        </div>

        {/* Hourly rate summary */}
        <div className="bg-brand-card border border-accent-dim rounded-xl p-6 mb-8 text-center">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">YOUR NET HOURLY RATE</p>
          <p className="text-4xl font-bold font-mono text-gradient">${result.netHourly.toFixed(2)}</p>
          <p className="text-xs text-text-muted mt-2">
            ${parseFloat(grossAnnual).toLocaleString()}/yr × (1 − {taxRate}% tax) ÷ {parseFloat(hoursPerWeek) * 50} working hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Income + Expenses Inputs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand-card border border-subtle rounded-xl p-6">
              <h2 className="text-lg font-bold mb-5">Your Income</h2>
              <div className="space-y-5">
                <Field label="Gross Annual Income" prefix="$" value={grossAnnual} onChange={setGrossAnnual} />
                <Field label="Hours Worked per Week" value={hoursPerWeek} onChange={setHoursPerWeek} />
                <Field label="Effective Tax Rate" suffix="%" value={taxRate} onChange={setTaxRate} />
                <Field label="Working Years Remaining" value={workingYears} onChange={setWorkingYears} />
              </div>
            </div>

            <div className="bg-brand-card border border-subtle rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold">Monthly Expenses</h2>
                <button
                  onClick={addExpense}
                  className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-bright font-semibold"
                  type="button"
                >
                  <Plus size={14} /> Add
                </button>
              </div>
              <div className="space-y-3">
                {expenses.map((e) => (
                  <div key={e.id} className="flex gap-2">
                    <input
                      type="text"
                      value={e.name}
                      onChange={(ev) => updateExpense(e.id, 'name', ev.target.value)}
                      className="flex-1 bg-brand-input border border-subtle rounded-lg px-3 py-2 text-sm text-text-primary focus:border-accent-dim focus:outline-none"
                    />
                    <div className="relative w-28">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">$</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        value={e.amount}
                        onChange={(ev) => updateExpense(e.id, 'amount', ev.target.value)}
                        className="w-full bg-brand-input border border-subtle rounded-lg pl-7 pr-2 py-2 text-sm text-text-primary font-mono focus:border-accent-dim focus:outline-none"
                      />
                    </div>
                    <button
                      onClick={() => removeExpense(e.id)}
                      className="text-text-muted hover:text-status-danger p-2"
                      type="button"
                      aria-label="Remove"
                    >
                      <Trash size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero */}
            <div className="bg-gradient-to-br from-brand-card to-brand-card-hover border border-accent-dim rounded-xl p-8 text-center">
              <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-3">LIFETIME SECONDS YOU'RE TRADING</p>
              <p className="text-6xl lg:text-7xl font-bold font-mono text-gradient mb-2">
                {formatCompactSeconds(result.totalLifetimeSeconds)}
              </p>
              <p className="text-text-secondary text-sm">
                {formatHours(result.totalLifetimeHours)} hours over {workingYears} working years — on this expense list alone.
              </p>
            </div>

            {/* Cadence breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">HOURS / MONTH</p>
                <p className="text-2xl font-bold font-mono text-accent">{formatHours(result.totalMonthlyHours)}</p>
              </div>
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">HOURS / YEAR</p>
                <p className="text-2xl font-bold font-mono text-accent">{formatHours(result.totalAnnualHours)}</p>
              </div>
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">HOURS / LIFETIME</p>
                <p className="text-2xl font-bold font-mono text-accent">{formatHours(result.totalLifetimeHours)}</p>
              </div>
            </div>

            {/* Expense ranking */}
            <div className="bg-brand-card border border-subtle rounded-xl p-6">
              <h3 className="text-lg font-bold mb-1">What Each Expense Costs You</h3>
              <p className="text-xs text-text-muted mb-5">Ranked by monthly hours sold.</p>
              <div className="space-y-4">
                {result.sortedItems.map((item) => {
                  const pct = result.maxMonthlyHours > 0 ? (item.monthlyHours / result.maxMonthlyHours) * 100 : 0;
                  return (
                    <div key={item.id}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-text-primary">{item.name || '(unnamed)'}</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-mono font-bold text-accent">{formatHours(item.monthlyHours)} hrs/mo</span>
                          <span className="text-[10px] text-text-muted">= {formatCompactSeconds(item.lifetimeSeconds)} sec lifetime</span>
                        </div>
                      </div>
                      <div className="h-2 bg-brand-bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-accent-blue transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/tools/degree-in-seconds"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
              >
                Next: Degree in Seconds
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/priced-in-hours-not-dollars"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-subtle text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-accent-dim transition-colors"
              >
                Read "Priced in Hours, Not Dollars"
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
