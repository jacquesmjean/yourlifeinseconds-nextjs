import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/what-money-is' },
  title: 'What Money Actually Is | YourLifeInSeconds.com',
  description: "Money isn\'t currency. Money is time. Discover how reframing money as stored life energy transforms every financial decision you make.",
  openGraph: {
    title: 'What Money Actually Is — Money is Time',
    description: "Money isn\'t currency. Money is time. Reframe your financial decisions by understanding money as stored life energy.",
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Money Actually Is — Money is Time',
    description: "Money isn\'t currency. Money is time.",
  },
};

export default function WhatMoneyIs() {
  const relatedArticles = [
    {
      title: 'Where Your Life Actually Goes',
      desc: 'A time audit of your entire life. Where are the 8,760 hours in your year really spent?',
      slug: 'where-your-life-actually-goes',
    },
    {
      title: 'You\'re Not Busy. You\'re Misallocated.',
      desc: 'The real problem isn\'t that you don\'t have time. It\'s that you\'re investing it in the wrong things.',
      slug: 'not-busy-misallocated',
    },
  ];

  return (
    <ArticleLayout
      category="Money & Time"
      title="What Money Actually Is"
      subtitle="Money isn&apos;t currency. Money is time."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The True Currency of Your Life
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        We think of money as pieces of paper, digital numbers in a bank account, or abstract financial instruments. But this perspective is fundamentally broken. Money is not currency. Money is time.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This isn&apos;t poetry or metaphor. It&apos;s mathematics. Every dollar you earn represents a direct exchange of your limited, irreplaceable life energy. When you make $30 per hour, that $90 dinner costs three hours of your life. Not three hours of &quot;work&quot; — three hours of your actual existence. Three hours you will never get back.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Math of Life Energy Exchange
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Let&apos;s make this concrete. Suppose you earn $50,000 per year. Before you think &quot;That&apos;s a good salary,&quot; do this calculation: Subtract taxes (federal, state, local, FICA). Most people lose 25-40% immediately. Now subtract commute costs, work clothing, meals outside the home, coffee breaks — the expenses that exist only because you work. For many people, this is another 10-20% of gross income.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        What remains is your true purchasing power. But there&apos;s more. You&apos;re working roughly 2,000 hours per year (50 weeks × 40 hours). Add your commute, work preparation, and mental recovery time. Many people actually give 2,500-3,000 life hours to their jobs annually. This means your true hourly rate isn&apos;t $25. It&apos;s often $12-15 after accounting for the full cost.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Now when you see that $50 sweater, you&apos;re not spending money. You&apos;re spending 3-4 hours of your remaining life. That vacation you&apos;re considering isn&apos;t a financial expense — it&apos;s a choice about how to allocate a chunk of your finite existence.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Why the Rich Actually Buy Time, Not Things
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Wealthy people understand something that takes most of us decades to learn: once you have basic security, the only thing worth buying is time. Not watches that tell time. Not time management tools. Actual time — the literal hours in your day.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        A billionaire doesn&apos;t optimize for cheaper groceries. They hire someone to shop. They don&apos;t spend two hours on Sunday meal prep. They pay for prepared meals. They don&apos;t waste an hour in traffic commuting. They take a helicopter or live near their work. They don&apos;t spend four hours a week cleaning. They hire cleaning services.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The wealthy&apos;s spending pattern isn&apos;t about showing off. It&apos;s rational. They&apos;ve calculated that their hourly life energy is worth far more than the cost of outsourcing time-consuming tasks. A person earning $500 per hour is mathematically justified in paying $50 to have someone else handle a task that takes an hour — even if they could technically do it cheaper themselves.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Most of us are trained to do the opposite. We penny-pinch on the small expenses we could outsource, while wasting our most valuable resource — our time — on low-value work and activities that don&apos;t matter.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Exchange Rate Nobody Teaches You
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Here&apos;s what every financial decision comes down to: What is your time worth per hour, and what are you trading it for?
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Start by calculating your real hourly rate. If you earn $60,000 gross annually and work 2,000 paid hours, that&apos;s $30/hour. Now subtract taxes, payroll deductions, and work-related costs. For most middle-class workers, you&apos;re down to $15-18 net hourly earning power. This is the exchange rate of your life.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Now apply this to every purchase:
      </p>
      <ul className="list-disc list-inside space-y-2 text-text-secondary text-lg">
        <li>That $50 dinner costs 3 hours of your life</li>
        <li>That $200 coat costs 11 hours of your life</li>
        <li>That $2,000 vacation costs 111 hours of your life</li>
        <li>That $150,000 car costs 8,333 hours of your life</li>
      </ul>
      <p className="text-text-secondary text-lg leading-relaxed mt-4">
        When you frame it this way, suddenly many purchases seem absurd. You&apos;re trading days of your finite existence for things you might barely use. But other purchases — investing in your health, your education, your relationships — suddenly look like the smartest investments possible.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        How This Reframe Changes Everything
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Understanding money as time energy fundamentally shifts how you make decisions. It&apos;s not about being cheap. It&apos;s about being honest about what you&apos;re actually trading.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        That extra side gig that earns $500 per month? You&apos;re trading 30 hours of your life for it. Is 30 hours of your finite existence worth the money? Only you can answer. But most people never ask the question. They just accept the work without calculating the true cost.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        That career change that pays $10,000 less per year? It might be the best trade you ever make if it also gives you back 10 hours per week of your time. Do the math: 10 hours/week × 50 weeks = 500 hours per year. At your current exchange rate, are those 500 hours of recovered life worth the $10,000 salary cut? Often, absolutely yes.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This reframe also changes how you think about money-saving strategies. Clipping coupons to save $20 per week might cost you 2 hours weekly in time spent organizing, clipping, and planning. You&apos;re trading 2 hours of your life to keep $20. That&apos;s an exchange rate of $10/hour — which is less than your net earnings. Not a good trade.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But investing 10 hours in reducing your monthly expenses by $200 through consolidation or better planning? That&apos;s an exchange rate of $20/hour on recovered time. And more importantly, you&apos;ve created a permanent reduction in what you need to earn.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Path to Freedom Starts With This Single Reframe
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Once you see money as time, your financial life becomes clearer. The goal stops being &quot;earn more money&quot; and starts being &quot;optimize my time energy allocation.&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This leads to genuinely intelligent financial decisions: Build skills and leverage to increase your hourly rate (earning more per hour worked). Reduce unnecessary expenses to lower the amount you need to earn (decreasing your required work hours). Invest in time-saving solutions strategically (outsourcing low-value tasks). Build systems and passive income (decoupling earnings from your time).
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The average person spends 90,000 hours of their life working. That&apos;s approximately one-third of your existence, excluding sleep. But most people never stop to calculate whether they&apos;re getting a fair exchange rate. They don&apos;t know their true hourly rate. They don&apos;t track what they&apos;re trading their time for. They just spend and work and hope things work out.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But you&apos;re reading this. So now you know: money is time. Every dollar is a unit of your life energy. Every purchase is a choice about how many hours of your remaining existence you&apos;re willing to trade for something.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The question isn&apos;t whether you can afford something. The question is: Can you afford to spend that much of your life on it?
      </p>
    </ArticleLayout>
  );
}
