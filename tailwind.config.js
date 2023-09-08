const theme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('https://i.pinimg.com/564x/e7/af/4c/e7af4c302389fb9881afaa364685d733.jpg')"}
    },
    
    //https://i.pinimg.com/564x/e7/af/4c/e7af4c302389fb9881afaa364685d733.jpg
    //https://i.pinimg.com/750x/9b/85/f5/9b85f5ea963d77dd925ad591c1b44129.jpg
  },
  plugins: [
    require("daisyui"),require('flowbite/plugin'),require('@tailwindcss/line-clamp')]
}
