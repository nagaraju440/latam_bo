/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'h-color': '#59595b',
      },
    },
    colors: {
      'background':'#E5E5E5',
      'pending': '#FFC658',
      'white': '#FFFFFF',
      'black': '#000000',
      'Revision': '#FFC658',
      'Aprobacion': "#FFC658",
      'Rendicion':"#FF5858",
      'Promocion':'#44B741',
      'Cursada ':'#44B741',
      'Cierre':'#59595B',
      'red':'#ff0000',
      'listactive':'#59595B',
      'listunactive':'#9097A0'
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
  plugins: [ require('tw-elements/dist/plugin')],
};
