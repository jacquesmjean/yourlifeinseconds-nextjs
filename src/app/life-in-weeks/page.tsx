import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: '/life-in-weeks' },
  title: "Your Life in Weeks (Not Years) | YourLifeInSeconds",
  description:
    "The average human life is about 4,000 weeks. See the grid visualization that changes everything. When you see time this way, procrastination becomes impossible.",
  openGraph: {
    title: "Your Life in Weeks (Not Years)",
    description:
      "Visualizing your existence in 4,000 weeks. Why shifting from years to weeks creates immediate clarity.",
    url: "https://yourlifeinseconds.com/life-in-weeks",
    siteName: "YourLifeInSeconds",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Life in Weeks (Not Years)",
    description:
      "The average human life is about 4,000 weeks. When you see the grid, everything changes.",
  },
};

export default function LifeInWeeksPage() {
  return (
    <ArticleLayout
      category="Time & Perspective"
      title="Your Life in Weeks (Not Years)"
      subtitle="When you see the grid, everything changes."
      relatedArticles={[
        {
          title: "Where Your Life Actually Goes",
          desc: "The shocking reality of your daily time breakdown. You think you know where your time goes. You don't.",
          slug: "where-your-life-actually-goes",
        },
        {
          title: "How Much Time Do You Actually Control?",
          desc: "Strip away obligations to find the tiny sliver of time that is actually yours.",
          slug: "time-you-control",
        },
      ]}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        4,000 Weeks: The Math of a Human Life
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        An 80-year human lifespan contains approximately 4,160 weeks. That number might not land immediately. It&apos;s not a big enough number to feel infinite. It&apos;s not a small enough number to feel immediate. It&apos;s the precise size of a bounded resource.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Tim Urban&apos;s concept of &quot;Your Life in Weeks&quot; from Wait But Why expanded on this idea in a way that changed how millions of people think about time. The visualization is simple: one grid of 80 rows (one for each year) by 52 columns (one for each week). Each box represents one week of your life. Color in the weeks you&apos;ve lived. The white boxes are what remains.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        The power of this visualization is that it collapses the abstraction. Years feel vague. Decades feel infinite. But 4,000 weeks? That&apos;s a bounded, comprehensible number. You can almost visualize it. And once you can visualize it, you can&apos;t un-see it.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Why Years Fail as a Unit of Time
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        We talk about our lives in years. &quot;In five years, I&apos;ll...&quot; &quot;I wasted three years on...&quot; &quot;Next year, I&apos;m going to...&quot; But a year is too long to feel immediate and too short to feel meaningful. It creates a dangerous middle ground where procrastination thrives.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        A year contains 52 weeks. Those 52 weeks will pass regardless of what you do with them. But framed as &quot;52 weeks,&quot; the reality of passage becomes undeniable. You can&apos;t talk away a year when you see it as 52 individual weeks slipping by. The unit of time forces you to either act or consciously accept the cost of not acting.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Years encourage magical thinking. &quot;I have lots of time.&quot; Weeks dismantle that illusion. If you&apos;re 30 years old, you don&apos;t have &quot;50 more years.&quot; You have 2,600 more weeks. Some of those weeks are already committed. Sleep will consume 1,300 of them. Work (at 40 hours per week) will consume 2,000 of them. That leaves roughly 700 weeks — about 13 years — of actual discretionary time. The grid makes this visible. Years make it easy to deny.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Grid Visualization: Seeing Your Life All at Once
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The most powerful aspect of the week-based grid is that you can see your entire life on a single sheet of paper. Eight rows of 52 boxes each. The first row represents birth to age one. The last row represents age 79-80. Your current position is somewhere in the middle — or closer to the bottom if you&apos;re older.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This spatial representation bypasses the usual mental defenses. You can&apos;t think of your life as infinite when you&apos;re looking at a grid that&apos;s already half-filled. You can&apos;t defer decisions when you can see, literally, how many weeks you have left in your twenties, thirties, or forties.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Some people print the grid and fill it in by hand. Some use interactive versions online. Some just keep the mental image. But everyone who genuinely sees the grid reports the same thing: it&apos;s impossible to ignore. The visualization creates what researchers call a &quot;mortality salience&quot; effect — you become acutely aware of your own finiteness. And unlike the anxiety that usually comes with that awareness, the grid also creates clarity. It makes visible what was previously abstract, and that visibility transforms intention into action.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Emotional Impact of Counting Down
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Seeing how many boxes are already filled — that&apos;s the moment that changes things. If you&apos;re 35, approximately 1,820 of your 4,160 weeks are already gone. That&apos;s 43.7% of your life consumed. In years, that sounds like &quot;you&apos;re in your mid-thirties.&quot; In weeks, it sounds like nearly half your life is used up.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        This isn&apos;t meant to be depressing. It&apos;s meant to be clarifying. The filled boxes are gone; you can&apos;t get them back. But the empty boxes represent time that&apos;s still available. The moment you see those empty boxes as finite is the moment your relationship with time changes.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        That emotional wake-up call is valuable. It stops procrastination in a way that motivation never can. Motivation says, &quot;You should do this because it&apos;s important.&quot; The grid says, &quot;You have 2,340 weeks left if you live to 80. How many of them do you want to waste on this?&quot; The grid replaces motivation with accountability — not to anyone else, but to yourself and the reality of your finite existence.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        Weekly Intentionality: The Antidote to Drift
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        Once you&apos;ve seen the grid, the logical question becomes: &quot;What should I do with my weeks?&quot; The week becomes the natural unit of planning. Not the year. Not the day. The week.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        A week is long enough to accomplish meaningful work. A week is short enough that the deadline feels real. 168 hours sounds like a lot until you subtract sleep (56 hours), work or obligations (40-60 hours), basic maintenance like eating and hygiene (21 hours), and family or social time (10+ hours). Suddenly, 168 hours shrinks to 30-40 hours of actually discretionary time per week.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        Weekly intentionality means deciding, at the start of each week, what you want that week&apos;s boxes to represent. Not vaguely. Specifically. &quot;This week, I&apos;m going to write 15,000 words on my book.&quot; &quot;This week, I&apos;m going to have one real conversation with each of my closest friends.&quot; &quot;This week, I&apos;m going to learn Spanish for an hour a day.&quot; The specificity matters because it forces you to acknowledge the trade-offs. Every hour in one box is an hour not in another.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        When you practice weekly intentionality, something shifts. Your weeks stop happening to you. They become things you design. And when weeks are designed, years take care of themselves. After 52 intentional weeks, you&apos;ve lived an intentional year. After five such years, you&apos;ve made more progress on what matters than most people make in a lifetime.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4">
        The Grid Is a Mirror
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">
        The grid is ultimately a mirror. It doesn&apos;t tell you how to live. It just shows you the time available and forces you to make decisions about it consciously rather than by default. You can choose to fill your weeks with anything: work, relationships, learning, rest, adventure, or a mix of all of these. But you have to choose. You have to see the trade-offs. You can&apos;t pretend you have infinite time.
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        That&apos;s the real power of visualizing your life in weeks. Not that it prescribes how you should live, but that it makes visible the cost of living by default. And for most people, seeing that cost is enough to change their behavior.
      </p>
    </ArticleLayout>
  );
}
