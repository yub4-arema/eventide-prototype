import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 開発環境では basePathを無効化
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/eventide-prototype',
  }),
  images: {
    unoptimized: true,
  },
  // trailingSlash: true, // ← この行を削除、またはコメントアウト
};

export default nextConfig;
