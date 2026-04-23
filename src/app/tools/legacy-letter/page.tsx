import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The Legacy Letter | YourLifeInSeconds",
  description:
    "Say something to the version of you who'll read this in 20 years. Three questions. Your own words. Kept forever.",
  openGraph: {
    title: "The Legacy Letter | YourLifeInSeconds",
    description:
      "Say something to the version of you who'll read this in 20 years.",
    type: "website",
  },
};

export default function LegacyLetterPage() {
  const questions = [
    "What do you wish you had known at 20?",
    "What do you hope the people you love remember?",
    "What do you still have time to fix?",
  ];

  return (
    <main className="bg-brand-bg min-h-screen pt-[72px]">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
            THE LETTER
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Say something to the version of you who&apos;ll read this in{" "}
            <span className="text-gradient">20 years.</span>
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            The Legacy Letter is a voice memo to your future self. Three questions. Your own
            words. Kept forever.
          </p>
        </div>
      </section>

      {/* Coming Soon / Waitlist */}
      <section className="py-8 px-6">
        <div className="max-w-[600px] mx-auto">
          <div className="bg-brand-card border border-accent-dim rounded-2xl p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Currently being built with care.
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              The Letter launches first for Curious members in the next four weeks. Enter
              your email and we&apos;ll send it to you the moment it&apos;s open.
            </p>
            <EmailCapture variant="inline" />
          </div>
        </div>
      </section>

      {/* Three Questions Preview */}
      <section className="py-20 px-6 bg-brand-bg-secondary">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            The three questions we&apos;ll ask.
          </h2>
          <div className="space-y-8">
            {questions.map((q, i) => (
              <div key={q} className="flex items-start gap-6">
                <span className="text-5xl font-bold font-mono text-accent/40 leading-none flex-shrink-0 w-16">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xl sm:text-2xl text-text-primary leading-relaxed pt-2">
                  {q}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-16 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-text-secondary italic leading-relaxed">
            Your letter is yours. We don&apos;t publish it, sell it, or train on it. You can
            print it, send it to someone, or leave it for a version of yourself who
            doesn&apos;t exist yet.
          </p>
        </div>
      </section>
    </main>
  );
}

