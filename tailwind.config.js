const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cyan': colors.cyan,
        'teal': colors.teal,
        'darkblue': 'hsl(243, 87%, 12%)',
        'Desaturated-Blue': 'hsl(238, 22%, 44%)',
        'Bright Blue': 'hsl(224, 93%, 58%)',
        'Moderate Cyan': 'hsl(170, 45%, 43%)',
        'Light Grayish Blue': 'hsl(240, 75%, 98%)'
      }
    },
  },
  plugins: [],
}
