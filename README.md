# WealthPark Company Website

WealthPark株式会社のコーポレートサイト

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **開発環境**: Node.js
- **バージョン管理**: GitHub
- **ホスティング**: Vercel

## デプロイ状況

### ✅ 完了
- GitHubリポジトリへのプッシュ: https://github.com/wealthpark-design-team/corporate-site
- Vercelへの自動デプロイ設定完了

### ⚠️ 未実装・課題
- **認証機能**: 現在、サイトは公開状態です。Vercel Deployment Protectionやミドルウェアでの認証実装が必要です
- **middlewareエラー**: Next.js 16でmiddleware.tsがVercel環境でエラーを起こすため、app/page.tsxでのリダイレクトに変更しました

### 🐛 トラブルシューティング履歴

#### Issue 1: SSH認証エラー
**問題**: GitHubへのプッシュ時に`Permission denied to matsumotokaya`エラー
**原因**: SSH鍵が誤ったGitHubアカウント（matsumotokaya）に登録されていた
**解決**:
1. SSH agentのキャッシュをクリア: `ssh-add -D`
2. 正しいアカウント（kayamatsumoto）にSSH鍵を登録
3. `~/.ssh/config`に`IdentitiesOnly yes`を追加

#### Issue 2: Vercelで500エラー（MIDDLEWARE_INVOCATION_FAILED）
**問題**: デプロイ後に`500: INTERNAL_SERVER_ERROR`が発生
**原因**: Next.js 16のmiddleware.tsがVercel環境で正常に動作しない
**試行した解決策**:
1. ❌ middlewareのmatcher設定を変更 → 効果なし
2. ❌ middleware.tsをproxy.tsにリネーム → ビルドエラー
3. ✅ middlewareを削除し、`app/page.tsx`で`redirect('/ja')`を実装

**現在の状態**: middlewareなしで、ルートページから/jaへリダイレクトする方式で動作中

#### Issue 3: Vercel 404エラー（継続中）
**問題**: デプロイ後に`404: NOT_FOUND`が発生
**調査結果**:
1. ✅ **ローカル環境**: プロダクションビルド（`npm run build && npm start`）で正常動作
   ```
   HTTP/1.1 307 Temporary Redirect
   location: /ja
   ```
2. ❌ **Vercel環境**: 同じコードで404エラー
3. **原因**: Next.js 16とVercelの互換性問題の可能性が高い

**解決策（2つのアプローチ）**:

##### 推奨: Option 1 - Next.js 15へダウングレード
```bash
npm install next@15.0.0 react@18.2.0 react-dom@18.2.0
npm run build  # 動作確認
git add package.json package-lock.json
git commit -m "Downgrade to Next.js 15 for Vercel compatibility"
git push
```
**理由**: Next.js 15はVercelで安定動作が確認されています

##### 代替案: Option 2 - vercel.jsonでリダイレクト設定
プロジェクトルートに`vercel.json`を作成：
```json
{
  "redirects": [
    {
      "source": "/",
      "destination": "/ja",
      "permanent": false
    }
  ]
}
```

**推奨**: まずOption 1（ダウングレード）を試してください。それで解決しない場合はOption 2を追加してください。

#### 今後の対応が必要な項目
- [ ] Vercel 404エラーの解決（上記Option 1または2を実行）
- [ ] Vercel Deployment Protectionの設定（パスワード保護）
- [ ] 本番ドメインの設定
- [ ] Next.js 16への再アップグレード検討（Vercel対応後）

## サイト構成（サイトマップ）

このプロジェクトは、WealthParkのコーポレートサイトとビジネスサイトを統合管理しています。

### ドメイン構成（予定）

本番環境では以下のドメイン構成を予定：

```
コーポレートサイト
├── https://wealth-park.com/
│   ├── /ja/                    # 日本語トップページ
│   ├── /en/                    # 英語トップページ
│   ├── /ja/corporate/company/  # 会社概要
│   ├── /ja/careers/            # 採用情報
│   └── ...

ビジネスサイト（サブドメイン）
└── https://business.wealth-park.com/
    ├── /ja/                    # 日本語ビジネストップ
    ├── /en/                    # 英語ビジネストップ
    ├── /ja/features/           # 機能一覧
    ├── /ja/case-study/         # 導入事例
    └── ...
```

### 開発環境のURL構成

開発環境では、パスベースで構成を再現：

```
http://localhost:3000/
├── /ja/                        # コーポレートトップ（日本語）
├── /en/                        # コーポレートトップ（英語）
├── /ja/business/               # ビジネストップ（日本語）
├── /en/business/               # ビジネストップ（英語）
├── /ja/corporate/company/      # 会社概要（予定）
├── /ja/careers/                # 採用情報（予定）
└── ...
```

### サイト間の関係

- **コーポレートサイト**: 企業情報、採用情報、ニュースなど
- **ビジネスサイト**: WealthParkビジネスの製品情報、機能紹介、導入事例など
- **パンくずリスト**: ビジネスサイトからコーポレートサイトへ戻る導線を提供

### デプロイ時の設定

本番環境では、リバースプロキシまたはNext.jsの設定により、以下のように振り分けます：

```nginx
# Nginx等のリバースプロキシ設定例
server {
  server_name business.wealth-park.com;
  location / {
    proxy_pass http://localhost:3000/ja/business;
  }
}

server {
  server_name wealth-park.com;
  location / {
    proxy_pass http://localhost:3000;
  }
}
```

## WordPress REST API連携（ヘッドレスCMS）

### 概要

このサイトは**ヘッドレスCMS**アーキテクチャを採用しており、既存のWordPress（https://wealth-park.com）からREST API経由で記事データを取得しています。

### ヘッドレスCMSとは

**ヘッドレスCMS**は、コンテンツ管理（WordPress）と表示（Next.js）を分離するモダンなWebアーキテクチャです。

#### 従来のWordPress
```
WordPress (PHP)
├── コンテンツ管理
└── 表示（PHPテンプレート）
    → 同じサーバーで完結
```

#### ヘッドレスCMS（このプロジェクト）
```
WordPress (PHP)               Next.js (React/TypeScript)
├── コンテンツ管理            ├── 表示
└── REST API提供  ←─────→   └── APIからデータ取得
   (別サーバー)                  (別サーバー)
```

#### メリット
- ✅ **フロントエンド技術の自由度** - React, Next.js, Tailwind CSSなど最新技術を活用
- ✅ **高速なパフォーマンス** - ISR（Incremental Static Regeneration）による高速表示
- ✅ **セキュリティ向上** - WordPress本体を非公開にできる
- ✅ **スケーラビリティ** - フロントとバックエンドを独立してスケール可能
- ✅ **マルチチャネル配信** - 同じコンテンツを複数のサイト/アプリに配信可能

#### デメリット
- ⚠️ **追加の通信** - ページ表示のたびにWordPress APIへリクエストが必要
- ⚠️ **WordPressの負荷増加** - REST APIリクエストごとにPHP処理が実行される
- ⚠️ **依存関係** - WordPressサーバーがダウンすると記事が表示されない

### SEO対策（ISR採用）

このプロジェクトは**ISR (Incremental Static Regeneration)** を採用しており、**SEO的に問題ありません**。

#### ISRによるSEO対策
- ✅ **サーバー側でHTMLを生成** - 検索エンジンが記事タイトル・本文を正しく認識
- ✅ **静的HTMLの配信** - 高速表示とSEOを両立
- ✅ **3分間キャッシュ** - WordPressで記事を更新すると最大3分で反映

#### 検索エンジンが受け取るHTML
```html
<!-- 検索エンジン（Googlebot等）が見るHTML -->
<article>
  <h1>社員インタビュー: エンジニアの働き方</h1>
  <div>WealthParkのエンジニアとして働く魅力を...</div>
</article>
```
→ 記事の内容がHTMLに含まれているため、検索エンジンに正しくインデックスされます

#### 他の方式との比較

| レンダリング方式 | SEO | 表示速度 | 更新反映 | このプロジェクト |
|----------------|-----|---------|---------|-----------------|
| **CSR** (Client-Side) | ❌ 不利 | 普通 | 即座 | 使用していない |
| **SSR** (Server-Side) | ✅ 有利 | 普通 | 即座 | 使用していない |
| **ISR** (Incremental Static) | ✅ 有利 | ⚡ 高速 | 3分以内 | **✅ 採用中** |

**結論**: ISRを使用しているため、SEO対策は適切に実装されています。

### API連携状況

#### ✅ 取得可能なカスタム投稿タイプ

1. **`park`** - 採用オウンドメディア「Park」の記事
   - エンドポイント: `https://wealth-park.com/wp-json/wp/v2/park`
   - 使用ページ: `/ja/park/`, `/en/park/`
   - 実装: `lib/wordpress.ts` の `getParkPosts()`

2. **`new_grads`** - 新卒採用関連
   - エンドポイント: `https://wealth-park.com/wp-json/wp/v2/new_grads`
   - ※現在は使用していません

#### ❌ 取得不可能なカスタム投稿タイプ（REST API未公開）

以下のカスタム投稿タイプは、現時点でREST APIが有効化されていないため取得できません：

1. **`news`** - ニュース記事
   - WordPress側で`show_in_rest => true`の設定が必要
   - 現在は`components/News.tsx`でハードコードされたデータを使用

2. **`wealthpark`** - WealthParkブログ記事
   - WordPress側で`show_in_rest => true`の設定が必要
   - 現在は`components/Blog.tsx`でハードコードされたデータを使用

### REST API有効化の手順

WordPress管理者に以下を依頼してください：

1. カスタム投稿タイプの登録コード（`functions.php`またはプラグイン設定）に追加：
   ```php
   'show_in_rest' => true,
   'rest_base' => 'news', // または 'wealthpark'
   ```

2. 設定後、以下のURLで確認：
   - ニュース: `https://wealth-park.com/wp-json/wp/v2/news`
   - ブログ: `https://wealth-park.com/wp-json/wp/v2/wealthpark`

3. データが取得できたら、`lib/wordpress.ts`の関数をそのまま使用可能：
   ```typescript
   const news = await getNewsPosts(10, 'ja')
   const blog = await getBlogPosts(10, 'ja')
   ```

### 実装ファイル

- **APIクライアント**: `lib/wordpress.ts`
- **Park記事表示**: `app/[locale]/park/page.tsx`
- **型定義**: `lib/wordpress.ts` の `WordPressPost`, `Post`

## 多言語対応（国際化: i18n）

### 概要

このサイトは日本語（ja）と英語（en）の2言語に対応しています。

### URLベースのロケール管理

言語ごとに異なるURLパスを使用する方式を採用しています：

- **日本語**: `https://example.com/ja/`
- **英語**: `https://example.com/en/`

### ディレクトリ構造

```
app/
├── [locale]/           # 動的ロケールセグメント
│   ├── layout.tsx      # ロケール別レイアウト
│   └── page.tsx        # ロケール別ページ
├── layout.tsx          # ルートレイアウト
└── globals.css

locales/
├── ja.json            # 日本語翻訳データ
└── en.json            # 英語翻訳データ

middleware.ts          # ロケール検出・リダイレクト
```

### 実装の仕組み

#### 1. Middleware（`middleware.ts`）

リクエストURLからロケールを検出し、適切なパスにリダイレクトします。

```typescript
// ルートパス（/）へのアクセス → /ja/ にリダイレクト
// /en/, /ja/ は既にロケールを含むのでそのまま通過
```

**動作:**
- `/` → `/ja/`（デフォルトロケール）
- `/en/` → `/en/`（そのまま）
- `/ja/` → `/ja/`（そのまま）

#### 2. 動的ルーティング（`app/[locale]/`）

Next.jsの動的セグメント機能を使用して、1つのコードで複数言語に対応します。

```typescript
// app/[locale]/page.tsx
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params  // 'ja' または 'en'
  const t = getTranslations(locale)

  return <Hero t={t.hero} />
}
```

**重要:** Next.js 16では`params`がPromiseになったため、`await`が必須です。

#### 3. 翻訳データ（`locales/*.json`）

各言語の翻訳データをJSONファイルで管理します。

```json
// locales/ja.json
{
  "hero": {
    "title1": "すべての人へ",
    "title2": "オルタナティブ資産への",
    "title3": "投資機会を。"
  }
}

// locales/en.json
{
  "hero": {
    "title1": "Investment Opportunities in",
    "title2": "Alternative Assets",
    "title3": "for Everyone."
  }
}
```

#### 4. 翻訳ヘルパー関数（`lib/i18n.ts`）

ロケールに応じた翻訳データを取得する関数を提供します。

```typescript
export function getTranslations(locale: Locale) {
  return translations[locale] || translations.ja
}
```

#### 5. 言語切り替えUI（`components/LanguageSwitcher.tsx`）

ヘッダー右上に配置されたプルダウンメニューで言語を切り替えます。

**特徴:**
- 現在の言語を表示（JA / EN）
- クリックでドロップダウンメニューを表示
- 言語選択時にURLを変更（例: `/ja/` → `/en/`）

### 多言語対応済みコンポーネント

現在、以下のコンポーネントが多言語対応されています：

- ✅ **Header**: ナビゲーションメニュー全体
- ✅ **Hero**: ヒーローセクションのタイトル・説明文
- ✅ **Banners**: 事業紹介カードのタイトル・説明
- ✅ **News**: セクションタイトル・リンクテキスト
- ✅ **Blog**: セクションタイトル・リンクテキスト

### 新しい言語の追加方法

1. **翻訳ファイルを追加**
   ```bash
   # locales/fr.json を作成（フランス語の例）
   ```

2. **翻訳データを追加**
   ```json
   {
     "hero": {
       "title1": "Opportunités d'investissement",
       ...
     }
   }
   ```

3. **i18n.tsを更新**
   ```typescript
   import fr from '@/locales/fr.json'

   const translations = {
     ja,
     en,
     fr,  // 追加
   }
   ```

4. **middlewareを更新**
   ```typescript
   const locales = ['ja', 'en', 'fr']  // 'fr'を追加
   ```

5. **LanguageSwitcherを更新**
   ```typescript
   // FR選択肢を追加
   ```

### 新しいコンテンツの多言語化方法

#### 1. 翻訳データに追加

```json
// locales/ja.json
{
  "newSection": {
    "title": "新しいセクション",
    "description": "説明文"
  }
}

// locales/en.json
{
  "newSection": {
    "title": "New Section",
    "description": "Description"
  }
}
```

#### 2. コンポーネントで使用

```typescript
export default function NewSection({ locale, t }: { locale: string; t: any }) {
  return (
    <section>
      <h2>{t.title}</h2>
      <p>{t.description}</p>
    </section>
  )
}
```

#### 3. ページから呼び出し

```typescript
// app/[locale]/page.tsx
export default async function Home({ params }) {
  const { locale } = await params
  const t = getTranslations(locale)

  return (
    <NewSection locale={locale} t={t.newSection} />
  )
}
```

### 地域別コンテンツの管理

言語だけでなく、地域ごとに異なるコンテンツを表示する場合：

```typescript
// locales/ja.json
{
  "partners": [
    { "name": "株式会社レオパレス21", "logo": "/logos/leopalace.png" },
    { "name": "三井不動産", "logo": "/logos/mitsui.png" }
  ]
}

// locales/en.json
{
  "partners": [
    { "name": "ABC Property Management", "logo": "/logos/abc.png" },
    { "name": "XYZ Real Estate", "logo": "/logos/xyz.png" }
  ]
}
```

このように、翻訳ファイル内に配列やオブジェクトを含めることで、地域ごとに完全に異なるコンテンツを表示できます。

## 開発サーバーの起動

```bash
npm run dev
```

サーバーが起動したら、以下のURLで確認できます：

- 日本語版: http://localhost:3000/ja/
- 英語版: http://localhost:3000/en/

## ビルド

```bash
npm run build
```

## 注意事項

### Next.js 16のparams変更について

Next.js 16では、`params`がPromiseに変更されました。そのため、以下のように`await`する必要があります：

```typescript
// ❌ 古い書き方（動作しない）
export default function Page({ params }: { params: { locale: string } }) {
  const locale = params.locale
}

// ✅ 新しい書き方
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
}
```

### middlewareの非推奨警告について

Next.js 16では`middleware.ts`が非推奨となり、`proxy.ts`への移行が推奨されていますが、現時点では`middleware.ts`も正常に動作します。将来的には`proxy.ts`への移行を検討してください。

## トラブルシューティング

### 翻訳が表示されない場合

1. ブラウザのキャッシュをクリア
2. 開発サーバーを再起動
3. `/ja/`または`/en/`に直接アクセス（`/`ではなく）

### エラーログの確認

開発サーバーのコンソールでエラーを確認してください：

```bash
# エラーログが表示される場合は、paramsのawait忘れの可能性
```

## ライセンス

Private - WealthPark株式会社
