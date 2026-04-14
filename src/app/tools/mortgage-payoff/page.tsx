import type { Metadata } from 'next';
import MortgagePayoff from '@/components/MortgagePayoff';

export const metadata: Metadata = {
  title: 'Mortgage Payoff Accelerator — Save Years & Interest',
  description:
    'See how much faster and cheaper you can crush your mortgage. Model extra payments and lump sums to reclaim years of your life from the bank.',
};

export default function MortgagePayoffPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-brand-bg text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
            CALCULATORS & PLANNERS
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Mortgage <span className="text-gradient">Payoff</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how much faster — and cheaper — you can crush your mortgage and
            reclaim years of your life from the bank.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-bg">
        <div className="max-w-[900px] mx-auto px-6">
          <MortgagePayoff />
        </div>
      </section>
    </>
  );
}
