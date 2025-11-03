# 認証機能実装ガイド

## 🔐 実装した認証方法

**ポータブル設計**: Next.js標準機能のみを使用しているため、Vercel、Kinsta、AWS等、どのホスティング環境でも動作します。

## Option 1: Middleware Basic認証（サーバーサイド）

### 特徴
- ✅ サーバーサイドで動作
- ✅ ブラウザの標準認証ダイアログを使用
- ✅ セキュリティレベル高
- ⚠️ 以前Vercelで問題があったため要テスト

### 設定方法

1. **Vercel環境変数を設定**
   ```
   AUTH_ENABLED=true
   BASIC_AUTH_USER=wealthpark
   BASIC_AUTH_PASSWORD=your-secure-password
   ```

2. **middleware.tsは既に実装済み**（自動的に動作）

### ローカルテスト
```bash
# .env.localファイルを作成
cp .env.local.example .env.local
# ファイルを編集してパスワードを設定
npm run build && npm start
```

---

## Option 2: AuthWrapperコンポーネント（クライアントサイド）※推奨

### 特徴
- ✅ Vercelで確実に動作
- ✅ カスタマイズ可能なログイン画面
- ✅ セッションストレージ使用
- ⚠️ パスワードがビルドに含まれる（公開前サイトなら問題なし）

### 設定方法

1. **Vercel環境変数を設定**
   ```
   NEXT_PUBLIC_SITE_PASSWORD=your-password-here
   ```

2. **app/[locale]/layout.tsxを編集**
   ```typescript
   // コメントを解除
   import AuthWrapper from '@/components/AuthWrapper'

   // childrenをAuthWrapperで囲む
   <AuthWrapper>
     {children}
   </AuthWrapper>
   ```

3. **デプロイ**
   ```bash
   git add .
   git commit -m "Enable authentication"
   git push
   ```

---

## 🚀 推奨設定

### Vercelでの環境変数設定手順

1. Vercelダッシュボードにログイン
2. プロジェクトを選択
3. Settings → Environment Variables
4. 以下を追加：

**Option 2（推奨）の場合：**
- Key: `NEXT_PUBLIC_AUTH_ENABLED` = `true`
- Key: `NEXT_PUBLIC_AUTH_PASSWORD` = `希望のパスワード`
- Environment: Production

**Option 1の場合：**
- `AUTH_ENABLED` = `true`
- `BASIC_AUTH_USER` = `希望のユーザー名`
- `BASIC_AUTH_PASSWORD` = `希望のパスワード`

5. Save → Redeploy

---

### Kinstaでの環境変数設定手順

1. MyKinstaダッシュボードにログイン
2. Applications → 該当アプリケーションを選択
3. Settings → Environment variables
4. 以下を追加：

**Option 2（推奨）の場合：**
- Key: `NEXT_PUBLIC_AUTH_ENABLED` = `true`
- Key: `NEXT_PUBLIC_AUTH_PASSWORD` = `希望のパスワード`

**Option 1の場合：**
- `AUTH_ENABLED` = `true`
- `BASIC_AUTH_USER` = `希望のユーザー名`
- `BASIC_AUTH_PASSWORD` = `希望のパスワード`

5. Save changes → Redeploy

**Kinsta固有の注意点：**
- ビルドコマンド: `npm run build`
- 起動コマンド: `npm start`
- Node.jsバージョン: 18.x 以上推奨

---

## 📝 注意事項

### Option 1（Middleware）
- 以前Vercelで問題があったため、動作しない場合はOption 2を使用

### Option 2（AuthWrapper）
- 開発環境では認証をスキップ（自動判定）
- パスワードはブラウザのセッションストレージに保存
- ブラウザを閉じるとログアウト

---

## 🔧 トラブルシューティング

### 認証が表示されない場合
1. 環境変数が正しく設定されているか確認
2. Vercelで再デプロイ
3. ブラウザのキャッシュをクリア

### Middlewareエラーが出る場合
- Option 2（AuthWrapper）に切り替える

### パスワードを忘れた場合
- Vercelの環境変数から確認・変更