/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        libre: ['var(--font-libre-baskerville)', 'serif'],
        playfair: ['var(--font-playfair-display)', 'serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'sans-serif'],  
      },
    },
  },
  plugins: [],
};
