import type { Metadata } from 'next';
import ChildAffordability from '@/components/ChildAffordability';

export const metadata: Metadata = {
  title: 'Child Affordability Calculator | Your Life In Seconds',
  description:
    'Estimate the real cost of raising a child to age 18 in your state — and the hours of life it buys.',
};

export default function ChildAffordabilityPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-brand-bg text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
            LIFE DESIGN TOOL
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Child <span className="text-gradient">Affordability</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See what it really costs to raise a child in your state — in dollars and in years of your life.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-bg">
        <div className="max-w-[900px] mx-auto px-6">
          <ChildAffordability />
        </div>
      </section>
    </>
  );
}
