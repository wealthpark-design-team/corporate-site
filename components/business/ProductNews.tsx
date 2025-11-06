import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/lib/wordpress'
import { Locale } from '@/lib/i18n'

interface ProductNewsProps {
  t: any
  articles: Post[]
  locale?: Locale
}

export default function ProductNews({ t, articles, locale = 'ja' }: ProductNewsProps) {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, index) => (
            <Link key={index} href={`/${locale}/blog/${item.slug}`} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* 画像 */}
                {item.image && (
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
                )}

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
            href={`/${locale}/business/release-note`}
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium group"
          >
            <span>すべての記事</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
