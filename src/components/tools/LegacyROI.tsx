'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';

type IconProps = { className?: string; size?: number };
const ArrowRight = ({ className = '', size = 16 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

type Action = {
  id: string;
  label: string;
  defaultPeople: number;
  defaultYears: number;
  note: string;
};

// "defaultPeople" = how many lives a given hour typically touches.
// "defaultYears" = how long that ripple tends to carry forward.
// Conservative estimates — the point is the comparison, not precision.
const ACTIONS: Action[] = [
  { id: 'parent',     label: 'Parenting your children',       defaultPeople: 2,    defaultYears: 40, note: 'Direct hours shape who they become' },
  { id: 'mentor',     label: 'Mentoring one person',          defaultPeople: 1,    defaultYears: 20, note: 'One mentee carries the lesson for decades' },
  { id: 'teach',      label: 'Teaching a class',              defaultPeople: 25,   defaultYears: 15, note: 'One classroom, carried for half a lifetime' },
  { id: 'write',      label: 'Writing / publishing publicly', defaultPeople: 2000, defaultYears: 10, note: 'Content outlives the writing session' },
  { id: 'build',      label: 'Building something durable',    defaultPeople: 500,  defaultYears: 15, note: 'A product, library, business others rely on' },
  { id: 'volunteer',  label: 'Community work',                defaultPeople: 20,   defaultYears: 5,  note: 'A shelter shift, a build day, a serve night' },
  { id: 'consume',    label: 'Passive consumption (TV/scroll)',defaultPeople: 1,   defaultYears: 0,  note: 'Included as a baseline' },
];

function formatCompact(n: number): string {
  if (!isFinite(n)) return '∞';
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return Math.round(n).toLocaleString();
}

export default function LegacyROI() {
  const [actionId, setActionId] = useState<string>('mentor');
  const [hoursPerWeek, setHoursPerWeek] = useState('2');
  const [people, setPeople] = useState(String(ACTIONS.find((a) => a.id === 'mentor')?.defaultPeople ?? 1));
  const [years, setYears] = useState(String(ACTIONS.find((a) => a.id === 'mentor')?.defaultYears ?? 20));

  const action = ACTIONS.find((a) => a.id === actionId) ?? ACTIONS[0];

  // When the action changes, reset people and years to its defaults.
  const handleAction = (id: string) => {
    const next = ACTIONS.find((a) => a.id === id);
    if (next) {
      setActionId(id);
      setPeople(String(next.defaultPeople));
      setYears(String(next.defaultYears));
    }
  };

  const result = useMemo(() => {
    const hrs = Math.max(0, parseFloat(hoursPerWeek) || 0);
    const ppl = Math.max(0, parseFloat(people) || 0);
    const yrs = Math.max(0, parseFloat(years) || 0);

    // Annual hours on this action
    const annualHours = hrs * 52.1775;
    // Legacy Score = hours × people × years of carry (person-hours of influence, then → person-years)
    const personHours = annualHours * ppl * Math.max(1, yrs);
    const personYears = personHours / (40 * 52.1775); // normalize to "full-time-equivalent years of influence"
    const legacyScore = personHours; // raw "person-hours of ripple"

    // Baseline — passive consumption is 1 person-hour of ripple per hour (0 carry)
    const baselinePersonHours = annualHours * 1;
    const multipleVsBaseline = baselinePersonHours > 0 ? personHours / baselinePersonHours : 0;

    return { annualHours, personHours, personYears, legacyScore, multipleVsBaseline };
  }, [hoursPerWeek, people, years]);

  return (
    <main className="bg-brand-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Link href="/tools" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-8">
          ← All Tools
        </Link>

        <div className="text-center mb-12">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">COMPOUND IMPACT TOOL</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Legacy <span className="text-gradient">ROI</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Most people track financial ROI. Almost nobody tracks impact-per-hour. Your Legacy Score measures the ripple &mdash; not what you earn, but what outlives you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-brand-card border border-subtle rounded-xl p-6">
            <h2 className="text-lg font-bold mb-6">Where Your Hours Go</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Action</label>
                <div className="grid grid-cols-1 gap-2">
                  {ACTIONS.map((a) => (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => handleAction(a.id)}
                      className={`text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                        actionId === a.id
                          ? 'border-accent-dim bg-accent/10 text-text-primary'
                          : 'border-subtle text-text-secondary hover:border-accent-dim hover:text-text-primary'
                      }`}
                    >
                      <span className="font-semibold">{a.label}</span>
                      <span className="block text-[11px] text-text-muted mt-0.5">{a.note}</span>
                    </button>
                  ))}
                </div>
              </div>

              <NumField label="Hours per Week" value={hoursPerWeek} onChange={setHoursPerWeek} suffix="hrs" />
              <NumField label="People Touched per Hour" value={people} onChange={setPeople} />
              <NumField label="Years the Ripple Carries" value={years} onChange={setYears} suffix="yrs" />
            </div>

            <div className="mt-6 pt-6 border-t border-subtle text-[11px] text-text-muted leading-relaxed">
              <strong className="text-text-secondary">How this is calculated:</strong> hours per week &times; weeks per year &times; people touched &times; years of carry. The result is &ldquo;person-hours of influence&rdquo; &mdash; a conservative compound measure. It is a scorecard, not a physics equation.
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero */}
            <div className="bg-gradient-to-br from-brand-card to-brand-card-hover border border-accent-dim rounded-xl p-8 text-center">
              <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-3">LEGACY SCORE</p>
              <p className="text-5xl lg:text-7xl font-bold font-mono text-gradient mb-2 tabular-nums">
                {formatCompact(result.legacyScore)}
              </p>
              <p className="text-text-secondary text-sm">
                person-hours of influence per year of this commitment
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">YOUR HOURS / YEAR</p>
                <p className="text-3xl font-bold font-mono text-accent">{formatCompact(result.annualHours)}</p>
              </div>
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">PERSON-YEARS REACHED</p>
                <p className="text-3xl font-bold font-mono text-accent">{formatCompact(result.personYears)}</p>
                <p className="text-[11px] text-text-muted mt-1">full-time-equivalent</p>
              </div>
              <div className="bg-brand-card border border-subtle rounded-xl p-5 text-center">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-text-muted mb-2">VS. PASSIVE CONSUMPTION</p>
                <p className="text-3xl font-bold font-mono text-accent">{formatCompact(result.multipleVsBaseline)}&times;</p>
                <p className="text-[11px] text-text-muted mt-1">same hours, bigger ripple</p>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-gradient-to-br from-accent/10 to-accent-blue/5 border border-accent-dim rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🌳</span>
                <h3 className="font-bold text-accent">The compound effect</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary">{action.label}</strong> at{' '}
                <strong className="text-text-primary">{parseFloat(hoursPerWeek || '0').toFixed(1)} hours/week</strong>{' '}
                generates roughly <strong className="text-accent font-mono">{formatCompact(result.legacyScore)}</strong>{' '}
                person-hours of ripple per year. The same hours spent on passive consumption: around{' '}
                <strong className="text-text-primary">{formatCompact(result.annualHours)}</strong>.
              </p>
              <p className="text-sm text-text-secondary mt-3">
                The Legacy Score is a compass, not a balance sheet. It will not be precise. It will reliably tell you when you are trading high-compound hours for low-compound ones.
              </p>
            </div>

            {/* Share card */}
            <div className="bg-brand-card border border-subtle rounded-xl p-6">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">Share Your Score</p>
              <p className="text-lg text-text-primary font-semibold mb-2">
                &ldquo;My Legacy Score is <span className="text-accent font-mono">{formatCompact(result.legacyScore)}</span>{' '}
                &mdash; {action.label.toLowerCase()}. What&apos;s yours?&rdquo;
              </p>
              <p className="text-[12px] text-text-muted">yourlifeinseconds.com/tools/legacy-roi</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/some-seconds-compound"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
              >
                Read &quot;Some Seconds Compound&quot;
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/tools/regret-minimizer"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-subtle text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-accent-dim transition-colors"
              >
                Try the Regret Minimizer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
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
          className={`w-full bg-brand-input border border-subtle rounded-lg py-3 px-3 ${suffix ? 'pr-12' : ''} text-text-primary font-mono focus:border-accent-dim focus:outline-none transition-colors`}
        />
        {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">{suffix}</span>}
      </div>
    </div>
  );
}
