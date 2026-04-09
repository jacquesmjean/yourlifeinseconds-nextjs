"use client";

interface LifeInWeeksGridProps {
  birthDate: Date;
  lifeExpectancyYears: number;
}

const MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;
const WEEKS_PER_YEAR = 52;

export default function LifeInWeeksGrid({
  birthDate,
  lifeExpectancyYears,
}: LifeInWeeksGridProps) {
  const totalYears = Math.round(lifeExpectancyYears);
  const totalWeeks = totalYears * WEEKS_PER_YEAR;
  const livedWeeks = Math.max(
    0,
    Math.min(totalWeeks, Math.floor((Date.now() - birthDate.getTime()) / MS_PER_WEEK))
  );

  return (
    <div className="rounded-xl border border-subtle bg-brand-card p-6">
      <div className="mb-5 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-text-secondary font-medium">Your Life in Weeks</p>
          <p className="text-text-muted text-xs mt-1">
            Each square is one week. {livedWeeks.toLocaleString()} lived ·{" "}
            {(totalWeeks - livedWeeks).toLocaleString()} remaining.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm bg-brand-bg border border-subtle" />
            Lived
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm bg-accent" />
            Remaining
          </span>
        </div>
      </div>

      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(${WEEKS_PER_YEAR}, minmax(0, 1fr))`,
        }}
        aria-label={`Life in weeks: ${livedWeeks} of ${totalWeeks} weeks lived`}
      >
        {Array.from({ length: totalWeeks }).map((_, i) => {
          const lived = i < livedWeeks;
          return (
            <div
              key={i}
              className={`aspect-square rounded-[1px] ${
                lived
                  ? "bg-brand-bg border border-subtle"
                  : "bg-accent/80"
              }`}
            />
          );
        })}
      </div>

      <p className="mt-4 text-text-muted text-xs">
        Based on a {totalYears}-year life expectancy for your region.
      </p>
    </div>
  );
}
