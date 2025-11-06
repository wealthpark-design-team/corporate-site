import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getTranslations, Locale } from '@/lib/i18n'
import { getBlogPostBySlug } from '@/lib/wordpress'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const localeKey = locale as Locale
  const t = getTranslations(localeKey)

  // WordPress APIから記事詳細を取得
  const post = await getBlogPostBySlug(slug, localeKey)

  // 記事が見つからない場合は404
  if (!post) {
    notFound()
  }

  return (
    <>
      <Header locale={localeKey} />
      <main className="pt-header lg:pt-header-desktop bg-white">
        {/* 記事ヘッダー - 元のデザインに合わせてシンプルに */}
        <article className="py-8 md:py-12">
          {/* メインコンテンツ - 狭めの最大幅 */}
          <div className="max-w-3xl mx-auto px-6">
            {/* カテゴリーと日付 */}
            <div className="flex items-center gap-3 mb-4">
              {post.category && (
                <span className="text-xs font-medium px-3 py-1 bg-gray-900 text-white rounded">
                  {post.category}
                </span>
              )}
              <time className="text-sm text-gray-500">{post.date}</time>
            </div>

            {/* タイトル */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-900 leading-snug">
              {post.title}
            </h1>

            {/* アイキャッチ画像 */}
            {post.image && (
              <div className="mb-10">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            )}

            {/* 記事本文 - 元のデザインに合わせたスタイリング */}
            <div
              className="article-content
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-gray-900
                [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-gray-900
                [&>h4]:text-lg [&>h4]:font-bold [&>h4]:mt-8 [&>h4]:mb-3 [&>h4]:text-gray-900
                [&>p]:text-base [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6
                [&>ul]:my-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2
                [&>ol]:my-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
                [&>li]:text-gray-700 [&>li]:leading-relaxed
                [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-6 [&>blockquote]:my-6 [&>blockquote]:italic [&>blockquote]:text-gray-600
                [&>img]:w-full [&>img]:h-auto [&>img]:my-8 [&>img]:rounded
                [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-700
                [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-6 [&>pre]:rounded [&>pre]:overflow-x-auto [&>pre]:my-6
                [&>code]:text-sm [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded
                [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse
                [&_th]:bg-gray-100 [&_th]:border [&_th]:border-gray-300 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left
                [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* 戻るリンク */}
        <section className="py-12 px-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              ブログ記事一覧に戻る
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={localeKey} />
    </>
  )
}
