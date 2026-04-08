import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'Designing a Life That Is Yours | YourLifeInSeconds.com',
  description: "Most people don\'t design their lives; they inherit them. Learn how to audit, design, and build a life that\'s actually yours.",
  openGraph: {
    title: 'Designing a Life That Is Yours — Breaking the Default',
    description: "Most people follow inherited scripts. Here\'s how to design your own life instead.",
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designing a Life That Is Yours',
    description: "Most people don\'t design their lives; they inherit them.",
  },
};

export default function DesigningYourLife() {
  const relatedArticles = [
    {
      title: 'What If You Took Back 2 Hours a Day',
      desc: '730 hours per year. In 5 years, that\'s 150 days. Enough to build something meaningful.',
      slug: 'take-back-two-hours',
    },
    {
      title: 'Marriage and the Disappearance of Self',
      desc: 'How commitment can silently erode the individual self, and what to do about it.',
      slug: 'marriage-and-self',
    },
  ];

  return (
    <ArticleLayout
      category="Life Design & Intention"
      title="Designing a Life That Is Yours"
      subtitle="Most people don&apos;t design their lives; they inherit them."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Default Life Script
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        There&apos;s a script. You&apos;ve probably been following it your entire life without ever consciously choosing to. The script goes like this:
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        You&apos;re born. Your parents enroll you in school. School is mandatory until age 18. You go to college — or you&apos;re made to feel like a failure if you don&apos;t. In college, you major in something practical (engineering, business, accounting, pre-law). You don&apos;t think too hard about this choice. It&apos;s what smart people do. During college, you should fall in love, probably. Preferably with someone from a similar background who shares your trajectory. After college, you get a job. Not just any job — a career. Something respectable. Something you can tell your parents about. You work 40+ hours per week. You climb the ladder. You earn raises. You use those raises to buy a bigger house, a nicer car, take fancier vacations.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Around 30, you marry the person you met in college or at work. You buy a house. You have 1-3 children. You&apos;re now locked into a mortgage, school choices for your kids, and the obligation to continue climbing the career ladder because your family depends on your income. You spend the next 30 years balancing work demands with family needs, never quite satisfied with either. Around 65, you retire. You have maybe 15-25 years left, if you&apos;re lucky, to do whatever you want. Except by then, your health is declining, your partner might be gone, your kids have their own lives, and your interests have atrophied from disuse.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        That&apos;s the default script. And the vast majority of people follow it almost exactly, making minor variations but hitting all the same beats.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Why Most People Never Question the Script
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The script persists because it&apos;s invisible. It&apos;s not imposed on you by a dictator. It&apos;s not written down anywhere. It emerges from millions of tiny social pressures: what your parents expect, what your friends are doing, what society rewards with status and money, what institutions are optimized to support.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Your parents follow the script, so they naturally guide you toward it. Your teachers follow the script, so they celebrate students who excel within it (getting good grades, getting into good colleges, pursuing prestigious careers) and subtly communicate that deviations are risky. Society follows the script, so the career path is well-lit — there are job boards, career counselors, corporate recruiters. But the path to doing something unconventional? That&apos;s dark and scary. You&apos;re on your own.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The economic system is designed to reinforce the script. You graduate, you get a job with benefits, you become dependent on that job for your health insurance. You buy a house with a mortgage that requires you to work for 30 years. You have kids and their education becomes another obligation that requires stable income. The system doesn&apos;t imprison you legally. It just creates structural incentives that make the default script feel like your only reasonable option.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        So most people spend their entire lives on a path they never consciously chose. They inherited it. They&apos;re following someone else&apos;s blueprint for what a good life looks like.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Life Audit: What Do You Actually Value?
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Designing a life that&apos;s actually yours starts with this question: What do you actually want, separate from what you were told you should want?
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This is harder than it sounds. Because most of us have internalized the script so deeply that we can&apos;t distinguish between our authentic desires and the desires we were programmed to have. You think you want a high-status job because you&apos;ve been told since childhood that status equals worth. You think you want a big house because you&apos;ve equated home ownership with success. You think you want marriage and kids because that&apos;s what adults do.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But what if you actually valued something different?
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        A proper life audit requires radical honesty. Sit down with a blank page and ask yourself:
      </p>
      <ul className="list-disc list-inside space-y-2 text-text-secondary text-lg">
        <li>What activities make me lose track of time because I&apos;m so engaged?</li>
        <li>What would I do if money wasn&apos;t a concern?</li>
        <li>What did I enjoy doing before I was told I had to be practical?</li>
        <li>Who are the people I genuinely enjoy spending time with (not who I think I should spend time with)?</li>
        <li>What kind of work actually energizes me rather than drains me?</li>
        <li>What am I willing to sacrifice for, and what am I reluctant to compromise on?</li>
        <li>If I looked back on my life at 80, what would make me feel like I lived well?</li>
      </ul>
      <p className="text-text-secondary text-lg leading-relaxed mt-4">
        Most people have never spent serious time on these questions. They just follow the script. But when you actually do this work, you often discover that your authentic values diverge significantly from the script.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Maybe you value autonomy more than status, and you&apos;d rather run a small profitable business than be a mid-level executive at a large company. Maybe you value place — living in a specific community or country — more than career advancement, which would require constant relocation. Maybe you value relationships and presence more than income, which means you&apos;d rather earn 40% less and work 20% fewer hours. Maybe you value creativity and self-expression more than security, which means you&apos;d rather pursue unconventional work.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Time as Your Constraint
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Here&apos;s what the default script misses: time is your actual constraint. Not money. Not ability. Time.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The default script is designed around the assumption that you&apos;ll trade huge quantities of time for financial security. You&apos;ll work 40+ hours per week for 45+ years. That&apos;s 90,000+ hours of your life. In exchange, you get a paycheck, some status, and the ability to buy things.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But what if you reframed the problem? What if instead of &quot;How much money can I make?&quot; the question was &quot;How much time can I protect?&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This changes everything. Because suddenly, a lower-paying job that requires 30 hours per week might be better than a high-paying job that requires 60 hours per week. Suddenly, living in a less expensive place becomes valuable — not because you&apos;re frugal, but because it might allow you to afford a lower income, which means less work, which means more time. Suddenly, saying no to certain opportunities becomes intelligent rather than limiting.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The people who design their own lives are the ones who ask: &quot;Given that I have 24 hours per day and roughly 80 years of life, how do I allocate that time in a way that actually feels right to me?&quot;
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Building Your Personal Blueprint
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Okay, so you&apos;ve audited your values. You&apos;ve identified what actually matters to you, separate from what you were told to value. What now?
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Now you build a blueprint. Not a five-year plan — those are usually just compressed versions of the default script. Instead, think about the architecture of your life:
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>What does a good week look like?</strong> Not a good year or a good life, but a good week. What balance of work, relationships, health, creativity, and rest actually feels right to you? Most people have never designed a week. They just react to whatever demands pop up. But if you design a good week — say, 30 hours of work, 10 hours of relationship time, 5 hours of creative work, 10 hours of solitude, 7 hours of exercise/health — then you can start protecting that structure.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>What are your non-negotiables?</strong> What things cannot be compromised on? Maybe it&apos;s living in a specific place. Maybe it&apos;s having significant time with family. Maybe it&apos;s having work that feels meaningful. Maybe it&apos;s having creative outlets. Identify 3-5 non-negotiables. Everything else can be sacrificed in service of protecting these.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>What can you eliminate?</strong> Looking at your current life, what are you doing out of obligation rather than choice? What activities don&apos;t serve your actual values? Most people can identify 5-10 things they could eliminate today with minimal negative consequence. That&apos;s your starting point for reclaiming time.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>What&apos;s the minimum viable income?</strong> How much money do you actually need per year to live a good life, given your values? Not the lifestyle you&apos;re currently living (that&apos;s probably heavily influenced by the default script and social pressure). But the lifestyle that would actually make you happy? Often, that number is significantly lower than people think. Calculate it. This number becomes your anchor. It&apos;s the income you need to work toward, which determines how much work you need to do.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Courage to Deviate
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Designing your own life requires courage. Because the moment you deviate from the script, social pressure kicks in. If you choose part-time work instead of a full-time career, people assume you&apos;re lazy or uncommitted. If you choose not to have kids, people assume you&apos;re selfish. If you choose to live in an inexpensive place instead of upgrading your house, people assume you&apos;re failing. If you choose creativity over stability, people assume you&apos;re irresponsible.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This social pressure is real. And it&apos;s exhausting to resist. But here&apos;s what&apos;s important to understand: the people pressuring you to stay on the script aren&apos;t actually trying to harm you. They&apos;re just following their own scripts. They&apos;re defending the choices they made by implying those choices are the only rational ones.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The courage required to design your own life isn&apos;t the courage to do something objectively dangerous. It&apos;s the courage to tolerate social disapproval. It&apos;s the courage to be seen as different, weird, or unconventional. It&apos;s the courage to know that some people will judge your choices and to make those choices anyway.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The good news? The people whose judgment actually matters — people who love you, who see you clearly, who want your actual happiness — those people will support your choices. The people who judge harshly? Their judgment is about them, not about you.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        This Is Your Only Life
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        We treat life design as something you do after you achieve stability. After you pay off your debts. After you make your mark in your career. After the kids are grown. Someday.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But someday never comes. And meanwhile, you&apos;re spending your actual life — the only one you get — living someone else&apos;s blueprint.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The paradox is that designing a life aligned with your actual values almost always leads to greater success, deeper satisfaction, and stronger relationships than simply following the script. Because when you&apos;re doing work you actually care about, you&apos;re naturally more engaged. When you&apos;re protecting time for the people you love, you have better relationships. When you&apos;re not climbing a ladder you don&apos;t believe in, you have mental space and energy for things that matter.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        So the real courage isn&apos;t in deviating from the script despite it being better. The real courage is in deviating from the script despite the social pressure and uncertainty.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        You have one life. Roughly 80 years if you&apos;re lucky. Roughly 29,000 days. Roughly 700,000 waking hours. That&apos;s all you get. The question isn&apos;t whether you should design your life. The question is: Can you afford not to?
      </p>
    </ArticleLayout>
  );
}
