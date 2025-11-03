# WealthPark Company Website

WealthPark株式会社のコーポレートサイト

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **ホスティング**: Vercel（開発環境）→ Kinsta（本番環境予定）

## 開発環境

```bash
# インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start
```

## 🚧 開発中の設定（本番公開前に要対応）

### 1. 認証機能（現在: 有効）

**現在の設定:**
- パスワード認証で保護されています
- パスワード: `wealthpark`
- 設定場所: `lib/auth.ts`

**本番公開時の対応:**
```typescript
// lib/auth.ts を編集
const AUTH_CONFIG = {
  enabled: false,  // false に変更
  password: 'wealthpark',
}
```

### 2. Googleインデックス拒否（現在: 有効）

**現在の設定:**
- `robots.txt`: すべてのクローラーを拒否
- `<meta>タグ`: noindex, nofollow

**本番公開時の対応:**
1. `app/robots.ts` を削除
2. `app/[locale]/layout.tsx` の16-20行目を削除：
   ```typescript
   // この部分を削除
   robots: {
     index: false,
     follow: false,
   },
   ```

### 3. 本番公開チェックリスト

- [ ] 認証機能を無効化（`lib/auth.ts`）
- [ ] Googleインデックス拒否を解除（`app/robots.ts` 削除、`layout.tsx` 編集）
- [ ] 本番ドメイン設定（`wealth-park.com`）
- [ ] Kinstaへのデプロイ設定

## 主要機能

### 多言語対応
- 日本語（`/ja`）と英語（`/en`）に対応
- URLベースのロケール管理
- 詳細: [多言語化ガイド](./docs/i18n-guide.md)

### WordPress連携（ヘッドレスCMS）
- 既存WordPressからREST API経由でコンテンツ取得
- ISR（3分キャッシュ）によるSEO対策
- 詳細: [WordPress連携ガイド](./docs/wordpress-integration.md)

### 認証機能
- コードベースの完全ポータブル認証
- 環境変数不要（コードで設定）
- 詳細: [認証ガイド](./docs/authentication-guide.md)

## デプロイ状況

### 現在（開発環境）
- **URL**: Vercelにデプロイ済み
- **状態**: パスワード保護 + インデックス拒否
- **GitHub**: https://github.com/wealthpark-design-team/corporate-site

### 今後（本番環境）
- **予定**: Kinstaへ移行
- **ドメイン**: wealth-park.com
- **状態**: 認証解除 + インデックス許可

## プロジェクト構造

```
company/
├── app/
│   ├── [locale]/          # 多言語ルーティング
│   ├── layout.tsx         # ルートレイアウト
│   └── robots.ts          # robots.txt生成（開発中のみ）
├── components/            # Reactコンポーネント
│   └── AuthWrapper.tsx   # 認証コンポーネント
├── lib/
│   ├── auth.ts           # 認証設定
│   └── wordpress.ts      # WordPress API
├── locales/              # 翻訳ファイル
│   ├── ja.json
│   └── en.json
└── docs/                 # ドキュメント
```

## ドキュメント

- [認証機能ガイド](./docs/authentication-guide.md) - パスワード保護の設定
- [多言語化ガイド](./docs/i18n-guide.md) - 翻訳の追加・編集方法
- [WordPress連携](./docs/wordpress-integration.md) - ヘッドレスCMS設定

## トラブルシューティング

### ビルドエラーが出る
```bash
rm -rf .next node_modules
npm install
npm run build
```

### ローカルで認証画面が出ない
- 正常な動作です（開発環境では認証スキップ）
- 本番環境でのみ認証が有効になります

### Vercelデプロイ後に404エラー
- Next.js 16は正式対応済み
- `next.config.ts`のリダイレクト設定を確認

## ライセンス

Private - WealthPark株式会社