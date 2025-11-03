# 多言語対応ガイド

## 概要

このサイトは日本語（ja）と英語（en）の2言語に対応しています。

## URLベースのロケール管理

- 日本語: `https://example.com/ja/`
- 英語: `https://example.com/en/`

## 翻訳の追加・編集

### 既存翻訳の編集

`locales/ja.json` または `locales/en.json` を編集：

```json
{
  "hero": {
    "title1": "すべての人へ",
    "title2": "オルタナティブ資産への",
    "title3": "投資機会を。"
  }
}
```

### 新しい翻訳の追加

1. 両方のファイルに同じキーを追加
2. コンポーネントで使用：

```typescript
export default async function Page({ params }) {
  const { locale } = await params
  const t = getTranslations(locale)

  return <h1>{t.hero.title1}</h1>
}
```

## 新しい言語の追加

1. `locales/fr.json` を作成（例：フランス語）
2. `lib/i18n.ts` を更新
3. `LanguageSwitcher.tsx` に選択肢を追加

詳細は元のREADMEを参照してください。