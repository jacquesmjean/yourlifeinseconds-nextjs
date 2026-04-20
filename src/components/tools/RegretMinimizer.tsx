'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';

type IconProps = { className?: string; size?: number };
const ArrowRight = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const VALUE_SUGGESTIONS = [
  'Family', 'Health', 'Creative work', 'Close friends', 'Faith', 'Travel',
  'Learning', 'My kids', 'My marriage', 'Building something of my own',
];

function formatCompactSeconds(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return '∞';
  if (seconds >= 1e9) return `${(seconds / 1e9).toFixed(2)}B`;
  if (seconds >= 1e6) return `${(seconds / 1e6).toFixed(2)}M`;
  if (seconds >= 1e3) return `${(seconds / 1e3).toFixed(1)}K`;
  return Math.round(seconds).toLocaleString();
}

export default function RegretMinimizer() {
  const [age, setAge] = useState('42');
  const [lifeExp, setLifeExp] = useState('82');
  const [value1, setValue1] = useState('Family');
  const [value2, setValue2] = useState('Health');
  const [value3, setValue3] = useState('Creative work');
  const [hoursOnValues, setHoursOnValues] = useState('10');
  const [hoursMaintenance, setHoursMaintenance] = useState('60');

  const result = useMemo(() => {
    const currentAge = Math.max(0, parseFloat(age) || 0);
    const exp = Math.max(currentAge, parseFloat(lifeExp) || 0);
    const yearsLeft = Math.max(0, exp - currentAge);
    const secondsLeft = yearsLeft * 365.25 * 86400;

    // Sleep ≈ 8 hours/day = 56/week. Of 168 hours/week, ~112 are "awake."
    const awakeHoursPerWeek = 112;
    const onValues = Math.max(0, parseFloat(hoursOnValues) || 0);
    const onMaintenance = Math.max(0, parseFloat(hoursMaintenance) || 0);
    const onOther = Math.max(0, awakeHoursPerWeek - onValues - onMaintenance);

    const totalAwakeWeeksLeft = yearsLeft * 52.1775;
    const totalAwakeHoursLeft = totalAwakeWeeksLeft * awakeHoursPerWeek;

    const valuePctWeek = awakeHoursPerWeek > 0 ? (onValues / awakeHoursPerWeek) : 0;
    const maintenancePctWeek = awakeHoursPerWeek > 0 ? (onMaintenance / awakeHoursPerWeek) : 0;
    const otherPctWeek = awakeHoursPerWeek > 0 ? (onOther / awakeHoursPerWeek) : 0;

    const valueHoursLifetime = totalAwakeHoursLeft * valuePctWeek;
    const maintenanceHoursLifetime = totalAwakeHoursLeft * maintenancePctWeek;
    const otherHoursLifetime = totalAwakeHoursLeft * otherPctWeek;

    const valueSecondsLifetime = valueHoursLifetime * 3600;

    // "Flip scenario" — what if you cut maintenance by 10 hours/week and moved it to values?
    const flipHours = 10;
    const flippedValuesHoursLifetime = (onValues + flipHours) / awakeHoursPerWeek * totalAwakeHoursLeft;
    const extraValueHours = flippedValuesHoursLifetime - valueHoursLifetime;

    return {
      yearsLeft,
      secondsLeft,
      valuePctWeek,
      maintenancePctWeek,
      otherPctWeek,
      valueHoursLifetime,
      maintenanceHoursLifetime,
      otherHoursLifetime,
      valueSecondsLifetime,
      extraValueHours,
    };
  }, [age, lifeExp, hoursOnValues, hoursMaintenance]);

  const topValues = [value1, value2, value3].filter((v) => v.trim().length > 0);

  return (
    <main className="bg-brand-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Link href="/tools" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-8">
          ← All Tools
        </Link>

        <div className="text-center mb-12">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">INVERSE BUCKET LIST</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            The <span className="text-gradient">Regret Minimizer</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            If your time ended in one hour, who haven&apos;t you called? Name your three values, see where your week actually goes, and fix the drift.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-brand-card border border-subtle rounded-xl p-6">
            <h2 className="text-lg font-bold mb-6">Your Three Values</h2>

            <div className="space-y-4 mb-6">
              <Field label="Value #1" value={value1} onChange={setValue1} />
              <Field label="Value #2" value={value2} onChange={setValue2} />
              <Field label="Value #3" value={value3} onChange={setValue3} />

              <div className="flex flex-wrap gap-2 pt-1">
                <p className="text-[11px] text-text-muted w-full">Quick picks:</p>
                {VALUE_SUGGESTIONS.slice(0, 6).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      if (!value1.trim()) setValue1(s);
                      else if (!value2.trim()) setValue2(s);
                      else if (!value3.trim()) setValue3(s);
                    }}
                    className="text-[11px] px-2 py-1 rounded-full border border-subtle text-text-secondary hover:border-accent-dim hover:text-accent transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <h2 className="text-lg font-bold mb-4 pt-2 border-t border-subtle">Your Weekly Reality</h2>
            <div className="space-y-4">
              <NumField label="Current Age" value={age} onChange={setAge} />
              <NumField label="Life Expectancy" value={lifeExp} onChange={setLifeExp} />
              <NumField label="Hours/Week on Your Values" value={hoursOnValues} onChange={setHoursOnValues} suffix="hrs" />
              <NumField label="Hours/Week on Maintenance (work, chores, commute)" value={hoursMaintenance} onChange={setHoursMaintenance} suffix="hrs" />
            </div>

            <div className="mt-6 pt-6 border-t border-subtle">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Awake Hours/Week</p>
              <p className="text-2xl font-bold font-mono text-accent">112 <span className="text-sm font-normal">hrs</span></p>
              <p className="text-[11px] text-text-muted mt-1">168 total − 56 for sleep</p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero */}
            <div className="bg-gradient-to-br from-brand-card to-brand-card-hover border border-accent-dim rounded-xl p-8 text-center">
              <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-3">AWAKE SECONDS REMAINING</p>
              <p className="text-5xl lg:text-7xl font-bold font-mono text-gradient mb-2 tabular-nums">
                {formatCompactSeconds(result.secondsLeft)}
              </p>
              <p className="text-text-secondary text-sm">
                That&apos;s <strong className="text-text-primary">{result.yearsLeft.toFixed(1)} years</strong> — statistically.
              </p>
            </div>

            {/* Allocation bar */}
            <div className="bg-brand-card border border-subtle rounded-xl p-6">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">Where Your Remaining Life Is Going</p>
              <div className="flex w-full h-10 rounded-lg overflow-hidden border border-subtle">
                <div
                  className="bg-gradient-to-r from-accent to-accent-blue flex items-center justify-center text-[11px] font-semibold text-brand-bg"
                  style={{ width: `${Math.max(0, result.valuePctWeek) * 100}%` }}
                  title={`Values: ${(result.valuePctWeek * 100).toFixed(0)}%`}
                >
                  {result.valuePctWeek > 0.08 ? `${(result.valuePctWeek * 100).toFixed(0)}%` : ''}
                </div>
                <div
                  className="bg-status-warning/60 flex items-center justify-center text-[11px] font-semibold text-brand-bg"
                  style={{ width: `${Math.max(0, result.maintenancePctWeek) * 100}%` }}
                  title={`Maintenance: ${(result.maintenancePctWeek * 100).toFixed(0)}%`}
                >
                  {result.maintenancePctWeek > 0.08 ? `${(result.maintenancePctWeek * 100).toFixed(0)}%` : ''}
                </div>
                <div
                  className="bg-subtle/40 flex items-center justify-center text-[11px] font-semibold text-text-muted"
                  style={{ width: `${Math.max(0, result.otherPctWeek) * 100}%` }}
                  title={`Other: ${(result.otherPctWeek * 100).toFixed(0)}%`}
                >
                  {result.otherPctWeek > 0.08 ? `${(result.otherPctWeek * 100).toFixed(0)}%` : ''}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-3 text-[12px]">
                <span className="inline-flex items-center gap-2 text-text-secondary"><span className="w-3 h-3 rounded-sm bg-accent"></span>Your values</span>
                <span className="inline-flex items-center gap-2 text-text-secondary"><span className="w-3 h-3 rounded-sm bg-status-warning/60"></span>Maintenance</span>
                <span className="inline-flex items-center gap-2 text-text-secondary"><span className="w-3 h-3 rounded-sm bg-subtle/40"></span>Everything else</span>
              </div>
            </div>

            {/* Lifetime breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">HOURS ON VALUES</p>
                <p className="text-3xl font-bold font-mono text-accent">{formatCompactSeconds(result.valueHoursLifetime)}</p>
                <p className="text-[11px] text-text-muted mt-1">remaining lifetime</p>
              </div>
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">HOURS ON MAINTENANCE</p>
                <p className="text-3xl font-bold font-mono text-status-warning">{formatCompactSeconds(result.maintenanceHoursLifetime)}</p>
                <p className="text-[11px] text-text-muted mt-1">remaining lifetime</p>
              </div>
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">SECONDS ON VALUES</p>
                <p className="text-3xl font-bold font-mono text-accent">{formatCompactSeconds(result.valueSecondsLifetime)}</p>
                <p className="text-[11px] text-text-muted mt-1">the number you feel</p>
              </div>
            </div>

            {/* Flip scenario */}
            <div className="bg-gradient-to-br from-accent/10 to-accent-blue/5 border border-accent-dim rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🔄</span>
                <h3 className="font-bold text-accent">Move 10 hours/week from Maintenance to Values</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                You&apos;d gain <strong className="text-accent font-mono">{formatCompactSeconds(result.extraValueHours)}</strong> additional hours on{' '}
                <strong className="text-text-primary">{topValues.slice(0, 2).join(' and ')}</strong>
                {topValues.length === 3 ? ` and ${topValues[2]}` : ''}
                {' '}over the rest of your life.
              </p>
              <p className="text-sm text-text-secondary mt-3">
                Ten hours a week is one commute shorter, one meeting killed, one evening reclaimed. The math is that forgiving.
              </p>
            </div>

            {/* Share card */}
            <div className="bg-brand-card border border-subtle rounded-xl p-6">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">Your Receipt (Screenshot &amp; Share)</p>
              <p className="text-lg text-text-primary font-semibold mb-2">
                &ldquo;I have {formatCompactSeconds(result.secondsLeft)} seconds left and I&apos;m prioritizing{' '}
                <span className="text-accent">{topValues.slice(0, 2).join(', ')}</span>
                {topValues.length === 3 ? ` and ${topValues[2]}` : ''}. What are you waiting for?&rdquo;
              </p>
              <p className="text-[12px] text-text-muted">yourlifeinseconds.com/tools/regret-minimizer</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/not-busy-misallocated"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
              >
                Read &quot;Not Busy, Misallocated&quot;
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/tools/hours-of-life"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-subtle text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-accent-dim transition-colors"
              >
                Budget Your Remaining Hours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-brand-input border border-subtle rounded-lg py-3 px-3 text-text-primary focus:border-accent-dim focus:outline-none transition-colors"
      />
    </div>
  );
}

function NumField({ label, value, onChange, suffix }: { label: string; value: string; onChange: (v: string) => void; suffix?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">{label}</label>
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-brand-input border border-subtle rounded-lg py-3 px-3 ${suffix ? 'pr-10' : ''} text-text-primary font-mono focus:border-accent-dim focus:outline-none transition-colors`}
        />
        {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">{suffix}</span>}
      </div>
    </div>
  );
}
