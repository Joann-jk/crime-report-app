/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  config options here
};

export default nextConfig; */
// next.config.js
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

