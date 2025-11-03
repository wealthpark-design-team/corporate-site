'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

type BannersTranslations = {
  proptech: string
  fintech: string
  company: string
  business: { title: string; description: string }
  assetManagement: { title: string; description: string }
  investment: { title: string; description: string }
  careers: { title: string; description: string }
  lab: { title: string; description: string }
}

export default function Banners({ locale, t }: { locale: string; t: BannersTranslations }) {
  const businessCards = [
    {
      category: t.proptech,
      items: [
        {
          title: t.business.title,
          description: t.business.description,
          href: `/${locale}/business`,
          image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/banner_wpb_ja_001.jpg'
        },
        {
          title: t.assetManagement.title,
          description: t.assetManagement.description,
          href: 'https://wealth-park.com/asset-management/',
          image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/banner_wpam_ja_001.jpg'
        }
      ]
    },
    {
      category: t.fintech,
      items: [
        {
          title: t.investment.title,
          description: t.investment.description,
          href: 'https://wealthpark-alt.com/',
          image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/banner_wealthpark-investment_002.jpg',
          external: true
        }
      ]
    },
    {
      category: t.company,
      items: [
        {
          title: t.careers.title,
          description: t.careers.description,
          href: `/${locale}/careers`,
          image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/banner_careers_003.jpg'
        },
        {
          title: t.lab.title,
          description: t.lab.description,
          href: 'https://wealthpark-lab.com/',
          image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/banner_wp-lab_002.jpg',
          external: true
        }
      ]
    }
  ]

  return (
    <section className="relative py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {businessCards.map((section, idx) => (
            <div key={idx} className="space-y-8">
              {/* カテゴリタイトル */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.category}</h2>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
              </motion.div>

              {/* 事業カード */}
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: itemIdx * 0.1, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="group block"
                    >
                      <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                      {/* 左側：画像 */}
                      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>

                      {/* 中央：タイトルと説明 */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          {item.description}
                        </p>
                      </div>

                      {/* 右側：矢印アイコン */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-white transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
