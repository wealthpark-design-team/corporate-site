'use client'

interface CaseStudyCarouselProps {
  t: any
}

export default function CaseStudyCarousel({ t }: CaseStudyCarouselProps) {
  const caseStudies = [
    {
      url: 'https://wealth-park.com/ja/business/case-study/leopalace21/',
      image: 'https://wealth-park.com/wp-content/uploads/2025/04/case_thumb_leopalace.jpg',
      company: '株式会社レオパレス21',
      description: '26,000人のオーナー様との"接点の再構築"──レオパレス21が挑むアプリ活用の未来像'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/asahi-kasei/',
      image: 'https://wealth-park.com/wp-content/uploads/2024/04/case_banner_asahi-kasei-2.jpeg',
      company: '旭化成不動産レジデンス株式会社',
      description: '「正直、ここまで良い反応が得られるとは思っていなかった…」 3ヵ月間の試験導入を経て、旭化成不動産レジデンスがオーナーアプリの全面導入を決定。'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/mfrl/',
      image: 'https://wealth-park.com/wp-content/uploads/2023/03/case_banner_mistui-1.jpeg',
      company: '三井不動産レジデンシャルリース株式会社',
      description: '「オーナー様とアプリの親和性が高かった」三井不動産レジデンシャルリースが実感した"オーナーアプリの必要性"'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/kosugi/',
      image: 'https://wealth-park.com/wp-content/uploads/2021/06/case_banner_kosugi.jpg',
      company: '株式会社 コスギ不動産',
      description: '「変革をチャンスに」デジタルツールの活用によって業務効率化が実現し、オーナー様へのプロパティマネジメントの基盤づくりができた'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/trust/',
      image: 'https://wealth-park.com/wp-content/uploads/2020/06/case_banner_trust.png',
      company: '株式会社トラスト',
      description: '送金明細7割電子化を実現！WealthParkを使うことで圧倒的に業務が合理的に。 業務を効率化し、浮いた時間をオーナー様のために使っていきたい。'
    },
    {
      url: 'https://wealth-park.com/ja/business/case-study/mjhn/',
      image: 'https://wealth-park.com/wp-content/uploads/2020/06/case_banner_mjhn.jpg',
      company: '三菱地所ハウスネット株式会社',
      description: '寄り添い、寄り添われる、そんな管理会社を目指したらWealthParkの導入は不可欠でした'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <a
              key={index}
              href={caseStudy.url}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.company}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{t.title}</p>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{caseStudy.company}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{caseStudy.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wealth-park.com/ja/business/case-study/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t.viewAll}
          </a>
        </div>
      </div>
    </section>
  )
}
