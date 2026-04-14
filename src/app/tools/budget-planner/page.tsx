import type { Metadata } from 'next';
import BudgetPlanner from '@/components/BudgetPlanner';

export const metadata: Metadata = {
  title: 'Budget Planner — 50/30/20 Rule | Your Life In Seconds',
  description:
    'Plan your monthly budget with the 50/30/20 rule and see your trajectory to $100K and $1M at a 7% return.',
};

export default function BudgetPlannerPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-brand-bg text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
            LIFE DESIGN TOOL
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Budget <span className="text-gradient">Planner</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Balance needs, wants, and savings — then see how fast you&rsquo;ll reach financial milestones.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-bg">
        <div className="max-w-[900px] mx-auto px-6">
          <BudgetPlanner />
        </div>
      </section>
    </>
  );
}
