"use client";

import { useState, useTransition } from "react";
import { subscribe } from "@/app/actions/subscribe";

interface EmailCaptureProps {
  variant?: "inline" | "banner";
}

export default function EmailCapture({ variant = "inline" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    startTransition(async () => {
      const result = await subscribe(formData);
      if (result.ok) {
        setIsSubmitted(true);
        setEmail("");
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMsg(result.error);
      }
    });
  };

  const Form = (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className={variant === "banner" ? "flex flex-col sm:flex-row gap-3" : ""}>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          maxLength={254}
          disabled={isPending}
          className={`${
            variant === "banner" ? "flex-1" : "w-full"
          } bg-brand-input border border-subtle rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all disabled:opacity-60`}
        />
        <button
          type="submit"
          disabled={isPending}
          className={`${
            variant === "banner" ? "px-6 whitespace-nowrap" : "w-full"
          } press-active bg-gradient-to-r from-accent to-accent-blue text-brand-bg font-bold py-3 rounded-lg hover:shadow-glow transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {isPending ? "Subscribing…" : "Subscribe →"}
        </button>
      </div>
      {errorMsg && (
        <p className="text-status-danger text-xs" role="alert">
          {errorMsg}
        </p>
      )}
      <p className="text-text-muted text-xs">No spam. Unsubscribe anytime.</p>
    </form>
  );

  if (variant === "inline") {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="relative bg-brand-card border border-subtle rounded-xl p-8 overflow-hidden">
          <div className="relative z-10">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="mb-4 flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-text-primary font-semibold text-lg">You&apos;re subscribed.</p>
                <p className="text-text-secondary text-sm mt-2">
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Time-in-Seconds Weekly
                </h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                  One short note each week on how to spend the seconds you have left.
                </p>
                {Form}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Banner variant
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
              <p className="text-text-primary font-semibold">You&apos;re subscribed.</p>
              <p className="text-text-secondary text-sm">We&apos;ll be in touch soon.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-3">
                Time-in-Seconds Weekly
              </h2>
              <p className="text-text-secondary mb-2 text-sm leading-relaxed">
                One short note each week. Written to help you spend the seconds you
                have left with intention.
              </p>
            </div>
            <div>{Form}</div>
          </div>
        )}
      </div>
    </div>
  );
}
