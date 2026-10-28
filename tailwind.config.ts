import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f4ed',
        gold: '#c89b3c',
        champagne: '#e8d8b0',
        espresso: '#2a2118',
        brown: '#5b5045',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(42,33,24,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
