# デザインガイドライン

WealthPark コーポレートサイトのUI/UXデザインに関する技術仕様とガイドライン

最終更新: 2025-11-03

---

## 📦 UIライブラリ・フレームワーク

### アニメーション

**framer-motion** (v12.23.24)
- 用途: スムーズなアニメーション・トランジション効果
- 使用例: ページ遷移、スクロールアニメーション、ホバーエフェクト
- ドキュメント: https://www.framer.com/motion/

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  コンテンツ
</motion.div>
```

### アイコン

#### lucide-react (v0.552.0) - メイン使用
- モダンでシンプルなアイコンセット
- 一貫性のあるデザイン
- 軽量で高パフォーマンス
- ドキュメント: https://lucide.dev/

```tsx
import { Menu, X, ChevronDown } from 'lucide-react'
```

#### react-icons (v5.5.0) - 補助的使用
- 複数のアイコンライブラリを統合
- lucide-reactにないアイコンを補完
- ドキュメント: https://react-icons.github.io/react-icons/

### UI要素

**hamburger-react** (v2.5.2)
- モバイル用ハンバーガーメニューアイコン
- アニメーション付きトグル
- カスタマイズ可能

```tsx
import Hamburger from 'hamburger-react'

<Hamburger toggled={isOpen} toggle={setOpen} />
```

---

## 🎨 スタイリングシステム

### Tailwind CSS (v3.4.18)

プロジェクトの主要なスタイリングフレームワーク

**設定ファイル:** `tailwind.config.ts`

### カスタムカラーパレット

#### ブランドカラー: wp-blue
```css
wp-blue-50:  #eff6ff  /* 最も明るい */
wp-blue-100: #dbeafe
wp-blue-200: #bfdbfe
wp-blue-300: #93c5fd
wp-blue-400: #60a5fa
wp-blue-500: #3b82f6
wp-blue-600: #2563eb  /* DEFAULT */
wp-blue-700: #1d4ed8
wp-blue-800: #1e40af
wp-blue-900: #1e3a8a  /* 最も暗い */
```

**使用例:**
```tsx
// 背景色
<div className="bg-wp-blue">
<div className="bg-wp-blue-100">

// テキスト色
<p className="text-wp-blue-600">

// ボーダー
<div className="border-wp-blue-400">
```

#### その他のカラー
```css
wp-dark:      #1a1a1a    /* ダークテーマ用 */
wp-gray-50:   #f8fafc    /* 背景用の明るいグレー */
wp-gray-100:  #f1f5f9
wp-gray-200:  #e2e8f0
```

### カスタムアニメーション

#### 浮遊アニメーション
```tsx
// float1: 10秒間の浮遊（右上→右下→左下の軌道）
<div className="animate-float1">

// float2: 12秒間の浮遊（左下→左上→右上の軌道）
<div className="animate-float2">
```

#### スクロールダウンインジケーター
```tsx
// 2秒間のループアニメーション
<div className="animate-scroll-down">
```

---

## ✍️ タイポグラフィ

### フォントスタック

**システムフォント（Webフォント不使用）:**
```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "Noto Sans JP",
  "Hiragino Kaku Gothic ProN",
  "Hiragino Sans",
  Meiryo,
  sans-serif;
```

**特徴:**
- 各OSのネイティブフォントを優先使用
- 日本語表示に最適化
- Webフォント読み込み不要で高速表示

### 基本サイズ

```css
body, p, li, div: 16px (1rem)
line-height: 1.6
```

### 縦書き対応

```tsx
<div className="writing-mode-vertical">
  縦書きテキスト
</div>
```

---

## 🏗️ コンポーネント構成

### 共通コンポーネント

**レイアウト:**
- `Header.tsx` - グローバルヘッダー
- `Footer.tsx` - グローバルフッター
- `LanguageSwitcher.tsx` - 多言語切替

**機能:**
- `AuthWrapper.tsx` - 認証ラッパー
- `CookieConsent.tsx` - Cookie同意バナー

**コンテンツ:**
- `Hero.tsx` - トップページヒーロー
- `Banners.tsx` - バナー表示
- `News.tsx` - ニュース一覧
- `Blog.tsx` - ブログ記事
- `Partners.tsx` - パートナー企業
- `TeamSection.tsx` - チームメンバー
- `TeamMemberModal.tsx` - メンバー詳細モーダル

### Businessページ専用コンポーネント

**ディレクトリ:** `components/business/`

- `BusinessHeader.tsx` - ビジネスページヘッダー
- `BusinessHero.tsx` - ビジネスヒーロー
- `Breadcrumb.tsx` - パンくずナビ
- `TopBanners.tsx` - トップバナー
- `AboutSection.tsx` - 概要セクション
- `ThreePoints.tsx` - 3つのポイント
- `FeaturesList.tsx` - 機能一覧
- `CaseStudyCarousel.tsx` - 事例カルーセル
- `ClientLogos.tsx` - クライアントロゴ
- `Testimonials.tsx` - お客様の声
- `ProductNews.tsx` - プロダクトニュース

---

## 💡 デザイン原則

### 1. 軽量性
- 重量級UIライブラリ（MUI、Ant Design等）は使用しない
- 必要最小限の専門ライブラリのみ導入
- パフォーマンスを最優先

### 2. 一貫性
- Tailwind CSSによる統一されたスタイリング
- カスタムカラーパレットの活用
- 再利用可能なコンポーネント設計

### 3. アニメーション重視
- Framer Motionで滑らかなUX
- 過度なアニメーションは避ける
- パフォーマンスに配慮した実装

### 4. レスポンシブデザイン
- モバイルファースト
- Tailwindのブレークポイント活用
  - `sm:` (640px)
  - `md:` (768px)
  - `lg:` (1024px)
  - `xl:` (1280px)
  - `2xl:` (1536px)

### 5. アクセシビリティ
- セマンティックHTML
- キーボード操作対応
- ARIA属性の適切な使用

---

## 📐 スペーシング

Tailwindのスペーシングスケールを使用:

```tsx
// 推奨スペーシング
gap-4    // 1rem (16px)
gap-6    // 1.5rem (24px)
gap-8    // 2rem (32px)

p-4      // padding: 1rem
py-8     // padding-top/bottom: 2rem
px-6     // padding-left/right: 1.5rem

mt-4     // margin-top: 1rem
mb-8     // margin-bottom: 2rem
```

---

## 🎯 実装のベストプラクティス

### DO ✅
- Tailwind CSSのユーティリティクラスを活用
- Framer Motionでアニメーション実装
- lucide-reactをアイコンの第一選択肢に
- カスタムカラーパレット（wp-blue等）を使用
- 再利用可能なコンポーネント設計

### DON'T ❌
- インラインスタイルは避ける
- カスタムCSSは最小限に
- 不要なアニメーションライブラリの追加
- プロジェクト固有以外のカラー値をハードコード
- 巨大なUIライブラリの導入

---

## 🔄 スタイル更新時の手順

1. **カラー追加:**
   - `tailwind.config.ts` の `colors` セクションに追加
   - 命名規則: `wp-{name}`

2. **アニメーション追加:**
   - `tailwind.config.ts` の `keyframes` と `animation` に定義
   - クラス名: `animate-{name}`

3. **グローバルスタイル:**
   - `app/globals.css` に追加（最小限に）

4. **コンポーネント固有スタイル:**
   - Tailwindクラスで実装
   - 複雑な場合のみカスタムCSS検討

---

## 🌊 背景アニメーション

### 実装場所
`app/[locale]/layout.tsx` (40-45行目)

### 技術仕様

**使用技術:**
- CSS Animations（ネイティブ）
- Tailwind CSS カスタムアニメーション
- ライブラリ不使用（軽量・高速）

**アニメーション定義:**
- `animate-float1`: 10秒ループ（`tailwind.config.ts`で定義）
- `animate-float2`: 12秒ループ（`tailwind.config.ts`で定義）

### 構成要素

**4つのグラデーションオブジェクト:**

1. **右上オブジェクト**
   - グラデーション: 青→紫→ピンク
   - アニメーション: `animate-float1` (10秒)
   - サイズ: 700×800px
   - 透明度: 80%

2. **左下オブジェクト**
   - グラデーション: オレンジ→黄色→青
   - アニメーション: `animate-float2` (12秒)
   - サイズ: 600×700px
   - 透明度: 70%

3. **左上～中央オブジェクト**
   - グラデーション: 紫→青→透明
   - アニメーション: `animate-float1` (10秒、3秒遅延)
   - サイズ: 500×600px
   - 透明度: 60%

4. **中央右オブジェクト**
   - グラデーション: ピンク→オレンジ→黄色
   - アニメーション: `animate-float2` (12秒、5秒遅延)
   - サイズ: 400×500px
   - 透明度: 50%

### エフェクト

```css
filter: blur(80px)           /* ぼかし効果 */
borderRadius: 不定形         /* 有機的な形状 */
opacity: 50-80%              /* 透明度 */
```

### アニメーション動作

**float1パターン:**
```
開始位置 → 右上(300px, -150px) → 右下(450px, 75px) → 右下(150px, 150px) → 開始位置
```

**float2パターン:**
```
開始位置 → 左下(-225px, 150px) → 左上(-450px, -75px) → 左上(-150px, -225px) → 開始位置
```

### パフォーマンス

- ✅ 軽量（追加ライブラリなし）
- ✅ モバイル対応
- ✅ バッテリー消費少
- ✅ GPU支援による滑らかな動作

### 代替案について

**Vanta.js（検討済み・不採用）**
- Three.jsベースの3D背景ライブラリ
- 理由: モバイルで負荷が高い（約500KB + GPU負荷）
- 結論: 現在のCSS Animationsで十分

---

## 📚 参考リソース

- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Lucide Icons:** https://lucide.dev/
- **Next.js:** https://nextjs.org/docs
