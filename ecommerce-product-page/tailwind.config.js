/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        KumbhSans:['Kumbh Sans', 'sans-serif']
      },
      gap:{
        '5.5': '1.375rem',
      },
      height:{
        75: '18.75rem',
        "0.25" : '1px'
      },
      backgroundSize:{
        '100%': '100% 100%',
      },
      minWidth:{
        '21.5':'21.5rem'
      },
      backgroundColor:{
        '0.5':'rgba(0, 0, 0, 0.5)'
      },
      width:{
        menuWidth:'71%',
        cartWidth:'94%',
      },
    },
  },
  plugins: [],
}
