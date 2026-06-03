/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A73E8',
          dark: '#0D47A1',
          light: '#E3F2FD',
        },
        accent: {
          DEFAULT: '#FF6D00',
          light: '#FFF3E0',
        },
        success: {
          DEFAULT: '#2E7D32',
          light: '#E8F5E9',
        },
        warning: {
          DEFAULT: '#F9A825',
          light: '#FFF8E1',
        },
        error: {
          DEFAULT: '#D32F2F',
          light: '#FFEBEE',
        },
        surface: {
          primary: '#FFFFFF',
          secondary: '#F5F7FA',
          dark: '#1A1A2E',
        },
        content: {
          primary: '#1A1A2E',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter'],
        display: ['Inter'],
      },
      fontSize: {
        display: ['32px', { lineHeight: '40px', fontWeight: '700' }],
        h1: ['26px', { lineHeight: '32px', fontWeight: '700' }],
        h2: ['22px', { lineHeight: '28px', fontWeight: '600' }],
        h3: ['18px', { lineHeight: '24px', fontWeight: '600' }],
        body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '500' }],
        button: ['16px', { lineHeight: '24px', fontWeight: '600' }],
      },
      borderRadius: {
        card: '12px',
        pill: '9999px',
      },
      spacing: {
        '4.5': '18px',
        '13': '52px',
        '15': '60px',
        '18': '72px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.08)',
        elevated: '0 4px 16px rgba(0, 0, 0, 0.12)',
        sheet: '0 -4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
