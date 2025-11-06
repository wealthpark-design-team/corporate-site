'use client'

import { Locale } from '@/lib/i18n'
import { useEffect, useRef } from 'react'

interface BusinessHeroProps {
  locale: Locale
  t: any
}

export default function BusinessHero({ locale, t }: BusinessHeroProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  // Vanta.js WAVES エフェクト
  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      const loadVanta = async () => {
        try {
          // THREE.jsを先に読み込む
          // @ts-ignore
          const THREE = await import('three')
          // @ts-ignore
          window.THREE = THREE

          // Vanta WAVESを読み込む
          // @ts-ignore
          const VANTA = await import('vanta/dist/vanta.waves.min.js')

          if (vantaRef.current) {
            vantaEffect.current = (VANTA as any).default({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0xa107f,
              shininess: 0.00,
              waveHeight: 40.00,
              waveSpeed: 0.45,
              zoom: 1.44
            })
          }
        } catch (error) {
          console.error('Failed to load Vanta:', error)
        }
      }

      loadVanta()
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [])

  return (
    <>
      {/* Vanta.js WAVES 背景 - 画面全体に固定表示 */}
      <div ref={vantaRef} className="fixed top-0 left-0 w-full h-screen -z-10" />

      {/* Heroコンテンツ */}
      <section className="relative h-[calc(90vh-4rem)] lg:h-[calc(88vh-5.313rem)] px-6">
      {/* スクロールインジケーター - セクション内の右下 */}
      <div className="absolute bottom-8 right-6 md:right-12 z-20 flex flex-col items-center gap-4">
        <div className="writing-mode-vertical text-xs tracking-[0.3em] font-medium text-white rotate-180">
          SCROLL
        </div>
        <div className="relative w-[1px] h-24 bg-white/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-12 bg-white animate-scroll-down"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex items-center h-full">
        <div className="max-w-4xl w-full">
          <h1 className="text-[30px] md:text-[50px] font-bold mb-10 leading-tight text-center lg:text-left">
            <span className="block text-white drop-shadow-lg">
              オーナーアプリで
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 text-transparent bg-clip-text drop-shadow-lg">
              はじめよう
            </span>
            <span className="block text-white drop-shadow-lg">
              あたらしい不動産管理
            </span>
          </h1>

          <div className="space-y-0 mb-10 text-center lg:text-left">
            <p className="text-[16px] text-white font-bold drop-shadow-md">{t.subtitle1}</p>
            <p className="text-[16px] text-white font-bold drop-shadow-md">{t.subtitle2}</p>
            <p className="text-[16px] text-white font-bold drop-shadow-md">{t.subtitle3}</p>
          </div>

          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src="/images/other/wpb_no1_recognitions.png"
              alt="不動産オーナーと管理会社をつなぐ"
              className="w-96 h-auto drop-shadow-xl"
            />
          </div>

          <p className="text-[10px] text-white/90 mb-10 drop-shadow-md text-center lg:text-left">{t.annotation}</p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <a
              href="https://wealth-park.com/ja//business/download/form-001/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-center whitespace-nowrap">
                {t.cta1} {t.cta2}
              </span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={`tel:${t.phone.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white text-base font-medium rounded-md hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              {t.phone}
            </a>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}
