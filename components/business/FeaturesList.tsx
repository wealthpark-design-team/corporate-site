interface FeaturesListProps {
  t: any
}

export default function FeaturesList({ t }: FeaturesListProps) {
  const features = [
    {
      title: t.cashflow.title,
      description: t.cashflow.description,
      url: 'https://wealth-park.com/ja/business/features/cashflow/',
      icon: '💰'
    },
    {
      title: t.chat.title,
      description: t.chat.description,
      url: 'https://wealth-park.com/ja/business/features/chat/',
      icon: '💬'
    },
    {
      title: t.workflow.title,
      description: t.workflow.description,
      url: 'https://wealth-park.com/ja/business/features/workflow/',
      icon: '✓'
    },
    {
      title: t.storage.title,
      description: t.storage.description,
      url: 'https://wealth-park.com/ja/business/features/document-storage/',
      icon: '📄'
    },
    {
      title: t.language.title,
      description: t.language.description,
      url: 'https://wealth-park.com/ja/business/features/multiple-language/',
      icon: '🌐'
    },
    {
      title: t.security.title,
      description: t.security.description,
      url: 'https://wealth-park.com/ja/business/features/security/',
      icon: '🔒'
    },
    {
      title: t.pocket.title,
      description: t.pocket.description,
      url: 'https://wealth-park.com/ja/business/features/wpb-pocket/',
      icon: '📱'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.url}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-blue-600 text-sm font-semibold group-hover:underline">
                {t.viewDetail}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
