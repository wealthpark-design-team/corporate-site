interface AboutSectionProps {
  t: any
}

export default function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t.title}</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            {t.description}
          </p>

          <div className="mb-12">
            <img
              src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/il_about-wpb.svg"
              alt="WealthParkビジネスで実現する、不動産管理のDX"
              loading="lazy"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UbyW5A9Shlg?rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-sm text-gray-600 py-4">{t.videoCaption}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
