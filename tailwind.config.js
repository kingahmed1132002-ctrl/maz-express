/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#f3f4f6',
        accent: '#17a9ff',
        'accent-blue': '#2563eb',
        'accent-dark': '#0f78d7',
        'accent-gold': '#f59e0b',
        'text-primary': '#111827',
        'text-secondary': '#4b5563',
        'bg-dark': '#f8fafc',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}