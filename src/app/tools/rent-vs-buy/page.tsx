import type { Metadata } from 'next';
import RentVsBuy from '@/components/RentVsBuy';

export const metadata: Metadata = {
  title: 'Rent vs Buy Calculator — Year by Year | Your Life In Seconds',
  description:
    'See the true cost of buying vs renting year by year. Factor in equity, opportunity cost, taxes and maintenance to find your real break-even point.',
};

export default function RentVsBuyPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-brand-bg text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
            CALCULATORS & PLANNERS
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Rent vs <span className="text-gradient">Buy</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Know when buying actually beats renting — with equity, opportunity cost,
            and the real monthly all-in number.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-bg">
        <div className="max-w-[900px] mx-auto px-6">
          <RentVsBuy />
        </div>
      </section>
    </>
  );
}
