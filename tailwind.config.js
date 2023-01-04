/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'background':'#E5E5E5',
        'completed': '#44B741',
        'pending': '#FFC658',
        'white': '#FFFFFF',
        'black': '#000000',
        'red':'#ff0000',
        'listactive':'#59595B',
        'listunactive':'#9097A0'
      },
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    flexBasis: {
      '1/9': '11.1111111%',
      
    }
  },
  plugins: [],
};
