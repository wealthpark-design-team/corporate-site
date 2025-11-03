'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from '../LanguageSwitcher'

export default function BusinessHeader({ locale = 'ja' }: { locale?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-md z-50 h-header lg:h-header-desktop">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-full">
          <Link href={`/${locale}/business`} className="flex items-center">
            <Image
              src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/business_logo_black.svg"
              alt="WealthPark Business"
              width={187}
              height={35}
              priority
              className="h-8 w-auto"
              unoptimized
            />
          </Link>

          <ul className="flex items-center gap-6">
            {/* 機能/価格 */}
            <li className="relative group">
              <button className="text-gray-900 text-sm font-medium py-2 hover:text-blue-600 transition-colors">
                機能/価格
              </button>
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                <li><Link href="https://wealth-park.com/ja/business/features/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">機能一覧 / 価格表(TOP)</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/features/cashflow/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">収支明細・報告書の電子化</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/features/chat/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">チャットコミュニケーション</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/features/workflow/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">アクティビティ機能</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/features/document-storage/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">オーナーアプリでの情報共有</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/features/multiple-language/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">多言語対応</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/features/security/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">情報セキュリティ対策</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/features/wpb-pocket/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">不動産管理会社様向けモバイルアプリ<br />WPB ポケット</Link></li>
              </ul>
            </li>

            {/* 導入支援 */}
            <li className="relative group">
              <button className="text-gray-900 text-sm font-medium py-2 hover:text-blue-600 transition-colors">
                導入支援
              </button>
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                <li><Link href="https://wealth-park.com/ja/business/customer-success/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">導入支援・サポートについて</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/kaizen/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">顧客課題解決主義</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/lp/promise/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">管理会社様との約束</Link></li>
              </ul>
            </li>

            {/* 導入事例 */}
            <li className="relative group">
              <button className="text-gray-900 text-sm font-medium py-2 hover:text-blue-600 transition-colors">
                導入事例
              </button>
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                <li><Link href="https://wealth-park.com/ja/business/case-study/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">導入事例をみる</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/pm-list/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">導入企業をさがす</Link></li>
              </ul>
            </li>

            {/* ヘルプ */}
            <li className="relative group">
              <button className="text-gray-900 text-sm font-medium py-2 hover:text-blue-600 transition-colors">
                ヘルプ
              </button>
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                <li><Link href="https://wealth-park.com/ja/business/faq/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">導入に関するよくある質問</Link></li>
                <li><Link href="https://wealth-park.com/ja/help_owner" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">不動産オーナー向けサポートセンター</Link></li>
                <li><Link href="https://wealth-park.com/ja/business/release-note" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">プロダクト改善・新機能</Link></li>
              </ul>
            </li>

            {/* 資料 */}
            <li>
              <Link href="https://wealth-park.com/ja/business/download/" className="text-gray-900 text-sm font-medium hover:text-blue-600 transition-colors">
                資料
              </Link>
            </li>

            {/* セミナー */}
            <li>
              <Link href="https://wealth-park.com/ja/business/seminar/" className="text-gray-900 text-sm font-medium hover:text-blue-600 transition-colors">
                セミナー
              </Link>
            </li>

            {/* 企業情報 */}
            <li className="relative group">
              <button className="text-gray-900 text-sm font-medium py-2 hover:text-blue-600 transition-colors">
                企業情報
              </button>
              <ul className="absolute right-0 top-full mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                <li><Link href="https://wealth-park.com/ja/" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">企業サイトTOP</Link></li>
                <li><Link href="https://wealth-park.com/ja/corporate/company/" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">会社概要</Link></li>
                <li><Link href="https://wealth-park.com/ja/news/" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">ニュース</Link></li>
                <li><Link href="https://wealth-park.com/ja/wealthpark-blog/" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">記事</Link></li>
                <li><Link href="https://wealth-park.com/ja/careers/" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">採用</Link></li>
                <li><Link href="https://wealth-park.com/ja/corporate/contact/" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">お問い合わせ</Link></li>
              </ul>
            </li>

            {/* オーナーアプリ */}
            <li>
              <Link href="https://owner-app.wealth-park.com/" target="_blank" className="text-gray-900 text-sm font-medium hover:text-blue-600 transition-colors">
                オーナーアプリ
              </Link>
            </li>

            {/* お問い合わせボタン */}
            <li>
              <Link href="https://wealth-park.com/ja/business/contact/" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-sm">
                お問い合わせ
              </Link>
            </li>

            <li>
              <LanguageSwitcher currentLocale={locale} />
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-header">
          <Link href={`/${locale}/business`} className="flex items-center">
            <Image
              src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/business_logo_black.svg"
              alt="WealthPark Business"
              width={165}
              height={31}
              priority
              className="h-7 w-auto"
              unoptimized
            />
          </Link>

          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 max-h-[80vh] overflow-y-auto border-t border-gray-100 mt-2 pt-4">
            <ul className="space-y-1">
              <li><Link href={`/${locale}/business`} className="block py-3 text-gray-900 text-sm hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>TOP</Link></li>

              {/* 機能/価格 */}
              <li>
                <button onClick={() => setOpenDropdown(openDropdown === 'features' ? null : 'features')} className="w-full text-left py-3 text-gray-900 text-sm hover:text-blue-600">
                  機能/価格
                </button>
                {openDropdown === 'features' && (
                  <ul className="pl-4 pb-2">
                    <li><Link href="https://wealth-park.com/ja/business/features/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>機能一覧 / 価格表(TOP)</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/features/cashflow/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>収支明細・報告書の電子化</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/features/chat/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>チャットコミュニケーション</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/features/workflow/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>アクティビティ機能</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/features/document-storage/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>オーナーアプリでの情報共有</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/features/multiple-language/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>多言語対応</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/features/security/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>情報セキュリティ対策</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/features/wpb-pocket/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>WPB ポケット</Link></li>
                  </ul>
                )}
              </li>

              {/* 導入支援 */}
              <li>
                <button onClick={() => setOpenDropdown(openDropdown === 'support' ? null : 'support')} className="w-full text-left py-3 text-gray-900 text-sm hover:text-blue-600">
                  導入支援
                </button>
                {openDropdown === 'support' && (
                  <ul className="pl-4 pb-2">
                    <li><Link href="https://wealth-park.com/ja/business/customer-success/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>導入支援・サポートについて</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/kaizen/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>顧客課題解決主義</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/lp/promise/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>管理会社様との約束</Link></li>
                  </ul>
                )}
              </li>

              {/* 導入事例 */}
              <li>
                <button onClick={() => setOpenDropdown(openDropdown === 'cases' ? null : 'cases')} className="w-full text-left py-3 text-gray-900 text-sm hover:text-blue-600">
                  導入事例
                </button>
                {openDropdown === 'cases' && (
                  <ul className="pl-4 pb-2">
                    <li><Link href="https://wealth-park.com/ja/business/case-study/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>導入事例をみる</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/pm-list/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>導入企業をさがす</Link></li>
                  </ul>
                )}
              </li>

              {/* ヘルプ */}
              <li>
                <button onClick={() => setOpenDropdown(openDropdown === 'help' ? null : 'help')} className="w-full text-left py-3 text-gray-900 text-sm hover:text-blue-600">
                  ヘルプ
                </button>
                {openDropdown === 'help' && (
                  <ul className="pl-4 pb-2">
                    <li><Link href="https://wealth-park.com/ja/business/faq/" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>導入に関するよくある質問</Link></li>
                    <li><Link href="https://wealth-park.com/ja/help_owner" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>不動産オーナー向けサポートセンター</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/release-note" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>プロダクト改善・新機能</Link></li>
                  </ul>
                )}
              </li>

              <li><Link href="https://wealth-park.com/ja/business/download/" className="block py-3 text-gray-900 text-sm hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>資料</Link></li>
              <li><Link href="https://wealth-park.com/ja/business/seminar/" className="block py-3 text-gray-900 text-sm hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>セミナー</Link></li>

              {/* 企業情報 */}
              <li>
                <button onClick={() => setOpenDropdown(openDropdown === 'corporate' ? null : 'corporate')} className="w-full text-left py-3 text-gray-900 text-sm hover:text-blue-600">
                  企業情報
                </button>
                {openDropdown === 'corporate' && (
                  <ul className="pl-4 pb-2">
                    <li><Link href="https://wealth-park.com/ja/" target="_blank" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>企業サイトTOP</Link></li>
                    <li><Link href="https://wealth-park.com/ja/corporate/company/" target="_blank" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>会社概要</Link></li>
                    <li><Link href="https://wealth-park.com/ja/news/" target="_blank" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>ニュース</Link></li>
                    <li><Link href="https://wealth-park.com/ja/wealthpark-blog/" target="_blank" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>記事</Link></li>
                    <li><Link href="https://wealth-park.com/ja/careers/" target="_blank" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>採用</Link></li>
                    <li><Link href="https://wealth-park.com/ja/corporate/contact/" target="_blank" className="block py-2 text-gray-600 text-sm" onClick={() => setIsMenuOpen(false)}>お問い合わせ</Link></li>
                  </ul>
                )}
              </li>

              <li><Link href="https://owner-app.wealth-park.com/" target="_blank" className="block py-3 text-gray-900 text-sm hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>オーナーアプリ</Link></li>

              <li className="pt-4">
                <Link href="https://wealth-park.com/ja/business/contact/" className="block py-3 px-4 bg-gray-900 text-white text-center text-sm font-medium rounded-full hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
