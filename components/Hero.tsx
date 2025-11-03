'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

type HeroTranslations = {
  title1: string
  title2: string
  title3: string
  description1: string
  description2: string
  cta: string
}

export default function Hero({ locale, t }: { locale: string; t: HeroTranslations }) {
  const [displayedText1, setDisplayedText1] = useState('')
  const [displayedText2, setDisplayedText2] = useState('')
  const [displayedText3, setDisplayedText3] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // カーソル点滅
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const texts = [t.title1, t.title2, t.title3]
    const setters = [setDisplayedText1, setDisplayedText2, setDisplayedText3]

    if (currentLine >= texts.length) return

    const currentText = texts[currentLine]
    const currentSetter = setters[currentLine]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        currentSetter(currentText.substring(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        // 次の行へ（少し待ってから）
        setTimeout(() => {
          setCurrentLine(prev => prev + 1)
        }, 300)
      }
    }, 50) // 50ms = 結構早め

    return () => clearInterval(typeInterval)
  }, [currentLine, t.title1, t.title2, t.title3])

  return (
    <section className="relative py-24 md:py-32 lg:py-40 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-4">
          <div className="writing-mode-vertical text-xs tracking-[0.3em] font-medium text-gray-900 rotate-180">
            SCROLL
          </div>
          <div className="relative w-[1px] h-24 bg-gray-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 animate-scroll-down"></div>
          </div>
        </div>

        <div className="max-w-4xl">
          <div className="relative mb-10">
            {/* 透明プレースホルダー - スペース確保用 */}
            <h1 className="text-[30px] md:text-6xl lg:text-7xl font-extrabold md:font-bold leading-[1.4] md:leading-normal opacity-0 pointer-events-none" aria-hidden="true">
              <span className="block text-gray-900 md:mb-[20px]">
                {t.title1}
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent md:mb-[20px]">
                {t.title2}
              </span>
              <span className="block text-gray-900">
                {t.title3}
              </span>
            </h1>

            {/* タイプライター効果 - 実際に表示される */}
            <h1 className="absolute top-0 left-0 text-[30px] md:text-6xl lg:text-7xl font-extrabold md:font-bold leading-[1.4] md:leading-normal">
              <span className="block text-gray-900 md:mb-[20px]">
                {displayedText1}
                {currentLine === 0 && showCursor && <span className="animate-pulse">_</span>}
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent md:mb-[20px]">
                {displayedText2}
                {currentLine === 1 && showCursor && <span className="text-blue-600 animate-pulse">_</span>}
              </span>
              <span className="block text-gray-900">
                {displayedText3}
                {currentLine === 2 && showCursor && <span className="animate-pulse">_</span>}
              </span>
            </h1>
          </div>

          <p className="text-base md:text-xl text-gray-900 font-bold leading-[1.6] md:leading-relaxed mb-10 max-w-3xl">
            {t.description1}
            <br />
            {t.description2}
          </p>

          <Link
            href={`/${locale}/company/`}
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-gray-900 text-base md:text-lg font-bold tracking-wider">
              {t.cta}
            </span>
            <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-900 group-hover:bg-gray-900 transition-all duration-300">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-900 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
