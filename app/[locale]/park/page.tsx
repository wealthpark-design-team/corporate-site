import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getTranslations, Locale } from '@/lib/i18n'
import { getParkPosts } from '@/lib/wordpress'
import Link from 'next/link'
import Image from 'next/image'

export default async function ParkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const localeKey = locale as Locale
  const t = getTranslations(localeKey)

  // WordPress APIからPark記事を取得
  const parkPosts = await getParkPosts(20, localeKey)

  return (
    <>
      <Header locale={localeKey} />
      <main className="pt-header lg:pt-header-desktop">
        {/* ヒーローセクション */}
        <section className="relative bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100">
          <div className="max-w-7xl mx-auto">
            {/* PC版画像 */}
            <div className="hidden md:block">
              <Image
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/corporate/park/park-hero-pc-min.png"
                alt="WealthParkの「温度」を伝える"
                width={1920}
                height={600}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
            {/* モバイル版画像 */}
            <div className="block md:hidden">
              <Image
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/corporate/park/park-hero-sp-min.png"
                alt="WealthParkの「温度」を伝える"
                width={750}
                height={800}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Park記事一覧 */}
        <section className="py-20 md:py-28 lg:py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {parkPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {parkPosts.map((item, index) => (
                  <Link key={index} href={`/${locale}/park/${item.slug}`} className="group block">
                    <article className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      {/* 画像 */}
                      <div className="overflow-hidden aspect-[4/3] bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>

                      {/* コンテンツ */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* カテゴリーと日付 */}
                        <div className="flex items-center gap-3 mb-4">
                          {item.category && (
                            <span className="text-xs font-medium px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {item.category}
                            </span>
                          )}
                          <time className="text-xs text-gray-500 font-light">{item.date}</time>
                        </div>

                        {/* タイトル */}
                        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-auto group-hover:text-emerald-600 transition-colors line-clamp-3">
                          {item.title}
                        </h3>

                        {/* 続きを読むリンク */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <span className="text-sm font-medium text-emerald-600 group-hover:text-emerald-700 inline-flex items-center gap-2">
                            続きを読む
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">記事を読み込んでいます...</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer locale={localeKey} />
    </>
  )
}
