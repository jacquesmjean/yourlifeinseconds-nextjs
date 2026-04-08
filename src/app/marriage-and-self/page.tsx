import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'Marriage and the Disappearance of Self — YourLifeInSeconds',
  description:
    'Marriage changes time allocation dramatically. Explore how shared calendars, merged identities, and mutual obligations can dissolve the self — and how to protect it.',
  openGraph: {
    title: 'Marriage and the Disappearance of Self',
    description:
      'Where most people lose themselves without realizing it, and how to maintain individual purpose within partnership.',
    type: 'article',
    url: 'https://yourlifeinseconds.com/marriage-and-self',
    images: [
      {
        url: 'https://yourlifeinseconds.com/og/marriage-self.jpg',
        width: 1200,
        height: 630,
        alt: 'Marriage, identity, and time',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marriage and the Disappearance of Self',
    description: 'Where most people lose themselves without realizing.',
    creator: '@jacquesmjean',
  },
};

const relatedArticles = [
  {
    title: "You're Not Busy. You're Misallocated.",
    desc: 'How to reclaim agency over your time and choices.',
    slug: 'not-busy-misallocated',
  },
  {
    title: 'Where Your Life Actually Goes',
    desc: 'Understanding your time allocation is the first step to change.',
    slug: 'where-your-life-actually-goes',
  },
];

export default function MarriageAndSelfPage() {
  return (
    <ArticleLayout
      category="Relationships & Identity"
      title="Marriage and the Disappearance of Self"
      subtitle="Where most people lose themselves without realizing."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Shared Calendar Trap
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Marriage changes your calendar in ways that single life never does. Suddenly, your time isn&apos;t just
        your own. Your partner has claims on it. Not in a legal sense — in a real, daily sense. Your evenings
        are now shared time. Your weekends have obligations. Your free time isn&apos;t free anymore; it&apos;s
        negotiated time.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This happens gradually. At first, it feels natural. You want to spend time with this person. You
        have a shared life, so of course some time is shared. But over years, the negotiation becomes the
        default. You stop making plans without consulting the calendar. You stop thinking &quot;what do I want to
        do?&quot; and start thinking &quot;what can we do?&quot; The question dissolves into &quot;we.&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The data backs this up: married people, on average, spend significantly less time alone than single
        people. They spend less time on individual hobbies. They spend less time with friends. They spend
        less time on projects that are purely theirs. The time that was once radically individual becomes
        shared, or spoken for, or obligated.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        How Identity Merges and Dissolves
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        When you marry someone, something deeper than the calendar shifts. You don&apos;t just share time — you
        start to share an identity. You become &quot;we.&quot; Your friends start introducing you as &quot;this is my
        friend and their spouse.&quot; You become part of a unit. Your individual story gets subsumed into a
        couple story.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This isn&apos;t a bad thing in itself. Partnership requires some merging. But the danger is when the
        merging happens passively. When you stop noticing that your preferences are getting overridden. When
        you stop advocating for what you want because it&apos;s easier to just go along. When you become so
        skilled at compromising that you lose track of what you actually wanted to begin with.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Over time, something happens to your self-concept. You might not know anymore what you like. You
        might not know what you&apos;d want to do on a free afternoon. You might not know what you&apos;re building
        toward, apart from the marriage itself. Your identity doesn&apos;t just merge with your partner&apos;s — it
        dissolves into the couple identity.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Data on Time After Marriage
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Studies show clear patterns. Married people spend, on average:
      </p>
      <ul className="list-disc list-inside space-y-2 text-text-secondary text-lg my-6">
        <li><strong>4-5 hours less per week</strong> on leisure activities done alone</li>
        <li><strong>3-4 hours less per week</strong> with close friends outside the marriage</li>
        <li><strong>2-3 hours less per week</strong> on individual hobbies or projects</li>
        <li><strong>Significantly more time</strong> on household management and child-rearing (if applicable)</li>
        <li><strong>More time</strong> in joint social activities, but less deep connection with their own social circles</li>
      </ul>
      <p className="text-text-secondary text-lg leading-relaxed">
        If you married at 25 and stay married through 75, that&apos;s 50 years of 4-5 fewer solo leisure hours
        per week. That&apos;s over 10,000 hours of activities you didn&apos;t do, hobbies you didn&apos;t pursue, solitude
        you didn&apos;t get. 10,000 hours. That&apos;s a whole life.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Disappearance Isn&apos;t Always Visible
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The strange thing about the disappearance of self in marriage is that it often doesn&apos;t feel bad.
        You&apos;re happy. You have companionship. You have someone to build with. The small surrenders of
        individual preferences don&apos;t feel like losses at the time — they feel like maturity. They feel like
        being a good partner.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        So you keep compromising. You stop taking that weekend trip because your partner doesn&apos;t want to
        travel. You stop pursuing that project because it&apos;s not compatible with family time. You stop having
        those deep friendships because maintaining them takes energy and time that &quot;should&quot; go to the
        marriage. And piece by piece, you become smaller.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Years later, you might realize something has happened. You don&apos;t know who you are anymore outside of
        the marriage. You don&apos;t have passions of your own. You don&apos;t have a life that exists separately from
        this relationship. And that creates a dangerous fragility. If the marriage breaks down, you break
        down with it. Because you didn&apos;t maintain a self.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Maintaining Self Within Partnership
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The healthiest marriages aren&apos;t the ones where partners merge completely. They&apos;re the ones where
        both partners maintain a strong sense of individual identity alongside their partnership identity.
        You have a shared life and an individual life. Both matter. Both are protected.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This requires intentionality. You have to actively protect solo time. You have to say &quot;this is
        important to me&quot; even when your partner doesn&apos;t understand why. You have to keep investing in
        friendships, hobbies, and goals that are yours alone. Not in opposition to the marriage, but as a
        necessary part of staying yourself.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Some practical ways this looks: You have a hobby or project that&apos;s yours. You maintain close
        friendships outside the marriage. You have alone time that&apos;s protected — not negotiated away based on
        what the couple &quot;should&quot; be doing. You have goals that are individual, not shared. You preserve
        your own decision-making autonomy about time, money, and priorities.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The paradox is that maintaining your individual self actually makes you a better partner. Because
        you&apos;re not merging out of desperation or dependency. You&apos;re building a partnership between two
        people who both have things they care about, both have growth they&apos;re pursuing. That&apos;s a marriage
        between equals. That&apos;s where real love happens.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Designing a Marriage That Doesn&apos;t Erase You
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        If you&apos;re married, here&apos;s the hard question: Do you still have a life? An actual life that exists
        separately from the marriage? Do you have projects you&apos;re building? Do you have time that&apos;s
        genuinely yours? Do you have relationships that aren&apos;t couple-adjacent? Do you have a version of
        yourself that exists when your partner isn&apos;t around?
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        If the answer is no, something needs to change. Not because the marriage is bad, but because you
        matter as an individual. You have a limited number of hours in your life. Some of them belong to
        the marriage. But some of them have to belong to you.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The couples who do this well have explicit conversations about it. They say &quot;I need three hours
        every week for a hobby&quot; or &quot;I&apos;m going to spend one evening a month with my friends.&quot; They protect
        that time the way they protect date night. Because they understand that a strong marriage is built
        on two strong individuals, not two halves trying to make a whole.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Your life isn&apos;t supposed to disappear into marriage. Your life is supposed to expand through it.
        Bigger capacity, deeper experience, more resilience. But that only happens if you stay a self — a
        person with your own time, your own choices, your own growth. That&apos;s not selfish. That&apos;s the only
        way to be a good partner while still being a complete person.
      </p>
    </ArticleLayout>
  );
}
