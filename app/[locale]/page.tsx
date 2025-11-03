import Hero from '@/components/Hero'
import Banners from '@/components/Banners'
import News from '@/components/News'
import Blog from '@/components/Blog'
import Partners from '@/components/Partners'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getTranslations, Locale } from '@/lib/i18n'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const localeKey = locale as Locale
  const t = getTranslations(localeKey)

  return (
    <>
      <Header locale={localeKey} />
      <main className="pt-header lg:pt-header-desktop">
        <Hero locale={localeKey} t={t.hero} />
        <Banners locale={localeKey} t={t.banners} />
        <News locale={localeKey} t={t.news} />
        <Blog locale={localeKey} t={t.blog} />
        <Partners locale={localeKey} />
      </main>
      <Footer locale={localeKey} />
    </>
  )
}
