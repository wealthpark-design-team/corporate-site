import { redirect } from 'next/navigation'

// Force dynamic rendering for Vercel
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function RootPage() {
  redirect('/ja')
}