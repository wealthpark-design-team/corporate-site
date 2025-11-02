'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // パスから現在のロケールを除去して新しいロケールに置き換え
  const getLocalizedPath = (locale: string) => {
    const segments = pathname.split('/').filter(Boolean)
    segments[0] = locale
    return `/${segments.join('/')}`
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
      >
        {currentLocale.toUpperCase()}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-1 w-16 bg-white rounded shadow-lg border border-gray-200 py-1 z-50">
            <Link
              href={getLocalizedPath('ja')}
              className={`block px-3 py-2 text-sm text-center hover:bg-gray-50 ${
                currentLocale === 'ja' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              JA
            </Link>
            <Link
              href={getLocalizedPath('en')}
              className={`block px-3 py-2 text-sm text-center hover:bg-gray-50 ${
                currentLocale === 'en' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              EN
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
