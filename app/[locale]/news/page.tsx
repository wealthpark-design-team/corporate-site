import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Locale } from '@/lib/i18n'
import { getNewsPosts } from '@/lib/wordpress'
import Image from 'next/image'
import Link from 'next/link'

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const localeKey = locale as Locale

  // WordPressから最新30件のニュース記事を取得
  const articles = await getNewsPosts(30, localeKey)

  return (
    <>
      <Header locale={localeKey} />
      <main className="pt-header lg:pt-header-desktop bg-gray-50 min-h-screen">
        {/* ヘッダーセクション */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ニュース
            </h1>
            <p className="text-lg text-white/90">
              WealthParkの最新ニュースをお届けします
            </p>
          </div>
        </section>

        {/* 記事一覧 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-8 md:space-y-0 md:divide-y md:divide-gray-200">
              {articles.map((article, index) => (
                <div key={index} className="md:py-8 first:md:pt-0">
                  <Link
                    href={`/${locale}/news/${article.slug}`}
                    className="group block"
                  >
                    <div className="flex flex-col md:flex-row md:gap-8 md:w-4/5 md:mx-auto hover:bg-gray-50 md:p-4 rounded-lg transition-colors">
                      {/* 画像 */}
                      <div className="overflow-hidden mb-4 md:mb-0 md:w-64 md:flex-shrink-0">
                        {article.image && (
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover rounded-lg border border-gray-200"
                            unoptimized
                            loading="lazy"
                          />
                        )}
                      </div>

                      {/* テキスト部分 */}
                      <div className="flex flex-col flex-1 justify-center">
                        {/* 日付 + カテゴリ */}
                        <div className="flex items-center gap-3 mb-3">
                          <time className="text-sm text-gray-900 font-normal">
                            {article.date}
                          </time>
                          {article.category && (
                            <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                              #{article.category}
                            </span>
                          )}
                        </div>

                        {/* タイトル */}
                        <h2 className="text-base md:text-lg font-bold text-gray-900 leading-relaxed group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
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
