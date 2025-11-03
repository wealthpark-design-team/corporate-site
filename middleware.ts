import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 認証が不要なパス（静的ファイルなど）
  const publicPaths = ['/_next', '/favicon.ico', '/api/auth']
  const isPublicPath = publicPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  )

  if (isPublicPath) {
    return NextResponse.next()
  }

  // 環境変数から認証情報を取得
  const authEnabled = process.env.AUTH_ENABLED === 'true'

  // 本番環境でのみ認証を有効化
  if (!authEnabled) {
    return NextResponse.next()
  }

  // Basic認証のチェック
  const authHeader = request.headers.get('authorization')
  const validUsername = process.env.BASIC_AUTH_USER || 'admin'
  const validPassword = process.env.BASIC_AUTH_PASSWORD || 'password'

  if (!authHeader) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  const [scheme, credentials] = authHeader.split(' ')

  if (scheme !== 'Basic') {
    return new NextResponse('Invalid authentication', { status: 401 })
  }

  const [username, password] = Buffer.from(credentials, 'base64')
    .toString()
    .split(':')

  if (username !== validUsername || password !== validPassword) {
    return new NextResponse('Invalid credentials', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}