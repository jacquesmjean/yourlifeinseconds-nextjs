import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'How Much Time Do You Actually Control | YourLifeInSeconds.com',
  description: "Start with 24 hours. Subtract sleep, work, commute, meals. You\'re left with 2.5 hours of truly discretionary time. That\'s 10.4% of your day.",
  openGraph: {
    title: 'How Much Time Do You Actually Control — The Uncomfortable Truth',
    description: "You control roughly 10% of your day. Here\'s how to expand that and reclaim sovereignty.",
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Time Do You Actually Control',
    description: "24 hours minus sleep, work, commute = 2.5 hours. That\'s your actual discretionary time.",
  },
};

export default function TimeYouControl() {
  const relatedArticles = [
    {
      title: 'Where Your Life Actually Goes',
      desc: 'A detailed time audit revealing exactly where the 8,760 hours in your year actually get spent.',
      slug: 'where-your-life-actually-goes',
    },
    {
      title: 'You\'re Not Busy. You\'re Misallocated.',
      desc: 'The real problem isn\'t time scarcity. It\'s that you\'re investing hours in the wrong priorities.',
      slug: 'not-busy-misallocated',
    },
  ];

  return (
    <ArticleLayout
      category="Time & Perspective"
      title="How Much Time Do You Actually Control?"
      subtitle="The answer will change how you see every day."
      relatedArticles={relatedArticles}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Math That Should Terrify You
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Let&apos;s be specific. Let&apos;s do the calculation for a typical American adult with a typical job:
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        You start with 24 hours.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Subtract sleep (8 hours). You need it. Biologically non-negotiable. That leaves 16 hours.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Subtract work (9 hours). This includes the actual work time (8 hours), plus the 1 hour before and after work that&apos;s psychologically still &quot;work time&quot; — you&apos;re still thinking about work, still in work mode. That leaves 7 hours.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Subtract commute (1 hour). Whether you drive, take transit, or walk, you&apos;re losing an hour daily to moving between home and work. That leaves 6 hours.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Subtract meals and basic hygiene (2 hours). Breakfast, lunch, dinner, showering, brushing teeth. The bare minimum to keep yourself functional. That leaves 4 hours.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Subtract household chores, maintenance, and responsibilities (1.5 hours). Laundry, dishes, cleaning, paying bills, managing life administration. That leaves 2.5 hours.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        2.5 hours. That&apos;s your daily discretionary time. The hours you control. The time you can theoretically spend on whatever you want.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        2.5 hours out of 24 hours equals 10.4% of your day. If you live to 80, you have roughly 600,000 waking hours in your entire life. Of those, you control approximately 62,400 hours. That&apos;s 8 years of completely free time out of 80 years.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Eight years of freedom out of 80 years. If you sleep well. If you don&apos;t commute. If you&apos;re efficient with your household tasks. If you don&apos;t encounter any other demands (which of course, you will).
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        But You Already Give Away That Time, Too
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        2.5 hours is the theoretical maximum. In reality, most people have significantly less actual discretionary time.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Why? Because those 2.5 hours are claimed by competing demands that aren&apos;t captured in my simplified calculation above.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Family obligations.</strong> If you have kids, 30-60 minutes of those 2.5 hours are already claimed by parenting responsibilities. Helping with homework, driving to activities, bedtime routines, emergencies. That leaves 1.5-2 hours.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Relational maintenance.</strong> Relationships require time and attention. Meaningful time with your partner, your friends, your family. For most people, this takes another 30-60 minutes daily if they&apos;re actually maintaining quality relationships. That leaves 1-1.5 hours.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Health maintenance.</strong> Exercise, stretching, walking, meal prep beyond &quot;making dinner&quot; — these things are health necessities, not luxuries. For someone trying to maintain reasonable health, this is another 30-60 minutes daily. That leaves 0.5-1 hour.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        So after accounting for legitimate non-work obligations that most people care about — being a good parent, maintaining relationships, staying healthy — you&apos;re down to roughly 30 minutes to 1 hour of truly discretionary time per day.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        And that&apos;s assuming you use your 2.5 hours of theoretical discretionary time optimally. Most people don&apos;t. Most people spend those hours on social media, television, news consumption, and other low-value activities. So their actual sense of agency and control is even lower.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Implications Are Staggering
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        If you&apos;re a typical person, you control approximately 30 minutes to 1 hour of your day. Let&apos;s say 45 minutes as an average.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        45 minutes per day × 365 days = 274 hours per year. That&apos;s roughly 34 days of 8-hour working days. Out of 8,760 hours in a year, you control 274 of them. That&apos;s 3.1% of your year.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Over an 80-year life, that&apos;s 2.5 years of truly discretionary time that you actually control and use intentionally. Two and a half years out of 80.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Or to frame it differently: You live roughly 29,000 days. On 28,000 of them, your time is allocated by others — your employer, your family, your social obligations. On only 1,000 days do you have genuine agency over how your time is spent.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Most people never do this calculation. If they did, they&apos;d be horrified. They&apos;d see that they have almost no control over their lives. They&apos;d see that they&apos;re not the authors of their own days.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        How to Expand Your Controllable Time
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The good news is that you&apos;re not locked into 2.5 hours (or even 45 minutes) of discretionary time. The math is changeable. Here&apos;s how:
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Reduce or change your work hours.</strong> This is the biggest lever. If you could move from a 40-hour work week to a 30-hour work week, you&apos;d reclaim 10 hours daily that you currently &quot;spend&quot; in work mode. If you could eliminate commute (remote work, moving closer to work, or changing jobs), you&apos;d gain another hour daily. If you could do work that doesn&apos;t require mental recovery time afterward, you&apos;d reclaim the pre- and post-work buffer.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        For many people, this requires either increasing hourly rate enough to maintain income with fewer hours, or reducing financial requirements enough that fewer hours still covers expenses. Both are possible, but both require intentional choices.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Automate and batch household tasks.</strong> Most people spend time on household management inefficiently. Laundry spread throughout the week instead of done in batches. Grocery shopping casually instead of strategically. Cooking individual meals instead of batch cooking. Bills managed reactively instead of systematized. These inefficiencies add 30+ minutes daily. Systematizing them — grocery delivery, meal prep, automatic bill payments, house cleaning routines — can reclaim significant time.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Eliminate low-value activities.</strong> If you&apos;re honest, you spend 45+ minutes daily on social media, news, and content consumption that isn&apos;t making your life better. That&apos;s 274+ hours per year. Redirecting even half of that to genuine discretionary time gives you back 137 hours per year — nearly 17 extra days.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Combine activities.</strong> Exercise doesn&apos;t have to be separate from relationship time (partner workouts, sports leagues). Recreation doesn&apos;t have to be separate from social time (book club, group hobbies). This doesn&apos;t reclaim time mathematically, but it increases the quality of your time and reduces the psychological burden of juggling demands.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong>Invest in time-saving services.</strong> This requires money, but it reclaims time. Laundry service, house cleaning, meal delivery, grocery delivery. Each costs money, but each reclaims hours. If your time is valuable — and it should be — these aren&apos;t luxuries. They&apos;re investments in your agency.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Sovereignty Mindset
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Here&apos;s the shift that matters most: moving from a scarcity mindset (&quot;I don&apos;t have time&quot;) to a sovereignty mindset (&quot;I&apos;m choosing how to allocate my time&quot;).
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Most people frame their lack of discretionary time as a problem of scarcity. &quot;I don&apos;t have time.&quot; &quot;I&apos;m too busy.&quot; &quot;There aren&apos;t enough hours in the day.&quot; This framing absolves them of responsibility. If time is scarce, then their situation is beyond their control. They&apos;re victims of circumstance.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        But the real problem isn&apos;t scarcity. It&apos;s allocation. You do have the time. You&apos;re just spending it on things that don&apos;t matter to you, under the assumption that you have no choice.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The sovereignty mindset starts with this: You are making choices about how your time is allocated. You chose to work that job (even if the alternative seemed worse). You chose your living situation. You chose to participate in social obligations. You chose to use your discretionary time on social media and television. These were all choices.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Now, some of these choices were constrained. You might have felt like you had no choice because the alternatives seemed worse. But even constrained choices are still choices. And constrained choices can be revisited.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        What changes when you adopt a sovereignty mindset is that you stop being passive. You start asking: &quot;Given that I&apos;m going to spend my limited discretionary time on something, is this the something I actually want to spend it on?&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        You might keep your job. But now you&apos;re doing it consciously — &quot;I&apos;m trading 40 hours per week for income because I value the financial security and the lifestyle it enables.&quot; You might keep your marriage. But now you&apos;re doing it consciously — &quot;I&apos;m investing hours daily in this relationship because I value partnership.&quot; You might keep your social media use. But now you&apos;re doing it consciously — &quot;I&apos;m spending 15 minutes daily here because it connects me to communities I care about.&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The difference isn&apos;t in the actions. It&apos;s in the consciousness. You&apos;re no longer a passenger in your own life. You&apos;re the navigator.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Question You Should Be Asking
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        You control 10.4% of your day if you&apos;re fortunate and intentional. For most people, it&apos;s less. For some — if they&apos;re strategic about work, living situation, health, and attention — it could be more.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The question isn&apos;t &quot;How do I create more time?&quot; (You can&apos;t. Time is fixed.) The question is: &quot;How do I expand the percentage of my time that I genuinely control?&quot;
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Even small increases matter. Moving from 10.4% to 15% of your day is an additional 1.3 hours daily. That&apos;s 474 hours per year. Over a lifetime, that&apos;s 38 extra days of discretionary time. What could you do with 38 extra days? Write a book. Learn a language. Build a business. Transform your health. Deepen your relationships.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        You started with 24 hours. That&apos;s fixed. But how much of that you actually control? That&apos;s not fixed. That&apos;s a choice. A series of choices.
      </p>
    </ArticleLayout>
  );
}
