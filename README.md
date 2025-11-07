# WealthPark Company Website

WealthPark株式会社のコーポレートサイト

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **UIライブラリ**: React 19
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
- 既存WordPress（https://wealth-park.com）から**REST API経由**でコンテンツ取得
- ISR（3分キャッシュ）によるSEO対策
- **Custom Post Type UI**プラグインで各投稿タイプのREST API公開を制御
- 詳細: [WordPress連携ガイド](./docs/wordpress-integration.md)

### 認証機能
- コードベースの完全ポータブル認証
- 環境変数不要（コードで設定）
- 詳細: [認証ガイド](./docs/authentication-guide.md)

### 背景アニメーション
- トップページ: Vanta.js Dotsエフェクト（3D背景）
- その他: CSSアニメーション
- 詳細: [デザインガイドライン](./docs/design-guide.md)

## デプロイ状況

### 現在（開発環境）
- **URL**: Vercelにデプロイ済み
- **状態**: パスワード保護 + インデックス拒否
- **GitHub**: https://github.com/wealthpark-design-team/corporate-site

### 今後（本番環境）
- **予定**: Kinstaへ移行
- **ドメイン**: wealth-park.com
- **状態**: 認証解除 + インデックス許可

## インフラ情報（Kinsta）

### 契約プラン
- **プラン名**: WP 5 Visits Monthly
- **料金**: 115 USD/月
- **次回請求日**: 2025年11月12日

### プラン仕様
- **ディスク容量**: 30 GB
- **WordPressサイト数**: 5件まで
- **訪問数**: 125,000回/月
- **CDN転送量**: 500 GB/月

### 現在の利用状況（2024年10月12日〜11月12日）
- **訪問数**: 122,216 / 125,000
- **CDN転送量**: 6.94 MB / 500 GB
- **ディスク使用状況**: 7.31 GB / 30 GB
- **WordPressサイト**: 3 / 5

### 利用可能なアドオン
- **ディスク容量の拡張**: 追加ストレージ購入可能
- **WordPressサイト管理枠の拡張**: サイト数上限引き上げ
- **外部バックアップ**: 外部サービスでバックアップ可能
- **PHPパフォーマンス**: メモリプール増強（10ドル/月/512 MB）

### Kinstaでの本番環境構成（Next.js + WordPress）

#### 必要なサービス
このNext.jsサイトをKinstaで本番運用する場合、以下2つのサービスが必要：

1. **WordPress Hosting（現在契約中）**
   - 料金: 115 USD/月
   - 用途: ヘッドレスCMS（REST API提供）
   - ドメイン: `wp.wealth-park.com`

2. **Application Hosting（追加契約が必要）**
   - 料金: 7〜30 USD/月（プランによる）
   - 用途: Next.jsサイトのホスティング
   - ドメイン: `wealth-park.com`

#### 合計コスト
```
WordPress Hosting: 115 USD/月
Application Hosting: 7〜30 USD/月
─────────────────────────────
合計: 122〜145 USD/月
```

#### 本番環境の構成図
```
┌─────────────────────────────┐
│ Kinsta WordPress Hosting    │
│ wp.wealth-park.com          │
│ （ヘッドレスCMS）            │
│  - 記事コンテンツ管理        │
│  - REST API提供              │
└─────────────────────────────┘
         ↓ REST API
┌─────────────────────────────┐
│ Kinsta Application Hosting  │
│ wealth-park.com             │
│ （Next.js フロントエンド）   │
│  - ユーザー向けサイト        │
└─────────────────────────────┘
```

#### ダウンタイムを最小化した移行フロー

1. **新しいWordPressサイトを作成**（WordPressサイト枠を1つ使用）
   - 現在の本番WordPressデータをコピー
   - ドメイン: `staging.wealth-park.com`（仮）

2. **Application Hostingで Next.jsサイトを作成**
   - GitHub連携で自動デプロイ
   - 環境変数: `NEXT_PUBLIC_WP_API_URL=https://staging.wealth-park.com/wp-json/wp/v2`
   - ドメイン: `next-staging.wealth-park.com`（仮）

3. **ステージング環境で動作確認**
   - 完全にテストして問題ないことを確認

4. **本番環境へ切り替え**
   - 旧WordPress: `wealth-park.com` → `old.wealth-park.com`（バックアップ）
   - 新WordPress: `staging.wealth-park.com` → `wp.wealth-park.com`
   - Next.js: `next-staging.wealth-park.com` → `wealth-park.com`
   - 環境変数更新: `NEXT_PUBLIC_WP_API_URL=https://wp.wealth-park.com/wp-json/wp/v2`

5. **安定稼働確認後**
   - 旧WordPressサイトを削除（1ヶ月後を目安）
   - コスト最適化完了

#### 注意点
- WordPress Hostingだけでは**Next.jsは動作しない**（PHPベースのWordPress専用）
- Next.jsをKinstaで動かすには**Application Hostingの追加契約が必須**
- Application Hostingは**WordPress Hostingとは別料金**
- 切り戻しが必要な場合に備え、移行後1ヶ月は旧環境を残すことを推奨

## プロジェクト構造

```
company/
├── app/
│   ├── [locale]/          # 多言語ルーティング
│   ├── layout.tsx         # ルートレイアウト
│   └── robots.ts          # robots.txt生成（開発中のみ）
├── components/            # Reactコンポーネント
│   ├── Header.tsx        # 企業ページ用ヘッダー
│   ├── business/
│   │   └── BusinessHeader.tsx  # ビジネス製品サイト用ヘッダー
│   └── AuthWrapper.tsx   # 認証コンポーネント
├── lib/
│   ├── auth.ts           # 認証設定
│   └── wordpress.ts      # WordPress API
├── locales/              # 翻訳ファイル
│   ├── ja.json
│   └── en.json
└── docs/                 # ドキュメント
```

## ページ構成とヘッダー

### 基本構造
このサイトは **企業サイト** が基本ですが、`/business` 配下のみ **製品サイト（WealthParkビジネス）** として別のヘッダーを使用します。

### ヘッダーの使い分け

#### 企業ページ（`Header.tsx`）
- **使用ページ**: `/business` 配下を除く全ページ
- **例**:
  - `/ja/` - トップページ
  - `/ja/corporate/company` - 会社概要
  - `/ja/careers` - 採用
  - `/ja/park` - 採用オウンドメディア
  - `/ja/blog` - WealthParkブログ
  - その他企業情報ページ

#### ビジネス製品サイト（`BusinessHeader.tsx`）
- **使用ページ**: `/business` 配下のみ
- **例**:
  - `/ja/business` - WealthParkビジネスTOP
  - `/ja/business/release-note` - プロダクト改善・新機能

#### 将来の展望
`/business` 配下は将来的にサブドメイン（例: `business.wealth-park.com`）として切り出す可能性があります。

## ドキュメント

- [デザインガイドライン](./docs/design-guide.md) - UIライブラリ・デザインシステム
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