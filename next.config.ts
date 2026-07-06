import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
  },

  // track.ajilb2b.com/<AWB> → the tracking page (matches the label QR). The
  // `has` host condition scopes this to the tracking subdomain only, so the main
  // site is unaffected. Requires the subdomain be added in Vercel + DNS.
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "track.ajilb2b.com" }],
        destination: "/track",
      },
      {
        source: "/:awb((?!track|api|_next|.*\\.).+)",
        has: [{ type: "host", value: "track.ajilb2b.com" }],
        destination: "/track?id=:awb",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Long-lived cache for hashed static assets
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache public images / fonts for 30 days
        source: "/(.*\\.(?:png|jpg|jpeg|webp|avif|gif|svg|ico|woff|woff2))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
