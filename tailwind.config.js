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
        lightGrey: '#9aa0a6',
        secondaryGrey: '#e8eaed',
        darkBlue: '#1b66ca',
        alertRed: '#d93025',
        darkGreen: '#01875f',
        darkerGreen: "#056449",
        lightBlack: '#202124'
      },
      fontFamily: {
        googleFont: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif'
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
