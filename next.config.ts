import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
        search: "",
      },
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
