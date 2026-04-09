'use client';

import React, { useState, useEffect, useRef } from 'react';
// Inline SVG icon components (no external dependency)
type IconProps = { className?: string; size?: number };
const ChevronRight = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
);
const ChevronLeft = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
);
const Share2 = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
);
const Linkedin = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
);
const Twitter = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const Copy = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
);
const Check = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
);
const Zap = ({ className = '', size = 20 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

interface CountUpValue {
  target: number;
  current: number;
}

const COUNTRIES = [
  { name: 'United States', code: 'US', lifeExpectancy: 78.9 },
  { name: 'United Kingdom', code: 'GB', lifeExpectancy: 81.2 },
  { name: 'Japan', code: 'JP', lifeExpectancy: 84.6 },
  { name: 'Canada', code: 'CA', lifeExpectancy: 82.1 },
  { name: 'Australia', code: 'AU', lifeExpectancy: 83.0 },
  { name: 'Germany', code: 'DE', lifeExpectancy: 81.5 },
  { name: 'France', code: 'FR', lifeExpectancy: 82.8 },
  { name: 'Italy', code: 'IT', lifeExpectancy: 82.6 },
  { name: 'Spain', code: 'ES', lifeExpectancy: 83.4 },
  { name: 'South Korea', code: 'KR', lifeExpectancy: 83.3 },
  { name: 'Singapore', code: 'SG', lifeExpectancy: 84.9 },
  { name: 'Switzerland', code: 'CH', lifeExpectancy: 83.8 },
  { name: 'New Zealand', code: 'NZ', lifeExpectancy: 82.3 },
  { name: 'Netherlands', code: 'NL', lifeExpectancy: 82.0 },
  { name: 'Sweden', code: 'SE', lifeExpectancy: 83.1 },
  { name: 'Norway', code: 'NO', lifeExpectancy: 83.0 },
  { name: 'Denmark', code: 'DK', lifeExpectancy: 81.5 },
  { name: 'Belgium', code: 'BE', lifeExpectancy: 81.8 },
  { name: 'Ireland', code: 'IE', lifeExpectancy: 82.3 },
  { name: 'Finland', code: 'FI', lifeExpectancy: 82.1 },
];

import {
  encodeLifeClockPayload,
  type LifeClockPayload,
} from '@/lib/lifeClockPayload';

const HOURLY_WORTH = 28.85;

interface LifeClockWizardProps {
  initialPayload?: LifeClockPayload;
}

export default function LifeClockWizard({ initialPayload }: LifeClockWizardProps = {}) {
  const [step, setStep] = useState(initialPayload ? 2 : 1);
  const [dateOfBirth, setDateOfBirth] = useState(initialPayload?.dob ?? '');
  const [timeOfBirth, setTimeOfBirth] = useState(initialPayload?.tob ?? '12:00');
  const [selectedCountry, setSelectedCountry] = useState(initialPayload?.country ?? 'US');
  const [gender, setGender] = useState<'male' | 'female' | 'average'>(
    initialPayload?.gender ?? 'average'
  );

  const [liveSeconds, setLiveSeconds] = useState(0);
  const [results, setResults] = useState<{
    totalSeconds: number;
    usedSeconds: number;
    remainingSeconds: number;
    scarcityScore: number;
    yearsRemaining: number;
    monthsRemaining: number;
    weeksRemaining: number;
    daysRemaining: number;
    hoursRemaining: number;
    minutesRemaining: number;
    birthTime: Date;
    lifeExpectancy: number;
  } | null>(null);

  const [animatedValues, setAnimatedValues] = useState<{
    usedSeconds: CountUpValue;
    remainingSeconds: CountUpValue;
    scarcityScore: CountUpValue;
  }>({
    usedSeconds: { target: 0, current: 0 },
    remainingSeconds: { target: 0, current: 0 },
    scarcityScore: { target: 0, current: 0 },
  });

  const [copied, setCopied] = useState(false);
  const animationFrameRef = useRef<number>();

  // Calculate adjusted life expectancy based on gender
  const getAdjustedLifeExpectancy = (baseExpectancy: number, selectedGender: string): number => {
    if (selectedGender === 'male') return baseExpectancy - 2.5;
    if (selectedGender === 'female') return baseExpectancy + 2.5;
    return baseExpectancy;
  };

  // Calculate time breakdown
  const calculateTimeBreakdown = (birthDate: Date, deathDate: Date) => {
    let remaining = deathDate.getTime() - birthDate.getTime();

    const years = Math.floor(remaining / (1000 * 60 * 60 * 24 * 365.25));
    remaining -= years * (1000 * 60 * 60 * 24 * 365.25);

    const months = Math.floor(remaining / (1000 * 60 * 60 * 24 * 30.44));
    remaining -= months * (1000 * 60 * 60 * 24 * 30.44);

    const weeks = Math.floor(remaining / (1000 * 60 * 60 * 24 * 7));
    remaining -= weeks * (1000 * 60 * 60 * 24 * 7);

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    remaining -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    remaining -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(remaining / (1000 * 60));

    return { years, months, weeks, days, hours, minutes };
  };

  // Auto-calculate if an initial payload was provided (shared link)
  useEffect(() => {
    if (initialPayload?.dob) {
      // defer one tick so state is initialized
      const t = setTimeout(() => handleCalculate(), 0);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle calculate
  const handleCalculate = () => {
    if (!dateOfBirth) return;

    const [hours, minutes] = timeOfBirth.split(':').map(Number);
    const birthDate = new Date(dateOfBirth);
    birthDate.setHours(hours, minutes, 0, 0);

    const country = COUNTRIES.find((c) => c.code === selectedCountry);
    const lifeExpectancy = getAdjustedLifeExpectancy(
      country?.lifeExpectancy || 78,
      gender
    );

    const deathDate = new Date(birthDate);
    deathDate.setFullYear(deathDate.getFullYear() + Math.floor(lifeExpectancy));
    deathDate.setMonth(
      deathDate.getMonth() + Math.round((lifeExpectancy % 1) * 12)
    );

    const now = new Date();
    const totalSeconds = Math.floor((deathDate.getTime() - birthDate.getTime()) / 1000);
    const usedSeconds = Math.floor((now.getTime() - birthDate.getTime()) / 1000);
    const remainingSeconds = totalSeconds - usedSeconds;
    const scarcityScore = (usedSeconds / totalSeconds) * 100;

    const breakdown = calculateTimeBreakdown(now, deathDate);

    setResults({
      totalSeconds,
      usedSeconds,
      remainingSeconds: Math.max(0, remainingSeconds),
      scarcityScore: Math.min(100, scarcityScore),
      yearsRemaining: breakdown.years,
      monthsRemaining: breakdown.months,
      weeksRemaining: breakdown.weeks,
      daysRemaining: breakdown.days,
      hoursRemaining: breakdown.hours,
      minutesRemaining: breakdown.minutes,
      birthTime: birthDate,
      lifeExpectancy,
    });

    // Initialize animated values
    setAnimatedValues({
      usedSeconds: { target: usedSeconds, current: 0 },
      remainingSeconds: { target: Math.max(0, remainingSeconds), current: 0 },
      scarcityScore: { target: Math.min(100, scarcityScore), current: 0 },
    });

    setStep(3);
  };

  // Live seconds counter
  useEffect(() => {
    if (step !== 3 || !results) return;

    const interval = setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now.getTime() - results.birthTime.getTime()) / 1000);
      setLiveSeconds(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, [step, results]);

  // Count-up animation for metrics
  useEffect(() => {
    if (step !== 3 || !results) return;

    let stillAnimating = true;

    const animate = () => {
      let hasMore = false;

      setAnimatedValues((prev) => {
        const newValues = { ...prev };

        (['usedSeconds', 'remainingSeconds', 'scarcityScore'] as const).forEach((key) => {
          const current = newValues[key];
          const increment = Math.ceil((current.target - current.current) / 20);
          const newCurrent = current.current + increment;

          if (newCurrent < current.target) {
            newValues[key] = { ...current, current: newCurrent };
            hasMore = true;
          } else {
            newValues[key] = { ...current, current: current.target };
          }
        });

        return newValues;
      });

      if (hasMore && stillAnimating) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      stillAnimating = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [step, results]);

  // Format large numbers
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  // Build a shareable URL that encodes the inputs so the recipient
  // auto-loads the same result.
  const buildShareUrl = (): string => {
    const payload = encodeLifeClockPayload({
      dob: dateOfBirth,
      tob: timeOfBirth,
      country: selectedCountry,
      gender,
    });
    const origin =
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://yourlifeinseconds.com';
    return `${origin}/me?r=${payload}`;
  };

  // Generate share text
  const generateShareText = (): string => {
    if (!results) return '';
    return `I have ${formatNumber(
      results.remainingSeconds
    )} seconds left. How many do you have?`;
  };

  // Share handlers
  const handleShare = (platform: string) => {
    const text = generateShareText();
    const url = buildShareUrl();

    switch (platform) {
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(`${text} ${url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const handleRestart = () => {
    setStep(1);
    setDateOfBirth('');
    setTimeOfBirth('12:00');
    setSelectedCountry('US');
    setGender('average');
    setResults(null);
    setLiveSeconds(0);
  };

  return (
    <section id="life-clock" className="min-h-screen bg-brand-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-gradient mb-4 text-4xl font-bold">
            How Many Seconds Do You Have Left?
          </h2>
          <p className="text-text-secondary text-lg">
            Discover your life in seconds and make every moment count
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3].map((stepNum) => (
              <div
                key={stepNum}
                className={`flex flex-col items-center ${
                  stepNum !== 3 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-mono font-bold transition-all ${
                    stepNum <= step
                      ? 'bg-gradient-to-r from-accent to-accent-bright text-brand-bg'
                      : 'border-2 border-border-subtle bg-brand-card text-text-secondary'
                  }`}
                >
                  {stepNum}
                </div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    stepNum <= step ? 'text-accent' : 'text-text-muted'
                  }`}
                >
                  {stepNum === 1 && 'Birthday'}
                  {stepNum === 2 && 'Region'}
                  {stepNum === 3 && 'Results'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-brand-card rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent-bright transition-all duration-300"
              style={{ width: `${(step - 1) * 50 + 50}%` }}
            />
          </div>
        </div>

        {/* Step 1: Birthday */}
        {step === 1 && (
          <div className="rounded-xl border border-border-subtle bg-brand-card p-8 shadow-glow">
            <h2 className="mb-6 text-2xl font-bold text-text-primary">
              When Were You Born?
            </h2>

            <div className="space-y-6">
              {/* Date Input */}
              <div>
                <label className="mb-3 block text-sm font-medium text-text-primary">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full rounded-lg border border-border-subtle bg-brand-input px-4 py-3 font-mono text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all"
                />
              </div>

              {/* Time Input */}
              <div>
                <label className="mb-3 block text-sm font-medium text-text-primary">
                  Time of Birth <span className="text-text-muted">(optional)</span>
                </label>
                <input
                  type="time"
                  value={timeOfBirth}
                  onChange={(e) => setTimeOfBirth(e.target.value)}
                  className="w-full rounded-lg border border-border-subtle bg-brand-input px-4 py-3 font-mono text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all"
                />
              </div>

              {/* Continue Button */}
              <button
                onClick={() => setStep(2)}
                disabled={!dateOfBirth}
                className={`mt-8 w-full rounded-lg py-3 font-semibold transition-all flex items-center justify-center gap-2 ${
                  dateOfBirth
                    ? 'bg-gradient-to-r from-accent to-accent-bright text-brand-bg hover:shadow-glow-strong'
                    : 'bg-brand-elevated text-text-muted cursor-not-allowed'
                }`}
              >
                Continue <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Region */}
        {step === 2 && (
          <div className="rounded-xl border border-border-subtle bg-brand-card p-8 shadow-glow">
            <h2 className="mb-6 text-2xl font-bold text-text-primary">
              Where Are You From?
            </h2>

            <div className="space-y-6">
              {/* Country Select */}
              <div>
                <label className="mb-3 block text-sm font-medium text-text-primary">
                  Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full rounded-lg border border-border-subtle bg-brand-input px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300d4aa' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    paddingRight: '36px',
                  }}
                >
                  {COUNTRIES.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.lifeExpectancy} years)
                    </option>
                  ))}
                </select>
              </div>

              {/* Gender Radio Buttons */}
              <div>
                <label className="mb-3 block text-sm font-medium text-text-primary">
                  Gender
                </label>
                <div className="flex gap-4 flex-wrap">
                  {['male', 'female', 'average'].map((g) => (
                    <label
                      key={g}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={gender === g}
                        onChange={(e) =>
                          setGender(e.target.value as 'male' | 'female' | 'average')
                        }
                        className="h-4 w-4 cursor-pointer accent-accent"
                      />
                      <span className="text-text-primary capitalize">{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Button Group */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 rounded-lg border border-border-subtle bg-brand-elevated py-3 font-semibold text-text-primary hover:bg-brand-card transition-all flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={20} /> Back
                </button>
                <button
                  onClick={handleCalculate}
                  className="flex-1 rounded-lg bg-gradient-to-r from-accent to-accent-bright py-3 font-semibold text-brand-bg hover:shadow-glow-strong transition-all flex items-center justify-center gap-2"
                >
                  Calculate My Life <Zap size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Results Dashboard */}
        {step === 3 && results && (
          <div className="space-y-8">
            {/* Live Seconds Counter */}
            <div className="rounded-xl border border-border-accent-dim bg-gradient-to-br from-brand-elevated to-brand-card p-8 shadow-glow-strong">
              <div className="text-center">
                <p className="text-text-secondary mb-2">Seconds Since Birth</p>
                <p className="font-mono text-5xl font-bold text-gradient">
                  {formatNumber(liveSeconds)}
                </p>
                <p className="mt-2 text-text-muted text-sm">
                  Updating in real-time
                </p>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Seconds Used */}
              <div className="rounded-lg border border-border-subtle bg-brand-card p-6">
                <p className="text-text-secondary mb-2 text-sm font-medium">
                  Seconds Used
                </p>
                <p className="font-mono text-3xl font-bold text-accent">
                  {formatNumber(Math.floor(animatedValues.usedSeconds.current))}
                </p>
              </div>

              {/* Seconds Remaining */}
              <div className="rounded-lg border border-border-subtle bg-brand-card p-6">
                <p className="text-text-secondary mb-2 text-sm font-medium">
                  Seconds Remaining
                </p>
                <p className="font-mono text-3xl font-bold text-accent-bright">
                  {formatNumber(Math.floor(animatedValues.remainingSeconds.current))}
                </p>
              </div>

              {/* Time Scarcity Score */}
              <div className="rounded-lg border border-border-subtle bg-brand-card p-6">
                <p className="text-text-secondary mb-2 text-sm font-medium">
                  Time Scarcity Score
                </p>
                <p className="font-mono text-3xl font-bold text-accent-blue">
                  {Math.floor(animatedValues.scarcityScore.current)}%
                </p>
              </div>

              {/* Hourly Worth */}
              <div className="rounded-lg border border-border-subtle bg-brand-card p-6">
                <p className="text-text-secondary mb-2 text-sm font-medium">
                  Hourly Worth
                </p>
                <p className="font-mono text-3xl font-bold text-text-primary">
                  ${HOURLY_WORTH.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Life Progress Bar */}
            <div className="rounded-lg border border-border-subtle bg-brand-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-text-secondary font-medium">Life Progress</p>
                <p className="font-mono text-sm text-accent">
                  {Math.floor(animatedValues.scarcityScore.current)}% lived
                </p>
              </div>
              <div className="h-3 rounded-full bg-brand-bg overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent via-accent-bright to-accent-blue transition-all duration-300"
                  style={{
                    width: `${Math.floor(animatedValues.scarcityScore.current)}%`,
                  }}
                />
              </div>
            </div>

            {/* Time Breakdown Grid */}
            <div className="rounded-lg border border-border-subtle bg-brand-card p-6">
              <p className="text-text-secondary font-medium mb-4">
                Time Remaining
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Years', value: results.yearsRemaining },
                  { label: 'Months', value: results.monthsRemaining },
                  { label: 'Weeks', value: results.weeksRemaining },
                  { label: 'Days', value: results.daysRemaining },
                  { label: 'Hours', value: results.hoursRemaining },
                  { label: 'Minutes', value: results.minutesRemaining },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-mono text-2xl font-bold text-accent">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="rounded-lg border border-border-subtle bg-brand-card p-6">
              <p className="text-text-secondary font-medium mb-4">Share Your Results</p>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center gap-2 rounded-lg bg-brand-elevated px-4 py-2 text-text-primary hover:bg-brand-elevated hover:border-accent border border-border-subtle transition-all"
                >
                  <Linkedin size={18} /> LinkedIn
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 rounded-lg bg-brand-elevated px-4 py-2 text-text-primary hover:bg-brand-elevated hover:border-accent border border-border-subtle transition-all"
                >
                  <Twitter size={18} /> X
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="flex items-center gap-2 rounded-lg bg-brand-elevated px-4 py-2 text-text-primary hover:bg-brand-elevated hover:border-accent border border-border-subtle transition-all"
                >
                  {copied ? (
                    <>
                      <Check size={18} className="text-accent" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={18} /> Copy Link
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Upsell Card */}
            <div className="rounded-xl border border-border-accent-dim bg-gradient-to-br from-brand-elevated to-brand-card p-6 shadow-glow">
              <div className="flex gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Personal Life Perspective Report
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm">
                    Get a comprehensive analysis of your life breakdown with personalized insights and actionable recommendations.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Detailed time breakdown analysis',
                      'Personalized life recommendations',
                      'Comparison with your cohort',
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-text-secondary text-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://buy.stripe.com/7sY6oHf7Nftzf4xeOr0oM01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-gradient-to-r from-accent to-accent-bright px-6 py-2 font-semibold text-brand-bg hover:shadow-glow transition-all"
                  >
                    Unlock Report · $9
                  </a>
                </div>
                <div className="hidden sm:flex items-center justify-center">
                  <Zap className="h-12 w-12 text-accent opacity-20" />
                </div>
              </div>
            </div>

            {/* Restart Button */}
            <button
              onClick={handleRestart}
              className="w-full rounded-lg border border-border-subtle bg-brand-elevated py-3 font-semibold text-text-primary hover:bg-brand-card transition-all"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
