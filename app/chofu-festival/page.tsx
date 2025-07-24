"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Tech Hub UEC用のサンプルデータ
const mockPosts = [
  {
    id: 1,
    username: "Tech Hub UEC運営",
    userIcon: "https://picsum.photos/40/40?random=40",
    time: "5分前",
    content: "� Tech Hub UEC開店中！エンジニアバー＆LT会イベントにようこそ！15:30からミニLT大会も開催します。お気軽にお越しください！",
    category: "お知らせ",
    likes: 45,
    isOfficial: true,
    replies: [
      {
        id: "1-1",
        username: "backend_dev",
        userIcon: "https://picsum.photos/40/40?random=41",
        time: "4分前",
        content: "エンジニアバーってどんな感じですか？🤔"
      },
      {
        id: "1-2",
        username: "Tech Hub UEC運営",
        userIcon: "https://picsum.photos/40/40?random=40",
        time: "3分前",
        content: "テック系のドリンクメニューとエンジニア同士の交流がメインです！コードレビューしながら飲み物も楽しめますよ☕",
        isOfficial: true
      }
    ]
  },
  {
    id: 3,
    username: "Tech Hub UEC運営",
    userIcon: "https://picsum.photos/40/40?random=40",
    time: "12分前",
    content: "📋 本日のミニLT発表スケジュール\n15:30「Rust入門」by rust_lover\n15:45「Docker最適化」by container_ninja\n16:00「GraphQL実践」by api_master\n飛び入り参加も大歓迎です！",
    category: "お知らせ",
    likes: 23,
    isOfficial: true,
    replies: [
      {
        id: "3-1",
        username: "rust_lover",
        userIcon: "https://picsum.photos/40/40?random=45",
        time: "10分前",
        content: "発表準備できました！Rustの所有権システムについて話します🦀"
      },
      {
        id: "3-2",
        username: "学部3年生",
        userIcon: "https://picsum.photos/40/40?random=46",
        time: "9分前",
        content: "飛び入りで「GitHub Actions入門」について話したいです！"
      }
    ]
  },
  {
    id: 4,
    username: "ai_researcher",
    userIcon: "https://picsum.photos/40/40?random=47",
    time: "15分前",
    content: "AI技術の進化について語りたいです。特に生成モデルの応用が面白いと思います。",
    category: "技術相談",
    likes: 18,
    replies: [
      {
        id: "4-1",
        username: "ml_student",
        userIcon: "https://picsum.photos/40/40?random=48",
        time: "13分前",
        content: "人間は悪だ"
      },
      {
        id: "4-2",
        username: "data_scientist",
        userIcon: "https://picsum.photos/40/40?random=49",
        time: "12分前",
        content: "私達がこの正解を掌握するのだ"
      }
    ]
  },
  {
    id: 5,
    username: "backend_dev",
    userIcon: "https://picsum.photos/40/40?random=41",
    time: "18分前",
    content: "🍹 Pythonカクテル激ウマで草😂 エンジニアバーのメニューのネーミングセンス最高",
    category: "感想",
    likes: 31,
    replies: [
      {
        id: "5-1",
        username: "drink_master",
        userIcon: "https://picsum.photos/40/40?random=50",
        time: "16分前",
        content: "実はJavaカクテルが美味しくてー"
      },
      {
        id: "5-2",
        username: "junior_dev",
        userIcon: "https://picsum.photos/40/40?random=51",
        time: "15分前",
        content: "この色別れてるやつどうなっとるんや"
      }
    ]
  },
];

export default function TechHubUEC() {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* ヘッダー */}
      <header className="bg-white/90 backdrop-blur-md border-b border-orange-200 sticky top-0 z-10 shadow-sm">
        <div className="px-4 py-3">
          <div 
            className="cursor-pointer"
            onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
          >
            <h1 className="text-xl font-bold text-orange-900 text-center hover:text-orange-600 transition-colors">
              Tech Hub UEC 💻
            </h1>
          </div>
          
          {isHeaderExpanded && (
            <div className="mt-4 pb-2">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    �
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>78人オンライン</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">調布祭出店「Tech Hub UEC」- エンジニアバー＆LT会イベント</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">🍻 エンジニアバー</span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">🎤 LT会</span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">� 技術相談</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">🤝 ネットワーキング</span>
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
            <div key={post.id} className="bg-white/90 backdrop-blur-sm border-b border-orange-200 p-4 hover:bg-orange-50/50 transition-all duration-200 cursor-pointer shadow-sm rounded-lg mb-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-orange-200">
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
                      <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">公式</span>
                    )}
                    <span className="text-gray-500 text-sm">·</span>
                    <span className="text-gray-500 text-sm hover:underline cursor-pointer">{post.time}</span>
                  </div>
                  <div className="mb-2">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                        post.category === 'お知らせ' ? 'bg-orange-100 text-orange-800' :
                        post.category === '技術相談' ? 'bg-blue-100 text-blue-800' :
                        post.category === 'キャリア相談' ? 'bg-purple-100 text-purple-800' :
                        post.category === '感想' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                      {post.category}
                    </span>
                  </div>
                  <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>
                  
                  {/* リプライ表示 */}
                  {post.replies && post.replies.length > 0 && (
                    <div className="ml-4 border-l-2 border-orange-100 pl-4 mb-3 space-y-3">
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
                                <span className="bg-orange-500 text-white text-xs px-1 py-0.5 rounded-full">公式</span>
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
                      <button className="flex items-center gap-1 hover:text-orange-500 transition-colors group">
                        <div className="p-2 rounded-full group-hover:bg-orange-50 transition-colors">
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
          </div>
          
          {/* 投稿ボタン */}
          <button className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center text-2xl hover:scale-110 active:scale-95">
            ✏️
          </button>
        </div>
      </main>
    </div>
  );
}
