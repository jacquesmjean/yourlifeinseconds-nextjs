'use client';

import React, { useMemo, useState } from 'react';

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

const formatNumber = (value: number): string =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
    Number.isFinite(value) ? value : 0
  );

const parseNumber = (s: string): number => {
  const n = parseFloat(s.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
};

interface SimResult {
  months: number;
  totalInterest: number;
  impossible: boolean;
  capped: boolean;
}

const MAX_MONTHS = 600;

const computeMonthlyPI = (balance: number, rate: number, termYears: number): number => {
  const monthlyRate = rate / 100 / 12;
  const n = Math.max(1, Math.round(termYears * 12));
  if (monthlyRate === 0) return balance / n;
  return (balance * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
    (Math.pow(1 + monthlyRate, n) - 1);
};

const simulate = (
  balance: number,
  rate: number,
  monthlyPI: number,
  extra: number,
  lumpSum: number
): SimResult => {
  if (balance <= 0 || monthlyPI <= 0) {
    return { months: 0, totalInterest: 0, impossible: false, capped: false };
  }
  let b = balance - Math.max(0, lumpSum);
  if (b <= 0) return { months: 0, totalInterest: 0, impossible: false, capped: false };
  const monthlyRate = rate / 100 / 12;
  if (monthlyPI + extra <= b * monthlyRate) {
    return { months: Infinity, totalInterest: Infinity, impossible: true, capped: false };
  }
  let months = 0;
  let totalInterest = 0;
  while (b > 0 && months < MAX_MONTHS) {
    const interest = b * monthlyRate;
    let principal = monthlyPI + extra - interest;
    if (principal <= 0) {
      return { months: Infinity, totalInterest: Infinity, impossible: true, capped: false };
    }
    if (principal > b) principal = b;
    totalInterest += interest;
    b -= principal;
    months += 1;
  }
  return {
    months,
    totalInterest: Math.round(totalInterest),
    impossible: false,
    capped: months >= MAX_MONTHS && b > 0,
  };
};

const formatYearsMonths = (months: number): string => {
  if (!Number.isFinite(months)) return '—';
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m}mo`;
  if (m === 0) return `${y}y`;
  return `${y}y ${m}mo`;
};

const labelCls =
  'mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent';
const inputCls =
  'w-full rounded-lg border border-subtle bg-brand-input py-3 px-4 font-mono text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';

const MortgagePayoff: React.FC = () => {
  const [balance, setBalance] = useState('350,000');
  const [rate, setRate] = useState('6.5');
  const [term, setTerm] = useState('28');
  const [extra, setExtra] = useState('200');
  const [lumpSum, setLumpSum] = useState('0');
  const [age, setAge] = useState('35');

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

  const handleDecimal =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value.replace(/[^0-9.]/g, ''));
    };

  const nBalance = useMemo(() => parseNumber(balance), [balance]);
  const nRate = useMemo(() => parseNumber(rate), [rate]);
  const nTerm = useMemo(() => parseNumber(term), [term]);
  const nExtra = useMemo(() => parseNumber(extra), [extra]);
  const nLump = useMemo(() => parseNumber(lumpSum), [lumpSum]);
  const nAge = useMemo(() => parseNumber(age), [age]);

  const monthlyPI = useMemo(
    () => computeMonthlyPI(nBalance, nRate, nTerm),
    [nBalance, nRate, nTerm]
  );

  const baseline = useMemo(
    () => simulate(nBalance, nRate, monthlyPI, 0, 0),
    [nBalance, nRate, monthlyPI]
  );

  const accelerated = useMemo(
    () => simulate(nBalance, nRate, monthlyPI, nExtra, nLump),
    [nBalance, nRate, monthlyPI, nExtra, nLump]
  );

  const monthsSaved =
    !baseline.impossible && !accelerated.impossible
      ? Math.max(0, baseline.months - accelerated.months)
      : 0;
  const interestSaved =
    !baseline.impossible && !accelerated.impossible
      ? Math.max(0, baseline.totalInterest - accelerated.totalInterest)
      : 0;

  const WAGE = 29;
  const yearsReclaimed = monthsSaved / 12;
  const incomeReclaimed = (monthsSaved / 12) * WAGE * 2080;

  const ageBaseline = nAge + baseline.months / 12;
  const ageAccelerated = nAge + accelerated.months / 12;

  const monthlyInterestCheck = nBalance * (nRate / 100 / 12);
  const underwater = monthlyPI > 0 && monthlyPI <= monthlyInterestCheck;

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-2xl border border-subtle bg-brand-card p-6 sm:p-8">
        <div className="mb-4 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
          Your Mortgage
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="mp-balance" className={labelCls}>Current Balance</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">$</span>
              <input id="mp-balance" type="text" inputMode="decimal" value={balance}
                onChange={handleFormattedChange(setBalance)} className={`${inputCls} pl-8`} />
            </div>
          </div>
          <div>
            <label htmlFor="mp-rate" className={labelCls}>Interest Rate %</label>
            <input id="mp-rate" type="text" inputMode="decimal" value={rate}
              onChange={handleDecimal(setRate)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="mp-term" className={labelCls}>Remaining Term (years)</label>
            <input id="mp-term" type="text" inputMode="decimal" value={term}
              onChange={handleDecimal(setTerm)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="mp-extra" className={labelCls}>Extra Monthly Payment</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">$</span>
              <input id="mp-extra" type="text" inputMode="decimal" value={extra}
                onChange={handleFormattedChange(setExtra)} className={`${inputCls} pl-8`} />
            </div>
          </div>
          <div>
            <label htmlFor="mp-lump" className={labelCls}>Lump Sum Today (optional)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">$</span>
              <input id="mp-lump" type="text" inputMode="decimal" value={lumpSum}
                onChange={handleFormattedChange(setLumpSum)} className={`${inputCls} pl-8`} />
            </div>
          </div>
          <div>
            <label htmlFor="mp-age" className={labelCls}>Current Age (optional)</label>
            <input id="mp-age" type="text" inputMode="decimal" value={age}
              onChange={handleDecimal(setAge)} className={inputCls} />
          </div>
        </div>
      </div>

      {/* Warning */}
      {underwater && (
        <div role="alert" className="rounded-2xl border border-status-danger/40 bg-status-danger/10 p-6">
          <div className="mb-1 text-xs font-mono font-semibold uppercase tracking-widest text-status-danger">
            Heads up
          </div>
          <p className="text-text-primary">
            The calculated minimum payment ({formatCurrency(monthlyPI)}) barely
            covers interest at this rate. Double-check your inputs — a proper
            mortgage P&amp;I should pay down principal every month.
          </p>
        </div>
      )}

      {/* Side by side */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-subtle bg-brand-card p-6">
          <div className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-text-muted">
            Baseline
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-sm text-text-secondary">Payoff time</div>
              <div className="font-mono text-2xl font-bold text-text-primary">
                {formatYearsMonths(baseline.months)}
              </div>
            </div>
            <div>
              <div className="text-sm text-text-secondary">Total interest</div>
              <div className="font-mono text-xl font-bold text-status-danger">
                {baseline.impossible ? '—' : formatCurrency(baseline.totalInterest)}
              </div>
            </div>
            <div>
              <div className="text-sm text-text-secondary">Monthly P&amp;I</div>
              <div className="font-mono text-xl font-bold text-text-primary">
                {formatCurrency(monthlyPI)}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-accent-dim bg-brand-card p-6">
          <div className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Accelerated
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-sm text-text-secondary">Payoff time</div>
              <div className="font-mono text-2xl font-bold text-gradient">
                {formatYearsMonths(accelerated.months)}
              </div>
            </div>
            <div>
              <div className="text-sm text-text-secondary">Total interest</div>
              <div className="font-mono text-xl font-bold text-accent">
                {accelerated.impossible ? '—' : formatCurrency(accelerated.totalInterest)}
              </div>
            </div>
            <div>
              <div className="text-sm text-text-secondary">Monthly P&amp;I + Extra</div>
              <div className="font-mono text-xl font-bold text-text-primary">
                {formatCurrency(monthlyPI + nExtra)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big callout */}
      {!baseline.impossible && !accelerated.impossible && monthsSaved > 0 && (
        <div className="rounded-2xl border border-accent-dim bg-brand-elevated p-6 sm:p-8 text-center">
          <div className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            The Payoff
          </div>
          <p className="font-mono text-3xl sm:text-4xl font-bold text-gradient">
            Pay off {formatYearsMonths(monthsSaved)} sooner.
          </p>
          <p className="mt-2 text-lg text-text-secondary">
            Save{' '}
            <span className="font-mono font-bold text-accent">
              {formatCurrency(interestSaved)}
            </span>{' '}
            in interest.
          </p>
          {nAge > 0 && (
            <p className="mt-4 text-text-secondary">
              Mortgage-free at age{' '}
              <span className="font-mono font-bold text-gradient">
                {ageAccelerated.toFixed(1)}
              </span>{' '}
              instead of{' '}
              <span className="font-mono font-bold text-text-primary">
                {ageBaseline.toFixed(1)}
              </span>
              .
            </p>
          )}
        </div>
      )}

      {/* Life angle */}
      {!baseline.impossible && !accelerated.impossible && monthsSaved > 0 && (
        <div className="rounded-2xl border border-accent-dim bg-brand-card p-6 sm:p-8">
          <div className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Life Reclaimed
          </div>
          <p className="text-lg text-text-secondary">
            That&rsquo;s{' '}
            <span className="font-mono font-bold text-gradient">
              {yearsReclaimed.toFixed(1)} years
            </span>{' '}
            of your life reclaimed from the bank. At $29/hr, that&rsquo;s{' '}
            <span className="font-mono font-bold text-accent">
              {formatCurrency(incomeReclaimed)}
            </span>{' '}
            of income that&rsquo;s yours to keep.
          </p>
        </div>
      )}

      {accelerated.capped && (
        <div role="status" className="rounded-2xl border border-subtle bg-brand-card p-6">
          <p className="text-sm text-text-secondary">
            Simulation capped at 600 months. Try increasing the extra payment or
            double-check your inputs.
          </p>
        </div>
      )}
    </div>
  );
};

export default MortgagePayoff;
