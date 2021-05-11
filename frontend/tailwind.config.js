module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '6rem',
      },
      center: true,
      margin: [],
    },

    extend: {
      backgroundColor: {
        sourLemon: '#ffeaa7',
        midnightBlue: '#2c3e50',
        wetEsphalt: '#34495e',
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        railway: ['Raleway', 'sans-serif'],
      },
      colors: {
        electromagnatic: '#2f3640',
        antiFlashWhite: '#f1f2f6',
        sourLemon: '#ffeaa7',
        midnightBlue: '#2c3e50',
        wetEsphalt: '#34495e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
