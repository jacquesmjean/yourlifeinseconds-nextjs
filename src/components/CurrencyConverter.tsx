'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';

const CURRENCIES: Array<{ code: string; name: string; symbol: string }> = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'MXN', name: 'Mexican Peso', symbol: 'Mex$' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr' },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
];

const MIN_WAGE = 7.25; // US federal minimum wage

type Rates = Record<string, number>;

const formatAmount = (value: number, currency: string): string => {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${value.toFixed(2)} ${currency}`;
  }
};

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('100');
  const [from, setFrom] = useState<string>('USD');
  const [to, setTo] = useState<string>('EUR');
  const [rates, setRates] = useState<Rates | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const fetchRates = useCallback(async (base: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/fx?base=${base}`);
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      if (!data || !data.rates) throw new Error('Invalid response');
      setRates(data.rates as Rates);
      const updatedDate = data.updated
        ? new Date(data.updated * 1000).toISOString().slice(0, 10)
        : new Date().toISOString().slice(0, 10);
      setLastUpdated(updatedDate);
    } catch {
      setError('Unable to fetch live rates — try again.');
      setRates(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates(from);
  }, [from, fetchRates]);

  const numericAmount = useMemo(() => {
    const n = parseFloat(amount.replace(/[^0-9.]/g, ''));
    return Number.isFinite(n) ? n : 0;
  }, [amount]);

  const rate = rates ? rates[to] ?? null : null;
  const converted = rate !== null ? numericAmount * rate : null;

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  // On-brand angle: time cost at US fed min wage, converted to USD first
  const usdValue = useMemo(() => {
    if (!rates) return null;
    // Convert numericAmount (in `from`) to USD
    // rates are base=from, so rates['USD'] = USD per 1 from
    const usdRate = rates['USD'];
    if (!usdRate) return null;
    return numericAmount * usdRate;
  }, [rates, numericAmount]);

  const hoursAtMinWage = usdValue !== null ? usdValue / MIN_WAGE : null;

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <div className="rounded-2xl border border-subtle bg-brand-card p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
          {/* From */}
          <div>
            <label
              htmlFor="cc-amount"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              Amount ({from})
            </label>
            <input
              id="cc-amount"
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              aria-label="Amount to convert"
              className="w-full rounded-lg border border-subtle bg-brand-input py-3 px-4 font-mono text-lg text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="100"
            />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              aria-label="From currency"
              className="mt-2 w-full rounded-lg border border-subtle bg-brand-input py-2 px-3 text-sm text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} — {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Swap */}
          <div className="flex justify-center pb-1">
            <button
              type="button"
              onClick={swap}
              aria-label="Swap currencies"
              className="press-active rounded-full border border-accent-dim bg-brand-elevated p-3 text-accent hover:bg-accent/10 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12M17 20l4-4M17 20l-4-4" />
              </svg>
            </button>
          </div>

          {/* To */}
          <div>
            <label
              htmlFor="cc-result"
              className="mb-2 block text-xs font-mono font-semibold uppercase tracking-widest text-accent"
            >
              Converted ({to})
            </label>
            <div
              id="cc-result"
              className="w-full rounded-lg border border-accent-dim bg-brand-input py-3 px-4 font-mono text-lg text-gradient min-h-[52px] flex items-center"
              aria-live="polite"
            >
              {loading && !rates ? (
                <span className="text-text-muted">Loading…</span>
              ) : converted !== null ? (
                formatAmount(converted, to)
              ) : (
                <span className="text-text-muted">—</span>
              )}
            </div>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              aria-label="To currency"
              className="mt-2 w-full rounded-lg border border-subtle bg-brand-input py-2 px-3 text-sm text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} — {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-subtle pt-4 text-sm">
          {error ? (
            <div className="flex items-center gap-3">
              <span className="text-status-danger">{error}</span>
              <button
                type="button"
                onClick={() => fetchRates(from)}
                className="press-active rounded-md border border-accent-dim px-3 py-1 text-accent hover:bg-accent/10 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : rate !== null ? (
            <>
              <span className="font-mono text-text-secondary">
                1 {from} ={' '}
                <span className="text-accent">{rate.toFixed(4)}</span> {to}
              </span>
              {lastUpdated && (
                <span className="font-mono text-xs text-text-muted">
                  Updated {lastUpdated}
                </span>
              )}
            </>
          ) : (
            <span className="text-text-muted">Fetching live rates…</span>
          )}
        </div>
      </div>

      {/* On-brand time cost */}
      {hoursAtMinWage !== null && numericAmount > 0 && (
        <div className="rounded-2xl border border-accent-dim bg-brand-elevated p-6">
          <div className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Time Cost
          </div>
          <p className="text-text-secondary">
            At the US federal minimum wage of{' '}
            <span className="font-mono text-accent">${MIN_WAGE.toFixed(2)}/hr</span>
            , this equals{' '}
            <span className="font-mono font-bold text-gradient">
              {hoursAtMinWage.toFixed(1)} hours
            </span>{' '}
            of work —{' '}
            <span className="font-mono text-text-primary">
              {(hoursAtMinWage / 8).toFixed(1)} working days
            </span>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
