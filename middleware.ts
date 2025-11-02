import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ルートパスの場合のみ /ja にリダイレクト
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ja', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
