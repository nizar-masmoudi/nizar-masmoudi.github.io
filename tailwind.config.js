/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'md': '1280px',
      'lg': '1920px',
    },
    extend: {
      backgroundImage: {
        'noise': 'url(../public/noise.svg);',
        'drone': 'url(../public/drone.jpg);'
      },
      fontFamily: {
        'montserrat': 'Montserrat'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
