'use client'

import Link from 'next/link'
import Image from 'next/image'

interface BreadcrumbProps {
  locale: string
  currentPage?: string
  variant?: 'light' | 'dark' // light: 白文字/透明背景, dark: 黒文字/白背景
}

export default function Breadcrumb({ locale, currentPage, variant = 'dark' }: BreadcrumbProps) {
  const isLight = variant === 'light'

  return (
    <section
      className={`${isLight ? 'bg-white/10' : 'bg-[#fafafa] border-t border-[#eeeeee] pt-20'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[30px] flex items-center">
        <ul className="flex items-center gap-2 text-xs lg:text-sm">
          {/* 企業サイト */}
          <li className="flex items-center gap-2">
            <Image
              src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/corp-icon.svg"
              alt="icon"
              width={16}
              height={16}
              className={`w-4 h-4 ${isLight ? 'invert brightness-0' : ''}`}
              unoptimized
            />
            <Link
              href={`/${locale}/`}
              className={`${isLight ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-blue-600'} transition-colors text-xs lg:text-sm`}
            >
              WealthPark企業サイト
            </Link>
          </li>

          {/* パイプ区切り */}
          <li className={`${isLight ? 'text-white/60' : 'text-gray-400'} text-xs lg:text-sm`}>|</li>

          {/* ビジネスサイト */}
          <li className="flex items-center gap-2">
            <Image
              src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/business-icon.svg"
              alt="icon"
              width={16}
              height={16}
              className={`w-4 h-4 ${isLight ? 'invert brightness-0' : ''}`}
              unoptimized
            />
            {currentPage ? (
              <Link
                href={`/${locale}/business`}
                className={`${isLight ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-blue-600'} transition-colors text-xs lg:text-sm`}
              >
                WealthParkビジネス
              </Link>
            ) : (
              <span className={`${isLight ? 'text-white' : 'text-gray-600'} text-xs lg:text-sm`}>WealthParkビジネス</span>
            )}
          </li>

          {/* 現在のページ（下層ページの場合） */}
          {currentPage && (
            <>
              <li className={`${isLight ? 'text-white/60' : 'text-gray-400'} text-xs lg:text-sm`}>›</li>
              <li className={`${isLight ? 'text-white' : 'text-gray-900'} font-medium text-xs lg:text-sm`}>{currentPage}</li>
            </>
          )}
        </ul>
      </div>
    </section>
  )
}
