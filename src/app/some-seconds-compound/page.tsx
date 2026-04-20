import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'Some Seconds Compound. Most Don\'t. | YourLifeInSeconds.com',
  description: "An hour spent mentoring carries for 20 years. An hour of doom-scroll carries for zero. Here is how to tell compounding time from consumable time — and why it matters.",
  openGraph: {
    title: "Some Seconds Compound. Most Don't.",
    description: 'An hour of mentoring carries for 20 years. An hour of scrolling carries for zero.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Some Seconds Compound. Most Don't.",
    description: 'Compounding time vs. consumable time. Learn the difference.',
  },
};

export default function SomeSecondsCompound() {
  const relatedArticles = [
    {
      title: "The Regret You Can't Afford",
      desc: 'Your calendar keeps voting against your values. Read the drift. Fix it.',
      slug: 'the-regret-you-cant-afford',
    },
    {
      title: 'Designing a Life That Is Yours',
      desc: "Most people do not design their lives. They inherit them. Learn to architect yours on your terms.",
      slug: 'designing-your-life',
    },
  ];

  return (
    <ArticleLayout
      category="Time & Impact"
      title="Some Seconds Compound. Most Don't."
      subtitle="An hour of mentoring carries for 20 years. An hour of doom-scroll carries for zero. Here is how to tell the difference &mdash; and why it matters."
      relatedArticles={relatedArticles}
      slug="some-seconds-compound"
      datePublished="2026-04-19"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Time is not one thing.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        We talk about time as if every hour were identical &mdash; a single currency, stacked in a jar. It is not. Some hours are consumable &mdash; you spend them, they are gone, and the world is exactly where it would have been otherwise. Some hours are seeds &mdash; you spend them once, and they produce returns for decades.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This is the single most important reframe you can make in your relationship to time. Not all hours are equal. Most of them are cash. A small fraction of them are capital.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The simple test: does this carry?
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Ask one question of any hour: <strong className="text-text-primary">does this still matter in a year?</strong> In five? In twenty? An hour spent walking with your aging father &mdash; yes, forever. An hour spent mentoring someone early in their career &mdash; yes, the rest of their life. An hour writing a post that helps a stranger &mdash; yes, as long as it is read.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        An hour scrolling through a feed? Gone before you put the phone down. An hour in a meeting that could have been an email? Gone, and it took someone else&apos;s hour with it. An hour replaying a frustration in your head? Not just gone &mdash; it also poisoned the next hour.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Legacy ROI is a conservative measure.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The Legacy Score is not mystical. It is three numbers multiplied together: hours you put in, people the work touches, years it keeps working. A tutor who works 5 hours a week with one student, and that student carries the lesson for 30 years, is generating 150 person-years of ripple per year of teaching. A TV hour generates one person-hour of ripple. That is a four-order-of-magnitude difference.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The numbers are conservative on purpose. They underweight audience effects, network effects, and second-order impact (the mentee who then mentors someone else). The point is not precision. The point is the shape. Once you start sorting your hours by shape, you stop trying to &quot;manage time&quot; and start managing <em>kinds</em> of time.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The brutal sort.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Walk through yesterday, hour by hour, and ask the carry question. Most people discover that 90% of their day was spent on hours that do not carry past the week. That is not a moral failure. That is just the default state of modern life &mdash; optimized to consume your attention in ways that compound for someone else, not you.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The people who end up having made a difference are not the ones who worked more hours. They are the ones who found, defended, and grew the small number of hours that carry. Most days they are only three. But those three are the ones that, a decade from now, will still be producing returns.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        You cannot buy compound time with money.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        This is the part that feels unfair. You can outsource laundry, dog-walking, groceries, even meal prep. You cannot outsource the mentoring, the parenting, the writing, the building, the relationship. The hours that compound are the hours where <em>you</em> have to be in the room. That is why they are scarce. That is why they matter.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The operational implication: protect them like capital. Calendar them like capital. Refuse meetings like capital. Say no to anything that would consume them on something that does not carry.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Start with one hour this week.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You will not overhaul your calendar. You will find one hour this week and convert it from consumable to compounding. Call the person you have been meaning to call. Write the 500 words. Mentor the junior person who asked last month. Do the thing that will still matter to someone in ten years.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Next week, another. Over a year, you will have converted fifty hours. Over a decade, five hundred. That is a portfolio of compounding time. That is what a legacy is: not a grand achievement, but the accumulated yield of the small number of hours you spent on things that kept paying after you stopped paying attention.
      </p>
    </ArticleLayout>
  );
}
