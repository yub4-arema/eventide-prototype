"use client";

import React, { useState } from 'react';

// サンプルデータ
const mockPosts = [
  {
    id: 1,
    username: "みさきん♪",
    userIcon: "https://picsum.photos/40/40?random=11",
    time: "3分前",
    content: "理科実験室の設備がとても充実していて驚きました！特に顕微鏡の性能が素晴らしいです。",
    category: "感想",
    likes: 8,
    replies: [
      {
        id: "1-1",
        username: "学校案内スタッフ",
        userIcon: "https://picsum.photos/40/40?random=13",
        time: "2分前",
        content: "ありがとうございます！昨年導入したばかりの最新型です。生物観察がより詳細にできるようになりました。",
        isOfficial: true
      }
    ]
  },
  {
    id: 2,
    username: "けんた@中3",
    userIcon: "https://picsum.photos/40/40?random=12",
    time: "7分前",
    content: "図書館の蔵書数はどのくらいですか？また、自習スペースの利用時間を教えてください。",
    category: "質問",
    likes: 5,
    replies: [
      {
        id: "2-1",
        username: "図書館司書",
        userIcon: "https://picsum.photos/40/40?random=18",
        time: "5分前",
        content: "蔵書数は約5万冊です。自習スペースは平日7:30〜19:00、土曜日は17:00まで利用できます！",
        isOfficial: true
      },
      {
        id: "2-2",
        username: "さくら🌸",
        userIcon: "https://picsum.photos/40/40?random=16",
        time: "4分前",
        content: "私も気になってました！ありがとうございます。"
      }
    ]
  },
  {
    id: 3,
    username: "学校案内スタッフ",
    userIcon: "https://picsum.photos/40/40?random=13",
    time: "10分前",
    content: "📢 次は音楽室の見学です。14:30からピアノ演奏の実演もございます。音楽棟2階にお集まりください。",
    category: "お知らせ",
    likes: 12,
    isOfficial: true,
    replies: [
      {
        id: "3-1",
        username: "ひかり✨",
        userIcon: "https://picsum.photos/40/40?random=14",
        time: "9分前",
        content: "楽しみです！どんな曲を演奏してくださるのでしょうか？"
      },
      {
        id: "3-2",
        username: "音楽教師",
        userIcon: "https://picsum.photos/40/40?random=19",
        time: "8分前",
        content: "ショパンのノクターンを予定しています♪ぜひお越しください！",
        isOfficial: true
      }
    ]
  },
  {
    id: 4,
    username: "ひかり✨",
    userIcon: "https://picsum.photos/40/40?random=14",
    time: "15分前",
    content: "食堂のメニューがとても美味しそうでした！栄養バランスも考えられていて、毎日通うのが楽しみになりそうです。",
    category: "感想",
    likes: 9,
    replies: [
      {
        id: "4-1",
        username: "栄養士",
        userIcon: "https://picsum.photos/40/40?random=20",
        time: "13分前",
        content: "ありがとうございます！成長期の皆さんに必要な栄養をしっかり摂れるよう心がけています。",
        isOfficial: true
      },
      {
        id: "4-2",
        username: "みさきん♪",
        userIcon: "https://picsum.photos/40/40?random=11",
        time: "12分前",
        content: "カレーがとても美味しそうでした！週何回くらい出るんですか？"
      }
    ]
  },
  {
    id: 5,
    username: "だいすけ_ロボ好き",
    userIcon: "https://picsum.photos/40/40?random=15",
    time: "18分前",
    content: "部活動の種類が豊富で驚きました。特にロボット研究部の活動内容について詳しく知りたいです。",
    category: "質問",
    likes: 6,
    replies: [
      {
        id: "5-1",
        username: "ロボット研究部顧問",
        userIcon: "https://picsum.photos/40/40?random=21",
        time: "16分前",
        content: "毎年ロボコンに出場しています！プログラミングから機械工学まで幅広く学べますよ。",
        isOfficial: true
      }
    ]
  },
  {
    id: 6,
    username: "さくら🌸",
    userIcon: "https://picsum.photos/40/40?random=16",
    time: "22分前",
    content: "校舎がとても綺麗で設備も新しいですね。冷暖房も完備されていて学習環境が整っています。",
    category: "感想",
    likes: 7,
    replies: [
      {
        id: "6-1",
        username: "けんた@中3",
        userIcon: "https://picsum.photos/40/40?random=12",
        time: "20分前",
        content: "本当ですね！Wi-Fi環境も整っているのが嬉しいです。"
      }
    ]
  },
  {
    id: 7,
    username: "学校案内スタッフ",
    userIcon: "https://picsum.photos/40/40?random=17",
    time: "25分前",
    content: "本日はお忙しい中、学校見学にお越しいただきありがとうございます。ご質問はいつでもお気軽にお声かけください。",
    category: "お知らせ",
    likes: 15,
    isOfficial: true,
    replies: [
      {
        id: "7-1",
        username: "みさきん♪",
        userIcon: "https://picsum.photos/40/40?random=11",
        time: "23分前",
        content: "こちらこそありがとうございます！とても楽しみです。"
      },
      {
        id: "7-2",
        username: "だいすけ_ロボ好き",
        userIcon: "https://picsum.photos/40/40?random=15",
        time: "22分前",
        content: "よろしくお願いします！"
      }
    ]
  }
];

export default function SchoolVisit() {
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
            <h1 className="text-xl font-bold text-gray-900 text-center hover:text-green-600 transition-colors">
              桜ヶ丘高等学校 学校見学会
            </h1>
          </div>
          
          {isHeaderExpanded && (
            <div className="mt-4 pb-2">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    🏫
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>42人</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">未来への第一歩を踏み出そう！充実した学習環境と豊富な部活動</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">📅 12/15</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">⏰ 13:00-16:00</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">📍 桜ヶ丘高等学校</span>
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
                      <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">✓</span>
                    )}
                    <span className="text-gray-500 text-sm">·</span>
                    <span className="text-gray-500 text-sm hover:underline cursor-pointer">{post.time}</span>
                  </div>
                  <div className="mb-2">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      post.category === '質問' ? 'bg-blue-100 text-blue-800' :
                      post.category === '感想' ? 'bg-orange-100 text-orange-800' :
                      post.category === 'お知らせ' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
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
                              {reply.isOfficial && (
                                <span className="bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">✓</span>
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
            <a 
              href="/"
              className="bg-blue-500 text-white px-3 py-2 rounded-lg text-xs hover:bg-blue-600 transition-colors shadow-lg"
            >
              Tech Conf
            </a>
            <a 
              href="/school-visit"
              className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs hover:bg-green-600 transition-colors shadow-lg"
            >
              School Visit
            </a>
            <a 
              href="/chofu-festival"
              className="bg-orange-500 text-white px-3 py-2 rounded-lg text-xs hover:bg-orange-600 transition-colors shadow-lg"
            >
              Tech Hub UEC
            </a>
          </div>
          
          {/* 投稿ボタン */}
          <button className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-200 flex items-center justify-center text-2xl hover:scale-110 active:scale-95">
            ✏️
          </button>
        </div>
      </main>
    </div>
  );
}
