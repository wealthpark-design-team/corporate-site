'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Post } from '@/lib/wordpress'

type NewsTranslations = {
  title: string
  readMore: string
  allArticles: string
}

type NewsProps = {
  locale: string
  t: NewsTranslations
  news: Post[]
}

export default function News({ locale, t, news }: NewsProps) {

  return (
    <section id="news" className="py-20 md:py-28 lg:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 flex items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t.title}
          </h2>
          <div className="w-24 h-0.5 bg-gray-900"></div>
        </motion.div>

        {/* PC: 画像（左）+ テキスト（右）の横並びリスト */}
        {/* モバイル: 最初の記事は大きく、2番目以降はコンパクト */}
        <div className="space-y-8 md:space-y-0 md:divide-y md:divide-gray-200">
          {news.map((item, index) => (
            <motion.div
              key={index}
              className="md:py-8 first:md:pt-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={`/${locale}/news/${item.slug}`}
                className="group block"
              >
              {/* モバイル: 最初の記事のみ縦並び、2番目以降は横並び */}
              <div className={index === 0 ? "flex flex-col md:flex-row md:gap-8 md:w-4/5 md:mx-auto" : "flex flex-row md:gap-8 gap-4 md:w-4/5 md:mx-auto"}>
                {/* 画像 */}
                <div className={index === 0
                  ? "overflow-hidden mb-4 md:mb-0 md:w-56 md:flex-shrink-0"
                  : "overflow-hidden mb-0 w-32 md:w-56 flex-shrink-0"
                }>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain rounded-lg border border-gray-200"
                    unoptimized
                  />
                </div>

                {/* テキスト部分 */}
                <div className="flex flex-col flex-1 justify-center">
                  {/* 日付 + カテゴリ */}
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-sm text-gray-900 font-normal">
                      {item.date}
                    </time>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700">
                      #{item.category}
                    </span>
                  </div>

                  {/* タイトル */}
                  <h3 className="text-base md:text-lg font-bold text-gray-900 leading-relaxed group-hover:opacity-60 transition-opacity">
                    {item.title}
                  </h3>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/news`}
            className="inline-block text-sm text-gray-700 hover:text-[#1a1a1a] transition-colors font-medium"
          >
            {t.allArticles}
          </Link>
        </div>
      </div>
    </section>
  )
}
