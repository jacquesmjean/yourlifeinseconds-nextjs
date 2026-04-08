"use client";

import { useState } from "react";

interface EmailCaptureProps {
  variant?: "inline" | "banner";
}

export default function EmailCapture({ variant = "inline" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      // Placeholder: In production, send to email service (Mailchimp, Convertkit, etc.)
      setIsSubmitted(true);
      setEmail("");
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  // Inline variant: Card component
  if (variant === "inline") {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="relative bg-brand-card border border-subtle rounded-xl p-8 overflow-hidden group">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-blue/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="mb-4 flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-text-primary font-semibold text-lg">Check your inbox!</p>
                <p className="text-text-secondary text-sm mt-2">We&apos;ve sent you the free framework.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Get Your Free Time Audit Framework
                </h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                  Join 50,000+ people who track their time with intention. Get our free PDF + weekly insights.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-brand-input border border-subtle rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold py-3 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Framework →
                  </button>
                </form>

                <p className="text-text-muted text-xs text-center mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Banner variant: Full-width component
  return (
    <div className="w-full bg-brand-card border-t border-b border-subtle py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        {isSubmitted ? (
          <div className="flex items-center justify-center gap-4 py-6">
            <div className="flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p className="text-text-primary font-semibold">Check your inbox!</p>
              <p className="text-text-secondary text-sm">We&apos;ve sent you the free framework.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-3">
                Get Your Free Time Audit Framework
              </h2>
              <p className="text-text-secondary mb-2 text-sm leading-relaxed">
                Join 50,000+ people who track their time with intention.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Get our free PDF + weekly insights delivered to your inbox.
              </p>
            </div>

            {/* Right form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-brand-input border border-subtle rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  >
                    Get Free Framework →
                  </button>
                </div>
                <p className="text-text-muted text-xs">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
