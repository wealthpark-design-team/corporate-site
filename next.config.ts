import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wealth-park.com',
        pathname: '/wp-content/**',
      },
    ],
  },
}

export default nextConfig
