/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-hero': "url('../src/img/bg.jpg')",
        'bg-body': "url('../src/img/bg2.jpg')",
        'gradient-btn': 'linear-gradient (to right, #5e7849, #f1c166)',
      },
      colors: {
        'theme-green' : '#5e7849',
        'theme-yellow' : '#f1c166'
      },
    },
  },
  plugins: [],
}

