import { NextRequest, NextResponse } from 'next/server'

const locales = ['ja', 'en']
const defaultLocale = 'ja'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 静的ファイルやAPIルートは無視
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 既にロケールが含まれているかチェック
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // ルートパス（/）の場合はデフォルトロケールにリダイレクト
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|api|static).*)'],
}
