/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0d0d0f',
          800: '#131316',
          700: '#1a1a1f',
          600: '#222228',
          500: '#2a2a32',
          400: '#36363f',
          300: '#5a5a6a',
          200: '#8a8a9a',
          100: '#c4c4d0',
        },
        accent: {
          purple: '#7c6af7',
          teal: '#2dd4aa',
          amber: '#f59e0b',
          coral: '#f26450',
        }
      }
    },
  },
  plugins: [],
}