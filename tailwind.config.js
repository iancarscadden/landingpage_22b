/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        ultra: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // for font-weight 100
        thin: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // for font-weight 200
        light: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // for font-weight 300
        normal: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // for font-weight 400
        medium: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // for font-weight 500
        bold: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // for font-weight 700
        heavy: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // for font-weight 800
        black: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // for font-weight 900
      },
    },
  },
  plugins: [],
} 