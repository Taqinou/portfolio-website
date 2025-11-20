import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    modern: true,
  },
};

export default nextConfig;
