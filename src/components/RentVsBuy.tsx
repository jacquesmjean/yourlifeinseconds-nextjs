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

interface YearRow {
  year: number;
  cumulativeOwningOutOfPocket: number;
  cumulativeRenting: number;
  equity: number;
  opportunityCost: number;
  netOwningCost: number;
  homeValue: number;
  remainingBalance: number;
}

interface Simulation {
  rows: YearRow[];
  monthlyPI: number;
  breakEvenYear: number | null;
}

const simulate = (params: {
  homePrice: number;
  downPct: number;
  rate: number;
  termYears: number;
  propTaxPct: number;
  hoaMonthly: number;
  maintPct: number;
  appreciationPct: number;
  rent: number;
  rentIncPct: number;
  investReturnPct: number;
  years: number;
}): Simulation => {
  const {
    homePrice,
    downPct,
    rate,
    termYears,
    propTaxPct,
    hoaMonthly,
    maintPct,
    appreciationPct,
    rent,
    rentIncPct,
    investReturnPct,
    years,
  } = params;

  const downPayment = homePrice * (downPct / 100);
  const loanAmount = Math.max(homePrice - downPayment, 0);
  const monthlyRate = rate / 100 / 12;
  const nMonths = Math.max(1, Math.round(termYears * 12));
  const monthlyPI =
    monthlyRate === 0
      ? loanAmount / nMonths
      : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, nMonths))) /
        (Math.pow(1 + monthlyRate, nMonths) - 1);

  const rows: YearRow[] = [];
  let homeValue = homePrice;
  let balance = loanAmount;
  let cumulativeOwningOutOfPocket = downPayment; // down payment counts as out-of-pocket
  let cumulativeRenting = 0;
  let currentRent = rent;
  let breakEvenYear: number | null = null;

  for (let y = 1; y <= years; y++) {
    // Simulate 12 months of mortgage
    let yearInterest = 0;
    let yearPrincipal = 0;
    for (let m = 0; m < 12; m++) {
      if (balance <= 0) break;
      const interest = balance * monthlyRate;
      let principal = monthlyPI - interest;
      if (principal > balance) principal = balance;
      yearInterest += interest;
      yearPrincipal += principal;
      balance -= principal;
    }
    const yearPI = yearInterest + yearPrincipal;
    const yearTax = homeValue * (propTaxPct / 100);
    const yearMaint = homeValue * (maintPct / 100);
    const yearHOA = hoaMonthly * 12;
    const yearOwningOutOfPocket = yearPI + yearTax + yearMaint + yearHOA;
    cumulativeOwningOutOfPocket += yearOwningOutOfPocket;

    // Appreciate home at end of year
    homeValue = homeValue * (1 + appreciationPct / 100);

    // Rent
    cumulativeRenting += currentRent * 12;
    currentRent = currentRent * (1 + rentIncPct / 100);

    // Equity & opportunity cost
    const equity = homeValue - Math.max(balance, 0);
    const equityGained = equity - downPayment;
    const opportunityCost =
      downPayment * (Math.pow(1 + investReturnPct / 100, y) - 1);
    const netOwningCost =
      cumulativeOwningOutOfPocket - (equityGained - opportunityCost);

    if (breakEvenYear === null && netOwningCost <= cumulativeRenting) {
      breakEvenYear = y;
    }

    rows.push({
      year: y,
      cumulativeOwningOutOfPocket,
      cumulativeRenting,
      equity,
      opportunityCost,
      netOwningCost,
      homeValue,
      remainingBalance: Math.max(balance, 0),
    });
  }

  return { rows, monthlyPI, breakEvenYear };
};

const labelCls =
  'mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent';
const inputCls =
  'w-full rounded-lg border border-subtle bg-brand-input py-3 px-4 font-mono text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';

const RentVsBuy: React.FC = () => {
  const [homePrice, setHomePrice] = useState('500,000');
  const [downPct, setDownPct] = useState('20');
  const [rate, setRate] = useState('6.5');
  const [term, setTerm] = useState('30');
  const [propTax, setPropTax] = useState('1.2');
  const [hoa, setHoa] = useState('150');
  const [maint, setMaint] = useState('1');
  const [appreciation, setAppreciation] = useState('3');
  const [rent, setRent] = useState('2,500');
  const [rentInc, setRentInc] = useState('3');
  const [investReturn, setInvestReturn] = useState('7');
  const [years, setYears] = useState('10');
  const [wage, setWage] = useState('29');

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

  const nHomePrice = useMemo(() => parseNumber(homePrice), [homePrice]);
  const nDownPct = useMemo(() => parseNumber(downPct), [downPct]);
  const nRate = useMemo(() => parseNumber(rate), [rate]);
  const nTerm = useMemo(() => parseNumber(term), [term]);
  const nPropTax = useMemo(() => parseNumber(propTax), [propTax]);
  const nHoa = useMemo(() => parseNumber(hoa), [hoa]);
  const nMaint = useMemo(() => parseNumber(maint), [maint]);
  const nAppreciation = useMemo(() => parseNumber(appreciation), [appreciation]);
  const nRent = useMemo(() => parseNumber(rent), [rent]);
  const nRentInc = useMemo(() => parseNumber(rentInc), [rentInc]);
  const nInvestReturn = useMemo(() => parseNumber(investReturn), [investReturn]);
  const rawYears = useMemo(() => parseNumber(years), [years]);
  const nYears = Math.max(1, Math.min(30, Math.round(rawYears || 1)));
  const nWage = useMemo(() => parseNumber(wage), [wage]);

  const sim = useMemo(
    () =>
      simulate({
        homePrice: nHomePrice,
        downPct: nDownPct,
        rate: nRate,
        termYears: nTerm,
        propTaxPct: nPropTax,
        hoaMonthly: nHoa,
        maintPct: nMaint,
        appreciationPct: nAppreciation,
        rent: nRent,
        rentIncPct: nRentInc,
        investReturnPct: nInvestReturn,
        years: nYears,
      }),
    [
      nHomePrice,
      nDownPct,
      nRate,
      nTerm,
      nPropTax,
      nHoa,
      nMaint,
      nAppreciation,
      nRent,
      nRentInc,
      nInvestReturn,
      nYears,
    ]
  );

  const finalRow = sim.rows[sim.rows.length - 1];
  const downPayment = nHomePrice * (nDownPct / 100);

  // Monthly breakdown (year 1)
  const monthlyTax = (nHomePrice * (nPropTax / 100)) / 12;
  const monthlyMaint = (nHomePrice * (nMaint / 100)) / 12;
  const monthlyAllIn = sim.monthlyPI + monthlyTax + nHoa + monthlyMaint;

  // Wage calc
  const hoursForDown = nWage > 0 ? downPayment / nWage : 0;
  const workingYears = hoursForDown / 2080; // 40hr * 52wk

  const summary = sim.breakEvenYear
    ? `Break-even: year ${sim.breakEvenYear}`
    : `Renting wins for at least ${nYears} years`;

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-2xl border border-subtle bg-brand-card p-6 sm:p-8">
        <div className="mb-4 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
          Scenario
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="rvb-price" className={labelCls}>Home Price</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">$</span>
              <input id="rvb-price" type="text" inputMode="decimal" value={homePrice}
                onChange={handleFormattedChange(setHomePrice)}
                className={`${inputCls} pl-8`} />
            </div>
          </div>
          <div>
            <label htmlFor="rvb-down" className={labelCls}>Down Payment %</label>
            <input id="rvb-down" type="text" inputMode="decimal" value={downPct}
              onChange={handleDecimal(setDownPct)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rvb-rate" className={labelCls}>Mortgage Rate %</label>
            <input id="rvb-rate" type="text" inputMode="decimal" value={rate}
              onChange={handleDecimal(setRate)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rvb-term" className={labelCls}>Mortgage Term (years)</label>
            <input id="rvb-term" type="text" inputMode="decimal" value={term}
              onChange={handleDecimal(setTerm)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rvb-tax" className={labelCls}>Property Tax %</label>
            <input id="rvb-tax" type="text" inputMode="decimal" value={propTax}
              onChange={handleDecimal(setPropTax)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rvb-hoa" className={labelCls}>HOI + HOA / month</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">$</span>
              <input id="rvb-hoa" type="text" inputMode="decimal" value={hoa}
                onChange={handleFormattedChange(setHoa)}
                className={`${inputCls} pl-8`} />
            </div>
          </div>
          <div>
            <label htmlFor="rvb-maint" className={labelCls}>Maintenance % / year</label>
            <input id="rvb-maint" type="text" inputMode="decimal" value={maint}
              onChange={handleDecimal(setMaint)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rvb-app" className={labelCls}>Home Appreciation % / year</label>
            <input id="rvb-app" type="text" inputMode="decimal" value={appreciation}
              onChange={handleDecimal(setAppreciation)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rvb-rent" className={labelCls}>Monthly Rent</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">$</span>
              <input id="rvb-rent" type="text" inputMode="decimal" value={rent}
                onChange={handleFormattedChange(setRent)}
                className={`${inputCls} pl-8`} />
            </div>
          </div>
          <div>
            <label htmlFor="rvb-rentinc" className={labelCls}>Annual Rent Increase %</label>
            <input id="rvb-rentinc" type="text" inputMode="decimal" value={rentInc}
              onChange={handleDecimal(setRentInc)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rvb-invest" className={labelCls}>Investment Return %</label>
            <input id="rvb-invest" type="text" inputMode="decimal" value={investReturn}
              onChange={handleDecimal(setInvestReturn)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rvb-years" className={labelCls}>
              Years to Compare: <span className="text-text-primary">{nYears}</span>
            </label>
            <input
              id="rvb-years"
              type="range"
              min={1}
              max={30}
              step={1}
              value={nYears}
              onChange={(e) => setYears(e.target.value)}
              aria-valuemin={1}
              aria-valuemax={30}
              aria-valuenow={nYears}
              className="w-full accent-accent"
            />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-2xl border border-accent-dim bg-brand-elevated p-6 sm:p-8 text-center">
        <div className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
          Verdict
        </div>
        <div className="font-mono text-3xl sm:text-4xl font-bold text-gradient">
          {summary}
        </div>
        <p className="mt-3 text-text-secondary">
          Based on a {nYears}-year horizon with your inputs. Comparing the true
          cost of ownership (after equity and opportunity cost) vs. cumulative
          rent.
        </p>
      </div>

      {/* Totals */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-subtle bg-brand-card p-6">
          <div className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-text-muted">
            Total Owning Cost
          </div>
          <div className="font-mono text-3xl font-bold text-text-primary">
            {formatCurrency(finalRow?.netOwningCost ?? 0)}
          </div>
          <div className="mt-3 space-y-1 text-sm text-text-secondary">
            <div className="flex justify-between">
              <span>Out-of-pocket</span>
              <span className="font-mono text-text-primary">
                {formatCurrency(finalRow?.cumulativeOwningOutOfPocket ?? 0)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Equity built</span>
              <span className="font-mono text-text-primary">
                {formatCurrency(finalRow?.equity ?? 0)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Opportunity cost</span>
              <span className="font-mono text-status-danger">
                {formatCurrency(finalRow?.opportunityCost ?? 0)}
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-accent-dim bg-brand-card p-6">
          <div className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Total Renting Cost
          </div>
          <div className="font-mono text-3xl font-bold text-gradient">
            {formatCurrency(finalRow?.cumulativeRenting ?? 0)}
          </div>
          <div className="mt-3 text-sm text-text-secondary">
            Sum of monthly rent over {nYears} years, compounding at{' '}
            <span className="font-mono text-text-primary">{nRentInc}%</span>{' '}
            per year.
          </div>
        </div>
      </div>

      {/* Monthly breakdown */}
      <div className="rounded-2xl border border-subtle bg-brand-card p-6 sm:p-8">
        <div className="mb-4 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
          All-In Monthly Cost of Buying
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex justify-between border-b border-subtle pb-2">
            <span className="text-text-secondary">Principal & Interest</span>
            <span className="font-mono text-text-primary">{formatCurrency(sim.monthlyPI)}</span>
          </div>
          <div className="flex justify-between border-b border-subtle pb-2">
            <span className="text-text-secondary">Property Tax</span>
            <span className="font-mono text-text-primary">{formatCurrency(monthlyTax)}</span>
          </div>
          <div className="flex justify-between border-b border-subtle pb-2">
            <span className="text-text-secondary">Insurance + HOA</span>
            <span className="font-mono text-text-primary">{formatCurrency(nHoa)}</span>
          </div>
          <div className="flex justify-between border-b border-subtle pb-2">
            <span className="text-text-secondary">Maintenance</span>
            <span className="font-mono text-text-primary">{formatCurrency(monthlyMaint)}</span>
          </div>
        </div>
        <div className="mt-4 flex items-baseline justify-between">
          <span className="text-sm font-mono font-semibold uppercase tracking-widest text-accent">
            True Monthly Cost
          </span>
          <span className="font-mono text-3xl font-bold text-gradient">
            {formatCurrency(monthlyAllIn)}
          </span>
        </div>
      </div>

      {/* Life angle */}
      <div className="rounded-2xl border border-accent-dim bg-brand-elevated p-6 sm:p-8">
        <div className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
          Down Payment in Life Units
        </div>
        <p className="text-lg text-text-secondary mb-4">
          A down payment of{' '}
          <span className="font-mono font-bold text-gradient">
            {formatCurrency(downPayment)}
          </span>{' '}
          equals{' '}
          <span className="font-mono font-bold text-accent">
            {formatNumber(hoursForDown)} working hours
          </span>{' '}
          — about{' '}
          <span className="font-mono font-bold text-gradient">
            {workingYears.toFixed(1)} years
          </span>{' '}
          of full-time labor at your wage.
        </p>
        <div className="max-w-xs">
          <label htmlFor="rvb-wage" className={labelCls}>Hourly Wage</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-text-secondary">$</span>
            <input
              id="rvb-wage"
              type="text"
              inputMode="decimal"
              value={wage}
              onChange={handleDecimal(setWage)}
              className={`${inputCls} pl-8`}
            />
          </div>
          <p className="mt-2 text-xs text-text-muted">Default: US median full-time wage.</p>
        </div>
      </div>
    </div>
  );
};

export default RentVsBuy;
