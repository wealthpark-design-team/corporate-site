import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // 開発中はインデックスを拒否
  // 本番公開時にこのファイルを削除または編集してください
  const isDevelopment = process.env.NEXT_PUBLIC_INDEXING_DISABLED !== 'false'

  if (isDevelopment) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  // 本番公開後の設定（現在は使用されない）
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://wealth-park.com/sitemap.xml',
  }
}