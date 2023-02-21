/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens:{
      sm: '680px',
      md: '920px',
    },
    extend: {
      zIndex:{
        '999':'999',
      }
    },
  },
  plugins: [],
}
