/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dark' : '#4F4A45',
      'light' : '#F6F1EE',
      'orange' : '#ED7D31',
      'brown' : '#6C5F5B',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

