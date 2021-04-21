module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        sourLemon: '#ffeaa7',
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        railway: ['Raleway', 'sans-serif'],
      },
      colors: {
        electromagnatic: '#2f3640',
        antiFlashWhite: '#f1f2f6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
