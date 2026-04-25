/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#120b07',
        'dark-roast': '#1e1009',
        'mid-roast': '#2e1a0e',
        cream: '#f5ede0',
        'warm-white': '#fdf8f2',
        muted: '#b09880',
        gold: '#c9953a',
        'gold-light': '#e8c07a',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '2px',
      },
    },
  },
  plugins: [],
}
