import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/not-busy-misallocated' },
  title: "You're Not Busy. You're Misallocated. — YourLifeInSeconds",
  description:
    "Stop blaming the clock. You have 168 hours a week. The problem isn't time — it's allocation. Learn how to shift from reactive to proactive living.",
  openGraph: {
    title: "You're Not Busy. You're Misallocated.",
    description:
      'A practical audit of your 168 hours and how to reallocate without adding more time to your life.',
    type: 'article',
    url: 'https://yourlifeinseconds.com/not-busy-misallocated',
    images: [
      {
        url: 'https://yourlifeinseconds.com/og/misallocated.jpg',
        width: 1200,
        height: 630,
        alt: 'Time allocation and priorities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "You're Not Busy. You're Misallocated.",
    description: 'Stop blaming the clock and start owning your allocation.',
    creator: '@jacquesmjean',
  },
};

const relatedArticles = [
  {
    title: 'Where Your Life Actually Goes',
    desc: 'The shocking breakdown of your 24 hours and where the real gaps live.',
    slug: 'where-your-life-actually-goes',
  },
  {
    title: 'The Psychology of Work',
    desc: 'Why you defend your current allocation and how to break free.',
    slug: 'psychology-of-work',
  },
];

export default function NotBusyMisallocatedPage() {
  return (
    <ArticleLayout
      category="Time & Perspective"
      title="You&apos;re Not Busy. You&apos;re Misallocated."
      subtitle="Stop blaming the clock and start owning your allocation."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Busy Epidemic (That Isn&apos;t Really About Time)
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Everyone is busy. Everyone says it. &quot;I&apos;m so busy.&quot; &quot;I don&apos;t have time.&quot; &quot;When are you free?&quot; &quot;I&apos;m
        slammed.&quot; Busyness has become a status symbol. The busier you are, the more important you must be.
        The more in-demand. The more valuable.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But here&apos;s what nobody talks about: busyness is a choice. Not in the abstract, moral sense. In the
        actual, practical sense. You have 168 hours in a week. That&apos;s a fixed number. Nobody gets more. And
        yet, somehow, people experience radically different relationships to time. Some feel abundant and
        spacious. Some feel scarce and crushing. Why?
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The answer isn&apos;t how many hours you have. It&apos;s how you allocate the ones you do. Busyness isn&apos;t
        about quantity of hours. It&apos;s about the quality of your decisions about which hours go where.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The 168-Hour Audit: Where Everything Actually Goes
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Let&apos;s start with the math. You have 168 hours in a week. Here&apos;s where they probably go:
      </p>
      <ul className="list-disc list-inside space-y-2 text-text-secondary text-lg my-6">
        <li><strong>Sleep:</strong> 56 hours (8 hours × 7 nights)</li>
        <li><strong>Work:</strong> 45 hours (typical 9-5 + commute)</li>
        <li><strong>Meals:</strong> 10.5 hours (1.5 hours × 7 days)</li>
        <li><strong>Chores & Logistics:</strong> 10.5 hours (laundry, cleaning, errands)</li>
        <li><strong>Personal Care:</strong> 7 hours (hygiene, dressing)</li>
        <li><strong>Passive Consumption:</strong> 14-21 hours (social media, TV, news)</li>
        <li><strong>Remaining:</strong> 25-32 hours (what&apos;s left)</li>
      </ul>
      <p className="text-text-secondary text-lg leading-relaxed">
        That&apos;s not much. You&apos;ve got roughly 25 to 32 hours of discretionary time in a week. That&apos;s less
        than a full day. And yet, this is the time you&apos;re supposed to use for:
      </p>
      <ul className="list-disc list-inside space-y-2 text-text-secondary text-lg my-6">
        <li>Quality time with family and partner</li>
        <li>Deep friendships and social connection</li>
        <li>Exercise and health</li>
        <li>Learning and growth</li>
        <li>Personal projects and hobbies</li>
        <li>Rest and genuine relaxation</li>
      </ul>
      <p className="text-text-secondary text-lg leading-relaxed">
        No wonder you feel busy. You&apos;re trying to fit a life into the margins. But here&apos;s the thing: you
        can&apos;t fix this by &quot;finding more time.&quot; There is no more time. The only option is reallocation.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Priority vs. Urgency: The Eisenhower Matrix Applied to Your Life
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Most people allocate their time based on urgency, not priority. Urgent things scream. They have
        deadlines. They have consequences. Your boss&apos;s email is urgent. A ringing phone is urgent. A message
        from your partner is urgent. And because they&apos;re urgent, they get your time.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But urgency isn&apos;t the same as importance. The most important things in your life are often not
        urgent. Exercise is important but not urgent. Learning is important but not urgent. Deep friendships
        are important but not urgent. Family time is important but not urgent. These things don&apos;t scream for
        your attention, so they get deprioritized in favor of things that do.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The Eisenhower Matrix divides tasks into four categories: Urgent & Important, Not Urgent but
        Important, Urgent but Not Important, and Neither. Most people spend their time in the Urgent bucket,
        regardless of importance. They respond to whatever demands attention. And then they wonder why they
        never have time for what matters.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Real allocation isn&apos;t reactive. It&apos;s proactive. You decide what&apos;s important, and you protect time
        for it. You make it a non-negotiable. Not because it screams, but because you decided it matters.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The 80/20 Rule Applied to Time
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The 80/20 rule suggests that about 80% of results come from 20% of efforts. Applied to time, this
        means that the majority of your life satisfaction probably comes from a small set of activities and
        relationships. Not everything you do matters equally.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        So what are your 20%? What activities, relationships, and pursuits actually drive your happiness
        and sense of meaning? For most people, it&apos;s something like: one or two close relationships, one or
        two areas of work they care about, one or two physical activities, one or two hobbies or interests.
        Not everything you do.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But here&apos;s the tragedy: people spend 80% of their time on the other 80% of activities — the ones that
        don&apos;t actually matter. They spend hours on things that give them minimal satisfaction. They spend
        their limited discretionary time on obligations instead of investments.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        What if you flipped this? What if you identified your 20% — the activities and people that actually
        matter — and protected that time fiercely? What if the rest of your life was designed around making
        space for the 20%? You wouldn&apos;t suddenly have more time, but you&apos;d have a completely different
        relationship to the time you have.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        How to Reallocate Without Adding Hours
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You can&apos;t add hours, but you can move them. Here&apos;s how:
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>First, audit the non-essentials.</strong> That 14-21 hours of passive consumption? That&apos;s
        the most movable part of your schedule. Social media, news, TV — these are habits, not necessities.
        Cut or reduce them ruthlessly. Even cutting 5-10 hours here gives you 5-10 hours to reallocate to
        things that matter.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Second, batch the administrative work.</strong> Instead of checking email all day, check it
        at specific times. Instead of doing chores whenever, do them all at once on a designated day. Batch
        everything that doesn&apos;t require your best thinking into condensed blocks of time. This gives you
        larger uninterrupted blocks for the things that do matter.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Third, protect the 20%.</strong> Once you know what actually matters, calendar it. Make it
        as non-negotiable as a work meeting. Deep time with your partner isn&apos;t something that happens if
        there&apos;s time left — it&apos;s scheduled. Regular exercise isn&apos;t squeezed in — it&apos;s protected. Learning that
        matters isn&apos;t a hobby — it&apos;s a commitment.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Fourth, say no to the rest.</strong> Every yes to something you don&apos;t care about is a no to
        something you do. So get comfortable with declining. Declining invitations. Declining projects.
        Declining obligations that don&apos;t align with your 20%. This is where most people fail. They can&apos;t
        stand the discomfort of saying no.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Shift From Reactive to Proactive Living
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Most people live reactively. They wake up and respond to whatever demands attention. Emails, texts,
        notifications, obligations, crises. They&apos;re constantly in reaction mode. By the end of the day,
        they&apos;re exhausted, and none of it felt like their choice.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Proactive living is the opposite. You wake up and pursue what matters to you. The important stuff
        gets time first. Only after the important things are protected do you address what&apos;s urgent. You&apos;re
        directing your life, not being swept along by it.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This shift isn&apos;t about working harder. It&apos;s about deciding harder. It&apos;s about having the clarity
        and courage to say what matters and then building your time around it. It&apos;s about refusing to be
        busy. It&apos;s about being allocated.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The irony is that when you shift to proactive living, you often look less busy. You&apos;re not
        scrambling. You&apos;re not constantly responding. You have margins. You have space. But inside, you know
        you&apos;re more directed, more intentional, more aligned. That&apos;s the real meaning of control over your
        time. Not having more of it. Making deliberate choices about the hours you have.
      </p>
    </ArticleLayout>
  );
}
