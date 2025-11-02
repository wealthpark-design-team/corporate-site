import Image from 'next/image'
import Link from 'next/link'

interface ProductNewsProps {
  t: any
}

export default function ProductNews({ t }: ProductNewsProps) {
  const news = [
    {
      date: '2025.10.22',
      title: 'オーナー様の初回ログイン手続きの手間が 大幅に削減！「簡易アカウント発行機能」をリリースしました',
      url: 'https://wealth-park.com/ja/wealthpark-blog/simple-account-creation-feature/',
      image: 'https://wealth-park.com/wp-content/uploads/2025/10/thumb-2.jpg'
    },
    {
      date: '2025.10.20',
      title: '管理会社様向けアプリ切り替えのお願い',
      url: 'https://wealth-park.com/ja/wealthpark-blog/management-app-migration/',
      image: 'https://wealth-park.com/wp-content/uploads/2025/10/thumb_1.png'
    },
    {
      date: '2025.10.10',
      title: 'チャット内で担当者を検索できる新機能がリリースされました！',
      url: 'https://wealth-park.com/ja/wealthpark-blog/chat-agent-search/',
      image: 'https://wealth-park.com/wp-content/uploads/2025/10/thumb-1.jpg'
    },
    {
      date: '2025.10.07',
      title: '管理終了後の部屋を削除する機能がリリースされました！',
      url: 'https://wealth-park.com/ja/wealthpark-blog/delete-room-after-management/',
      image: 'https://wealth-park.com/wp-content/uploads/2025/10/image_002.jpg'
    },
    {
      date: '2025.10.06',
      title: 'ドキュメントのリンクが共有できる新機能がリリースされました！',
      url: 'https://wealth-park.com/ja/wealthpark-blog/document-link-sharing-released/',
      image: 'https://wealth-park.com/wp-content/uploads/2025/10/thumb.jpg'
    },
    {
      date: '2025.09.19',
      title: '管理会社様向けチャットツール WealthChatがリニューアル「WPBポケット」登場！',
      url: 'https://wealth-park.com/ja/wealthpark-blog/wpb-pocket-new-app/',
      image: 'https://wealth-park.com/wp-content/uploads/2025/09/image_006-2.jpg'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Link key={index} href={item.url} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* 画像 */}
                <div className="overflow-hidden aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={375}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>

                {/* コンテンツ */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-xs text-gray-500">{item.date}</time>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 leading-relaxed mb-4 flex-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* 矢印アイコン */}
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg
                        className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://wealth-park.com/ja/business/release-note/"
            className="inline-block text-sm text-gray-700 hover:text-[#1a1a1a] transition-colors font-medium"
          >
            すべての記事 →
          </Link>
        </div>
      </div>
    </section>
  )
}
