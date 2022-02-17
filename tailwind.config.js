const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: { center: true },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: '#1E293B',
        primaryLight: '#C7D2FE',
        secondary: '#60696A',
        secondaryLight: '#C9D9EA',
        success: colors.green[500],
        successLight: colors.green[300],
        danger: colors.red[500],
        dangerLight: colors.red[300],
        warning: colors.orange[500],
        warningLight: colors.orange[300],
        active: '#6366E5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
