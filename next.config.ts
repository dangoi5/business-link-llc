import type { NextConfig } from "next";
import { catalogCanonicals, siteUrl } from "./src/lib/site";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/products/**" },
      { pathname: "/**", search: "" },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/en/partners", destination: "/en/portfolio", permanent: true },
      { source: "/es/partners", destination: "/es/portfolio", permanent: true },
      { source: "/it/partners", destination: "/it/portfolio", permanent: true },
      {
        source: "/:locale(en|es|it)/portfolio/foodservice-institutional",
        destination: "/:locale/portfolio/commercial-institutional-supply",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
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
        ],
      },
      // Point each catalog PDF at the page that shows the same products, so
      // links to the PDF build up that page's ranking instead of the file's.
      ...Object.entries(catalogCanonicals).map(([file, page]) => ({
        source: `/catalogs/${file}`,
        headers: [{ key: "Link", value: `<${siteUrl}${page}>; rel="canonical"` }],
      })),
    ];
  },
};

export default nextConfig;
