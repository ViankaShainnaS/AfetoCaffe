/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundSize: {
      '1150': '1150px'
    },
    colors:{
      transparent: 'transparent',
      main: '#81B4B4',
      span: '#2F464ACC',
    },
    extend: {
      inset: {
        '310': '310px'
      },
      height: {
        '650': '650px',
      },
      maxWidth: {
        '1190':'1190px',
        '970' : '970px',
      },
      fontFamily: {
        righteous: ['Righteous', 'serif'],
        rosarivo: ['Rosarivo', 'serif'],
      }
    },
  },
  plugins: [],
}

