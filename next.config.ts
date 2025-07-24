import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/eventide-prototype',
  images: {
    unoptimized: true,
  },
  // trailingSlash: true, // ← この行を削除、またはコメントアウト
};

export default nextConfig;
