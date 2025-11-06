# WealthPark Company Website

Corporate website for WealthPark Inc.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel (Development) → Kinsta (Production planned)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚧 Pre-Production Settings (Action Required Before Launch)

### 1. Authentication (Currently: Enabled)

**Current Settings:**
- Protected by password authentication
- Password: `wealthpark`
- Configuration: `lib/auth.ts`

**For Production:**
```typescript
// Edit lib/auth.ts
const AUTH_CONFIG = {
  enabled: false,  // Change to false
  password: 'wealthpark',
}
```

### 2. Google Indexing Block (Currently: Enabled)

**Current Settings:**
- `robots.txt`: Blocks all crawlers
- `<meta>` tags: noindex, nofollow

**For Production:**
1. Delete `app/robots.ts`
2. Remove lines 16-20 from `app/[locale]/layout.tsx`:
   ```typescript
   // Remove this section
   robots: {
     index: false,
     follow: false,
   },
   ```

### 3. Pre-Production Checklist

- [ ] Disable authentication (`lib/auth.ts`)
- [ ] Remove Google indexing block (delete `app/robots.ts`, edit `layout.tsx`)
- [ ] Configure production domain (`wealth-park.com`)
- [ ] Set up Kinsta deployment

## Key Features

### Internationalization
- Japanese (`/ja`) and English (`/en`) support
- URL-based locale management
- Details: [i18n Guide](./docs/i18n-guide.md)

### WordPress Integration (Headless CMS)
- Fetch content from existing WordPress (https://wealth-park.com) via **REST API**
- SEO optimization with ISR (3-minute cache)
- **Custom Post Type UI** plugin controls REST API exposure for each post type
- Details: [WordPress Integration Guide](./docs/wordpress-integration.md)

### Authentication
- Fully portable code-based authentication
- No environment variables required (configured in code)
- Details: [Authentication Guide](./docs/authentication-guide.md)

### Background Animations
- Homepage: Vanta.js Dots effect (3D background)
- Other pages: CSS animations
- Details: [Design Guidelines](./docs/design-guide.md)

## Deployment Status

### Current (Development)
- **URL**: Deployed on Vercel
- **Status**: Password-protected + indexing blocked
- **GitHub**: https://github.com/wealthpark-design-team/corporate-site

### Future (Production)
- **Planned**: Migration to Kinsta
- **Domain**: wealth-park.com
- **Status**: Authentication disabled + indexing enabled

## Project Structure

```
company/
├── app/
│   ├── [locale]/          # Multi-language routing
│   ├── layout.tsx         # Root layout
│   └── robots.ts          # robots.txt generation (dev only)
├── components/            # React components
│   ├── Header.tsx        # Corporate site header
│   ├── business/
│   │   └── BusinessHeader.tsx  # Business product site header
│   └── AuthWrapper.tsx   # Authentication component
├── lib/
│   ├── auth.ts           # Authentication config
│   └── wordpress.ts      # WordPress API client
├── locales/              # Translation files
│   ├── ja.json
│   └── en.json
└── docs/                 # Documentation
```

## Pages and Headers

### Overview
This site is primarily a **corporate site**, but pages under `/business` use a different header for the **product site (WealthPark Business)**.

### Header Usage

#### Corporate Pages (`Header.tsx`)
- **Used on**: All pages except `/business`
- **Examples**:
  - `/ja/` - Homepage
  - `/ja/corporate/company` - Company Profile
  - `/ja/careers` - Careers
  - `/ja/park` - Recruitment Media
  - `/ja/blog` - WealthPark Blog
  - Other corporate pages

#### Business Product Site (`BusinessHeader.tsx`)
- **Used on**: `/business` pages only
- **Examples**:
  - `/ja/business` - WealthPark Business TOP
  - `/ja/business/release-note` - Product Updates & New Features

#### Future Plans
Pages under `/business` may be separated into a subdomain (e.g., `business.wealth-park.com`) in the future.

## Documentation

- [Design Guidelines](./docs/design-guide.md) - UI libraries & design system
- [Authentication Guide](./docs/authentication-guide.md) - Password protection setup
- [i18n Guide](./docs/i18n-guide.md) - Adding/editing translations
- [WordPress Integration](./docs/wordpress-integration.md) - Headless CMS configuration

## Troubleshooting

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Authentication Screen Not Appearing Locally
- This is normal behavior (authentication is skipped in development)
- Authentication is only enabled in production

### 404 Errors After Vercel Deployment
- Next.js 16 is officially supported
- Check redirect settings in `next.config.ts`

## License

Private - WealthPark Inc.
