import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of YourLifeInSeconds.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "April 9, 2026";

export default function TermsPage() {
  return (
    <article className="pt-[120px] pb-20 bg-brand-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-text-primary mb-3">Terms of Service</h1>
        <p className="text-text-muted text-sm mb-10">Last updated: {UPDATED}</p>

        <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
          <p>
            These terms govern your use of yourlifeinseconds.com (the &quot;Service&quot;).
            By using the Service, you agree to them.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">The Service</h2>
          <p>
            YourLifeInSeconds provides free calculators, articles, and optional paid
            reports. The calculators are provided for reflection and educational purposes
            only. They are not medical, financial, legal, or actuarial advice.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">No warranty</h2>
          <p>
            The Service is provided &quot;as is&quot;. We make no guarantees of
            availability, accuracy, or fitness for any particular purpose. Life expectancy
            figures are population averages and say nothing about any individual.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">Purchases</h2>
          <p>
            Paid reports are processed through Stripe. Prices are shown at checkout. All
            sales are final unless otherwise required by law.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">Acceptable use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do not attempt to disrupt, overload, or probe the Service.</li>
            <li>Do not scrape or republish our content without permission.</li>
            <li>Do not use the Service for anything illegal.</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, YourLifeInSeconds and its operators
            are not liable for any indirect, incidental, or consequential damages arising
            from your use of the Service.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">Changes</h2>
          <p>
            We may update these terms. Continued use after changes means you accept them.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">Contact</h2>
          <p>
            Questions? Email{" "}
            <a href="mailto:hello@yourlifeinseconds.com" className="text-accent">
              hello@yourlifeinseconds.com
            </a>
            .
          </p>

          <p className="pt-6">
            <Link href="/" className="text-accent">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
