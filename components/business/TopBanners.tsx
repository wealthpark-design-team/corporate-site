export default function TopBanners() {
  const banners = [
    {
      url: 'https://wealth-park.com/ja/business/download/form-011/',
      image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/top-banner_007.jpg',
      alt: '賃貸住宅管理業法改正のポイントとデジタルの活用について'
    },
    {
      url: 'https://wealth-park.com/ja/business/download/form-012/',
      image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/top-banner_008.jpg',
      alt: '不動産管理業向け電子帳簿保存法への対応ポイント'
    },
    {
      url: 'https://wealth-park.com/ja/business/release-note',
      image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/top-banner_009.jpg',
      alt: 'プロダクト改善・新機能'
    },
    {
      url: 'https://wealth-park.com/ja/business/download/form-wpl-002/',
      image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/top-banner_006.jpg',
      alt: 'WealthPark研究所による、世界の不動産テック最新レポートをダウンロード'
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {banners.map((banner, index) => (
            <a
              key={index}
              href={banner.url}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
