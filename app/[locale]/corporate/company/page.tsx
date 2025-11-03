import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'
import { getTranslations, Locale } from '@/lib/i18n'
import { getTeamMembersByCategory } from '@/data/teamMembers'
import Image from 'next/image'

export default async function CompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const localeKey = locale as Locale
  const t = getTranslations(localeKey)
  const companyData = t.company
  const teamMembers = getTeamMembersByCategory()

  return (
    <>
      <Header locale={localeKey} />
      <main className="pt-header lg:pt-header-desktop">
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://wealth-park.com/wp-content/themes/wp-next-landing-page/corporate/img/company_profile_top_background.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold">{companyData.title}</h1>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
              {companyData.vision.heading}
            </h2>
            <div className="text-center space-y-8">
              <p className="text-4xl md:text-5xl font-bold text-slate-900">
                {companyData.vision.title}
              </p>
              <p className="text-xl md:text-2xl text-slate-600">
                {companyData.vision.subtitle}
              </p>
              <div className="mt-12">
                <Image
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/corporate/img/career-alternative_pic1.jpg"
                  alt={companyData.vision.subtitle}
                  width={1200}
                  height={600}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
              {companyData.mission.heading}
            </h2>
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 leading-relaxed whitespace-pre-line">
                {companyData.mission.title}
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line max-w-4xl mx-auto">
                {companyData.mission.description}
              </p>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
              {companyData.profile.heading}
            </h2>
            <div className="space-y-6">
              {/* 会社名 */}
              <div className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-semibold text-slate-700 mb-2">
                  {companyData.profile.companyName}
                </dt>
                <dd className="text-slate-900">
                  {companyData.profile.companyNameValue}
                </dd>
              </div>

              {/* 資本金 */}
              <div className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-semibold text-slate-700 mb-2">
                  {companyData.profile.capital}
                </dt>
                <dd className="text-slate-900">
                  {companyData.profile.capitalValue}
                </dd>
              </div>

              {/* 代表 */}
              <div className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-semibold text-slate-700 mb-2">
                  {companyData.profile.representative}
                </dt>
                <dd className="text-slate-900">
                  {companyData.profile.representativeValue}
                </dd>
              </div>

              {/* 従業員数 */}
              <div className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-semibold text-slate-700 mb-2">
                  {companyData.profile.employees}
                </dt>
                <dd className="text-slate-900">
                  {companyData.profile.employeesValue}
                </dd>
              </div>

              {/* 本社所在地 */}
              <div className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-semibold text-slate-700 mb-2">
                  {companyData.profile.headquarters}
                </dt>
                <dd className="text-slate-900">
                  {companyData.profile.headquartersValue}
                  <div className="mt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3242.033323946273!2d139.7076757!3d35.6515506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b424e3498e9%3A0x1205a95984100cb6!2z44CSMTUwLTAwMTEg5p2x5Lqs6YO95riL6LC35Yy65p2x77yT5LiB55uu77yR77yU4oiS77yR77yVIDLpmo4!5e0!3m2!1sja!2sjp!4v1762183898704!5m2!1sja!2sjp"
                      width="100%"
                      height="400"
                      style={{ border: 0, filter: 'grayscale(100%)' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/nQji5kqP8FM6pQrm6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline inline-block mt-2"
                  >
                    {companyData.profile.mapLink}
                  </a>
                </dd>
              </div>

              {/* 営業所 */}
              <div className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-semibold text-slate-700 mb-2">
                  {companyData.profile.branches}
                </dt>
                <dd className="text-slate-900">
                  {companyData.profile.branchesValue}
                </dd>
              </div>

              {/* 支社 */}
              <div className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-semibold text-slate-700 mb-2">
                  {companyData.profile.offices}
                </dt>
                <dd className="text-slate-900">
                  {companyData.profile.officesValue}
                </dd>
              </div>

              {/* グループ会社 */}
              <div className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-semibold text-slate-700 mb-2">
                  {companyData.profile.groupCompanies}
                </dt>
                <dd className="text-slate-900 space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <a
                        href="https://wealthpark-ret.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        WealthPark RealEstate Technologies株式会社
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://weifuda.tw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        衛富達株式会社 [台湾子会社]
                      </a>
                    </li>
                    <li>WealthPark Capital株式会社</li>
                    <li>WealthPark,Inc.　[米国子会社]</li>
                    <li>WealthPark (HONG KONG) LIMITED　[香港子会社]</li>
                    <li>
                      <a
                        href="https://wealthpark-alt.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        WealthPark Alternative Investments株式会社
                      </a>
                    </li>
                  </ul>
                </dd>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection teamMembers={teamMembers} heading={companyData.team.heading} />

        {/* Partners Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                {companyData.partners.heading}
              </h2>
              <p className="text-sm text-slate-600">{companyData.partners.note}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_owl.png" alt="OWL" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_aozora_bank_jp.png" alt="あおぞら銀行" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_asahikasei.png" alt="Asahi Kasei" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_hpm.png" alt="HPM" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/clients_mj-home-new.png" alt="MJ Home" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_sbi_Investment.png" alt="SBIインベストメント" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_kochi-house.png" alt="Kochi House" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_kosugi.png" alt="Kosugi" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_sanwa.png" alt="Sanwa" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_jic.png" alt="jic" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_jfr_logo_eibun.png" alt="J. Front Retailing" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_life-produce.png" alt="Life Produce" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_takuto.png" alt="Takuto" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_chuo-nittochi.png" alt="Chuo Nittochi" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_dg.png" alt="デジタルガレージ" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_tokyo-kaizyo.png" alt="Tokyo Kaizyo" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_TokyuFudousan.png" alt="Tokyu Fudousan" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_nine-holdings.png" alt="Nine Holdings" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_nihon-agant.png" alt="Nihon Agent" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_japan_post_capital_jp.png" alt="日本郵政キャピタル株式会社" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_hanshin-hankyu.png" alt="Hanshin Hankyu" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_hirota.png" alt="Hirota" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_visual-research.png" alt="Visual Research" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_mizuho_capital_jp.png" alt="みずほキャピタル" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_miyoshi.png" alt="Miyoshi" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_hamagin.png" alt="横浜銀行" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_watanabe.png" alt="W Juken" width={200} height={100} className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                {companyData.media.heading}
              </h2>
              <p className="text-sm text-slate-600">{companyData.media.note}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_chintaijyutakushinbun.png" alt="全国賃貸住宅新聞" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/commercial_observer_jp.png" alt="commercial observer" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <a href="https://signal.diamond.jp/" target="_blank" rel="noopener noreferrer">
                  <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_signal.png" alt="signal" width={200} height={100} className="max-w-full h-auto" />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a href="https://jp.techcrunch.com/" target="_blank" rel="noopener noreferrer">
                  <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_tc.png" alt="techcrunch" width={200} height={100} className="max-w-full h-auto" />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_tokyomx.png" alt="TOKYO MX" width={200} height={100} className="max-w-full h-auto" />
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_thebridge.png" alt="THE BRIDGE" width={200} height={100} className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={localeKey} />
    </>
  )
}
