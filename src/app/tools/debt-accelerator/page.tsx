import type { Metadata } from 'next';
import DebtAccelerator from '@/components/DebtAccelerator';

export const metadata: Metadata = {
  title: 'Debt Accelerator — Payoff Calculator | Your Life In Seconds',
  description:
    'See how much interest and how many months of life you can reclaim by paying extra on your debt.',
};

export default function DebtAcceleratorPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-brand-bg text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
            LIFE DESIGN TOOL
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Debt <span className="text-gradient">Accelerator</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Crush your debt faster — and reclaim months of your life from interest you&rsquo;ll never pay.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-bg">
        <div className="max-w-[900px] mx-auto px-6">
          <DebtAccelerator />
        </div>
      </section>
    </>
  );
}
