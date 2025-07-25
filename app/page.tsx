"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// サンプルデータ
const mockPosts = [
  {
    id: 1,
    username: "フルーレン",
    userIcon: "https://picsum.photos/40/40?random=1",
    time: "5分前",
    content: "セッション1の質問です。React Server Componentsの具体的な使用例について詳しく教えてください。",
    category: "質問",
    likes: 3,
    replies: [
      {
        id: "1-1",
        username: "講師・田中",
        userIcon: "https://picsum.photos/40/40?random=10",
        time: "4分前",
        content: "良い質問ですね！RSCはデータフェッチングを直接コンポーネント内で行えるのが大きな特徴です。例えば、ブログ投稿一覧の取得などに最適です。",
        isOfficial: true
      },
      {
        id: "1-2",
        username: "えぐらず",
        userIcon: "https://picsum.photos/40/40?random=2",
        time: "3分前",
        content: "実際のプロジェクトでも使えそうですね！ありがとうございます。"
      }
    ]
  },
  {
    id: 2,
    username: "えぐらず",
    userIcon: "https://picsum.photos/40/40?random=2",
    time: "8分前",
    content: "素晴らしい講演でした！資料はあとで共有していただけますか？",
    category: "感想",
    likes: 12,
    replies: [
      {
        id: "2-1",
        username: "運営チーム",
        userIcon: "https://picsum.photos/40/40?random=11",
        time: "7分前",
        content: "資料は後日GitHubリポジトリで公開予定です！お楽しみに。",
        isOfficial: true
      }
    ]
  },
  {
    id: 3,
    username: "team4111",
    userIcon: "https://picsum.photos/40/40?random=3",
    time: "10分前",
    content: "📢 次のセッション「TypeScriptベストプラクティス」は15:30から開始予定です。会場は2階の大ホールになります。",
    category: "お知らせ",
    likes: 8,
    isOfficial: true,
    replies: [
      {
        id: "3-1",
        username: "むつみるく",
        userIcon: "https://picsum.photos/40/40?random=4",
        time: "9分前",
        content: "楽しみです！TypeScriptの型設計について質問したいことがあります。"
      },
      {
        id: "3-2",
        username: "ひがしあめ",
        userIcon: "https://picsum.photos/40/40?random=5",
        time: "8分前",
        content: "会場への案内図も共有していただけると助かります！"
      }
    ]
  },
  {
    id: 4,
    username: "むつみるく",
    userIcon: "https://picsum.photos/40/40?random=4",
    time: "12分前",
    content: "GraphQLとRESTAPIの使い分けについて、実際のプロジェクトでの経験を共有したいです。皆さんはどう思いますか？",
    category: "情報共有",
    likes: 5,
    replies: [
      {
        id: "4-1",
        username: "フルーレン",
        userIcon: "https://picsum.photos/40/40?random=1",
        time: "11分前",
        content: "興味深いトピックですね！私の経験だと、複雑なデータ関係がある場合はGraphQLが便利でした。"
      },
      {
        id: "4-2",
        username: "講師・佐藤",
        userIcon: "https://picsum.photos/40/40?random=12",
        time: "10分前",
        content: "プロジェクトの規模とチームの習熟度も考慮ポイントですね。後のセッションでも触れる予定です！",
        isOfficial: true
      }
    ]
  },
  {
    id: 5,
    username: "ひがしあめ",
    userIcon: "https://picsum.photos/40/40?random=5",
    time: "15分前",
    content: "会場のWi-Fiのパスワードは「TechConf2024」です！",
    category: "情報共有",
    likes: 25,
    replies: [
      {
        id: "5-1",
        username: "えぐらず",
        userIcon: "https://picsum.photos/40/40?random=2",
        time: "14分前",
        content: "助かります！ありがとうございます🙏"
      },
      {
        id: "5-2",
        username: "むつみるく",
        userIcon: "https://picsum.photos/40/40?random=4",
        time: "13分前",
        content: "接続できました！配信の準備もバッチリです。"
      }
    ]
  }
];

export default function Home() {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="px-4 py-3">
          <div 
            className="cursor-pointer"
            onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
          >
            <h1 className="text-xl font-bold text-gray-900 text-center hover:text-blue-600 transition-colors">
              Tech Conference 2024
            </h1>
          </div>
          
          {isHeaderExpanded && (
            <div className="mt-4 pb-2">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>156人</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">最新のWeb技術とトレンドについて学ぶ1日限定のコミュニティ</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">📅 7/24</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">⏰ 10:00-18:00</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">📍 東京国際フォーラム</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="px-4 py-4 max-w-2xl mx-auto">
        {/* タイムライン */}
        <div className="space-y-1">
          {mockPosts.map((post) => (
            <div key={post.id} className="bg-white border-b border-gray-200 p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm rounded-lg mb-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={post.userIcon} 
                    alt={post.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-bold text-gray-900 text-sm hover:underline cursor-pointer">{post.username}</span>
                    {post.isOfficial && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">✓</span>
                    )}
                    <span className="text-gray-500 text-sm">·</span>
                    <span className="text-gray-500 text-sm hover:underline cursor-pointer">{post.time}</span>
                  </div>
                  <div className="mb-2">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${post.category === '質問' ? 'bg-blue-100 text-blue-800' :
                        post.category === '情報共有' ? 'bg-green-100 text-green-800' :
                          post.category === 'お知らせ' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                      }`}>
                      {post.category}
                    </span>
                  </div>
                  <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>
                  
                  {/* リプライ表示 */}
                  {post.replies && post.replies.length > 0 && (
                    <div className="ml-4 border-l-2 border-gray-100 pl-4 mb-3 space-y-3">
                      {post.replies.map((reply) => (
                        <div key={reply.id} className="flex gap-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={reply.userIcon} 
                              alt={reply.username}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 mb-1">
                              <span className="font-bold text-gray-900 text-xs">{reply.username}</span>
                              {(reply as any).isOfficial && (
                                <span className="bg-blue-500 text-white text-xs px-1 py-0.5 rounded-full">✓</span>
                              )}
                              <span className="text-gray-500 text-xs">·</span>
                              <span className="text-gray-500 text-xs">{reply.time}</span>
                            </div>
                            <p className="text-gray-800 text-sm leading-relaxed">{reply.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-end">
                    <div className="flex items-center gap-4 text-gray-500">
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors group">
                        <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors">
                          <span className="text-lg">♡</span>
                        </div>
                        <span className="text-sm group-hover:text-red-500">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-500 transition-colors group">
                        <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                          <span className="text-lg">返信</span>
                        </div>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 下部余白 */}
        <div className="h-20"></div>

        {/* フローティングアクションボタン */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3">
          {/* デバッグ用ページ遷移ボタン */}
          <div className="flex flex-col gap-2">
            <div className="text-xs text-gray-500 bg-white/90 px-2 py-1 rounded text-center shadow-sm">
              ※デモ用遷移ボタン
            </div>
            <Link 
              href="/"
              className="bg-blue-500 text-white px-3 py-2 rounded-lg text-xs hover:bg-blue-600 transition-colors shadow-lg"
            >
              Tech Conf
            </Link>
            <Link 
              href="/school-visit"
              className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs hover:bg-green-600 transition-colors shadow-lg"
            >
              School Visit
            </Link>
            <Link 
              href="/chofu-festival"
              className="bg-orange-500 text-white px-3 py-2 rounded-lg text-xs hover:bg-orange-600 transition-colors shadow-lg"
            >
              Tech Hub UEC
            </Link>
            <Link 
              href="/kyoto-tour"
              className="bg-red-500 text-white px-3 py-2 rounded-lg text-xs hover:bg-red-600 transition-colors shadow-lg"
            >
              京都ツアー
            </Link>
          </div>
          
          {/* 投稿ボタン */}
          <button className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-2xl hover:bg-blue-600 transition-all duration-200 flex items-center justify-center text-2xl hover:scale-110 active:scale-95">
            ✏️
          </button>
        </div>
      </main>
    </div>
  );
}
