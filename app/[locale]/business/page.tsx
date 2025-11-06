import BusinessHeader from '@/components/business/BusinessHeader'
import Breadcrumb from '@/components/business/Breadcrumb'
import Footer from '@/components/Footer'
import BusinessHero from '@/components/business/BusinessHero'
import ClientLogos from '@/components/business/ClientLogos'
import TopBanners from '@/components/business/TopBanners'
import Testimonials from '@/components/business/Testimonials'
import CaseStudyCarousel from '@/components/business/CaseStudyCarousel'
import AboutSection from '@/components/business/AboutSection'
import ThreePoints from '@/components/business/ThreePoints'
import FeaturesList from '@/components/business/FeaturesList'
import ProductNews from '@/components/business/ProductNews'
import { getTranslations, Locale } from '@/lib/i18n'
import { getProductNewsPosts } from '@/lib/wordpress'

export default async function BusinessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const localeKey = locale as Locale
  const t = getTranslations(localeKey)

  // WordPress から「プロダクト改善・新機能」タグの記事を最新6件取得
  const newsArticles = await getProductNewsPosts(6, localeKey)

  return (
    <>
      <BusinessHeader locale={localeKey} />
      <main>
        <BusinessHero locale={localeKey} t={t.business.hero} breadcrumbLocale={localeKey} />
        <ClientLogos />
        <TopBanners />
        <Testimonials t={t.business.testimonials} />
        <CaseStudyCarousel t={t.business.caseStudies} />
        <AboutSection t={t.business.about} />
        <ThreePoints t={t.business.points} />
        <FeaturesList t={t.business.features} />
        <ProductNews t={t.business.productNews} articles={newsArticles} locale={localeKey} />
      </main>
      <Footer locale={localeKey} />
    </>
  )
}
