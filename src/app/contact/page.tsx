import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — YourLifeInSeconds",
  description:
    "Get in touch with the YourLifeInSeconds team. We'd love to hear from you about partnerships, feedback, or questions. Response time guaranteed.",
  openGraph: {
    title: "Contact — YourLifeInSeconds",
    description:
      "Reach out to YourLifeInSeconds. We respond to all inquiries and welcome your feedback on our tools and mission.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "What's your typical response time?",
    answer:
      "We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please mark your email as priority.",
  },
  {
    question: "Are you open to partnerships?",
    answer:
      "Yes! We're always interested in partnerships with organizations aligned with our mission of bringing life clarity to millions. Please tell us about your vision.",
  },
  {
    question: "Where do I report bugs or suggest features?",
    answer:
      "You can report bugs or suggest features directly through our contact form. We review every suggestion and incorporate feedback into our roadmap regularly.",
  },
  {
    question: "Do you offer API access?",
    answer:
      "We're currently exploring API partnerships for qualified organizations. Reach out with details about your use case and we'll discuss possibilities.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-brand-bg">
      {/* ════════ Hero Section ════════ */}
      <section className="pt-28 pb-16 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
            CONTACT US
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-accent text-lg sm:text-xl mb-8">
            Have a question, partnership idea, or feedback? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ════════ Contact Info Section ════════ */}
      <section className="py-20 px-6 bg-brand-bg-secondary">
        <div className="max-w-[800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Email</h3>
              <a
                href="mailto:hello@yourlifeinseconds.com"
                className="text-accent hover:text-accent-bright transition-colors"
              >
                hello@yourlifeinseconds.com
              </a>
            </div>

            {/* Social X */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-accent"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">X / Twitter</h3>
              <a
                href="https://x.com/jacquesmjean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-bright transition-colors"
              >
                @jacquesmjean
              </a>
            </div>

            {/* LinkedIn */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-accent"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/jacquesmjean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-bright transition-colors"
              >
                /in/jacquesmjean
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FAQ Section ════════ */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-text-secondary">Quick answers to common inquiries</p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-brand-card border border-subtle rounded-xl p-6 sm:p-8 hover:border-accent-dim transition-all"
              >
                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3">
                  {item.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Contact Form CTA ════════ */}
      <section className="py-20 px-6 bg-brand-bg-secondary">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center p-10 sm:p-14 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] border border-subtle rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-text-primary">
              Ready to reach out?
            </h2>
            <p className="text-text-secondary mb-8">
              Send us your message directly. We respond to every inquiry and take your feedback seriously.
            </p>
            <a
              href="mailto:hello@yourlifeinseconds.com?subject=Get%20In%20Touch%20-%20YourLifeInSeconds"
              className="px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold rounded-lg hover:shadow-glow transition-shadow inline-block"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* ════════ Final CTA ════════ */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            While you&apos;re here, calculate your life.
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Discover exactly how many seconds you&apos;ve lived and how many remain. It might change how you see everything.
          </p>
          <Link
            href="/#life-clock"
            className="px-10 py-4 bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold text-lg rounded-lg hover:shadow-glow transition-shadow inline-block"
          >
            Calculate My Life
          </Link>
        </div>
      </section>
    </main>
  );
}
