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

export default async function BusinessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const localeKey = locale as Locale
  const t = getTranslations(localeKey)

  return (
    <>
      <BusinessHeader locale={localeKey} />
      <Breadcrumb locale={localeKey} />
      <main>
        <BusinessHero locale={localeKey} t={t.business.hero} />
        <ClientLogos />
        <TopBanners />
        <Testimonials t={t.business.testimonials} />
        <CaseStudyCarousel t={t.business.caseStudies} />
        <AboutSection t={t.business.about} />
        <ThreePoints t={t.business.points} />
        <FeaturesList t={t.business.features} />
        <ProductNews t={t.business.productNews} />
      </main>
      <Footer locale={localeKey} />
    </>
  )
}
