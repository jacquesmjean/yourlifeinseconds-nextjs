import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/debt-is-paid-with-years' },
  title: 'Debt Is Paid With Years, Not Dollars | YourLifeInSeconds.com',
  description: "The 22% APR is not a fee. It is a life-tax you agreed to. Calculate the real price of your debt in the only currency that matters — your seconds.",
  openGraph: {
    title: 'Debt Is Paid With Years, Not Dollars',
    description: "Interest is a voluntary tax on your future time. Reframe your debt from dollars to the years of life owed.",
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Is Paid With Years, Not Dollars',
    description: "Interest is a voluntary tax on your future time.",
  },
};

export default function DebtIsPaidWithYears() {
  const relatedArticles = [
    {
      title: 'What Money Actually Is',
      desc: "Money isn't currency. Money is time. Every dollar is a piece of your life you have already lived.",
      slug: 'what-money-is',
    },
    {
      title: "You're Not Busy. You're Misallocated.",
      desc: 'The real problem isn\'t that you don\'t have time. It\'s that you\'re investing it in the wrong things.',
      slug: 'not-busy-misallocated',
    },
  ];

  return (
    <ArticleLayout
      category="Money & Time"
      title="Debt Is Paid With Years, Not Dollars"
      subtitle="The 22% APR is not a fee. It is a life-tax you agreed to."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The lender does not want your dollars. They want your time.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        When you borrow money, no one is actually lending you paper or bytes. They are lending you <em>someone else&apos;s future labor</em>, and collecting <em>yours</em> in exchange, with a premium on top.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        That premium is the interest rate. And interest is not a fee. It is the toll you agreed to pay for moving a chunk of your future self&apos;s life energy into the present. You are selling seconds you haven&apos;t lived yet — at a discount.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The 22% tax nobody voted on
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The average US credit card APR is over 22%. If a politician proposed a 22% tax on everyone, there would be riots. But when a bank charges it on a balance, we call it a rate and we pay it without protest.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        At $18,500 of balance and $450/month in payments, that 22.5% rate means you pay roughly <strong className="text-text-primary">$12,500 in pure interest over 7 years</strong>. At a $32 post-tax hourly wage, that is <strong className="text-text-primary">1,400,000 seconds</strong> — about five months of your working life, delivered straight to the lender, for no product or service. You are working five months for a company that gave you nothing new.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Principal is honest. Interest is a life-tax.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Paying principal is paying for something you actually bought. A sofa, a car, a tuition bill. You got a thing; you traded time for it. That is fair.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Interest is different. Interest is the cost of <em>not having the time yet</em>. It is a tax on impatience. Every month you carry the balance, the clock on your life ticks a little faster — and a fraction of that tick is skimmed off the top and sent elsewhere.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Liberation is a date, not a feeling.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        When you convert your debt into seconds, something useful happens: the payoff stops being abstract. &quot;I have some credit card debt&quot; becomes &quot;I am owing April 2032 to this lender.&quot; That is a real month. A real birthday. A real set of summers.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Doubling your monthly payment doesn&apos;t just save dollars. It buys back specific months of your life at the end of this arrangement. At $450/month on our example, doubling to $900 saves about three years — and roughly 16 million seconds you would otherwise have worked for interest you never owed in the first place.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        You are not irresponsible. The math was hidden.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Most people do not carry debt because they are reckless. They carry it because the real price — <em>in the actual currency of their lives</em> — was never made visible at the point of decision. A 22% number on a statement does not feel like a five-month life-tax. But it is.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The first step is not guilt. It is seeing the number. Convert the balance to seconds. Pick the liberation date. Then decide, with clear eyes, whether the thing you bought was worth the months you will work for it.
      </p>
    </ArticleLayout>
  );
}
