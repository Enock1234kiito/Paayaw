import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          dark: '#1a5c2a',
          main: '#2d7a3e',
          light: '#3d9b52',
          pale: '#e8f5eb',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#e8c157',
          dark: '#a07d1a',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
