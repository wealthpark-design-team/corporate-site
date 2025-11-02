'use client'

import Link from 'next/link'
import Image from 'next/image'

interface BreadcrumbProps {
  locale: string
  currentPage?: string
}

export default function Breadcrumb({ locale, currentPage }: BreadcrumbProps) {
  return (
    <section className="bg-white border-b border-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <ul className="flex items-center gap-2 text-sm">
          {/* 企業サイト */}
          <li className="flex items-center gap-2">
            <Image
              src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/corp-icon.svg"
              alt="icon"
              width={16}
              height={16}
              className="w-4 h-4"
              unoptimized
            />
            <Link
              href={`/${locale}/`}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              WealthPark企業サイト
            </Link>
          </li>

          {/* パイプ区切り */}
          <li className="text-gray-400">|</li>

          {/* ビジネスサイト */}
          <li className="flex items-center gap-2">
            <Image
              src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/business-icon.svg"
              alt="icon"
              width={16}
              height={16}
              className="w-4 h-4"
              unoptimized
            />
            {currentPage ? (
              <Link
                href={`/${locale}/business`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                WealthParkビジネス
              </Link>
            ) : (
              <span className="text-gray-600">WealthParkビジネス</span>
            )}
          </li>

          {/* 現在のページ（下層ページの場合） */}
          {currentPage && (
            <>
              <li className="text-gray-400">›</li>
              <li className="text-gray-900 font-medium">{currentPage}</li>
            </>
          )}
        </ul>
      </div>
    </section>
  )
}
