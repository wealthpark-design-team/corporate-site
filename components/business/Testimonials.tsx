interface TestimonialsProps {
  t: any
}

export default function Testimonials({ t }: TestimonialsProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/video/business/case_mjhn_bg.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 管理会社の声 */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-8">{t.managementTitle}</h2>

            <div className="space-y-6">
              <div>
                <p className="text-xl mb-3 leading-relaxed">{t.quote1}</p>
                <p className="text-sm text-gray-400">― {t.ref1}</p>
              </div>

              <div>
                <p className="text-xl mb-3 leading-relaxed">{t.quote2}</p>
                <p className="text-sm text-gray-400">― {t.ref2}</p>
              </div>

              <div>
                <p className="text-xl mb-3 leading-relaxed">{t.quote3}</p>
                <p className="text-sm text-gray-400">― {t.ref3}</p>
              </div>

              <div>
                <p className="text-xl mb-3 leading-relaxed">{t.quote4}</p>
                <p className="text-sm text-gray-400">― {t.ref4}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full aspect-video bg-black/30 rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/w4rQJCNvpwc?si=vtU_qVnX6ql3bGt2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* オーナーの声 */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center order-2 md:order-1">
            <div className="w-full aspect-video bg-black/30 rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/T3deBwuhiH8"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-8">{t.ownerTitle}</h2>

            <div className="space-y-6">
              <div>
                <p className="text-xl mb-3 leading-relaxed">{t.ownerQuote1}</p>
              </div>

              <div>
                <p className="text-xl mb-3 leading-relaxed">{t.ownerQuote2}</p>
              </div>

              <div>
                <p className="text-xl mb-3 leading-relaxed">{t.ownerQuote3}</p>
              </div>

              <div>
                <p className="text-xl mb-3 leading-relaxed">{t.ownerQuote4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
