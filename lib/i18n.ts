import ja from '@/locales/ja.json'
import en from '@/locales/en.json'

const translations = {
  ja,
  en,
} as const

export type Locale = keyof typeof translations

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.ja
}
