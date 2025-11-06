'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Partners({ locale }: { locale: string }) {
  const partners = [
    { name: 'OWL', image: '/images/partners/partnerships_owl.png' },
    { name: 'あおぞら銀行', image: '/images/partners/partner_aozora_bank_jp.png' },
    { name: 'Asahi Kasei', image: '/images/partners/partnerships_asahikasei.png' },
    { name: 'HPM', image: '/images/partners/partnerships_hpm.png' },
    { name: 'MJ Home', image: '/images/other/clients_mj-home-new.png' },
    { name: 'SBIインベストメント', image: '/images/partners/partner_sbi_Investment.png' },
    { name: 'Kochi House', image: '/images/partners/partnerships_kochi-house.png' },
    { name: 'Kosugi', image: '/images/partners/partnerships_kosugi.png' },
    { name: 'Sanwa', image: '/images/partners/partnerships_sanwa.png' },
    { name: 'jic', image: '/images/partners/partner_jic.png' },
    { name: 'J. Front Retailing', image: '/images/partners/partnerships_jfr_logo_eibun.png' },
    { name: 'Life Produce', image: '/images/partners/partnerships_life-produce.png' },
    { name: 'Takuto', image: '/images/partners/partnerships_takuto.png' },
    { name: 'Chuo Nittochi', image: '/images/partners/partnerships_chuo-nittochi.png' },
    { name: 'デジタルガレージ', image: '/images/partners/partner_dg.png' },
    { name: 'Tokyo Kaizyo', image: '/images/partners/partnerships_tokyo-kaizyo.png' },
    { name: 'Tokyu Fudousan', image: '/images/partners/partnerships_TokyuFudousan.png' },
    { name: 'Nine Holdings', image: '/images/partners/partnerships_nine-holdings.png' },
    { name: 'Nihon Agent', image: '/images/partners/partnerships_nihon-agant.png' },
    { name: '日本郵政キャピタル株式会社', image: '/images/partners/partner_japan_post_capital_jp.png' },
    { name: 'Hanshin Hankyu', image: '/images/partners/partnerships_hanshin-hankyu.png' },
    { name: 'Hirota', image: '/images/partners/partnerships_hirota.png' },
    { name: 'Visual Research', image: '/images/partners/partnerships_visual-research.png' },
    { name: 'みずほキャピタル', image: '/images/partners/partner_mizuho_capital_jp.png' },
    { name: 'Miyoshi', image: '/images/partners/partnerships_miyoshi.png' },
    { name: '横浜銀行', image: '/images/partners/partner_hamagin.png' },
    { name: 'W Juken', image: '/images/partners/partnerships_watanabe.png' },
  ]

  const media = [
    { name: '全国賃貸住宅新聞', image: '/images/other/media_logo_chintaijyutakushinbun.png', link: '' },
    { name: 'commercial observer', image: '/images/other/commercial_observer_jp.png', link: '' },
    { name: 'signal', image: '/images/other/media_logo_signal.png', link: 'https://signal.diamond.jp/' },
    { name: 'techcrunch', image: '/images/other/media_logo_tc.png', link: 'https://jp.techcrunch.com/' },
    { name: 'TOKYO MX', image: '/images/other/media_logo_tokyomx.png', link: '' },
    { name: 'THE BRIDGE', image: '/images/other/media_logo_thebridge.png', link: '' },
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
