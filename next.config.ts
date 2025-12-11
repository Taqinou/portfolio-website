import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: true,
  },
  serverExternalPackages: ['html2canvas', 'jspdf'],
};

export default nextConfig;
