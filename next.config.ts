import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
    ];
  },
};

export default nextConfig;
