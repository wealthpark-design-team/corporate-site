'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Spin as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { getTranslations, Locale } from '@/lib/i18n'

export default function Header({ locale = 'ja' }: { locale?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const t = getTranslations(locale as Locale).nav

  return (
    <>
      {/* Header - 常に同じ位置に表示 */}
      <motion.header
        initial={false}
        animate={{
          height: isMenuOpen ? "100vh" : "4rem", // 64px（モバイル用、PC版はCSSで上書き）
          backgroundColor: isMenuOpen ? "#000000" : "rgba(255, 255, 255, 0.5)", // 透明度0.5に変更
        }}
        transition={{
          height: {
            duration: 0.6, // 0.6秒
            delay: isMenuOpen ? 0 : 0.3, // 開く時:すぐ、閉じる時:0.3秒待機（コンテンツが消えた後）
            ease: [0.83, 0, 0.17, 1] // ゆっくり→早い→ゆっくり
          },
          backgroundColor: {
            duration: 0.6, // 0.6秒
            delay: isMenuOpen ? 0 : 0.3, // 開く時:すぐ、閉じる時:0.3秒待機（高さと同時）
            ease: [0.4, 0, 1, 1] // ゆっくり→加速→止まる
          },
        }}
        className={`w-full fixed top-0 left-0 right-0 backdrop-blur-md z-50 ${
          isMenuOpen ? 'overflow-hidden' : 'lg:overflow-visible lg:!h-header-desktop'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between h-header-desktop">
            <Link href={`/${locale}/`} className="flex items-center">
              <Image
                src="/logo-wealthpark-black.svg"
                alt="WealthPark"
                width={187}
                height={35}
                priority
                className="h-8 w-auto scale-110"
              />
            </Link>

            <ul className="flex items-center gap-8">
              <li className="relative group">
                <button className="text-gray-900 text-sm font-medium py-2 hover:text-blue-600 transition-colors flex items-center gap-1">
                  {t.news}
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                  <li><Link href="https://wealth-park.com/ja/news/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.newsLink}</Link></li>
                  <li><Link href="https://wealth-park.com/ja/business/release-note" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.productUpdates}</Link></li>
                  <li><Link href="https://prtimes.jp/main/html/searchrlp/company_id/40576" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.pressRelease}</Link></li>
                </ul>
              </li>

              <li className="relative group">
                <button className="text-gray-900 text-sm font-medium py-2 hover:text-blue-600 transition-colors flex items-center gap-1">
                  {t.services}
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                  <li><Link href={`/${locale}/business`} className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.businessService}<br /><small className="text-gray-500">{t.businessServiceSub}</small></Link></li>
                  <li><Link href="https://owner-app.wealth-park.com" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.ownerService}<br /><small className="text-gray-500">{t.ownerServiceSub}</small></Link></li>
                  <li><Link href="https://wealthpark-ret.com/" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.overseasService}<br /><small className="text-gray-500">{t.overseasServiceSub}</small></Link></li>
                  <li><Link href="https://wealthpark-alt.com/" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.crowdfundingService}<br /><small className="text-gray-500">{t.crowdfundingServiceSub}</small></Link></li>
                </ul>
              </li>

              <li>
                <Link href={`/${locale}/corporate/company`} className="text-gray-900 text-sm font-medium hover:text-blue-600 transition-colors">
                  {t.company}
                </Link>
              </li>

              <li className="relative group">
                <button className="text-gray-900 text-sm font-medium py-2 hover:text-blue-600 transition-colors flex items-center gap-1">
                  {t.careers}
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                  <li><Link href={`/${locale}/careers`} className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.careersMid}</Link></li>
                  <li><Link href={`/${locale}/park`} className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.careersMedia}</Link></li>
                </ul>
              </li>

              <li className="relative group">
                <button className="text-gray-900 text-sm font-medium py-2 hover:text-blue-600 transition-colors flex items-center gap-1">
                  {t.articles}
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                  <li className="px-6 py-2 text-xs text-gray-500 font-bold">{t.ownedMedia}</li>
                  <li><Link href="https://wealth-park.com/ja/wealthpark-blog/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.blog}</Link></li>
                  <li><Link href="https://wealthpark-lab.com" target="_blank" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.lab}</Link></li>
                  <li><Link href={`/${locale}/park`} className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.parkMedia}</Link></li>
                  <li className="border-t border-gray-200 mt-2 pt-2"></li>
                  <li className="px-6 py-2 text-xs text-gray-500 font-bold">{t.featured}</li>
                  <li><Link href="https://wealth-park.com/ja/business/seminar" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.events}</Link></li>
                  <li><Link href="https://wealth-park.com/ja/tag/keypersons-voice/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.keypersons}</Link></li>
                  <li><Link href="https://wealth-park.com/ja/park_category/person/" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 text-sm">{t.interviews}</Link></li>
                </ul>
              </li>

              <li className="flex items-center gap-3">
                <Link href={`/${locale}/business`} className="px-5 py-2.5 border border-gray-300 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors">
                  {t.forPropertyManagers}
                </Link>
                <Link href="https://owner.wealth-park.com/" target="_blank" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-sm">
                  {t.pcVersion}
                </Link>
                <LanguageSwitcher currentLocale={locale} />
              </li>
            </ul>
          </div>

          {/* Mobile Navigation Header */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <Link href={`/${locale}/`} className="flex items-center relative">
              {/* ロゴのアニメーション：背景と同時に0.6秒で変化 */}
              <motion.div
                animate={{
                  filter: isMenuOpen ? "invert(1)" : "invert(0)"
                }}
                transition={{
                  duration: 0.6, // 0.6秒
                  delay: isMenuOpen ? 0 : 0.3, // 開く時:すぐ、閉じる時:0.3秒待機（背景と同時）
                  ease: [0.4, 0, 1, 1] // ゆっくり→加速→止まる
                }}
              >
                <Image
                  src="/logo-wealthpark-black.svg"
                  alt="WealthPark"
                  width={165}
                  height={31}
                  priority
                  className="h-7 w-auto"
                />
              </motion.div>
            </Link>

            {/* ハンバーガーボタン（3本線） */}
            <div className="flex items-center -mr-3 z-50">
              {/* アイコン色変化：背景と同時に0.6秒で変化 */}
              <motion.div
                animate={{
                  filter: isMenuOpen ? "invert(1)" : "invert(0)"
                }}
                transition={{
                  duration: 0.6, // 0.6秒
                  delay: isMenuOpen ? 0 : 0.3, // 開く時:すぐ、閉じる時:0.3秒待機（背景と同時）
                  ease: [0.4, 0, 1, 1] // ゆっくり→加速→止まる
                }}
              >
                <Hamburger
                  toggled={isMenuOpen}
                  toggle={setIsMenuOpen}
                  size={24}
                  distance="sm"
                  color="#111827"
                  rounded
                  label="メニュー"
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Content - ヘッダー内に統合 */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.6, // 背景が伸びきった後（0.6秒待機）
                    ease: "easeInOut"
                  }
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0, // すぐに開始（待機なし）
                    ease: "easeInOut"
                  }
                }}
                className="lg:hidden h-[calc(100vh-4rem)] overflow-y-auto flex flex-col"
              >
                <div className="h-full flex flex-col">
              {/* メニューコンテンツ */}
              <ul className="flex-1 px-6 py-8 space-y-1 text-white">
                <li><Link href={`/${locale}/`} className="block py-4 text-lg font-medium hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>

              <li>
                <button onClick={() => setOpenDropdown(openDropdown === 'news' ? null : 'news')} className="w-full text-left py-4 text-lg font-medium hover:text-blue-400 transition-colors flex items-center justify-between">
                  <span>ニュース</span>
                  <svg className={`w-5 h-5 transition-transform ${openDropdown === 'news' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'news' && (
                  <ul className="pl-4 pb-2">
                    <li><Link href="https://wealth-park.com/ja/news/" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>ニュース</Link></li>
                    <li><Link href="https://wealth-park.com/ja/business/release-note" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>プロダクト新機能・改善</Link></li>
                    <li><Link href="https://prtimes.jp/main/html/searchrlp/company_id/40576" target="_blank" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>プレスリリース</Link></li>
                  </ul>
                )}
              </li>

              <li>
                <button onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')} className="w-full text-left py-4 text-lg font-medium hover:text-blue-400 transition-colors flex items-center justify-between">
                  <span>サービス</span>
                  <svg className={`w-5 h-5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'services' && (
                  <ul className="pl-4 pb-2">
                    <li><Link href={`/${locale}/business`} className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>不動産管理会社向けサービス<br /><small className="text-gray-400">WealthParkビジネス</small></Link></li>
                    <li><Link href="https://owner-app.wealth-park.com" target="_blank" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>不動産オーナー向けサービス<br /><small className="text-gray-400">WealthParkオーナーアプリ</small></Link></li>
                    <li><Link href="https://wealthpark-ret.com/" target="_blank" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>海外不動産投資家向けサービス<br /><small className="text-gray-400">WealthPark RealEstate Technologies</small></Link></li>
                    <li><Link href="https://wealthpark-alt.com/" target="_blank" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>不動産関連の<br />クラウドファンディングサービス<br /><small className="text-gray-400">WealthPark Investment</small></Link></li>
                  </ul>
                )}
              </li>

              <li><Link href={`/${locale}/corporate/company`} className="block py-4 text-lg font-medium hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>会社概要</Link></li>

              <li>
                <button onClick={() => setOpenDropdown(openDropdown === 'careers' ? null : 'careers')} className="w-full text-left py-4 text-lg font-medium hover:text-blue-400 transition-colors flex items-center justify-between">
                  <span>採用</span>
                  <svg className={`w-5 h-5 transition-transform ${openDropdown === 'careers' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'careers' && (
                  <ul className="pl-4 pb-2">
                    <li><Link href={`/${locale}/careers`} className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>中途採用</Link></li>
                    <li><Link href={`/${locale}/park`} className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>採用オウンドメディア「Park」</Link></li>
                  </ul>
                )}
              </li>

              <li>
                <button onClick={() => setOpenDropdown(openDropdown === 'articles' ? null : 'articles')} className="w-full text-left py-4 text-lg font-medium hover:text-blue-400 transition-colors flex items-center justify-between">
                  <span>記事</span>
                  <svg className={`w-5 h-5 transition-transform ${openDropdown === 'articles' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'articles' && (
                  <ul className="pl-4 pb-2">
                    <li className="py-1 text-gray-400 text-xs font-bold">オウンドメディア</li>
                    <li><Link href="https://wealth-park.com/ja/wealthpark-blog/" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>WealthParkブログ</Link></li>
                    <li><Link href="https://wealthpark-lab.com" target="_blank" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>WealthPark研究所</Link></li>
                    <li><Link href={`/${locale}/park`} className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>採用オウンドメディア「Park」</Link></li>
                    <li className="py-1 text-gray-400 text-xs font-bold mt-2">特集</li>
                    <li><Link href="https://wealth-park.com/ja/business/seminar" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>イベント・セミナー</Link></li>
                    <li><Link href="https://wealth-park.com/ja/tag/keypersons-voice/" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Key Person&apos;s Voice | 不動産管理会社のトップ対談</Link></li>
                    <li><Link href="https://wealth-park.com/ja/park_category/person/" className="block py-2 text-gray-300 text-sm hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>社員インタビュー</Link></li>
                  </ul>
                )}
              </li>
              </ul>

              {/* フッター部分 */}
            <div className="border-t border-gray-700 p-6 space-y-4">
              <Link href={`/${locale}/business`} className="block py-3 px-6 border border-gray-600 text-white text-center text-base font-medium rounded-full hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
                不動産管理会社の方
              </Link>
              <Link href="https://owner.wealth-park.com/" target="_blank" className="block py-3 px-6 bg-white text-gray-900 text-center text-base font-medium rounded-full hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                パソコン版WealthPark
              </Link>
              <div className="flex gap-6 justify-center pt-4">
                <Link href="https://www.facebook.com/WealthPark-Business-WealthPark%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%A6%E3%82%A7%E3%83%AB%E3%82%B9%E3%83%91%E3%83%BC%E3%82%AF%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE-2253775971335835/" target="_blank">
                  <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/ico_facebook.svg" alt="facebook" width={28} height={28} />
                </Link>
                <Link href="https://www.linkedin.com/company/wealthpark/" target="_blank">
                  <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/ico_in.svg" alt="LinkedIn" width={28} height={28} />
                </Link>
                <Link href="https://www.youtube.com/channel/UCvTChmtXoEokx8vsWda8aNg" target="_blank">
                  <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/ico_youtube.svg" alt="YouTube" width={28} height={28} />
                </Link>
              </div>
            </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}
