/**
 * Google Analytics 4 (gtag.js).
 *
 * Only renders when NEXT_PUBLIC_GA_ID is set, so preview deploys and
 * local dev stay untracked.
 *
 * Accepts either a GA4 Measurement ID (G-XXXXXXXXXX) or a unified
 * Google tag ID (GT-XXXXXXX). Both use the same gtag.js snippet.
 *
 * Custom events (see lib/analytics.ts) flow through window.gtag.
 */
import Script from "next/script";

export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${id}', {
            // Respect Do-Not-Track where the browser signals it.
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}
