interface ThreePointsProps {
  t: any
}

export default function ThreePoints({ t }: ThreePointsProps) {
  const points = [
    {
      title: t.point1Title,
      description: t.point1Description,
      image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/point_001.png'
    },
    {
      title: t.point2Title,
      description: t.point2Description,
      image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/business_top_point2.png',
      reverse: true
    },
    {
      title: t.point3Title,
      description: t.point3Description,
      image: 'https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/business_top_point3.png'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {points.map((point, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center mb-20 last:mb-0 pb-20 border-b border-gray-300 md:border-b-0 last:border-b-0 ${
              point.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className={point.reverse ? 'md:order-2' : ''}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{point.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{point.description}</p>
            </div>
            <div className={point.reverse ? 'md:order-1' : ''}>
              <img
                src={point.image}
                alt={point.title}
                loading="lazy"
                className="w-[70%] h-auto rounded-lg mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
