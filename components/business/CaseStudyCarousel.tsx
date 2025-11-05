'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CaseStudyCarouselProps {
  t: any
}

export default function CaseStudyCarousel({ t }: CaseStudyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const caseStudies = [
    {
      url: 'https://wealth-park.com/ja/business/case-study/leopalace21/',
      image: 'https://wealth-park.com/wp-content/uploads/2025/04/case_thumb_leopalace.jpg',
      company: '株式会社レオパレス21',
      description: '26,000人のオーナー様との"接点の再構築"──レオパレス21が挑むアプリ活用の未来像'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/asahi-kasei/',
      image: 'https://wealth-park.com/wp-content/uploads/2024/04/case_banner_asahi-kasei-2.jpeg',
      company: '旭化成不動産レジデンス株式会社',
      description: '「正直、ここまで良い反応が得られるとは思っていなかった…」 3ヵ月間の試験導入を経て、旭化成不動産レジデンスがオーナーアプリの全面導入を決定。'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/mfrl/',
      image: 'https://wealth-park.com/wp-content/uploads/2023/03/case_banner_mistui-1.jpeg',
      company: '三井不動産レジデンシャルリース株式会社',
      description: '「オーナー様とアプリの親和性が高かった」三井不動産レジデンシャルリースが実感した"オーナーアプリの必要性"'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/kosugi/',
      image: 'https://wealth-park.com/wp-content/uploads/2021/06/case_banner_kosugi.jpg',
      company: '株式会社 コスギ不動産',
      description: '「変革をチャンスに」デジタルツールの活用によって業務効率化が実現し、オーナー様へのプロパティマネジメントの基盤づくりができた'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/trust/',
      image: 'https://wealth-park.com/wp-content/uploads/2020/06/case_banner_trust.png',
      company: '株式会社トラスト',
      description: '送金明細7割電子化を実現！WealthParkを使うことで圧倒的に業務が合理的に。 業務を効率化し、浮いた時間をオーナー様のために使っていきたい。'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/mjhn/',
      image: 'https://wealth-park.com/wp-content/uploads/2020/06/case_banner_mjhn.jpg',
      company: '三菱地所ハウスネット株式会社',
      description: '寄り添い、寄り添われる、そんな管理会社を目指したらWealthParkの導入は不可欠でした'
    }
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(caseStudies.length - 1, prev - 1))
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold && currentIndex < caseStudies.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* ヘッダー部分 */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">{t.title}</h2>

          {/* PC版: ナビゲーションボタン */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              aria-label="前へ"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === caseStudies.length - 1}
              className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors"
              aria-label="次へ"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* カルーセル本体 */}
        <div className="relative flex items-start md:-mx-6 md:px-6 overflow-x-hidden md:overflow-x-visible">
          {/* スライドコンテナ */}
          <div className="flex-1 overflow-hidden md:overflow-visible" ref={constraintsRef}>
            <motion.div
              className="flex gap-6"
              animate={{
                x: isMobile
                  ? `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)`
                  : `calc(-${currentIndex} * ((100% - 72px) / 3.5 + 24px))`
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
            >
              {caseStudies.map((caseStudy, index) => (
                <a
                  key={index}
                  href={caseStudy.url}
                  className="flex-shrink-0 w-full md:w-[calc((100%-72px)/3.5)] group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  style={{ userSelect: 'none' }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.company}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      draggable={false}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{caseStudy.company}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{caseStudy.description}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* モバイル版: スクロールインジケーター */}
          <div className="md:hidden ml-4 flex flex-col gap-2 pt-2">
            {caseStudies.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-8 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* すべて見るボタン */}
        <div className="text-center mt-12">
          <a
            href="https://wealth-park.com/ja/business/case-study/"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            {t.viewAll}
          </a>
        </div>
      </div>
    </section>
  )
}
