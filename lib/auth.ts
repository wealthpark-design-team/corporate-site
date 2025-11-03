/**
 * ポータブル認証ヘルパー
 * コードだけで完結する完全ポータブル実装
 */

// 認証設定（ここで直接設定）
const AUTH_CONFIG = {
  enabled: true,
  password: 'wealthpark',
}

// 環境変数からパスワードを取得（環境変数が設定されていればそちらを優先）
export function getAuthPassword(): string | null {
  // 環境変数が設定されていればそれを使用（オプション）
  if (typeof window === 'undefined') {
    const envPassword = process.env.AUTH_PASSWORD
    if (envPassword) return envPassword
  } else {
    const envPassword = process.env.NEXT_PUBLIC_AUTH_PASSWORD
    if (envPassword) return envPassword
  }

  // デフォルトはコード内の設定を使用
  return AUTH_CONFIG.password
}

// 認証が有効かチェック
export function isAuthEnabled(): boolean {
  // 環境変数が設定されていればそれを使用（オプション）
  if (typeof window === 'undefined') {
    if (process.env.AUTH_ENABLED !== undefined) {
      return process.env.AUTH_ENABLED === 'true'
    }
  } else {
    if (process.env.NEXT_PUBLIC_AUTH_ENABLED !== undefined) {
      return process.env.NEXT_PUBLIC_AUTH_ENABLED === 'true'
    }
  }

  // デフォルトはコード内の設定を使用
  return AUTH_CONFIG.enabled
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