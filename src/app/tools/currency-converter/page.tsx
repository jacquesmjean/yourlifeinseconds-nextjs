import type { Metadata } from 'next';
import CurrencyConverter from '@/components/CurrencyConverter';

export const metadata: Metadata = {
  title: 'Currency Converter — Live Global Rates | Your Life In Seconds',
  description:
    'Convert between 20+ world currencies with live exchange rates. See the true time cost of every conversion at US minimum wage.',
};

export default function CurrencyConverterPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-brand-bg text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-4">
            LIFE DESIGN TOOL
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Currency <span className="text-gradient">Converter</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Live rates across 20+ global currencies — plus the real time cost of every dollar.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-[900px] mx-auto px-6">
          <CurrencyConverter />
        </div>
      </section>
    </>
  );
}
