'use client';

/**
 * Cookie consent banner with GA4 Consent Mode v2 integration.
 *
 * On first visit: shows a banner with Accept / Decline.
 * On subsequent visits: reads the stored preference from localStorage
 * and silently updates gtag consent — no banner shown.
 *
 * If NEXT_PUBLIC_GA_ID is unset, this component is a no-op (nothing
 * to consent to).
 */

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ylis_consent_v1';
type ConsentChoice = 'granted' | 'denied';

function updateGtagConsent(choice: ConsentChoice) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // If analytics isn't configured, there's nothing to consent to.
    if (!process.env.NEXT_PUBLIC_GA_ID) return;

    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage can throw in private mode or when disabled.
      // Fail open: show the banner.
    }

    if (stored === 'granted' || stored === 'denied') {
      updateGtagConsent(stored);
      return;
    }

    setVisible(true);
  }, []);

  const record = (choice: ConsentChoice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // If we can't persist, we still honor the choice for this session.
    }
    updateGtagConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50"
    >
      <div className="bg-brand-card border border-subtle rounded-2xl shadow-2xl p-5 sm:p-6">
        <p className="text-text-primary font-semibold mb-2">
          A quick note on cookies
        </p>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          We use Google Analytics to understand how visitors use this site.
          No cookies identify you personally, and we never sell your data.
          You can change your mind anytime from our{' '}
          <a href="/privacy" className="text-accent underline hover:no-underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => record('denied')}
            className="flex-1 py-2.5 px-4 rounded-lg border border-subtle text-text-primary text-sm font-medium hover:bg-brand-elevated transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => record('granted')}
            className="flex-1 py-2.5 px-4 rounded-lg bg-gradient-to-r from-accent to-accent-blue text-brand-bg text-sm font-semibold hover:shadow-glow transition-shadow"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
