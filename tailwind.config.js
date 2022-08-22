/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        skyBlue: "#1a73e8",
        whiteGrey: "#dadce0",
        darkGrey: '#5f6368',
        mediumGrey: ' #202124',
        darkBlue: '#1b66ca',
        alertRed: '#d93025'
      },
      fontFamily: {
        googleFont: 'roboto,"Noto Sans Myanmar UI",arial,sans-serif'
      },
      keyframes: {
        marquee: {
          '0%': {transform: 'translate(-95%, 0)'},
          '50%': {transform: 'translate(20%, 0)'},
          '100%': {transform: 'translate(105%, 0)'}
        }
      },
      animation: {
        marquee: 'marquee 1s ease-in infinite'
      }
    },
  },
  plugins: [],
}
