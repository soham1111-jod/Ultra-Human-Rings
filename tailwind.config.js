/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        sm: '4px',
      },
      backgroundColor: {
        'white/5': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body': ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
      },
    },
  },
  plugins: [],
}