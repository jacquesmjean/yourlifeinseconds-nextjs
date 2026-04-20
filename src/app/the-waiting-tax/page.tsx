import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'The Waiting Tax | YourLifeInSeconds.com',
  description: "Procrastination is not free. It is a line item on your life — paid in dollars, health, and seconds you will never get back. Here is how to read the receipt.",
  openGraph: {
    title: 'The Waiting Tax',
    description: 'Procrastination is not free. See what it is costing you.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Waiting Tax',
    description: 'Procrastination has a price. Read the receipt.',
  },
};

export default function TheWaitingTax() {
  const relatedArticles = [
    {
      title: 'Freedom Is a Math Problem, Not a Feeling',
      desc: 'Financial independence is a specific number, a specific date, and a specific countdown. Stop selling your seconds on faith.',
      slug: 'freedom-is-a-math-problem',
    },
    {
      title: "Not Busy, Misallocated",
      desc: 'You do not have a time problem. You have a priority problem disguised as a calendar.',
      slug: 'not-busy-misallocated',
    },
  ];

  return (
    <ArticleLayout
      category="Money & Time"
      title="The Waiting Tax"
      subtitle="Procrastination is not free. It is a line item on your life — paid in dollars, health, and seconds you will never get back."
      relatedArticles={relatedArticles}
      slug="the-waiting-tax"
      datePublished="2026-04-19"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Nobody tells you the meter is running.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You have a thing you keep meaning to start. A business. An investment account. A book. A hard conversation. You are not lazy — you have reasons. You are waiting for the right time, the right savings buffer, the right mood.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Meanwhile, the meter is running. Every day you do not start, something is getting more expensive. You just do not see the invoice.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The math of delay is worse than the math of failure.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        $500 a month invested at 7% over 30 years is about $612,000. Delay that by one year — start at month 13 — and you end with about $565,000. That year of waiting cost you <strong className="text-text-primary">$47,000</strong>. Not one payment. Forty-seven thousand dollars you never got to spend.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Delay the whole decision by five years and you lose about $175,000. You did not fail at investing — you just did not start. That is the Waiting Tax. And it is bigger than almost every bad trade you will ever make.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The tax is not only money.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You also pay in pounds not lost, miles not run, books not finished, words not said. A year of not fixing your sleep is not a neutral year — it is a year you pay for later, compounded. A year of not having the conversation with your parent is a year you permanently do not have.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The difference between financial Waiting Tax and life Waiting Tax is that money can sometimes be made back. Time cannot. You do not get April 19, 2026 again.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Why the tax gets quietly bigger.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Three things happen while you wait. One — the opportunity keeps compounding against you, at market rates. Two — your identity stiffens around the delay. You stop being &quot;someone who is starting a business&quot; and become &quot;someone who has been thinking about it for four years.&quot; Three — the thing you were waiting for (the right moment, the next promotion, the kids getting older) rarely arrives; another reason to wait takes its place.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The cost does not land in a single bill. It lands in a hundred small moments where you could have been further along and you are not.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The antidote is not motivation. It is the receipt.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You are not going to motivate yourself out of a five-year delay with a good podcast. What works is putting the number in front of your face. Not a vague &quot;someday this will be worth it&quot; — a specific, live counter, ticking up in dollars, in seconds, in compounded loss. Once you can see the meter, you can decide whether you want to keep paying.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Some people will look at the receipt and still choose to wait. Fine. At least now it is a choice, not a default.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Start anything, badly, today.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The cheapest way to stop paying the Waiting Tax is not to do the perfect version. It is to do the tiny first version — the $50 transfer, the half-page draft, the five-minute phone call — today. Not Monday. Not after the next paycheck. Today, badly.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Because the only guaranteed way to pay less tax tomorrow is to start being a taxpayer of the other kind — the kind who pays with action, not time.
      </p>
    </ArticleLayout>
  );
}
