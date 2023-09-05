const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      colors: {
        loam_1: '#E8E8E8',
        loam_2: '#F1F1F1',
        loam_3: '#C6C6C6',
        loam_4: '#D9D9D9',
        loam_5: '#F8F8F8',
        loam_6: '#EE5D30'
      }
    }
  },
  plugins: []
};
