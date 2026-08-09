import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "uqlksereggariftvzcwe.supabase.co",
      },
    ],
  },
  cacheComponents: true, // Next.js 16の設定
};

export default nextConfig;  