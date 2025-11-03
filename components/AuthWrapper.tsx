'use client'

import { useState, useEffect } from 'react'
import { isAuthEnabled, verifyPassword, authSession } from '@/lib/auth'

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // ローカル開発環境では認証をスキップ
    if (process.env.NODE_ENV === 'development') {
      setIsAuthenticated(true)
      setIsLoading(false)
      return
    }

    // 認証が無効な場合はスキップ
    if (!isAuthEnabled()) {
      setIsAuthenticated(true)
      setIsLoading(false)
      return
    }

    // セッションストレージから認証状態を確認
    if (authSession.check()) {
      setIsAuthenticated(true)
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string

    if (verifyPassword(password)) {
      authSession.set()
      setIsAuthenticated(true)
    } else {
      alert('パスワードが正しくありません')
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">読み込み中...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            WealthPark Preview Site
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            このサイトは開発中のプレビュー版です。<br />
            アクセスするにはパスワードが必要です。
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              name="password"
              placeholder="パスワードを入力"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              アクセス
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            パスワードが分からない場合は管理者にお問い合わせください
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}