"use client";

interface LifeComparisonsProps {
  remainingSeconds: number;
  yearsRemaining: number;
}

const SECONDS_PER_DAY = 86400;
const SECONDS_PER_WEEK = SECONDS_PER_DAY * 7;

function fmt(n: number): string {
  return Math.floor(n).toLocaleString("en-US");
}

export default function LifeComparisons({
  remainingSeconds,
  yearsRemaining,
}: LifeComparisonsProps) {
  const days = remainingSeconds / SECONDS_PER_DAY;
  const weeks = remainingSeconds / SECONDS_PER_WEEK;

  // One sunset per day (that you actually see).
  const sunsets = days;
  // ~one book every 2 weeks is the average committed reader pace.
  const books = weeks / 2;
  // Weekends = weeks remaining.
  const weekends = weeks;
  // Birthdays left ≈ full years remaining.
  const birthdays = yearsRemaining;

  const items = [
    {
      label: "Sunsets you could still watch",
      value: fmt(sunsets),
      sub: "one per day",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 10a5 5 0 0 1 5 5H7a5 5 0 0 1 5-5Z" />
          <line x1="12" y1="4" x2="12" y2="6" />
          <line x1="4" y1="15" x2="2" y2="15" />
          <line x1="22" y1="15" x2="20" y2="15" />
          <line x1="5.6" y1="8.6" x2="7" y2="10" />
          <line x1="18.4" y1="8.6" x2="17" y2="10" />
          <line x1="1" y1="19" x2="23" y2="19" />
        </svg>
      ),
    },
    {
      label: "Weekends left",
      value: fmt(weekends),
      sub: "the real unit",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      label: "Books you could still read",
      value: fmt(books),
      sub: "at 1 every 2 weeks",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        </svg>
      ),
    },
    {
      label: "Birthdays left",
      value: fmt(birthdays),
      sub: "if you're lucky",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16s1-1 4-1 5 2 8 2 4-1 4-1" />
          <path d="M12 4v3" />
          <path d="M10 4a2 2 0 1 1 4 0c0 1.5-2 3-2 3s-2-1.5-2-3Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="rounded-xl border border-subtle bg-brand-card p-6">
      <p className="text-text-secondary font-medium mb-1">
        What That Actually Looks Like
      </p>
      <p className="text-text-muted text-xs mb-5">
        Raw numbers don&apos;t hit. These do.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-brand-bg border border-subtle rounded-lg p-4"
          >
            <div className="text-accent mb-3">{item.icon}</div>
            <p className="font-mono text-2xl font-bold text-text-primary leading-tight">
              {item.value}
            </p>
            <p className="text-text-secondary text-xs mt-2 leading-snug">
              {item.label}
            </p>
            <p className="text-text-muted text-[10px] mt-1">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
