/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https: https://www.google-analytics.com https://www.googletagmanager.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "connect-src 'self' https://api.stripe.com https://api.resend.com https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com",
      "frame-src https://js.stripe.com https://checkout.stripe.com https://buy.stripe.com",
      "form-action 'self' https://checkout.stripe.com https://buy.stripe.com",
      "base-uri 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

// Relaxed headers for the /embed iframe widget. CSP here allows any parent
// page to frame it; the widget itself ships no interactive scripts.
const embedHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "frame-ancestors *",
      "base-uri 'self'",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      // Embed route: relaxed headers that allow framing from any origin.
      { source: "/embed", headers: embedHeaders },
      { source: "/embed/:path*", headers: embedHeaders },
      // Everything else: strict security headers. Negative lookahead
      // excludes /embed so the global X-Frame-Options: DENY doesn't leak
      // through and block the iframe.
      {
        source: "/:path((?!embed$|embed/).*)",
        headers: securityHeaders,
      },
      // Root path still needs the strict headers (the pattern above
      // requires at least one character).
      { source: "/", headers: securityHeaders },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.yourlifeinseconds.com" }],
        destination: "https://yourlifeinseconds.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
