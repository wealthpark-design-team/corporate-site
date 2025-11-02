import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WealthPark株式会社',
  description: 'すべての人に代替資産への投資機会を',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
