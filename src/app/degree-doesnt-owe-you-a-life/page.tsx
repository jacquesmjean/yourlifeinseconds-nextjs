import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/degree-doesnt-owe-you-a-life' },
  title: "The Degree Doesn't Owe You a Life | YourLifeInSeconds.com",
  description: "College ROI statistics are a lie of averages. Understand the survivorship bias, the opportunity cost, and the real life-price of a degree.",
  openGraph: {
    title: "The Degree Doesn't Owe You a Life",
    description: "The ROI figures you were sold are a lie of averages. See the real math.",
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Degree Doesn't Owe You a Life",
    description: "The ROI figures you were sold are a lie of averages.",
  },
};

export default function DegreeDoesntOweYouALife() {
  const relatedArticles = [
    {
      title: 'School Trained You to Trade Time (The Real Industrial Trap)',
      desc: "School didn't teach you to think. It taught you to trade time for grades. The pattern scales up.",
      slug: 'school-trained-you',
    },
    {
      title: 'What Money Actually Is',
      desc: "Once you see money as stored time, tuition stops being a number and starts being a decade.",
      slug: 'what-money-is',
    },
  ];

  return (
    <ArticleLayout
      category="Education & Time"
      title="The Degree Doesn't Owe You a Life"
      subtitle="College ROI statistics are a lie of averages. See the real math — before you sign."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        You were sold the median, as if you were the median.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Every article about &quot;the lifetime value of a degree&quot; works the same way: take the median earnings of people who finished, subtract the median earnings of people without degrees, multiply across a 40-year career. Out pops a gleaming number. $1.2 million! $2.8 million in lifetime premium!
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        That number has a problem. The median graduate is not the median applicant. Forty percent of people who enroll in US college never finish. The people who finish and earn a premium are partly there because they are the kind of people who were going to earn a premium anyway.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Your cost has three line items, not one.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        People compare degree cost to tuition. That is the first mistake. The total investment is three things:
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong className="text-text-primary">Tuition + fees.</strong> The sticker price — before loans and interest.<br/>
        <strong className="text-text-primary">Interest.</strong> On a 10-year standard repayment at 6.5%, a $72,000 loan costs roughly $98,000 to pay off. Twenty-six thousand dollars of that is pure toll — and at a $34/hour post-grad wage, that is <strong className="text-text-primary">2.75 million seconds</strong> of post-college work you owe to the lender for no product.<br/>
        <strong className="text-text-primary">Opportunity cost.</strong> The wages you did not earn while in school. At a $42,000/year alternative salary, four years in school is $168,000 of life you traded — not a line that ever appears on an admissions brochure.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Breakeven is a year, not a vibe.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The real question is not &quot;does a degree pay off?&quot; It is: <em>at what age, specifically, does my degree cross the line from net cost to net gain?</em>
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        If a degree lifts you from $42k to $68k and the full investment (tuition + interest + opportunity cost) is roughly $266,000, the breakeven is about 10 years post-graduation — somewhere around age 32 if you started at 18. Up until that year, the degree was a net financial loss. That doesn&apos;t make it a bad decision. But it changes the conversation about debt, grad school, and career chasing in your 20s.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        What this math doesn&apos;t capture.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        A pure financial-ROI lens misses a lot. The credential opens doors that are simply closed without it. The network compounds. The identity shift — from &quot;someone who did not go&quot; to &quot;someone who did&quot; — changes decisions for decades. For some fields (medicine, law, academia, licensed engineering), there is no alternative path.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The lens also underestimates the <em>risk</em> of the alternative path. A 10% probability of finding a $90k/year track without college is not the same as certainty. The degree reduces variance even when it does not raise the mean.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Sign with both eyes open.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The point of the math is not to talk anyone out of college. It is to ensure that you are agreeing to what you are actually agreeing to. Four years of your 20s. A six-figure debt that will quietly skim seconds off your 30s. A breakeven that does not arrive until your early 30s, if things go well.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        A degree, at its best, buys you optionality, identity, and a network. What it does <em>not</em> buy you is a guaranteed life. It does not owe you one, and it will not deliver one. That part is still on you.
      </p>
    </ArticleLayout>
  );
}
