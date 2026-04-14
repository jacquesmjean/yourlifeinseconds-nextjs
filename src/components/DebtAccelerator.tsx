'use client';

import React, { useState, useMemo } from 'react';

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value: number): string =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);

const parseNumber = (s: string): number => {
  const n = parseFloat(s.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
};

interface PayoffResult {
  months: number;
  totalInterest: number;
  totalPaid: number;
  impossible: boolean;
}

// Simulate month-by-month payoff
const simulatePayoff = (
  balance: number,
  apr: number,
  monthlyPayment: number,
  maxMonths = 1200
): PayoffResult => {
  if (balance <= 0 || monthlyPayment <= 0) {
    return { months: 0, totalInterest: 0, totalPaid: 0, impossible: false };
  }
  const monthlyRate = apr / 100 / 12;
  const monthlyInterestOnStart = balance * monthlyRate;
  if (monthlyPayment <= monthlyInterestOnStart) {
    return { months: Infinity, totalInterest: Infinity, totalPaid: Infinity, impossible: true };
  }

  let b = balance;
  let totalInterest = 0;
  let totalPaid = 0;
  let months = 0;

  while (b > 0 && months < maxMonths) {
    const interest = b * monthlyRate;
    const principal = monthlyPayment - interest;
    const payThisMonth = Math.min(monthlyPayment, b + interest);
    const principalPaid = Math.min(principal, b);
    totalInterest += interest;
    totalPaid += payThisMonth;
    b -= principalPaid;
    months += 1;
  }

  return {
    months,
    totalInterest: Math.round(totalInterest),
    totalPaid: Math.round(totalPaid),
    impossible: false,
  };
};

const DebtAccelerator: React.FC = () => {
  const [balance, setBalance] = useState<string>('10,000');
  const [apr, setApr] = useState<string>('19.99');
  const [minPayment, setMinPayment] = useState<string>('250');
  const [extra, setExtra] = useState<string>('100');

  const numBalance = useMemo(() => parseNumber(balance), [balance]);
  const numApr = useMemo(() => parseNumber(apr), [apr]);
  const numMin = useMemo(() => parseNumber(minPayment), [minPayment]);
  const numExtra = useMemo(() => parseNumber(extra), [extra]);

  const baseline = useMemo(
    () => simulatePayoff(numBalance, numApr, numMin),
    [numBalance, numApr, numMin]
  );
  const accelerated = useMemo(
    () => simulatePayoff(numBalance, numApr, numMin + numExtra),
    [numBalance, numApr, numMin, numExtra]
  );

  const handleFormattedChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let v = e.target.value.replace(/[^0-9.]/g, '');
      if (v) {
        const n = parseFloat(v);
        if (!Number.isNaN(n)) v = formatNumber(n);
      }
      setter(v);
    };

  const monthsSaved =
    !baseline.impossible && !accelerated.impossible
      ? baseline.months - accelerated.months
      : 0;
  const interestSaved =
    !baseline.impossible && !accelerated.impossible
      ? baseline.totalInterest - accelerated.totalInterest
      : 0;
  const daysReclaimed = monthsSaved * 30;
  const yearsSaved = monthsSaved / 12;

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-2xl border border-subtle bg-brand-card p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="da-balance"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              Debt Balance
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">
                $
              </span>
              <input
                id="da-balance"
                type="text"
                inputMode="decimal"
                value={balance}
                onChange={handleFormattedChange(setBalance)}
                className="w-full rounded-lg border border-subtle bg-brand-input py-3 pl-8 pr-4 font-mono text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="10,000"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="da-apr"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              APR (%)
            </label>
            <input
              id="da-apr"
              type="text"
              inputMode="decimal"
              value={apr}
              onChange={(e) => setApr(e.target.value.replace(/[^0-9.]/g, ''))}
              className="w-full rounded-lg border border-subtle bg-brand-input py-3 px-4 font-mono text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="19.99"
            />
          </div>
          <div>
            <label
              htmlFor="da-min"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              Minimum Monthly Payment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">
                $
              </span>
              <input
                id="da-min"
                type="text"
                inputMode="decimal"
                value={minPayment}
                onChange={handleFormattedChange(setMinPayment)}
                className="w-full rounded-lg border border-subtle bg-brand-input py-3 pl-8 pr-4 font-mono text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="250"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="da-extra"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              Extra Monthly Payment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">
                $
              </span>
              <input
                id="da-extra"
                type="text"
                inputMode="decimal"
                value={extra}
                onChange={handleFormattedChange(setExtra)}
                className="w-full rounded-lg border border-subtle bg-brand-input py-3 pl-8 pr-4 font-mono text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Warning */}
      {baseline.impossible && (
        <div
          role="alert"
          className="rounded-2xl border border-status-danger/40 bg-status-danger/10 p-6"
        >
          <div className="mb-1 text-xs font-mono font-semibold uppercase tracking-widest text-status-danger">
            Warning
          </div>
          <p className="text-text-primary">
            Your minimum payment of {formatCurrency(numMin)} is too low to cover the monthly
            interest on {formatCurrency(numBalance)} at {numApr}% APR — you&rsquo;ll never pay
            this off. Increase your minimum payment.
          </p>
        </div>
      )}

      {/* Results */}
      {!baseline.impossible && (
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Minimum only */}
          <div className="rounded-2xl border border-subtle bg-brand-card p-6">
            <div className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-text-muted">
              Minimum Only
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-text-secondary">Months to payoff</div>
                <div className="font-mono text-2xl font-bold text-text-primary">
                  {baseline.months}
                </div>
              </div>
              <div>
                <div className="text-sm text-text-secondary">Total interest</div>
                <div className="font-mono text-xl font-bold text-status-danger">
                  {formatCurrency(baseline.totalInterest)}
                </div>
              </div>
              <div>
                <div className="text-sm text-text-secondary">Total paid</div>
                <div className="font-mono text-xl font-bold text-text-primary">
                  {formatCurrency(baseline.totalPaid)}
                </div>
              </div>
            </div>
          </div>

          {/* With extra */}
          <div className="rounded-2xl border border-accent-dim bg-brand-card p-6">
            <div className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
              With Extra Payment
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-text-secondary">Months to payoff</div>
                <div className="font-mono text-2xl font-bold text-gradient">
                  {accelerated.impossible ? '—' : accelerated.months}
                </div>
              </div>
              <div>
                <div className="text-sm text-text-secondary">Total interest</div>
                <div className="font-mono text-xl font-bold text-accent">
                  {accelerated.impossible
                    ? '—'
                    : formatCurrency(accelerated.totalInterest)}
                </div>
              </div>
              <div>
                <div className="text-sm text-text-secondary">Total paid</div>
                <div className="font-mono text-xl font-bold text-text-primary">
                  {accelerated.impossible
                    ? '—'
                    : formatCurrency(accelerated.totalPaid)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Big payoff callout */}
      {!baseline.impossible && !accelerated.impossible && numExtra > 0 && monthsSaved > 0 && (
        <div className="rounded-2xl border border-accent-dim bg-brand-elevated p-6 sm:p-8">
          <div className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Life Reclaimed
          </div>
          <p className="text-lg text-text-secondary mb-3">
            By paying an extra{' '}
            <span className="font-mono font-bold text-accent">
              {formatCurrency(numExtra)}
            </span>{' '}
            per month, you&rsquo;ll save{' '}
            <span className="font-mono font-bold text-gradient">
              {formatCurrency(interestSaved)}
            </span>{' '}
            and{' '}
            <span className="font-mono font-bold text-gradient">
              {monthsSaved} months
            </span>{' '}
            of life.
          </p>
          <p className="text-text-secondary">
            That&rsquo;s{' '}
            <span className="font-mono font-bold text-accent">
              ~{formatNumber(daysReclaimed)} days
            </span>{' '}
            —{' '}
            <span className="font-mono text-text-primary">
              {yearsSaved.toFixed(1)} years
            </span>{' '}
            — reclaimed from under the weight of debt.
          </p>
        </div>
      )}
    </div>
  );
};

export default DebtAccelerator;
