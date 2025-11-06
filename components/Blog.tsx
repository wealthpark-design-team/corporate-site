'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Post } from '@/lib/wordpress'

type BlogTranslations = {
  title: string
  readMore: string
  allArticles: string
}

type BlogProps = {
  locale: string
  t: BlogTranslations
  blog: Post[]
}

export default function Blog({ locale, t, blog }: BlogProps) {

  return (
    <section className="py-20 md:py-28 lg:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 flex items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t.title}
          </h2>
          <div className="w-24 h-0.5 bg-gray-900"></div>
        </motion.div>

        {/* カード型グリッドレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blog.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link href={`/${locale}/blog/${item.slug}`} className="group block">
              {index === 0 ? (
                // 最新記事：モバイルもPCもカードデザイン
                <div className="bg-white overflow-visible shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col relative">
                  {/* NEWバッジ - 左上に半分はみ出し */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold text-xs">NEW</span>
                  </div>
                  <div className="overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={375}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <time className="text-xs text-gray-500">{item.date}</time>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 leading-relaxed mb-4 flex-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
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
              ) : (
                // 2番目以降：モバイルはNewsと同じコンパクト、PCはカード
                <>
                  {/* モバイル表示：Newsと同じコンパクト */}
                  <div className="flex md:hidden gap-4">
                    <div className="overflow-hidden w-32 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain rounded-lg border border-gray-200"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <time className="text-sm text-gray-900 font-normal mb-2 block">
                        {item.date}
                      </time>
                      <h3 className="text-base font-bold text-gray-900 leading-relaxed group-hover:opacity-60 transition-opacity">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  {/* PC表示：カードデザイン */}
                  <div className="hidden md:block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className="flex flex-col h-full">
                      <div className="overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={375}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <time className="text-xs text-gray-500">{item.date}</time>
                          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 leading-relaxed mb-4 flex-1 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
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
                  </div>
                </>
              )}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/blog`}
            className="inline-block text-sm text-gray-700 hover:text-[#1a1a1a] transition-colors font-medium"
          >
            {t.allArticles}
          </Link>
        </div>
      </div>
    </section>
  )
}
