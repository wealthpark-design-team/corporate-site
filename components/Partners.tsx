'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Partners({ locale }: { locale: string }) {
  const partners = [
    { name: 'OWL', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_owl.png' },
    { name: 'あおぞら銀行', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_aozora_bank_jp.png' },
    { name: 'Asahi Kasei', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_asahikasei.png' },
    { name: 'HPM', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_hpm.png' },
    { name: 'MJ Home', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/clients_mj-home-new.png' },
    { name: 'SBIインベストメント', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_sbi_Investment.png' },
    { name: 'Kochi House', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_kochi-house.png' },
    { name: 'Kosugi', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_kosugi.png' },
    { name: 'Sanwa', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_sanwa.png' },
    { name: 'jic', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_jic.png' },
    { name: 'J. Front Retailing', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_jfr_logo_eibun.png' },
    { name: 'Life Produce', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_life-produce.png' },
    { name: 'Takuto', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_takuto.png' },
    { name: 'Chuo Nittochi', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_chuo-nittochi.png' },
    { name: 'デジタルガレージ', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_dg.png' },
    { name: 'Tokyo Kaizyo', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_tokyo-kaizyo.png' },
    { name: 'Tokyu Fudousan', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_TokyuFudousan.png' },
    { name: 'Nine Holdings', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_nine-holdings.png' },
    { name: 'Nihon Agent', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_nihon-agant.png' },
    { name: '日本郵政キャピタル株式会社', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_japan_post_capital_jp.png' },
    { name: 'Hanshin Hankyu', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_hanshin-hankyu.png' },
    { name: 'Hirota', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_hirota.png' },
    { name: 'Visual Research', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_visual-research.png' },
    { name: 'みずほキャピタル', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_mizuho_capital_jp.png' },
    { name: 'Miyoshi', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_miyoshi.png' },
    { name: '横浜銀行', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partner_hamagin.png' },
    { name: 'W Juken', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/partnerships_watanabe.png' },
  ]

  const media = [
    { name: '全国賃貸住宅新聞', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_chintaijyutakushinbun.png', link: '' },
    { name: 'commercial observer', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/commercial_observer_jp.png', link: '' },
    { name: 'signal', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_signal.png', link: 'https://signal.diamond.jp/' },
    { name: 'techcrunch', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_tc.png', link: 'https://jp.techcrunch.com/' },
    { name: 'TOKYO MX', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_tokyomx.png', link: '' },
    { name: 'THE BRIDGE', image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/app/media_logo_thebridge.png', link: '' },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Partners */}
        <div className="mb-24">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">パートナー</h2>
              <div className="w-24 h-0.5 bg-gray-900"></div>
            </div>
            <p className="text-base text-gray-500">※五十音順</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center md:p-6 hover:opacity-70 transition-opacity">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="max-w-full h-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Media */}
        <div>
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">掲載メディア</h2>
              <div className="w-24 h-0.5 bg-gray-900"></div>
            </div>
            <p className="text-base text-gray-500">※五十音順</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {media.map((item, index) => {
              const content = (
                <div className="flex items-center justify-center md:p-6 hover:opacity-70 transition-opacity">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={80}
                    className="max-w-full h-auto object-contain"
                    unoptimized
                  />
                </div>
              )

              if (item.link) {
                return (
                  <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    {content}
                  </Link>
                )
              }

              return <div key={index}>{content}</div>
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
