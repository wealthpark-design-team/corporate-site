'use client'

export default function ClientLogos() {
  const logos = [
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/1_clients_leopalace21.png', alt: 'Leopalace21' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/2_clients_able.png', alt: 'Able' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/3_clients_asahikasei.png', alt: 'Asahikasei' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/4_partnerships_jp-capital_en-2.png', alt: '東急住宅リース' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/5_partnerships_mizuho-capital_en.png', alt: 'Mizuho Capital' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/6_partnerships_jp-capital_en.png', alt: '三菱地所ハウスネット' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/7_clients_architectdeveloper.png', alt: 'ADI' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/8_clients_daikyo.png', alt: 'Daikyo' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/9_clients_mitsui-fudosan.png', alt: 'Mitsui Fudosan' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/10_clients_nihon-housing.png', alt: 'Nihon Housing' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/11_clients_areps.png', alt: 'Areps' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/12_partnerships_lixil_realty.png', alt: 'Lixil Realty' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/13_clients_anabuki-housing.png', alt: 'Anabuki Housing' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/14_clients_jog.png', alt: 'JOG' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/15_clients_hirota.png', alt: 'Hirota' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/16_clients_kosugi.png', alt: 'Kosugi' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/17_clients_takuto2.png', alt: 'Takuto' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/18_clients_kochi-house.png', alt: 'Kochi Housing' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/19_clients_ja-aichi.png', alt: 'JA Aichi' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/20_clients_3pukukanri.png', alt: '3PukuKanri' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/21_clients_keio_fudosan.png', alt: 'Keio Fudosan' },
    { src: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/slides/22_clients_mhe.png', alt: 'MHE' }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
