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
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white overflow-hidden">
      <div className="inline-flex animate-scroll">
        {/* 1セット目 */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-[60px] md:h-[72px] w-auto object-contain"
            />
          </div>
        ))}
        {/* 2セット目（シームレスなループのため） */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-[60px] md:h-[72px] w-auto object-contain"
            />
          </div>
        ))}
        {/* 3セット目（左右端でも切れないように） */}
        {logos.map((logo, index) => (
          <div
            key={`third-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-[60px] md:h-[72px] w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
          will-change: transform;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
