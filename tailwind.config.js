/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'one-dark':'#282c34',
        'one-dark-white': '#abb2bf',
        'one-dark-yellow': '#E5C07B',
        'one-dark-green':'#98c379',
        'one-dark-red':'#E06C75',
        'one-dark-blue':'#61AFEF'
      },
      screens: {
        'sm-max': {
          'max': '640px'
        }
      }
    },

  },
  plugins: [],
}

