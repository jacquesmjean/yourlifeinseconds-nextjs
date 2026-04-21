/**
 * Thin wrapper around Google Analytics 4 (gtag.js) custom events.
 *
 * Safe to call anywhere — server-side calls are no-ops, and if gtag hasn't
 * loaded yet (slow network, blocked by an ad blocker) events silently drop
 * rather than throwing.
 */

type GtagArgs =
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?]
  | ["consent", "default" | "update", Record<string, unknown>]
  | ["js", Date]
  | ["set", Record<string, unknown>];

declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void;
    dataLayer?: unknown[];
  }
}

export function track(
  event: string,
  props?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, props);
  } catch {
    // never let analytics break the app
  }
}

// Canonical event names — GA4 reserves some names (page_view, first_visit,
// session_start, etc.) so we use snake_case custom names that won't collide.
export const Events = {
  CALC_STARTED: "calc_started",
  CALC_COMPLETED: "calc_completed",
  CALC_BACK: "calc_back",
  SHARE_CLICKED: "share_clicked",
  SHARE_COPIED: "share_link_copied",
  SHARE_IMAGE_SAVED: "share_image_saved",
  STRIPE_CHECKOUT_INITIATED: "stripe_checkout_initiated",
  NEWSLETTER_SUBSCRIBED: "newsletter_subscribed",
  TOOL_CARD_CLICKED: "tool_card_clicked",
  ARTICLE_OPENED: "article_opened",
} as const;
