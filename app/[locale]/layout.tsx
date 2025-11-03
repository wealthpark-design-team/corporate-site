import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import CookieConsent from '@/components/CookieConsent'
import AuthWrapper from '@/components/AuthWrapper'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WealthPark株式会社',
  description: 'すべての人に代替資産への投資機会を',
  // 開発中はGoogleインデックスを拒否（本番公開時に削除）
  robots: {
    index: false,
    follow: false,
  },
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
      <body className="relative bg-white">
        <AuthWrapper>
          {children}
        </AuthWrapper>
        <CookieConsent />
      </body>
    </html>
  )
}
