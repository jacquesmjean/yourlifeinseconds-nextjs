import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/where-your-life-actually-goes' },
  title: 'Where Your Life Actually Goes — YourLifeInSeconds',
  description:
    'You think you know where your time goes. A brutal breakdown reveals the truth: sleep, work, commute, meals, chores, and the shocking gap where you expected to be living.',
  openGraph: {
    title: 'Where Your Life Actually Goes',
    description:
      'A data-driven breakdown of how 168 hours vanish every week — and where the real gap lives.',
    type: 'article',
    url: 'https://yourlifeinseconds.com/where-your-life-actually-goes',
    images: [
      {
        url: 'https://yourlifeinseconds.com/og/where-your-life-goes.jpg',
        width: 1200,
        height: 630,
        alt: 'Time allocation breakdown',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where Your Life Actually Goes',
    description: 'The shocking truth about your 168 hours.',
    creator: '@jacquesmjean',
  },
};

const relatedArticles = [
  {
    title: 'The Psychology of Work',
    desc: 'Why you defend your own cage and how work becomes identity.',
    slug: 'psychology-of-work',
  },
  {
    title: "You're Not Busy. You're Misallocated.",
    desc: 'Stop blaming the clock and start owning your allocation.',
    slug: 'not-busy-misallocated',
  },
];

export default function WhereYourLifeActuallyGoesPage() {
  return (
    <ArticleLayout
      category="Time & Perspective"
      title="Where Your Life Actually Goes"
      subtitle="You think you know where your time goes. You don&apos;t."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Illusion of Knowledge
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        When asked how they spend their time, most people paint a coherent narrative. Work, sleep, family,
        hobbies — it all sounds like a balanced allocation of your 24 hours. But when researchers actually
        track people&apos;s lives in real time, something strange emerges. There&apos;s almost always a gap between
        the story people tell about their time and where it actually goes.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This isn&apos;t because people are liars. It&apos;s because human memory is terrible at estimating time. We
        forget the small things — the minutes scrolling through notifications, the dead time between tasks,
        the mental switching costs that swallow 30 minutes at a time. We compress our experience into the
        big categories and forget the leakage. The result is a profound blindness to our own allocation.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        What Actually Happens: A 24-Hour Breakdown
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Let&apos;s be precise. Take an average working adult with a typical schedule. Here&apos;s where 24 hours
        actually goes:
      </p>
      <ul className="list-disc list-inside space-y-2 text-text-secondary text-lg my-6">
        <li><strong>Sleep:</strong> 8 hours. Non-negotiable biology.</li>
        <li><strong>Work:</strong> 8–9 hours. Commute included means closer to 10 sometimes.</li>
        <li><strong>Commute:</strong> 1 hour. Getting there, getting back.</li>
        <li><strong>Meals:</strong> 1.5 hours. Breakfast, lunch, dinner, plus preparation or eating out.</li>
        <li><strong>Chores & Logistics:</strong> 1.5 hours. Laundry, cleaning, admin, bills, groceries.</li>
        <li><strong>Personal Care:</strong> 1 hour. Hygiene, dressing, grooming.</li>
        <li><strong>Screen Time (Low-Value):</strong> 2–3 hours. Social media, news, mindless browsing.</li>
      </ul>
      <p className="text-text-secondary text-lg leading-relaxed">
        That&apos;s 23 to 23.5 hours accounted for. By this accounting, you have 30 minutes to an hour of
        &quot;free&quot; time left. But wait — you don&apos;t actually feel like you have 30 minutes free. That&apos;s because
        this list doesn&apos;t account for the gap.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Shock: The Leakage
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The real numbers are different because of what I call &quot;leakage&quot; — those 2 to 3 hours per day that
        vanish into transition costs, context-switching, waiting, and low-intent scrolling. You&apos;re not
        actively choosing to spend these hours. They&apos;re stolen in the margins.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Fifteen minutes checking email before you &quot;officially&quot; start work. Ten minutes scrolling while
        eating lunch. Twenty minutes waiting for a meeting to start, &quot;just checking&quot; your phone. Thirty
        minutes of low-energy browsing in the evening before bed. Another 30 minutes reading news while
        you wake up. These aren&apos;t headline activities. They&apos;re the tax you pay for living in a connected
        world.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        When you add them all up — the context switches, the notification checks, the passive scrolling — you
        lose 2 to 3 hours per day. That&apos;s 10 to 21 hours per week. Over a year, that&apos;s 500+ hours of life
        spent in a kind of semi-conscious drift. That&apos;s 20+ full days of your life, every year, lost to
        leakage.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Where the Gap Actually Lives
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You probably entered this article thinking the gap lives in &quot;free time&quot; or &quot;personal time&quot; — those
        hours you expect to have for hobbies, learning, relationships, or genuine rest. But that&apos;s not
        where it lives. The gap lives in the margins.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        It&apos;s not that you don&apos;t have time for what matters. It&apos;s that what matters is getting nibbled to
        death by what doesn&apos;t. A two-hour evening could become 90 minutes of real free time and 30 minutes
        of scrolling that you don&apos;t consciously choose. Quality time with your partner becomes quality time
        interrupted by notifications. Reading becomes reading interrupted by email. Exercise becomes exercise
        done while watching content about other people&apos;s lives.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The gap isn&apos;t a missing block of time. It&apos;s the death of 100 cuts. It&apos;s the degradation of every
        hour you have left into something less than it could be. And because it happens in tiny increments,
        you don&apos;t see it. You just feel busy and depleted.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Why This Matters: The Scarcity of Scarcity
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You can make more money. You can gain more experience. You can heal from most mistakes. But you
        cannot make more time. It&apos;s the only resource that is truly non-renewable, and it&apos;s the one thing
        that no amount of wealth can buy back.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        When you understand where your time is actually going — not the story you tell yourself, but the
        real allocation — something shifts. The urgency becomes real. You&apos;re not just managing your day;
        you&apos;re managing the only life you get.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Every hour of leakage isn&apos;t just time wasted. It&apos;s time not spent on something that could have
        shaped who you become. It&apos;s not spent learning. Not spent building. Not spent with people you love.
        Not spent becoming the person you actually want to be.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The First Step: Radical Honesty
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You can&apos;t change what you won&apos;t acknowledge. Most people know their time leaks, but they don&apos;t
        measure it. They feel busy. They feel like they don&apos;t have time for what matters. But they haven&apos;t
        actually looked.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The first step is an audit. Not a vague sense of how you spend your time, but a real accounting.
        What actually happened? Where did the hours go? What was intentional? What was drift?
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This requires honesty. Not the polished narrative — the real story. Every notification checked. Every
        minute of scrolling. Every hour of passive consumption. Every moment of waiting around that could
        have been redirected. When you see it clearly, you can&apos;t un-see it.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        What You Can Do: The 48-Hour Experiment
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Don&apos;t change anything yet. Just track it. For 48 hours, write down what you&apos;re actually doing every
        30 minutes. Not the categories — the actual activity. Be brutally specific.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        You&apos;ll probably be shocked. The small gaps add up faster than you think. Once you see it, you can
        plug the holes. You can decide which leaks are worth stopping and which ones give you genuine rest.
        But you can only decide once you know.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        After 48 hours, take a second look at that breakdown. Where would you reallocate 5 hours a week?
        Just 5 hours. That&apos;s 260 hours a year. That&apos;s meaningful. That&apos;s the beginning of reclaiming your
        life from the margins and giving it back to what actually matters.
      </p>
    </ArticleLayout>
  );
}
