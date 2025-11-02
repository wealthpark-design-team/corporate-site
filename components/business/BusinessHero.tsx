'use client'

import { Locale } from '@/lib/i18n'

interface BusinessHeroProps {
  locale: Locale
  t: any
}

export default function BusinessHero({ locale, t }: BusinessHeroProps) {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 px-6 overflow-hidden">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/w4rQJCNvpwc?autoplay=1&mute=1&loop=1&playlist=w4rQJCNvpwc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Background video"
          allow="autoplay; encrypted-media"
          style={{
            minWidth: '100vw',
            minHeight: '100vh',
          }}
        />
      </div>

      {/* Mesh Overlay - 低解像度を目立たなくする */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-purple-900/70"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15) 0px,
              transparent 1px,
              transparent 2px,
              rgba(0, 0, 0, 0.15) 3px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.15) 0px,
              transparent 1px,
              transparent 2px,
              rgba(0, 0, 0, 0.15) 3px
            )
          `,
        }}
      ></div>

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight">
            <span className="block text-white mb-2 md:mb-3 drop-shadow-lg">
              オーナーアプリで
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-2 md:mb-3 drop-shadow-lg">
              はじめよう
            </span>
            <span className="block text-white drop-shadow-lg">
              あたらしい不動産管理
            </span>
          </h1>

          <div className="space-y-2 mb-10">
            <p className="text-[21px] text-white font-bold drop-shadow-md">{t.subtitle1}</p>
            <p className="text-[21px] text-white font-bold drop-shadow-md">{t.subtitle2}</p>
            <p className="text-[21px] text-white font-bold drop-shadow-md">{t.subtitle3}</p>
          </div>

          <div className="mb-6">
            <img
              src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/wpb/wpb_no1_recognitions.png"
              alt="不動産オーナーと管理会社をつなぐ"
              className="w-64 h-auto drop-shadow-xl"
            />
          </div>

          <p className="text-sm text-white/90 mb-10 drop-shadow-md">{t.annotation}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="https://wealth-park.com/ja//business/download/form-001/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-medium rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span className="text-center">
                {t.cta1}<br />
                {t.cta2}
              </span>
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${t.phone.replace(/-/g, '')}`}
              className="inline-flex items-center text-2xl font-bold text-white hover:text-cyan-300 transition-colors drop-shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {t.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
