import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'The Psychology of Work — YourLifeInSeconds',
  description:
    "Work consumes 90,000 hours of your life. But we don't just work — we become our work. Explore why quitting feels like dying and how to reclaim your identity.",
  openGraph: {
    title: 'The Psychology of Work',
    description:
      "Why you defend your own cage and how career identity traps you in a life you didn't choose.",
    type: 'article',
    url: 'https://yourlifeinseconds.com/psychology-of-work',
    images: [
      {
        url: 'https://yourlifeinseconds.com/og/psychology-work.jpg',
        width: 1200,
        height: 630,
        alt: 'Work and identity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Psychology of Work',
    description: 'Why you defend your own cage.',
    creator: '@jacquesmjean',
  },
};

const relatedArticles = [
  {
    title: 'Where Your Life Actually Goes',
    desc: 'A data-driven breakdown of how your 168 hours actually disappear.',
    slug: 'where-your-life-actually-goes',
  },
  {
    title: 'School Trained You to Trade Time',
    desc: 'The hidden curriculum that prepared you for a cage.',
    slug: 'school-trained-you',
  },
];

export default function PsychologyOfWorkPage() {
  return (
    <ArticleLayout
      category="Work & Identity"
      title="The Psychology of Work"
      subtitle="Why you defend your own cage."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The 90,000-Hour Trap
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Here&apos;s the brutal math: if you work for 40 years, 40 hours a week, you spend roughly 90,000 hours
        at work. That&apos;s not including the commute, the mental carry-over into your evenings, the stress
        that follows you home, or the years you spend building skills to get there in the first place.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        90,000 hours is a massive portion of your conscious, capable life. It&apos;s more than half of your
        waking hours if you also sleep 8 hours a night. It&apos;s the majority of your adult existence. And for
        most people, this time was not consciously chosen. It was drifted into.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But here&apos;s what&apos;s stranger than the hours themselves: what work does to your identity. We don&apos;t
        just spend time at work. We become our work. Your job becomes the answer to who you are. It shapes
        how you see yourself, what you&apos;re proud of, what makes you feel valuable, and what feels like a
        threat.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        We Don&apos;t Just Work — We Become Our Work
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        When you meet someone new, what&apos;s the first question people ask? &quot;What do you do?&quot; Not &quot;who are
        you?&quot; Not &quot;what do you value?&quot; Not &quot;what makes you come alive?&quot; They ask what you do. And most
        people answer with their job title.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This isn&apos;t accidental. Your work becomes the primary axis of your identity. You&apos;re a manager, a
        designer, a doctor, a consultant. That title carries status, meaning, and worth. It&apos;s how you
        introduce yourself at parties. It&apos;s what&apos;s on your LinkedIn profile. It&apos;s what your parents tell
        their friends about you.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The problem is that this identity is not optional. It&apos;s layered in at every level. Your salary
        depends on your performance at that job. Your health insurance is tied to it. Your daily structure
        comes from it. Your colleagues become your primary social group. Your sense of competence is built
        entirely within that one context. You&apos;re not just working — you&apos;re living inside an identity that
        consumes your time and your self-concept.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Identity Trap
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Once work becomes your primary identity, something psychological shifts. Your self-worth becomes
        tied to your performance at work. Your wins at work feel like victories for you as a person. Your
        failures at work feel like personal failures. A rejection at work doesn&apos;t just mean you didn&apos;t get
        promoted — it means you&apos;re not good enough.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This is where the trap locks in. The job that was supposed to be a means to an end becomes the
        end itself. You&apos;re not working to live anymore — you&apos;re living to work. And because so much of your
        identity is bound up in that role, any threat to the job feels like a threat to who you are.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        That&apos;s why people defend jobs they hate. That&apos;s why people stay in toxic workplaces long after
        they should leave. That&apos;s why the thought of quitting — even for something better — feels terrifying.
        Because if you quit, who are you? The identity dissolves, and you have to figure out who you are
        without that title, that structure, that built-in sense of purpose.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Why Quitting Feels Like Dying
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Psychologically, leaving a job is similar to a kind of death. You lose your title, your structure,
        your daily purpose, your place in a community. All of those things — which have been the scaffolding
        of your identity for years — vanish. You&apos;re suddenly nobody. No email signature that means something.
        No business card. No answer to &quot;what do you do?&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This is partly why so many people stay in soul-crushing jobs. It&apos;s not just the paycheck (though
        that&apos;s real too). It&apos;s the terror of losing the identity that has become synonymous with who they
        are. Quitting means facing the void. It means admitting that you might not actually know who you
        are outside of that role.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Some people intellectually understand this. They know they should leave. They journal about it. They
        tell their therapist about it. But they don&apos;t do it. Because doing it means dying a little — 
        dissolving the identity that has been holding them together.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Sunk Cost of Career Identity
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You&apos;ve spent 15 years becoming good at something. You&apos;ve earned a title. You have colleagues who
        respect you. You have a salary that matches your position. You have status. And now you&apos;re supposed
        to walk away and start over? The psychological cost feels impossibly high.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This is the sunk cost fallacy, but applied to your entire identity. You&apos;ve invested so much in
        becoming &quot;that person&quot; that the thought of not being &quot;that person&quot; anymore feels like a loss. And
        technically it is. But it&apos;s a loss that you have to accept if you ever want to be anything else.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The tragedy is that the time you think you&apos;re protecting by staying is actually being spent. You&apos;re
        not saving the investment by staying. You&apos;re just spending more of it. The 90,000 hours are
        happening either way. The only question is whether you&apos;re spending them on something that&apos;s aligned
        with who you actually are, or on a role that you&apos;ve outgrown.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Redefining Productivity as Alignment
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        We usually measure work productivity by output: how much did you accomplish? How many deals closed?
        How many problems solved? But this completely misses something crucial: alignment.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        You can be tremendously productive at something that&apos;s completely misaligned with who you are. You
        can crush your metrics, hit your targets, and earn your bonuses while simultaneously wasting your
        life on something you don&apos;t believe in. You can be successful by every external measure while
        feeling empty inside.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Real productivity isn&apos;t just output. It&apos;s output that matters to you. It&apos;s work that feels like it&apos;s
        yours. It&apos;s time spent on something that, even if it&apos;s hard, feels connected to who you are or who
        you want to become. It&apos;s the opposite of the cage — it&apos;s alignment.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        When you work on something aligned with your values, something shifts. You&apos;re not defending your
        cage anymore. You&apos;re building something that&apos;s actually yours. And that changes everything — not just
        how productive you are, but how you feel about the 90,000 hours you&apos;re spending.
      </p>
    </ArticleLayout>
  );
}
