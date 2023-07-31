/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "white": "#FFFFFF",
        "white-transparent": "#FFFFFFD9",
        "gray-light": "#EFF3F4",
        "blue": "#1D9BF0",
        "black": "#000000",
        "background": "#FFFFFF",
        "primary": "#1D9BF0",
        "gray-dark": "#536471",
        "black-deep": "#0F1419",
        "textcolor": "#000000",
        "red": "#E0245E ",
        "green": "#17BF63"

      },
  },
  plugins: [],
}}
