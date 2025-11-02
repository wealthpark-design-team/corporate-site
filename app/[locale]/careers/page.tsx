import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getTranslations, Locale } from '@/lib/i18n'
import Image from 'next/image'

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const localeKey = locale as Locale
  const t = getTranslations(localeKey)
  const careersData = t.careers

  // 社員インタビューのサンプルデータ（実際のデータに置き換え可能）
  const interviews = [
    {
      title: 'カスタマーサクセスってどんな仕事？　新卒向け先輩インタビュー',
      image: 'https://wealth-park.com/wp-content/uploads/2025/06/retouched_DSC03243-1-scaled.jpg',
      url: 'https://wealth-park.com/ja/park/%e3%82%ab%e3%82%b9%e3%82%bf%e3%83%9e%e3%83%bc%e3%82%b5%e3%82%af%e3%82%bb%e3%82%b9%e3%81%a3%e3%81%a6%e3%81%a9%e3%82%93%e3%81%aa%e4%bb%95%e4%ba%8b%ef%bc%9f/'
    },
    {
      title: '仕事は退屈せずに人生を面白くするための手段　社会人2年目の挑戦',
      image: 'https://wealth-park.com/wp-content/uploads/2025/06/IMG_8813-scaled.jpg',
      url: 'https://wealth-park.com/ja/park/%e4%bb%95%e4%ba%8b%e3%81%af%e9%80%80%e5%b1%88%e3%81%9b%e3%81%9a%e3%81%ab%e4%ba%ba%e7%94%9f%e3%82%92%e9%9d%a2%e7%99%bd%e3%81%8f%e3%81%99%e3%82%8b%e3%81%9f%e3%82%81%e3%81%ae%e6%89%8b%e6%ae%b5/'
    },
    {
      title: '何事も面白がることが成長のきっかけになる。社会人1年目の挑戦',
      image: 'https://wealth-park.com/wp-content/uploads/2025/06/IMG_7783-scaled.jpg',
      url: 'https://wealth-park.com/ja/park/%e4%bd%95%e4%ba%8b%e3%82%82%e9%9d%a2%e7%99%bd%e3%81%8c%e3%82%8b%e3%81%93%e3%81%a8%e3%81%8c%e6%88%90%e9%95%b7%e3%81%ae%e3%81%8d%e3%81%a3%e3%81%8b%e3%81%91%e3%81%ab%e3%81%aa%e3%82%8b/'
    },
    {
      title: '迷ったときの羅針盤になる "APPRECIATION AND RESPECT"',
      image: 'https://wealth-park.com/wp-content/uploads/2023/12/ashida-san-001.jpg',
      url: 'https://wealth-park.com/ja/park/person_mari-ashida/'
    },
    {
      title: 'わたしが考えるベストを実現するための "DO THE RIGHT THING"',
      image: 'https://wealth-park.com/wp-content/uploads/2023/12/mukai-san-001.jpg',
      url: 'https://wealth-park.com/ja/park/person_yumi-mukai/'
    },
    {
      title: '当たり前の正しいことを積み重ねていくと、自ずと結果はついてくる。わたしの人生観と重なる "DO THE RIGHT THING"',
      image: 'https://wealth-park.com/wp-content/uploads/2023/09/DSC01852.jpg',
      url: 'https://wealth-park.com/ja/park/person_mei-iida/'
    }
  ]

  return (
    <>
      <Header locale={localeKey} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url(https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/careers_hero.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-7xl font-bold">{careersData.hero.title}</h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-900 leading-relaxed">
              {careersData.intro.title}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
              {careersData.intro.description}
            </p>
          </div>
        </section>

        {/* About WealthPark Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
              {careersData.aboutSection.title}
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video">
                <script
                  async
                  className="speakerdeck-embed"
                  data-id="4f93ef2d2a224dfb89d2c4a08b916dee"
                  data-ratio="1.77777777777778"
                  src="//speakerdeck.com/assets/embed.js"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Positions Section */}
        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
              {careersData.positions.title}
            </h3>

            {/* By Business */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-center mb-8 text-slate-700">
                {careersData.positions.byBusiness}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <a
                  href="https://wealth-park.com/ja/career/wpb"
                  className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={careersData.positions.dxConsulting.image}
                    alt={careersData.positions.dxConsulting.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h5 className="text-xl font-bold text-slate-900">
                      {careersData.positions.dxConsulting.title}
                    </h5>
                  </div>
                </a>
                <a
                  href="https://wealth-park.com/ja/career/wai"
                  className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={careersData.positions.fintech.image}
                    alt={careersData.positions.fintech.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h5 className="text-xl font-bold text-slate-900">
                      {careersData.positions.fintech.title}
                    </h5>
                  </div>
                </a>
                <a
                  href="https://wealth-park.com/ja/career/ret"
                  className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={careersData.positions.assetManagement.image}
                    alt={careersData.positions.assetManagement.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h5 className="text-xl font-bold text-slate-900 leading-snug">
                      {careersData.positions.assetManagement.title}
                    </h5>
                  </div>
                </a>
              </div>
            </div>

            {/* By Role */}
            <div>
              <h4 className="text-2xl font-bold text-center mb-8 text-slate-700">
                {careersData.positions.byRole}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Consultant */}
                <a
                  href="/careers_business/consultant"
                  className="group block bg-white rounded-lg p-8 hover:shadow-xl transition-shadow relative"
                >
                  <div className="absolute top-6 right-6">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-2">CONSULTANT</h5>
                  <p className="text-gray-700">{careersData.positions.business.consultant}</p>
                </a>

                {/* Business Development */}
                <a
                  href="/careers_business/business-development"
                  className="group block bg-white rounded-lg p-8 hover:shadow-xl transition-shadow relative"
                >
                  <div className="absolute top-6 right-6">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-2">BUSINESS DEVELOPMENT</h5>
                  <p className="text-gray-700">{careersData.positions.business.businessDevelopment}</p>
                </a>

                {/* Open Position */}
                <a
                  href="/careers_business/open-position"
                  className="group block bg-white rounded-lg p-8 hover:shadow-xl transition-shadow relative"
                >
                  <div className="absolute top-6 right-6">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-2">OPEN POSITION</h5>
                  <p className="text-gray-700">{careersData.positions.business.openPosition}</p>
                </a>

                {/* Real Estate Specialist */}
                <a
                  href="/careers_business/%e4%b8%8d%e5%8b%95%e7%94%a3%e5%b0%82%e9%96%80%e8%81%b7"
                  className="group block bg-white rounded-lg p-8 hover:shadow-xl transition-shadow relative"
                >
                  <div className="absolute top-6 right-6">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-2">REAL ESTATE SPECIALIST</h5>
                  <p className="text-gray-700">{careersData.positions.business.realEstateSpecialist}</p>
                </a>

                {/* Product Manager */}
                <a
                  href="/careers_engineering/product-manager"
                  className="group block bg-white rounded-lg p-8 hover:shadow-xl transition-shadow relative"
                >
                  <div className="absolute top-6 right-6">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-2">PRODUCT MANAGER</h5>
                  <p className="text-gray-700">{careersData.positions.engineering.productManager}</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Interviews Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
              {careersData.interviews.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {interviews.map((interview, index) => (
                <a
                  key={index}
                  href={interview.url}
                  className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={interview.image}
                    alt={interview.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-slate-900 leading-relaxed">{interview.title}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-right">
              <a
                href="https://wealth-park.com/ja/park_category/person/"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {careersData.interviews.viewAll}
              </a>
            </div>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
              {careersData.ceoMessage.title}
            </h3>
            <p className="text-xl text-center mb-4 text-slate-600">{careersData.ceoMessage.subtitle}</p>
            <p className="text-center text-slate-700 mb-12 max-w-3xl mx-auto">
              {careersData.ceoMessage.description}
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/WcAtb8UlbsI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
              {careersData.vision.title}
            </h3>
            <h4 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">
              {careersData.vision.heading}
            </h4>
            <p className="text-2xl text-center mb-8 text-slate-700">
              {careersData.vision.subtitle}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto mb-12">
              {careersData.vision.description}
            </p>
            <div className="flex justify-center">
              <Image
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/corporate/img/career-alternative_pic1.jpg"
                alt={careersData.vision.subtitle}
                width={1200}
                height={600}
                className="w-full max-w-5xl rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
              {careersData.mission.title}
            </h3>
            <h4 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-900 leading-relaxed whitespace-pre-line">
              {careersData.mission.heading}
            </h4>
            <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line max-w-4xl mx-auto">
              {careersData.mission.description}
            </p>
          </div>
        </section>

        {/* Behavior Identity Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 font-sans">
              {careersData.behaviorIdentity.title}
            </h3>
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Customer Centric */}
              <div className="border-b border-slate-200 pb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-4 font-sans">
                  {careersData.behaviorIdentity.customerCentric.title}
                </h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line mb-2">
                  {careersData.behaviorIdentity.customerCentric.description}
                </p>
                <a
                  href="https://wealth-park.com/ja/park/person_kosuke-kinjo/"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {careersData.behaviorIdentity.customerCentric.link}
                </a>
              </div>

              {/* Go Beyond */}
              <div className="border-b border-slate-200 pb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-4 font-sans">
                  {careersData.behaviorIdentity.goBeyond.title}
                </h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line mb-2">
                  {careersData.behaviorIdentity.goBeyond.description}
                </p>
                <a
                  href="https://wealth-park.com/ja/park/behavioridentity_shoumei-yamamoto/"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {careersData.behaviorIdentity.goBeyond.link}
                </a>
              </div>

              {/* Appreciation and Respect */}
              <div className="border-b border-slate-200 pb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-4 font-sans">
                  {careersData.behaviorIdentity.appreciationRespect.title}
                </h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line mb-2">
                  {careersData.behaviorIdentity.appreciationRespect.description}
                </p>
                <a
                  href="https://wealth-park.com/ja/park/behavioridentity_yuki-kagaya/"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {careersData.behaviorIdentity.appreciationRespect.link}
                </a>
              </div>

              {/* Commit to Results */}
              <div className="border-b border-slate-200 pb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-4 font-sans">
                  {careersData.behaviorIdentity.commitResults.title}
                </h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line mb-2">
                  {careersData.behaviorIdentity.commitResults.description}
                </p>
                <a
                  href="https://wealth-park.com/ja/park/behavioridentity_karan-nose/"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {careersData.behaviorIdentity.commitResults.link}
                </a>
              </div>

              {/* Do the Right Thing */}
              <div className="border-b border-slate-200 pb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-4 font-sans">
                  {careersData.behaviorIdentity.doRightThing.title}
                </h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line mb-2">
                  {careersData.behaviorIdentity.doRightThing.description}
                </p>
                <a
                  href="https://wealth-park.com/ja/park/behavioridentity_kazuho-hagiwara/"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {careersData.behaviorIdentity.doRightThing.link}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Behavior Identity Image */}
        <section className="py-0">
          <Image
            src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/corporate/img/careers/career-identiy.jpg"
            alt="WealthPark career identity"
            width={1920}
            height={1080}
            className="w-full"
          />
        </section>

        {/* SNS Banners */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="https://wealth-park.com/ja/park_category/person/" className="block">
                <Image
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/corporate/img/park_person.png"
                  alt="社員インタビュー"
                  width={400}
                  height={200}
                  className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              </a>
              <a
                href="https://anchor.fm/wealthpark/episodes/001-WealthPark-e1m9cjl"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/corporate/img/podcast.jpeg"
                  alt="Podcast"
                  width={400}
                  height={200}
                  className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              </a>
              <a
                href="https://note.com/wealthpark_note/n/n6c296a6d2cd7"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/corporate/img/careers_banner_pic13.jpg"
                  alt="Note"
                  width={400}
                  height={200}
                  className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/wealthpark/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/corporate/img/careers_banner_pic1.jpg"
                  alt="LinkedIn"
                  width={400}
                  height={200}
                  className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={localeKey} />
    </>
  )
}
