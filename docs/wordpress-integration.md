# WordPress連携ガイド（ヘッドレスCMS）

## 概要

既存WordPress（https://wealth-park.com）からREST API経由でコンテンツを取得しています。

## ヘッドレスCMSとは

WordPress（管理）とNext.js（表示）を分離するアーキテクチャです。

```
WordPress (PHP)               Next.js (React/TypeScript)
├── コンテンツ管理            ├── 表示
└── REST API提供  ←─────→   └── APIからデータ取得
```

## メリット

- ✅ フロントエンド技術の自由度
- ✅ 高速なパフォーマンス（ISR）
- ✅ セキュリティ向上
- ✅ スケーラビリティ

## SEO対策（ISR）

ISR（Incremental Static Regeneration）を採用：
- サーバー側でHTMLを生成
- 3分間キャッシュ
- SEO的に問題なし

## 取得可能な投稿タイプ

### ✅ 取得可能
- **park**: 採用オウンドメディア記事
  - エンドポイント: `/wp-json/wp/v2/park`
  - 使用: `/ja/park/`, `/en/park/`

### ❌ 未対応（REST API無効）
- **news**: ニュース記事
- **wealthpark**: ブログ記事

WordPress側で`show_in_rest => true`の設定が必要です。

## 実装ファイル

- **APIクライアント**: `lib/wordpress.ts`
- **Park記事表示**: `app/[locale]/park/page.tsx`

## トラブルシューティング

### 記事が表示されない
1. WordPressサーバーの稼働確認
2. エンドポイントの確認: `https://wealth-park.com/wp-json/wp/v2/park`
3. CORSエラーの確認