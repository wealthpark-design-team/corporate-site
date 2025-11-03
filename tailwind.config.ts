import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'header': '4rem', // 64px - モバイルヘッダーの高さ
        'header-desktop': '5.313rem', // 85px - PCヘッダーの高さ
      },
      keyframes: {
        float1: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '25%': {
            transform: 'translate(300px, -150px)',
          },
          '50%': {
            transform: 'translate(450px, 75px)',
          },
          '75%': {
            transform: 'translate(150px, 150px)',
          },
          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
        float2: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '25%': {
            transform: 'translate(-225px, 150px)',
          },
          '50%': {
            transform: 'translate(-450px, -75px)',
          },
          '75%': {
            transform: 'translate(-150px, -225px)',
          },
          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
        'scroll-down': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '30%': {
            opacity: '1',
          },
          '70%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(200%)',
            opacity: '0',
          },
        },
      },
      animation: {
        float1: 'float1 10s ease-in-out infinite',
        float2: 'float2 12s ease-in-out infinite',
        'scroll-down': 'scroll-down 2s ease-in-out infinite',
      },
      colors: {
        'wp-blue': {
          DEFAULT: '#2563eb',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'wp-dark': '#1a1a1a',
        'wp-gray': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
      },
    },
  },
  plugins: [],
}

export default config
