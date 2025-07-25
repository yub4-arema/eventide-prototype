"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// 京都旅行者ツアー用のサンプルデータ
const mockPosts = [
  {
    id: 1,
    username: "京都ガイド・山田",
    userIcon: "https://picsum.photos/40/40?random=21",
    time: "3分前",
    content: "🌸 清水寺の桜が見頃を迎えています！本日の朝7時頃の様子です。早朝参拝がおすすめです。混雑を避けて美しい景色を楽しめます。",
    category: "観光情報",
    likes: 15,
    isOfficial: true,
    replies: [
      {
        id: "1-1",
        username: "旅行者・田中",
        userIcon: "https://picsum.photos/40/40?random=22",
        time: "2分前",
        content: "素晴らしい写真ありがとうございます！明日早朝に行ってみます。何時頃がベストですか？"
      },
      {
        id: "1-2",
        username: "京都ガイド・山田",
        userIcon: "https://picsum.photos/40/40?random=21",
        time: "1分前",
        content: "6時30分開門ですので、7時頃がおすすめです。朝日と桜のコントラストが美しいですよ！",
        isOfficial: true
      }
    ]
  },
  {
    id: 2,
    username: "旅行者・佐藤",
    userIcon: "https://picsum.photos/40/40?random=23",
    time: "10分前",
    content: "伏見稲荷大社の千本鳥居を歩いてきました！想像以上に長い道のりでしたが、神秘的な雰囲気に感動しました。歩きやすい靴がマストです！",
    category: "体験談",
    likes: 8,
    replies: [
      {
        id: "2-1",
        username: "旅行者・鈴木",
        userIcon: "https://picsum.photos/40/40?random=24",
        time: "8分前",
        content: "私も昨日行きました！頂上まで行くのに約2時間かかりましたが、達成感がありました。"
      },
      {
        id: "2-2",
        username: "京都ガイド・田村",
        userIcon: "https://picsum.photos/40/40?random=25",
        time: "7分前",
        content: "途中の休憩所で京都の街並みを見下ろす景色も素晴らしいですよね！写真スポットとしてもおすすめです。",
        isOfficial: true
      }
    ]
  },
  {
    id: 3,
    username: "京都ツアーガイド",
    userIcon: "https://picsum.photos/40/40?random=26",
    time: "15分前",
    content: "📢 本日15:00から金閣寺の特別案内ツアーを開催します！建築の歴史や隠された見どころについて詳しく解説いたします。参加希望の方はお声がけください。",
    category: "ツアー案内",
    likes: 12,
    isOfficial: true,
    replies: [
      {
        id: "3-1",
        username: "旅行者・高橋",
        userIcon: "https://picsum.photos/40/40?random=27",
        time: "12分前",
        content: "参加させていただきたいです！どちらで集合でしょうか？"
      },
      {
        id: "3-2",
        username: "京都ツアーガイド",
        userIcon: "https://picsum.photos/40/40?random=26",
        time: "10分前",
        content: "金閣寺の入り口付近の案内板前でお待ちしております。黄色いガイドバッジが目印です！",
        isOfficial: true
      }
    ]
  },
  {
    id: 4,
    username: "旅行者・中村",
    userIcon: "https://picsum.photos/40/40?random=28",
    time: "20分前",
    content: "祇園で舞妓さんに遭遇！🎌 とても上品で美しく、京都の伝統文化を肌で感じることができました。写真撮影は遠慮しましたが、素晴らしい体験でした。",
    category: "体験談",
    likes: 20,
    replies: [
      {
        id: "4-1",
        username: "旅行者・渡辺",
        userIcon: "https://picsum.photos/40/40?random=29",
        time: "18分前",
        content: "羨ましいです！祇園のどの辺りで見かけられましたか？"
      },
      {
        id: "4-2",
        username: "京都文化案内・吉田",
        userIcon: "https://picsum.photos/40/40?random=30",
        time: "15分前",
        content: "夕方の時間帯、花見小路通りでよく見かけることがありますね。マナーを守って観光を楽しんでいただき、ありがとうございます！",
        isOfficial: true
      }
    ]
  },
  {
    id: 5,
    username: "グルメガイド・森",
    userIcon: "https://picsum.photos/40/40?random=31",
    time: "25分前",
    content: "🍜 京都駅周辺のおすすめラーメン店情報！「京都らーめん小路」では様々な系統のラーメンが楽しめます。特に「ますたに」の中華そばは絶品です！",
    category: "グルメ情報",
    likes: 18,
    isOfficial: true,
    replies: [
      {
        id: "5-1",
        username: "旅行者・石井",
        userIcon: "https://picsum.photos/40/40?random=32",
        time: "22分前",
        content: "ありがとうございます！湯波ラーメンも気になっているのですが、おすすめはありますか？"
      },
      {
        id: "5-2",
        username: "グルメガイド・森",
        userIcon: "https://picsum.photos/40/40?random=31",
        time: "20分前",
        content: "湯波ラーメンでしたら「豆八」がおすすめです！クリーミーで優しい味わいが特徴的ですよ。",
        isOfficial: true
      }
    ]
  },
  {
    id: 6,
    username: "旅行者・木村",
    userIcon: "https://picsum.photos/40/40?random=33",
    time: "30分前",
    content: "竹林の小径を歩いてきました🎋 風に揺れる竹の音が心地よく、とても癒されました。インスタ映えする写真もたくさん撮れました！",
    category: "体験談",
    likes: 14,
    replies: [
      {
        id: "6-1",
        username: "旅行者・安田",
        userIcon: "https://picsum.photos/40/40?random=34",
        time: "28分前",
        content: "私も今度行く予定です！混雑状況はいかがでしたか？"
      },
      {
        id: "6-2",
        username: "旅行者・木村",
        userIcon: "https://picsum.photos/40/40?random=33",
        time: "25分前",
        content: "朝の8時頃でしたが、人は少なくて静かに楽しめました。朝早くがおすすめです！"
      }
    ]
  }
];

export default function KyotoTour() {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      {/* ヘッダー */}
      <header className="bg-white/95 backdrop-blur-md border-b border-red-200 sticky top-0 z-10 shadow-sm">
        <div className="px-4 py-3">
          <div 
            className="cursor-pointer"
            onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
          >
            <h1 className="text-xl font-bold text-gray-900 text-center hover:text-red-600 transition-colors">
              🏯 京都旅行者ツアー 🌸
            </h1>
          </div>
          
          {isHeaderExpanded && (
            <div className="mt-4 pb-2">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    ⛩️
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>89人</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">古都京都の魅力を発見し、旅行者同士で情報交換するコミュニティ</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">🌸 桜シーズン</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">🏛️ 文化遺産</span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">🍵 グルメ</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">🚶‍♀️ 徒歩ツアー</span>
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
            <div key={post.id} className="bg-white/90 backdrop-blur-sm border border-red-100 p-4 hover:bg-white transition-all duration-200 cursor-pointer shadow-sm rounded-lg mb-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-red-100">
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
                      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">✓ 公式</span>
                    )}
                    <span className="text-gray-500 text-sm">·</span>
                    <span className="text-gray-500 text-sm hover:underline cursor-pointer">{post.time}</span>
                  </div>
                  <div className="mb-2">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      post.category === '観光情報' ? 'bg-blue-100 text-blue-800' :
                      post.category === '体験談' ? 'bg-green-100 text-green-800' :
                      post.category === 'ツアー案内' ? 'bg-red-100 text-red-800' :
                      post.category === 'グルメ情報' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>
                  
                  {/* リプライ表示 */}
                  {post.replies && post.replies.length > 0 && (
                    <div className="ml-4 border-l-2 border-red-100 pl-4 mb-3 space-y-3">
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
                                <span className="bg-red-500 text-white text-xs px-1 py-0.5 rounded-full">✓</span>
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
                          <span className="text-lg">🌸</span>
                        </div>
                        <span className="text-sm group-hover:text-red-500">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors group">
                        <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors">
                          <span className="text-sm">返信</span>
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
          <button className="w-14 h-14 bg-red-500 text-white rounded-full shadow-2xl hover:bg-red-600 transition-all duration-200 flex items-center justify-center text-2xl hover:scale-110 active:scale-95">
            🌸
          </button>
        </div>
      </main>
    </div>
  );
}
