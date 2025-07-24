import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ サイトが静的ファイルとして出力されるようにする設定
  output: 'export',

  // ✅ GitHub Pagesのサブディレクトリ配信に対応
  // サイトが '/eventide-prototype' というパスで提供されることをNext.jsに教える
  basePath: '/eventide-prototype',

  // ✅ 画像最適化を無効化（静的エクスポート時に必要）
  images: {
    unoptimized: true,
  },

  // ✅ トレイリングスラッシュを有効化（GitHub Pagesで推奨）
  trailingSlash: true,
};

export default nextConfig;
