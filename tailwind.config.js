/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand palette (from logo) ── */
        navy:           '#0B3C6D',   // logo dark navy
        'navy-dark':    '#072848',   // deeper navy
        'navy-light':   '#1a5a9a',
        cyan:           '#36C6F4',   // logo cyan sampled from logo.png
        'cyan-dark':    '#36C6F4',
        'cyan-light':   '#36C6F4',
        /* ── Aliases used across codebase ── */
        accent:         '#36C6F4',
        'accent-blue':  '#36C6F4',
        'accent-dark':  '#36C6F4',
        primary:        '#0B3C6D',
        'text-primary': '#0B3C6D',
        'text-secondary':'#4b6a8a',
        'bg-light':     '#f0f8fc',
        'bg-white':     '#ffffff',
      },
      fontFamily: {
        sans:   ['Cairo', 'Inter', 'sans-serif'],
        latin:  ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backdropBlur: { xs: '2px' },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
    },
  },
  plugins: [],
}
