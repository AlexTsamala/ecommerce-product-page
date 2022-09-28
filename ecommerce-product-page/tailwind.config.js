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
        "0.25" : '1px',
        100:'445px',
        22:'88px',
        23:'90px',
        120:"44rem"
      },
      backgroundSize:{
        '100%': '100%',
      },
      minWidth:{
        '21.5':'21.5rem'
      },
      backgroundColor:{
        '0.5':'rgba(0, 0, 0, 0.5)'
      },
      width:{
        menuWidth:'71%',
        cartWidth:'92%',
        cartText:'215px',
        100:'445px',
        84:'360px',
        22:'88px',
        23:'90px',
      },
      screens:{
        desktop:"1440px",
        tablet:"760px"
      },
      spacing:{
        "0.75":"3%"
      }
    },
  },
  plugins: [],
}
