import BusinessHeader from '@/components/business/BusinessHeader'
import Footer from '@/components/Footer'
import { Locale } from '@/lib/i18n'
import { getProductNewsPosts } from '@/lib/wordpress'
import Image from 'next/image'
import Link from 'next/link'

export default async function ReleaseNotePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const localeKey = locale as Locale

  // WordPressから「プロダクト改善・新機能」タグの記事を取得（最新30件）
  const articles = await getProductNewsPosts(30, localeKey)

  return (
    <>
      <BusinessHeader locale={localeKey} />
      <main className="pt-header lg:pt-header-desktop bg-gray-50 min-h-screen">
        {/* ヘッダーセクション */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              プロダクト改善・新機能
            </h1>
            <p className="text-lg text-white/90">
              WealthParkビジネスの最新機能とアップデート情報
            </p>
          </div>
        </section>

        {/* 記事一覧 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Link key={index} href={`/${locale}/blog/${article.slug}`} className="group">
                  <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    {/* 画像 */}
                    {article.image && (
                      <div className="overflow-hidden aspect-[16/9]">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={800}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                    )}

                    {/* コンテンツ */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* 日付とカテゴリー */}
                      <div className="flex items-center gap-3 mb-3">
                        <time className="text-sm text-gray-500 font-medium">
                          {article.date}
                        </time>
                        {article.category && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                              {article.category}
                            </span>
                          </>
                        )}
                      </div>

                      {/* タイトル */}
                      <h2 className="text-lg font-bold text-gray-900 leading-relaxed mb-4 flex-1 group-hover:text-blue-600 transition-colors line-clamp-3">
                        {article.title}
                      </h2>

                      {/* 続きを読むリンク */}
                      <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                        <span>続きを読む</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* 記事がない場合 */}
            {articles.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">記事が見つかりませんでした</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer locale={localeKey} />
    </>
  )
}
