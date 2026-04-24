import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/school-trained-you' },
  title: 'School Trained You to Trade Time — YourLifeInSeconds',
  description:
    "The factory model of education wasn't designed to develop free thinkers. It was designed to prepare you to trade time for approval. Here's how to unlearn it.",
  openGraph: {
    title: 'School Trained You to Trade Time',
    description:
      'The hidden curriculum: trade time for approval, creativity gets crushed, and freedom of thought becomes dangerous.',
    type: 'article',
    url: 'https://yourlifeinseconds.com/school-trained-you',
    images: [
      {
        url: 'https://yourlifeinseconds.com/og/school-training.jpg',
        width: 1200,
        height: 630,
        alt: 'Education and time trade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Trained You to Trade Time',
    description: 'The industrial trap nobody talks about.',
    creator: '@jacquesmjean',
  },
};

const relatedArticles = [
  {
    title: 'The Psychology of Work',
    desc: "How work becomes identity and why that's a trap.",
    slug: 'psychology-of-work',
  },
  {
    title: "You're Not Busy. You're Misallocated.",
    desc: 'Stop blaming the clock and start owning your choices.',
    slug: 'not-busy-misallocated',
  },
];

export default function SchoolTrainedYouPage() {
  return (
    <ArticleLayout
      category="Systems & Society"
      title="School Trained You to Trade Time"
      subtitle="The real industrial trap no one talks about."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Factory Model: Bells, Schedules, Compliance
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        School wasn&apos;t designed for you. It was designed for factories. Think about its structure: the bell
        rings, you stop what you&apos;re doing and move to the next room. Another bell rings, you stop again and
        move. The day is divided into uniform time blocks. Everyone moves through the same material at the
        same pace. Creativity is confined to approved domains. Independent thinking is called &quot;disruptive.&quot;
        Obedience is called &quot;good behavior.&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This wasn&apos;t accident. In the early 20th century, when the modern school system was being designed,
        the goal was explicit: create workers for factories. You needed people who could show up on time,
        follow instructions, work in teams, suppress the urge to do things their own way, and trade their
        hours for a paycheck. School was the training ground.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The tragedy is that we never updated the system. Even though we don&apos;t need factory workers anymore — 
        even though the future depends on creativity and independent thinking — we&apos;re still running the same
        factory model. Bells, schedules, compliance. The time structure remains exactly the same.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Hidden Curriculum: Trade Time for Approval
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        School taught you explicit curriculum (math, science, history), but it also taught you something
        deeper: how to trade time for approval. Show up at the right time. Sit still for the right amount
        of time. Do the assignment exactly as assigned. Don&apos;t deviate. And if you do all of that — if you
        trade your time exactly as directed — you get the reward: a good grade, teacher approval, parental
        praise.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This is powerful training. Over 13+ years of education, this pattern gets deeply embedded in your
        brain. You don&apos;t just learn to trade time for approval — it becomes your default operating system.
        Your sense of whether you&apos;re &quot;doing well&quot; becomes entirely dependent on external validation. You&apos;re
        always performing for someone else.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Even your behavior changes. You learn which teachers like which students, and you perform
        accordingly. You learn which activities &quot;count&quot; toward your college applications and which ones don&apos;t
        matter, so you optimize for the visible metrics. You learn that the goal is to get ahead, not to
        learn. The goal is to please the authority figure, not to follow your own curiosity.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Creativity Gets Crushed Under the Bell
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Creativity doesn&apos;t work on a schedule. You can&apos;t make a great idea appear in 47 minutes because
        that&apos;s how long the period is. Real creative work requires two things: time to explore freely, and
        space to fail. School gives you neither.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        You get an assignment. It has clear parameters. You have a deadline. There&apos;s a right answer and a
        wrong answer. Your job is to figure out the right answer and deliver it on time. This is the
        opposite of creative work. Creative work requires you to ask the question yourself, explore
        multiple directions, fail repeatedly, and iterate until something genuine emerges.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        So what happens? Students learn that creativity is something you do in art class or music class — 
        those cordoned-off times for self-expression. Real work, serious work, is about following
        instructions. By the time you finish school, you&apos;ve learned to kill the part of your brain that
        asks &quot;what if?&quot; and activate the part that asks &quot;what&apos;s expected?&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The tragedy is that this pattern doesn&apos;t end at graduation. It transfers directly to work. You show
        up, follow instructions, trade your time, get your paycheck. Creativity is something you do on the
        side, on your own time, if you have the energy left. The default remains: compliance, not
        curiosity.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        What Education Should Have Taught: Time Sovereignty
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Instead of teaching you to trade time for approval, education should have taught you time
        sovereignty. It should have taught you to decide what&apos;s worth your time. To understand your own
        values well enough that you can say yes to the things that matter and no to everything else. To
        recognize that your time is non-renewable and that wasting it is one of the few genuine crimes you
        can commit against yourself.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        It should have taught you that your education serves your life, not the other way around. That a
        good education is one that makes you more capable of the things you actually want to do. Not the
        things the institution thinks you should want to do.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        It should have taught you that following someone else&apos;s curriculum forever is not the goal. At some
        point, you become the author of your own education. You get to decide what&apos;s worth learning. You
        decide what you&apos;re building toward. You own your time.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Unlearning Required
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        If you&apos;re like most people, you spent your formative years learning to trade time for approval. Now
        you&apos;re an adult, and you&apos;re still doing it. You&apos;re still optimizing for external validation. You&apos;re
        still asking &quot;what does my boss expect?&quot; instead of &quot;what do I actually believe?&quot; You&apos;re still
        structuring your life around someone else&apos;s schedule.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Unlearning this is the hard part. Because the pattern is so embedded that it feels normal. It feels
        right. You feel guilty when you&apos;re not producing something that gets external validation. You feel
        like you&apos;re &quot;wasting time&quot; if you&apos;re not trading it for something measurable.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But here&apos;s what unlearning looks like: It starts with noticing. Notice when you&apos;re asking &quot;what
        does authority expect?&quot; instead of &quot;what do I want?&quot; Notice when you&apos;re optimizing for metrics that
        don&apos;t actually matter to you. Notice when you&apos;re doing something only because it&apos;s required, not
        because it&apos;s real.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Then comes the harder part: giving yourself permission to care about different things. To say that
        deep work matters more than looking busy. To say that learning something you actually care about
        matters more than getting the credential. To say that your time is yours to allocate — and that
        sometimes the best use of it is something that looks like nothing from the outside.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Time sovereignty isn&apos;t laziness. It&apos;s knowing yourself well enough to decide what&apos;s worth the hours
        you have. It&apos;s the opposite of the bell. It&apos;s the reclamation of a life that was, for too long,
        someone else&apos;s to schedule.
      </p>
    </ArticleLayout>
  );
}
