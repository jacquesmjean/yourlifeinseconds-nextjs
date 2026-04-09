import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How YourLifeInSeconds collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "April 9, 2026";

export default function PrivacyPage() {
  return (
    <article className="pt-[120px] pb-20 bg-brand-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-text-primary mb-3">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-10">Last updated: {UPDATED}</p>

        <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
          <p>
            YourLifeInSeconds (&quot;we&quot;, &quot;us&quot;) operates the website
            yourlifeinseconds.com. This policy explains what we collect and how we use it.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">What we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Life Clock inputs</strong> (birth date, country, gender): processed
              entirely in your browser. We do not transmit or store this data.
            </li>
            <li>
              <strong>Email address</strong>: only if you subscribe to our newsletter. We
              use it to send the newsletter you signed up for.
            </li>
            <li>
              <strong>Basic analytics</strong>: anonymous page view data (no cookies that
              identify you personally).
            </li>
            <li>
              <strong>Payment information</strong>: if you purchase a report, payment is
              handled by Stripe. We never see or store your card details.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">How we use it</h2>
          <p>
            We use the information above only to provide the service you requested
            (sending the newsletter, delivering a report, operating the site). We do not
            sell or rent personal information.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">Third-party services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Resend</strong> — email delivery for newsletter subscribers.
            </li>
            <li>
              <strong>Stripe</strong> — payment processing.
            </li>
            <li>
              <strong>Vercel</strong> — hosting.
            </li>
          </ul>
          <p>Each of these providers has its own privacy policy.</p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">Your rights</h2>
          <p>
            You may unsubscribe from emails at any time using the link in any message, or
            by contacting{" "}
            <a href="mailto:hello@yourlifeinseconds.com" className="text-accent">
              hello@yourlifeinseconds.com
            </a>
            . You can request deletion of your email from our list at the same address.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">Children</h2>
          <p>
            This site is not directed at children under 13. We do not knowingly collect
            personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">Changes</h2>
          <p>
            We may update this policy. Material changes will be posted here with a new
            &quot;Last updated&quot; date.
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
