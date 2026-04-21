/**
 * Google Analytics 4 (gtag.js) with Consent Mode v2.
 *
 * Only renders when NEXT_PUBLIC_GA_ID is set, so preview deploys and
 * local dev stay untracked.
 *
 * Accepts either a GA4 Measurement ID (G-XXXXXXXXXX) or a unified
 * Google tag ID (GT-XXXXXXX). Both use the same gtag.js snippet.
 *
 * Consent flow:
 * 1. This component sets the default consent state to DENIED for all
 *    storage categories before gtag.js loads. GA4 will only send
 *    cookieless pings until consent is granted.
 * 2. CookieConsent.tsx reads the user's stored preference on mount.
 *    - If "granted" → calls gtag('consent', 'update', {granted})
 *    - If "denied" → calls gtag('consent', 'update', {denied})
 *    - If unset → shows the banner; user choice triggers the update.
 *
 * Custom events (see lib/analytics.ts) flow through window.gtag.
 */
import Script from "next/script";

export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      {/* Default consent MUST run before gtag.js to comply with Consent Mode v2 */}
      <Script
        id="gtag-consent-default"
        strategy="beforeInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
      >
        {`
          gtag('js', new Date());
          gtag('config', '${id}', {
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}
