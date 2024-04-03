/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'pagodapurple': '#8853e7',
        'pagodagreen': '#91d027',
        'pagodagreen-shine': '#cff294',
        'pagodapink': '#e42b8f',
        'pagodapink-shine': '#ffc8f0',
      }
    },
  },
  plugins: [],
}

