/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      rotate: {
        '15': '15deg',
        '-15': '-15deg',
      },
      keyframes: {
        easeIn: {
          '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.95)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        easeIn: 'easeIn 0.3s ease-in',
      },
    },
  },
  plugins: [],
}