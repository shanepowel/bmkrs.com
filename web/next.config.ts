import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  transpilePackages: ["@bmkrs/ui"],
  turbopack: {
    root: projectDir,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-is": path.join(projectDir, "node_modules/react-is"),
    };
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ];
    return [
      {
        source: "/((?!studio).*)",
        headers: [...securityHeaders, { key: "X-Frame-Options", value: "SAMEORIGIN" }],
      },
      {
        source: "/studio/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bmkrs.com" }],
        destination: "https://www.bmkrs.com/:path*",
        permanent: true,
      },
      { source: "/discover", destination: "/services", permanent: true },
      { source: "/discover/:path*", destination: "/services/:path*", permanent: true },
      { source: "/work/project1", destination: "/work/copa", permanent: true },
      { source: "/work/project1/", destination: "/work/copa", permanent: true },
      { source: "/work/project2", destination: "/work/carter", permanent: true },
      { source: "/work/project2/", destination: "/work/carter", permanent: true },
      { source: "/work/project3", destination: "/work/wanderlust", permanent: true },
      { source: "/work/project3/", destination: "/work/wanderlust", permanent: true },
      { source: "/work/project4", destination: "/work/smoothies", permanent: true },
      { source: "/work/project4/", destination: "/work/smoothies", permanent: true },
      {
        source: "/work/flipster-project",
        destination: "/work/flipster",
        permanent: true,
      },
      {
        source: "/work/flipster-project/",
        destination: "/work/flipster",
        permanent: true,
      },
      {
        source: "/journal/better-told-brand-isnt-fair",
        destination: "/journal/better-told-brand-wins",
        permanent: true,
      },
      {
        source: "/journal/same-team",
        destination: "/journal/one-team-vs-five-agencies",
        permanent: true,
      },
      {
        source: "/journal/hand-off-brands-die",
        destination: "/journal/one-team-vs-five-agencies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
