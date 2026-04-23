import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fireside Sessions | YourLifeInSeconds",
  description:
    "Eight people. One real question. Ninety minutes, live. A conversation you couldn't have had anywhere else.",
  openGraph: {
    title: "Fireside Sessions | YourLifeInSeconds",
    description: "Eight people. One real question. Ninety minutes, live.",
    type: "website",
  },
};

export default function FiresidesPage() {
  const themes = [
    { month: "Month 1", theme: "What is enough?" },
    { month: "Month 2", theme: "The second career." },
    { month: "Month 3", theme: "The meeting you haven't had yet." },
    { month: "Month 4", theme: "The 7 hours we'll never get back." },
    { month: "Month 5", theme: "The grief you haven't named." },
  ];

  return (
    <main className="bg-brand-bg min-h-screen pt-[72px]">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
            FIRESIDE SESSIONS
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Eight people. One real <span className="text-gradient">question.</span>
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Once a month, eight members gather live on video for ninety minutes. One theme.
            No slides. No recording. A conversation you couldn&apos;t have had anywhere else.
          </p>
        </div>
      </section>

      {/* Upcoming Themes */}
      <section className="py-16 px-6 bg-brand-bg-secondary">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            Upcoming themes
          </h2>
          <div className="space-y-4">
            {themes.map((t) => (
              <div
                key={t.theme}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-brand-card border border-subtle rounded-xl p-6 hover:border-accent-dim transition-colors"
              >
                <span className="text-accent font-mono text-sm font-semibold uppercase tracking-widest sm:w-32 flex-shrink-0">
                  {t.month}
                </span>
                <span className="text-text-primary text-lg sm:text-xl italic">
                  {t.theme}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens in a Fireside */}
      <section className="py-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            What actually happens.
          </h2>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              You arrive at a scheduled hour, live on video, with seven other members. A
              facilitator opens with the month&apos;s question and invites one person to begin.
            </p>
            <p>
              There are no slides, no breakout rooms, no chat sidebar. Just voices. Each
              person gets roughly ten minutes of the conversation — enough to say something
              real, not enough to perform.
            </p>
            <p>
              Ninety minutes later, you close. The session is not recorded. What was said in
              the room stays there. You leave with something you didn&apos;t walk in with.
            </p>
          </div>
        </div>
      </section>

      {/* Access Note */}
      <section className="py-16 px-6 bg-brand-bg-secondary">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-text-secondary mb-8 text-lg leading-relaxed">
            Fireside sessions are included with{" "}
            <strong className="text-text-primary">Connected membership</strong> ($15/month).
            First-time attendees are welcomed with a five-minute orientation call before
            their session.
          </p>
          <Link
            href="/membership"
            className="press-active inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow"
          >
            Join Connected →
          </Link>
        </div>
      </section>
    </main>
  );
}

