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
        // sourLemon: '#9EDB2E',
        midnightBlue: '#2c3e50',
        wetEsphalt: '#34495e',
        sourLemonDark: '#fce28d',
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
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme('colors.gray.300'),
              '[class~="lead"]': { color: theme('colors.gray.400') },
              a: { color: theme('colors.gray.100') },
              strong: { color: theme('colors.gray.100') },
              'ul > li::before': { backgroundColor: theme('colors.gray.700') },
              hr: { borderColor: theme('colors.gray.800') },
              blockquote: {
                color: theme('colors.gray.100'),
                borderLeftColor: theme('colors.gray.800'),
              },
              h1: { color: theme('colors.gray.100') },
              h2: { color: theme('colors.gray.100') },
              h3: { color: theme('colors.gray.100') },
              h4: { color: theme('colors.gray.100') },
              code: { color: theme('colors.gray.100') },
              'a code': { color: theme('colors.gray.100') },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.gray.100'),
                borderBottomColor: theme('colors.gray.700'),
              },
              'tbody tr': { borderBottomColor: theme('colors.gray.800') },
            },
          },
        };
      },
    },
  },
  variants: {
    extend: { typography: ['dark'] },
  },

  plugins: [require('@tailwindcss/typography')],
};
