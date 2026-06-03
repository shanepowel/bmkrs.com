import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/services", destination: "/discover", permanent: true },
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
    ];
  },
};

export default nextConfig;
