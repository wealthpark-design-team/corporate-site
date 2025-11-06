/**
 * WordPress REST API クライアント
 *
 * WealthParkのWordPressサイトから記事データを取得するための汎用クライアント
 * 対応投稿タイプ: park, news, wealthpark
 */

const WP_API_URL = 'https://wealth-park.com/wp-json/wp/v2'

// WordPress投稿の型定義
export interface WordPressPost {
  id: number
  date: string
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  link: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
    }>>
  }
}

// アプリケーションで使用する記事の型
export interface Post {
  date: string
  category: string
  title: string
  image: string
  link: string
  slug?: string
}

// 詳細記事の型
export interface PostDetail {
  id: number
  slug: string
  date: string
  category: string
  title: string
  content: string
  image: string
}

/**
 * WordPress投稿を取得
 *
 * @param postType - カスタム投稿タイプ名 ('park', 'news', 'wealthpark')
 * @param limit - 取得件数（デフォルト: 10）
 * @param locale - 言語コード ('ja', 'en')
 * @param tags - タグIDの配列（オプション）
 * @returns Post型の配列
 */
export async function getPosts(
  postType: string,
  limit: number = 10,
  locale: string = 'ja',
  tags?: number[]
): Promise<Post[]> {
  try {
    let url = `${WP_API_URL}/${postType}?per_page=${limit}&_embed&lang=${locale}`

    // タグフィルタリング
    if (tags && tags.length > 0) {
      url += `&tags=${tags.join(',')}`
    }

    const res = await fetch(url, {
      next: { revalidate: 180 } // 3分キャッシュ（リロード連打防止）
    })

    if (!res.ok) {
      console.error(`WordPress API error: ${res.status} ${res.statusText}`)
      return []
    }

    const posts: WordPressPost[] = await res.json()

    return posts.map((post) => ({
      date: formatDate(post.date),
      category: extractCategory(post),
      title: post.title.rendered,
      image: extractFeaturedImage(post),
      link: post.link,
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Failed to fetch WordPress posts:', error)
    return []
  }
}

/**
 * Park記事を取得
 */
export async function getParkPosts(limit: number = 10, locale: string = 'ja'): Promise<Post[]> {
  return getPosts('park', limit, locale)
}

/**
 * ニュース記事を取得
 */
export async function getNewsPosts(limit: number = 10, locale: string = 'ja'): Promise<Post[]> {
  return getPosts('news', limit, locale)
}

/**
 * ブログ記事を取得
 */
export async function getBlogPosts(limit: number = 10, locale: string = 'ja'): Promise<Post[]> {
  return getPosts('wealthpark', limit, locale)
}

/**
 * プロダクト改善・新機能の記事を取得（タグID: 86）
 */
export async function getProductNewsPosts(limit: number = 10, locale: string = 'ja'): Promise<Post[]> {
  return getPosts('wealthpark', limit, locale, [86])
}

/**
 * 個別投稿をslugで取得
 *
 * @param postType - カスタム投稿タイプ名 ('park', 'news', 'wealthpark')
 * @param slug - 投稿のスラッグ
 * @param locale - 言語コード ('ja', 'en')
 * @returns PostDetail型のオブジェクト、見つからない場合はnull
 */
export async function getPostBySlug(
  postType: string,
  slug: string,
  locale: string = 'ja'
): Promise<PostDetail | null> {
  try {
    const url = `${WP_API_URL}/${postType}?slug=${slug}&_embed&lang=${locale}`

    const res = await fetch(url, {
      next: { revalidate: 180 } // 3分キャッシュ（リロード連打防止）
    })

    if (!res.ok) {
      console.error(`WordPress API error: ${res.status} ${res.statusText}`)
      return null
    }

    const posts: WordPressPost[] = await res.json()

    if (posts.length === 0) {
      return null
    }

    const post = posts[0]

    return {
      id: post.id,
      slug: post.slug,
      date: formatDate(post.date),
      category: extractCategory(post),
      title: post.title.rendered,
      content: post.content.rendered,
      image: extractFeaturedImage(post),
    }
  } catch (error) {
    console.error('Failed to fetch WordPress post:', error)
    return null
  }
}

/**
 * Park記事の詳細を取得
 */
export async function getParkPostBySlug(slug: string, locale: string = 'ja'): Promise<PostDetail | null> {
  return getPostBySlug('park', slug, locale)
}

/**
 * ニュース記事の詳細を取得
 */
export async function getNewsPostBySlug(slug: string, locale: string = 'ja'): Promise<PostDetail | null> {
  return getPostBySlug('news', slug, locale)
}

/**
 * ブログ記事の詳細を取得
 */
export async function getBlogPostBySlug(slug: string, locale: string = 'ja'): Promise<PostDetail | null> {
  return getPostBySlug('wealthpark', slug, locale)
}

// ヘルパー関数

/**
 * 日付をフォーマット (YYYY.MM.DD)
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

/**
 * カテゴリーを抽出
 */
function extractCategory(post: WordPressPost): string {
  const terms = post._embedded?.['wp:term']
  if (!terms || terms.length === 0) return ''

  // 最初のタクソノミーの最初のタームを返す
  const firstTaxonomy = terms[0]
  return firstTaxonomy && firstTaxonomy.length > 0 ? firstTaxonomy[0].name : ''
}

/**
 * アイキャッチ画像URLを抽出
 */
function extractFeaturedImage(post: WordPressPost): string {
  const media = post._embedded?.['wp:featuredmedia']
  if (!media || media.length === 0) return ''

  return media[0].source_url || ''
}
