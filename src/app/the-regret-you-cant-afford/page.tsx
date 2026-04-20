import type { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: "The Regret You Can't Afford | YourLifeInSeconds.com",
  description: "Nobody on a deathbed wishes they had spent more time on email. But your calendar keeps voting the other way. Here is how to read the drift — and fix it before it compounds.",
  openGraph: {
    title: "The Regret You Can't Afford",
    description: 'Your calendar is voting against your values. Read the drift. Fix it.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Regret You Can't Afford",
    description: 'Your calendar keeps voting against your values. Fix the drift.',
  },
};

export default function TheRegretYouCantAfford() {
  const relatedArticles = [
    {
      title: 'Not Busy, Misallocated',
      desc: 'You do not have a time problem. You have a priority problem disguised as a calendar.',
      slug: 'not-busy-misallocated',
    },
    {
      title: 'The Life You Design (Not Inherit)',
      desc: 'Most people do not design their lives. They inherit them. Learn to architect yours on your terms.',
      slug: 'designing-your-life',
    },
  ];

  return (
    <ArticleLayout
      category="Life Design"
      title="The Regret You Can't Afford"
      subtitle="Nobody on a deathbed wishes they had spent more time on email. But your calendar keeps voting the other way."
      relatedArticles={relatedArticles}
      slug="the-regret-you-cant-afford"
      datePublished="2026-04-19"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Regret is a lagging indicator.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        By the time you feel regret, the allocation has been made. The phone call you did not make to your father last spring. The year your daughter turned twelve that you mostly remember as a blur of deadlines. The book you keep meaning to write. The body you keep meaning to get back.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Regret is the ledger showing up long after the spending. Which means the only useful question is not &quot;will I regret this?&quot; &mdash; it is &quot;what am I currently trading?&quot;
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Your values are abstract. Your calendar is concrete.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Ask anyone what their top three values are and they will give you a clean answer: family, health, craft. Ask them where last week went and they will pull up a calendar that shows almost none of that. The gap is not hypocrisy. It is drift &mdash; each week, a hundred small decisions pulled slightly away from what matters, each one defensible, the cumulative result catastrophic.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        A week of 112 waking hours is a budget. If only 10 of those are on what you say matters, your actual life does not match your stated life by a factor of 10. Across thirty years, that is not a rounding error. That is the majority of what you had to spend.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Maintenance is the cost of being alive. Drift is the cost of not being intentional.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Work, chores, commute, admin &mdash; these are not villains. They are the rent you pay on being a functioning adult in a modern economy. The problem is not maintenance. The problem is when maintenance grows slowly, invisibly, until it is 80% of your week and you did not notice because every single item on the list seemed necessary.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The useful move is not to resent the maintenance. It is to measure it. You cannot reallocate what you refuse to count.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Ten hours a week is everything.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Most people &mdash; if they are honest &mdash; can identify ten hours a week that are neither required by reality nor returning anything meaningful. The second meeting that could have been an email. The commute that could have been remote. The two evenings of doom-scroll that do not count as rest. The meal prep you outsource. The yes you said that should have been a no.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Ten hours a week &times; 40 years &asymp; 20,000 hours. That is roughly ten years of a professional career. You are sitting on a decade of your life, right now, inside the drift. The question is whether you want to spend it.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Start with three names, not a schedule.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Most productivity advice starts with the calendar. That is backwards. Start with the values. Three of them, not ten. Specific, not abstract. Not &quot;health&quot; &mdash; &quot;walking an hour with my wife every evening.&quot; Not &quot;family&quot; &mdash; &quot;calling my mother on Sundays.&quot; Not &quot;craft&quot; &mdash; &quot;45 minutes of writing before work, six days a week.&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Then, and only then, look at the calendar. If the top three are not there &mdash; not in aspiration, in actual blocks of actual days &mdash; nothing else you do will compound in a direction you care about.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The cheapest regret is the one you prevent this week.
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You will not fix this in one sweep. You will fix it by looking at next week, finding the one hour that is maintenance drift, and moving it to a value. Then the next week, finding another. Not a lifestyle overhaul. A rebalance.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The people who get to the end of their lives without the big regrets are not the ones who had perfect lives. They are the ones who, week after week, kept pulling their allocation closer to their values, even when the world was pulling the other way. That is the only difference. And it is available to you this week.
      </p>
    </ArticleLayout>
  );
}
