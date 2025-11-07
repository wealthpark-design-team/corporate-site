'use client'

import { Locale } from '@/lib/i18n'
import { useEffect, useRef } from 'react'
import Breadcrumb from './Breadcrumb'

interface BusinessHeroProps {
  locale: Locale
  t: any
  breadcrumbLocale: Locale
}

export default function BusinessHero({ locale, t, breadcrumbLocale }: BusinessHeroProps) {
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
      {/* Heroコンテンツ */}
      <section className="relative h-[calc(100vh-80px)]">
      {/* Vanta.js WAVES 背景 - Heroセクション内のみ表示 */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />
      {/* Breadcrumb - 上から80px（ヘッダー分）の位置に配置 */}
      <div className="absolute top-0 left-0 right-0 pt-header-desktop z-30">
        <Breadcrumb locale={breadcrumbLocale} variant="light" />
      </div>

      {/* スクロールインジケーター - セクション内の右下 */}
      <div className="absolute bottom-8 right-6 md:right-12 z-20 flex flex-col items-center gap-4">
        <div className="writing-mode-vertical text-xs tracking-[0.3em] font-medium text-white rotate-180">
          SCROLL
        </div>
        <div className="relative w-[1px] h-24 bg-white/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-12 bg-white animate-scroll-down"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex items-center h-full px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full pt-[110px] lg:pt-0 lg:translate-y-[55px]">
          {/* 左側：テキストコンテンツ */}
          <div className="w-full relative z-20 lg:pl-12">
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

            <p className="text-[18px] text-white font-normal drop-shadow-md mb-2 text-center lg:text-left">
              {t.subtitle1}<br />
              {t.subtitle2}<br />
              {t.subtitle3}
            </p>

            <p className="text-[10px] text-white/90 mb-12 drop-shadow-md text-center lg:text-left">{t.annotation}</p>

            <div className="mb-10 flex justify-center lg:hidden">
              <img
                src="/images/other/wpb_no1_recognitions.png"
                alt="不動産オーナーと管理会社をつなぐ"
                className="w-96 h-auto drop-shadow-xl"
              />
            </div>

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

          {/* 右側：キービジュアル（PCのみ表示） */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2">
            <img
              src="/images/other/business-hero-visual.png"
              alt="WealthParkアプリ画面"
              className="w-full max-w-2xl h-auto drop-shadow-2xl scale-[1.5] translate-x-[40%]"
            />
          </div>
        </div>
      </div>
      </section>
    </>
  )
}
