/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors:{
      tealy : '#89A194',
      dustyRose: '#D4A190',
      dustyOlive: '#6E7153',
      'greenish': '#778a80',
      'salmon': '#D8AC9C',
      'skin': '#EFD9D1',
      'cement': '#F4EEED',
    },
    fontFamily:{
      maven: ['Maven Pro', 'sans-serif'],
      tenor: ['Tenor Sans', 'sans-serif'],
      rechester : ['Rochester', 'cursive'],
      smythe: ['Smythe', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

