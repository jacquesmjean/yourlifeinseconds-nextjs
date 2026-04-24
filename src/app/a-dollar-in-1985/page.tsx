import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/a-dollar-in-1985' },
  title: 'A Dollar in 1985 | YourLifeInSeconds.com',
  description: "Your hour of work does not buy what your parents' hour bought. Here is why that matters, and what to do about it before the next forty years pass the same way.",
  openGraph: {
    title: 'A Dollar in 1985',
    description: "Your hour of work does not buy what your parents' hour bought. Here is why.",
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Dollar in 1985',
    description: "Your hour of work does not buy what your parents' hour bought.",
  },
};

export default function ADollarIn1985() {
  const relatedArticles = [
    {
      title: 'What Money Actually Is',
      desc: "Money is not currency. Money is time. Reframe your whole financial plan around the unit that matters.",
      slug: 'what-money-is',
    },
    {
      title: 'Freedom Is a Math Problem, Not a Feeling',
      desc: 'Financial independence is a specific number, a specific date, and a specific countdown.',
      slug: 'freedom-is-a-math-problem',
    },
  ];

  return (
    <ArticleLayout
      category="Money & Time"
      title="A Dollar in 1985"
      subtitle="Your hour of work does not buy what your parents' hour bought. Here is why that matters — and what to do about it before the next forty years pass the same way."
      relatedArticles={relatedArticles}
      slug="a-dollar-in-1985"
      datePublished="2026-04-19"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Inflation is the most underestimated force in your life.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Not because it is hidden — the number is right there, on the news, every month. It is underestimated because the number, on any given month, is small. 2%. 3%. 6% in a &quot;bad&quot; year. You glance at it and move on. You feel it a little at the grocery store. You do not feel it the way it actually works, which is slow, silent, and compounding against you for decades.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Over a working life, &quot;small&quot; inflation becomes enormous. A dollar in 1985 has the buying power of roughly three dollars today. That is not a rounding error. That is a 66% tax on your savings over 40 years, paid whether or not you were paying attention.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The dollar is a ruler that shrinks.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You cannot measure anything honestly with a ruler that changes length. And yet we try. We compare our salary to what our father made in 1985. We think about a house in terms of the sticker price in the newspaper. We mentally benchmark what &quot;rich&quot; means against a number we absorbed as a teenager. All of it is wrong by a factor of two or three, and getting wronger every year.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The only honest ruler is time. An hour is an hour is an hour. The question is: what does an hour of my work actually buy? Gallons of gas, pounds of food, months of rent, years of school for a child. Those numbers do not lie. They tell you whether, adjusted for inflation, you are gaining ground or losing it.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Most people are running to stand still.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        If your salary goes up 3% this year and inflation was 3.5%, you got a pay cut. You feel like you got a raise — the number on the paystub went up. You didn&apos;t. You are poorer. This has happened to the American middle class for most of the past fifty years. Real median wages, adjusted for inflation, have barely budged since the 1970s while the cost of housing, healthcare, and education has multiplied.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The people who got ahead are not the ones who got bigger raises. They are the ones who owned assets that rose faster than inflation &mdash; equities, houses, businesses. This is the whole game. If you are earning dollars and saving in dollars, inflation is eating you. If you are earning dollars and converting some of them into assets, inflation can actually work for you.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The projections to 2040 matter more than the history.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        It is tempting to treat the 1985-to-2025 story as curiosity &mdash; look how much things used to cost! The more useful exercise is to run it forward. At 2.5% annual inflation (the historical average), prices double every 28 years. That means the $100,000 salary you find impressive today has the buying power of about $50,000 by 2055. Your $3 gallon of gas is a $6 gallon. Your $1,400 rent is $2,800.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        If your income, savings rate, and asset allocation do not account for this, you are on a trajectory that looks comfortable today and brutal later. The numbers do not care how you feel about them. They will compound whether you are watching or not.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        What to do with this.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Three practical moves. One &mdash; stop comparing to nominal historical numbers. If someone in your family bought a house in 1985 for $80,000 and you are trying to figure out whether you are doing as well as they were, the correct reference point is not $80,000; it is roughly $240,000 in today&apos;s dollars. Adjust before you judge.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Two &mdash; index your savings to time, not dollars. Instead of &quot;I want $2M to retire,&quot; it is &quot;I want 25 years of my current annual spending.&quot; The second definition survives inflation; the first does not. Three &mdash; hold assets that historically beat inflation. Real estate, broad equity indexes, and productive businesses (including your own) have all done it. Cash and bonds have not.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The ruler you can trust.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The dollar is a promise whose value the issuer has been quietly eroding for a hundred years. Your time is not. An hour of your life in 1985 cost you the same thing it costs you today &mdash; an hour. Measure your wealth, your work, and your freedom in hours, and the math stops lying to you.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The time-traveler tool is not nostalgia. It is a mirror you point at the future you are heading toward. Run it for 2040. Then decide whether the version of you living in that year is going to thank you for what you did with the next decade.
      </p>
    </ArticleLayout>
  );
}
