'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

type NewsTranslations = {
  title: string
  readMore: string
  allArticles: string
}

export default function News({ locale, t }: { locale: string; t: NewsTranslations }) {
  // 後でWordPress APIから取得
  const featuredNews = [
    {
      date: '2024.09.27',
      category: 'News',
      categoryLink: 'https://wealth-park.com/ja/news_category/news/',
      title: '株式会社レオパレス21、『WealthParkビジネス』導入開始のお知らせ',
      description: 'WealthPark株式会社（本社：東京都渋谷区、代表取締役社長：川田 隆太）は、株式会社レオパレス21（本社：東京都中野区本町2丁目54番11号、代表取締役社長：宮尾 文也、以下「レオパレス21」）…',
      image: 'https://wealth-park.com/wp-content/uploads/2024/09/リリースサムネ_レオパレス21.jpg',
      link: 'https://wealth-park.com/ja/news/20240927001_leopalace21/',
    },
    {
      date: '2024.05.14',
      category: 'Corporate',
      categoryLink: 'https://wealth-park.com/ja/news_category/corporate/',
      title: 'オルタナティブ投資プラットフォームを目指すWealthPark、総額25.1億円の資金調達を実施',
      description: 'WealthPark株式会社（本社：東京都渋谷区、代表取締役社長：川田 隆太　以下「WealthPark」）は、シリーズC-2ラウンドおよびデットファイナンスを通して、総額25.1億円の資金調達を実施…',
      image: 'https://wealth-park.com/wp-content/uploads/2023/11/WealthPark-NEWS-1-2.png',
      link: 'https://wealth-park.com/ja/news/20240510001-funding/',
    },
  ]

  const newsItems = [
    {
      date: '2025.09.25',
      category: 'Report',
      categoryLink: 'https://wealth-park.com/ja/news_category/report/',
      title: '【不動産業界のDX推進状況調査 2025】不動産テック企業7社・不動産メディア共同企画　～98.6%がDXを推進すべきと回答、75%以上の企業がDXによる効果を実感～',
      image: 'https://wealth-park.com/wp-content/uploads/2025/09/荳榊虚逕｣DX繧｢繝ｳ繧ｱ繝ｼ繝・025_逕ｻ蜒・荳榊虚逕｣DX隱ｿ譟ｻ2025_KV-scaled.png',
      link: 'https://wealth-park.com/ja/news/20250926_dx-survey/',
    },
    {
      date: '2025.08.29',
      category: 'Corporate',
      categoryLink: 'https://wealth-park.com/ja/news_category/corporate/',
      title: '「WealthParkビジネス」と「いえらぶCLOUD」による データ連携プログラムの提供を開始！',
      image: 'https://wealth-park.com/wp-content/uploads/2025/08/thumb-4.png',
      link: 'https://wealth-park.com/ja/news/20250829_ielove-could/',
    },
    {
      date: '2025.07.30',
      category: 'Corporate',
      categoryLink: 'https://wealth-park.com/ja/news_category/corporate/',
      title: 'オーナーアプリ「WealthParkビジネス」、ITツール導入時にかかる費用の2/3（最大350万円/最大2年分）が補助される「IT導入補助金2025（インボイス枠）」認定のお知らせ',
      image: 'https://wealth-park.com/wp-content/uploads/2025/07/it-donyu_2025.jpg',
      link: 'https://wealth-park.com/ja/news/20250730_ithojo/',
    },
    {
      date: '2025.07.11',
      category: 'Event',
      categoryLink: 'https://wealth-park.com/ja/news_category/event/',
      title: '【WealthPark研究所】「障がい者グループホーム投資 オンラインセミナー」に登壇',
      image: 'https://wealth-park.com/wp-content/uploads/2025/07/banner_news-1.jpg',
      link: 'https://wealth-park.com/ja/news/20250711001-wpai-online-seminar/',
    },
    {
      date: '2025.07.08',
      category: 'News',
      categoryLink: 'https://wealth-park.com/ja/news_category/news/',
      title: '執行役員の石村裕樹が「日管協 令和7年度会員総会」にて功労賞を受賞しました',
      image: 'https://wealth-park.com/wp-content/uploads/2025/07/thumb-2.png',
      link: 'https://wealth-park.com/ja/news/20250708_ishimura/',
    },
    {
      date: '2025.05.31',
      category: 'Media',
      categoryLink: 'https://wealth-park.com/ja/news_category/media/',
      title: '【WealthPark研究所】『東洋経済オンライン』に投資家ビザに関する連載記事を寄稿',
      image: 'https://wealth-park.com/wp-content/uploads/2025/06/図1.jpeg',
      link: 'https://wealth-park.com/ja/news/20250531001-toyokeizai-nz/',
    },
  ]

  // 全記事を統合（最新5件のみ表示）
  const allNews = [...featuredNews, ...newsItems].slice(0, 5)

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
          {allNews.map((item, index) => (
            <motion.div
              key={index}
              className="md:py-8 first:md:pt-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={item.link}
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
            href="https://wealth-park.com/ja/news/"
            className="inline-block text-sm text-gray-700 hover:text-[#1a1a1a] transition-colors font-medium"
          >
            {t.allArticles}
          </Link>
        </div>
      </div>
    </section>
  )
}
