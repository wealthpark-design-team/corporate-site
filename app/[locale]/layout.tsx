import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WealthPark株式会社',
  description: 'すべての人に代替資産への投資機会を',
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale} className={inter.variable}>
      <body className="relative">
        {/* ページ全体の背景グラデーション */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 right-0 w-[700px] h-[800px] bg-gradient-to-br from-blue-300 via-purple-200 to-pink-100 opacity-80 translate-x-1/3 animate-float1" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', filter: 'blur(80px)' }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[700px] bg-gradient-to-tr from-orange-200 via-yellow-100 to-blue-100 opacity-70 translate-y-1/2 -translate-x-1/3 animate-float2" style={{ borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', filter: 'blur(80px)' }} />
          <div className="absolute top-20 left-1/4 w-[500px] h-[600px] bg-gradient-to-br from-purple-200 via-blue-200 to-transparent opacity-60 animate-float1" style={{ borderRadius: '70% 30% 50% 50% / 30% 50% 50% 70%', filter: 'blur(80px)', animationDelay: '3s' }} />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[500px] bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-100 opacity-50 animate-float2" style={{ borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%', filter: 'blur(80px)', animationDelay: '5s' }} />
        </div>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
