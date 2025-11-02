'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // localStorageで同意状態をチェック
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    // localStorageに同意を保存
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-900 flex-1">
          当サイトではCookieを使用して、サイトの利便性向上やサービスの改善に役立てています。Cookieの使用に同意いただける場合は「同意する」をクリックしてください。詳しくは
          <a href="/privacy" className="underline hover:text-gray-700 ml-1">
            プライバシーポリシー
          </a>
          をご覧ください。
        </p>
        <button
          onClick={handleAccept}
          className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
        >
          同意する
        </button>
      </div>
    </div>
  )
}
