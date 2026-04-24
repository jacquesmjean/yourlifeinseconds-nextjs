import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/freedom-is-a-math-problem' },
  title: 'Freedom Is a Math Problem, Not a Feeling | YourLifeInSeconds.com',
  description: "Financial independence is not a vibe. It is a specific number, a specific date, and a specific countdown. Learn what 25x actually buys you.",
  openGraph: {
    title: 'Freedom Is a Math Problem, Not a Feeling',
    description: "FI is a specific number, a specific date, and a specific countdown. Stop selling your seconds on faith.",
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freedom Is a Math Problem, Not a Feeling',
    description: "FI is a specific number and a specific date.",
  },
};

export default function FreedomIsAMathProblem() {
  const relatedArticles = [
    {
      title: 'Designing a Life That Is Yours',
      desc: "Most people don't design their lives. They inherit them. Learn to architect yours on your terms.",
      slug: 'designing-your-life',
    },
    {
      title: 'What Money Actually Is',
      desc: "Money is not currency. Money is time. Reframe your whole financial plan around the unit that matters.",
      slug: 'what-money-is',
    },
  ];

  return (
    <ArticleLayout
      category="Money & Time"
      title="Freedom Is a Math Problem, Not a Feeling"
      subtitle="Financial independence is not a vibe. It is a specific number, a specific date, and a specific countdown."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Most people sell their time on faith.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        They go to work Monday through Friday without knowing, at any level of precision, how long they have to keep doing it before they can stop. &quot;Someday&quot; does a lot of the emotional work. Some vague calculation involving retirement age and a 401(k) balance does the rest.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This is a bad trade. You are handing over the most irreplaceable resource in your life — the seconds of your best decades — without a dated contract. If you made that trade in any other domain, you would be embarrassed.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Trinity number is just 25 times your life.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The 1998 Trinity Study looked at historical US market returns and asked a simple question: what is the largest percentage of your portfolio you can withdraw each year, adjusted for inflation, and not run out in 30 years? The answer for a balanced portfolio was around 4%.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Flip that: if 4% of your portfolio covers your annual expenses, then 25× your annual expenses is your freedom number. Spend $50,000/year, need $1.25M. Spend $80,000/year, need $2M. The math is embarrassingly simple. Everything else is execution.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        4% is a guideline, not gospel.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The Trinity study assumes US market behavior continues behaving. It assumes 30 years, not 50. It does not account for healthcare shocks, lifestyle inflation, or the psychological cost of watching your portfolio halve during a bear market while you are no longer earning.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        A safer lens is to treat 25× as the <em>minimum viable freedom number</em>. If you are risk-averse, plan for 30× or 33×. If you have supplemental income (rental property, a spouse still working, a small business), you can plan on less. The rule is not &quot;4%.&quot; The rule is: <strong className="text-text-primary">know your number, know your date, and respect the math.</strong>
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Every $500/month is a year of your life.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Here is the part most retirement calculators never show you emotionally: freedom responds to savings rate, not to salary. A person earning $80k and saving 40% reaches FI faster than a person earning $200k and saving 10%. Always.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        At 7% expected return, every additional $500/month in contributions — at most income levels — cuts roughly 1 to 3 years off your date. That is not a rounding error. Those are specific summers, specific first days of school, specific mornings with someone you love. You are buying them back, one contribution at a time.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Stop hoping. Start counting.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The fastest way to feel sane about work is to turn it into a countdown. Not &quot;someday I&apos;ll retire.&quot; A specific age. A specific number. A specific seconds-left-on-the-clock.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Once the countdown is running, two things change. One: you stop making decisions on vibes — a $800/month lifestyle upgrade becomes &quot;that is two more years at the desk.&quot; Two: every raise, every side-income dollar, every reduction in fixed expense becomes a tangible number of seconds you just bought back. That is what freedom actually looks like: math running in your favor, on a clock.
      </p>
    </ArticleLayout>
  );
}
