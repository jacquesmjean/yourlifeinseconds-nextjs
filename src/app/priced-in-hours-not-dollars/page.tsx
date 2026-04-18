import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'Your Expenses Aren\'t Priced in Dollars | YourLifeInSeconds.com',
  description: "Every price tag has a second price tag nobody shows you — the hours of your life it costs. Read your budget in the only currency that matters.",
  openGraph: {
    title: "Your Expenses Aren't Priced in Dollars",
    description: "Every price tag has a second price tag nobody shows you — the hours of your life it costs.",
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your Expenses Aren't Priced in Dollars",
    description: "Every price tag has a second price tag nobody shows you.",
  },
};

export default function PricedInHoursNotDollars() {
  const relatedArticles = [
    {
      title: "You're Not Busy. You're Misallocated.",
      desc: "The real problem isn't that you don't have time. It's that you're investing it in the wrong things.",
      slug: 'not-busy-misallocated',
    },
    {
      title: 'What Money Actually Is',
      desc: "Money is time. Once you see that, you can't unsee it, and your spending quietly reorganizes itself.",
      slug: 'what-money-is',
    },
  ];

  return (
    <ArticleLayout
      category="Money & Time"
      title="Your Expenses Aren't Priced in Dollars"
      subtitle="Every price tag has a second price tag nobody shows you."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The sticker lies.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        A $1,850 rent payment is not a $1,850 rent payment. At a $28/hour post-tax wage, it is <strong className="text-text-primary">66 hours</strong> of working life sold — every month, for as long as you live there. That is more than a full work-week, in hours you will never get back, for the privilege of sleeping under that specific roof.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        A $185/month stack of subscriptions is not $185. It is <strong className="text-text-primary">6.6 hours of your life, every month, forever</strong>. Over 40 working years, that is 3,170 hours — a full year of full-time work — traded for streaming services, phone bills, and app fees you barely notice.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Your net hourly rate is the real number.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Most people treat their salary as their purchasing power. It isn&apos;t. Your salary is gross. Federal tax eats 15-24%. State tax adds 0-13%. FICA takes another 7.65%. Commute, work wardrobe, coffee breaks, and mental recovery time add hidden hours that never show on a paystub.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The number that should drive every spending decision you make is your <em>net hourly rate</em>: after-tax income divided by real working hours (including the 2-3 hours a week of work-related overhead you usually forget). For most middle-income earners, the true number is 40-60% below the headline.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The silent subscription that ate a year.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Nothing on your expense list feels dangerous. Each line is small. Streaming, gym, phone, cloud storage, a coffee routine. The damage isn&apos;t in any single line. It is in the accumulation over decades — and specifically in the fact that you never consciously approved the trade.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        If a coworker pulled you aside and said &quot;I have a proposal: for the next 40 years, give me 11 hours of your working life every month, and in return I&apos;ll give you mid-tier conveniences you rarely think about&quot; — you would decline. But that is, quietly, the arrangement you have made with the autopay bank of you.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Some trades are still worth it.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        This lens is not an argument for austerity. It is an argument for <em>intention</em>. A rent payment that buys 15 minutes of commute instead of 90 is often a phenomenal deal — you are purchasing hours of life back, every workday, at scale. A gym membership you actually use buys you decades of healthier seconds at the end.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The point is never to minimize spending. It is to make sure every line item has been looked at in the real currency — and that each one is a trade you would consciously approve if asked on the spot.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Rewrite the budget. Then rewrite the life.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Try this once. Convert every line on your monthly expense list into hours of your life. Rank them from most to least. Look at the top three.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        There is almost always one surprise. One line that you did not realize was eating that many hours. That surprise is where the next year of your life has been going. You cannot reclaim it in dollars. You can only reclaim it in seconds, one decision at a time.
      </p>
    </ArticleLayout>
  );
}
