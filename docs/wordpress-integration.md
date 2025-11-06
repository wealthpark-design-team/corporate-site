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

### WordPress側の設定（Custom Post Type UI）

WordPress側では **Custom Post Type UI** プラグインを使用してカスタム投稿タイプを管理しています。

各投稿タイプのREST API公開設定：
- **Show in REST API**: 有効（`show_in_rest => true`）
- これにより `/wp-json/wp/v2/{投稿タイプ名}` でアクセス可能になります

### ✅ 取得可能な投稿タイプ

#### **park**: 採用オウンドメディア記事
- エンドポイント: `/wp-json/wp/v2/park`
- 使用ページ: `/ja/park/`, `/en/park/`
- タグフィルタリング: 可能

#### **news**: ニュース記事
- エンドポイント: `/wp-json/wp/v2/news`
- 使用ページ: `/ja/`（トップページのニュースセクション）

#### **wealthpark**: ブログ記事
- エンドポイント: `/wp-json/wp/v2/wealthpark`
- 使用ページ:
  - `/ja/blog/` - 全ブログ記事
  - `/ja/business/release-note/` - 「プロダクト改善・新機能」タグのみ
- タグフィルタリング: 可能（タグID指定）

## 実装ファイル

### APIクライアント
- **ファイル**: `lib/wordpress.ts`
- **主要関数**:
  - `getPosts()` - 汎用取得関数（タグフィルタリング対応）
  - `getParkPosts()` - Park記事取得
  - `getNewsPosts()` - ニュース記事取得
  - `getBlogPosts()` - ブログ記事取得
  - `getProductNewsPosts()` - プロダクト改善・新機能記事取得（タグID: 86）
  - `getPostBySlug()` - 個別投稿取得（slug指定）

### ページ実装
- **Park記事一覧**: `app/[locale]/park/page.tsx`
- **Park記事詳細**: `app/[locale]/park/[slug]/page.tsx`
- **ブログ記事一覧**: `app/[locale]/blog/page.tsx`
- **プロダクト改善・新機能**: `app/[locale]/business/release-note/page.tsx`
- **トップページ（ニュース）**: `app/[locale]/page.tsx` + `components/News.tsx`
- **ビジネスページ（プロダクトニュース）**: `app/[locale]/business/page.tsx` + `components/business/ProductNews.tsx`

## WordPress側の設定方法（Custom Post Type UI）

### REST API公開の設定

1. **WordPress管理画面** → **CPT UI** → **投稿タイプを編集**
2. 対象の投稿タイプ（park, news, wealthpark）を選択
3. **REST API設定**:
   - **Show in REST API**: ✅ 有効
   - **REST API base slug**: 投稿タイプ名と同じ（例: `park`）
4. 保存

### REST API公開の確認
ブラウザで以下のURLにアクセスして確認：
```
https://wealth-park.com/wp-json/wp/v2/park
https://wealth-park.com/wp-json/wp/v2/news
https://wealth-park.com/wp-json/wp/v2/wealthpark
```

JSONデータが表示されればREST API公開成功です。

### タグの取得
タグ情報は以下のエンドポイントで取得できます：
```
https://wealth-park.com/wp-json/wp/v2/tags?search=プロダクト改善
```

## トラブルシューティング

### 記事が表示されない
1. WordPressサーバーの稼働確認
2. エンドポイントの確認: `https://wealth-park.com/wp-json/wp/v2/park`
3. **Custom Post Type UI**で`Show in REST API`が有効になっているか確認
4. CORSエラーの確認