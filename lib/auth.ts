/**
 * ポータブル認証ヘルパー
 * どのホスティング環境でも動作する汎用的な実装
 */

// 環境変数からパスワードを取得
export function getAuthPassword(): string | null {
  // サーバーサイド環境変数（推奨）
  if (typeof window === 'undefined') {
    return process.env.AUTH_PASSWORD || null
  }

  // クライアントサイド環境変数（ビルド時に埋め込み）
  return process.env.NEXT_PUBLIC_AUTH_PASSWORD || null
}

// 認証が有効かチェック
export function isAuthEnabled(): boolean {
  if (typeof window === 'undefined') {
    return process.env.AUTH_ENABLED === 'true'
  }
  return process.env.NEXT_PUBLIC_AUTH_ENABLED === 'true'
}

// パスワード検証
export function verifyPassword(inputPassword: string): boolean {
  const validPassword = getAuthPassword()
  if (!validPassword) return true // パスワード未設定なら認証なし
  return inputPassword === validPassword
}

// セッション管理（ブラウザ標準API）
export const authSession = {
  set: () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('auth', 'true')
    }
  },
  check: (): boolean => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem('auth') === 'true'
  },
  clear: () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('auth')
    }
  }
}