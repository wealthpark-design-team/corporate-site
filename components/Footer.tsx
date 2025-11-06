'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer({ locale }: { locale: string }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <footer className="relative bg-gray-50 border-t border-gray-150 overflow-hidden">
      {/* 背景装飾テキスト */}
      <div className="absolute top-3/4 left-[15%] -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
        <p className="text-[400px] font-bold whitespace-nowrap" style={{ color: '#efefef' }}>
          Be Alternative
        </p>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 z-10">
        {/* Footer Banners */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href={`/${locale}/careers`} className="block hover:opacity-90 transition-opacity">
            <Image
              src="/images/banners/banner_careers.jpg"
              alt="採用情報"
              width={400}
              height={200}
              className="w-full h-auto rounded-lg"
            />
          </Link>
          <Link href={`/${locale}/park`} className="block hover:opacity-90 transition-opacity">
            <Image
              src="/images/banners/banner_footer_park.png"
              alt="Park"
              width={400}
              height={200}
              className="w-full h-auto rounded-lg"
            />
          </Link>
          <Link href="https://wealth-park.com/business/download/wpl-wp002-ja/" className="block hover:opacity-90 transition-opacity">
            <Image
              src="/images/other/GRPS_002_500x200.jpg"
              alt="WealthPark Global Residential PropTech Study 2022 Vol.2(日本語版)"
              width={400}
              height={200}
              className="w-full h-auto rounded-lg"
            />
          </Link>
          <Link href="https://wealthpark-lab.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
            <Image
              src="/images/banners/banner_wp-lab_001.jpg"
              alt="WealthPark研究所"
              width={400}
              height={200}
              className="w-full h-auto rounded-lg"
            />
          </Link>
        </div>

        {/* Footer Content */}
        <div className="py-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Left: Logo */}
            <div>
              <Image
                src="/images/other/footer_logo_wp.svg"
                alt="WealthPark"
                width={80}
                height={80}
                className="mb-6 w-20 h-20"
              />
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-sm mb-5 text-gray-900">サービス</h4>
              <ul className="space-y-3">
                <li><Link href={`/${locale}/business`} className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">不動産管理会社向けサービス</Link></li>
                <li><Link href="https://owner-app.wealth-park.com" target="_blank" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">不動産オーナー向けサービス<Image src="/images/icons/external_link.svg" alt="" width={12} height={12} /></Link></li>
                <li><Link href="https://wealthpark-ret.com/" target="_blank" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">WealthPark RealEstate Technologies<Image src="/images/icons/external_link.svg" alt="" width={12} height={12} /></Link></li>
                <li><Link href="https://wealthpark-alt.com/" target="_blank" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">WealthPark Investment<Image src="/images/icons/external_link.svg" alt="" width={12} height={12} /></Link></li>
                <li><Link href="https://wealthpark-lab.com/" target="_blank" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">WealthPark研究所<Image src="/images/icons/external_link.svg" alt="" width={12} height={12} /></Link></li>
                <li><Link href="https://wealth-park.com/ja/wealthpark-blog" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">WealthPark Blog</Link></li>
                <li><Link href={`/${locale}/park`} className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">採用オウンドメディア「Park」</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-sm mb-5 text-gray-900">製品</h4>
              <ul className="space-y-3">
                <li><Link href="https://itunes.apple.com/jp/app/wealth-park-real-estate-investment/id1068127268" target="_blank" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">App Store<Image src="/images/icons/external_link.svg" alt="" width={12} height={12} /></Link></li>
                <li><Link href="https://play.google.com/store/apps/details?id=com.wealthpark.owner&hl=ja" target="_blank" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">Google Play<Image src="/images/icons/external_link.svg" alt="" width={12} height={12} /></Link></li>
                <li><Link href="https://owner.wealth-park.com/" target="_blank" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">パソコン版WealthPark<Image src="/images/icons/external_link.svg" alt="" width={12} height={12} /></Link></li>
              </ul>
            </div>

            {/* Right: Company Info + ISMS */}
            <div className="flex flex-col">
              <div className="mb-8">
                <h4 className="font-bold text-sm mb-5 text-gray-900">企業情報</h4>
                <ul className="space-y-3">
                  <li><Link href={`/${locale}/`} className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">企業サイトTOP</Link></li>
                  <li><Link href={`/${locale}/corporate/company`} className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">会社概要</Link></li>
                  <li><Link href="https://wealth-park.com/ja/asset-management/company-profile/" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">WealthPark RealEstate Technologiesについて</Link></li>
                  <li><Link href="https://wealth-park.com/ja/news" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">ニュース</Link></li>
                  <li><Link href="https://prtimes.jp/main/html/searchrlp/company_id/40576" target="_blank" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">プレスリリース<Image src="/images/icons/external_link.svg" alt="" width={12} height={12} /></Link></li>
                  <li><Link href="https://wealth-park.com/ja/press-kit" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">プレスキット</Link></li>
                  <li><Link href="https://wealth-park.com/ja/tag/event-report/" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">イベント・セミナー</Link></li>
                  <li><Link href={`/${locale}/careers`} className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">採用</Link></li>
                  <li><Link href="https://wealth-park.com/ja/corporate/contact/" className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">お問い合わせ</Link></li>
                </ul>
              </div>

              {/* ISMS Badge - Right aligned */}
              <div className="mt-auto">
                <Image
                  src="/images/logos/logo_isms_2.png"
                  alt="ISMS IS 785972 / ISO 27001"
                  width={220}
                  height={60}
                  className="max-w-[110px] md:max-w-[147px] h-auto"
                />
                <p className="text-xs text-gray-500 mt-1">IS 785972 / ISO 27001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Footer */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex justify-end items-center">
            {/* Right: Policy Links */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm">
              <Link href="https://wealth-park.com/ja/corporate/privacy-policy" className="text-gray-600 hover:text-[#1a1a1a] transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden md:inline text-gray-400">|</span>
              <Link href="https://wealth-park.com/ja/corporate/external-transmission-of-user-information/" className="text-gray-600 hover:text-[#1a1a1a] transition-colors">
                個人情報保護方針
              </Link>
              <span className="hidden md:inline text-gray-400">|</span>
              <Link href="https://wealth-park.com/ja/security" className="text-gray-600 hover:text-[#1a1a1a] transition-colors">
                情報セキュリティ基本方針
              </Link>
            </div>

            {/* トップに戻るボタン */}
            <button
              onClick={scrollToTop}
              className="ml-auto w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="トップに戻る"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
