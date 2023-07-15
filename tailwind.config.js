/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './*.html'
  ],
  content: [
    "./src/**/*.{html,js}",
    "index.html"
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'bathroom-light': "url('img/bathroom-light.png')",
        'bathroom-dark': "url('img/bathroom-dark.png')",
        'fridge-light': "url('img/fridge-light.png')",
        'fridge-dark': "url('img/fridge-dark.png')",
        'beach-dark': "url('img/beach-dark.png')",
        'beach-light': "url('img/beach-light.png')",
        'cleaning-dark': "url('img/cleaning-dark.png')",
        'cleaning-light': "url('img/cleaning-light.png')",
        'closet-dark': "url('img/closet-dark.png')",
        'closet-light': "url('img/closet-light.png')",
        'facebook-dark': "url('img/facebook-dark.png')",
        'facebook-light': "url('img/facebook-light.png')",
        'google-maps-dark': "url('img/google-maps-dark.png')",
        'google-maps-light': "url('img/google-maps-light.png')",
        'snowflake-dark': "url('img/snowflake-dark.png')",
        'snowflake-light': "url('img/snowflake-light.png')",
        'tv-dark': "url('img/tv-dark.png')",
        'tv-light': "url('img/tv-light.png')",
        'wifi-dark': "url('img/wifi-dark.png')",
        'wifi-light': "url('img/wifi-light.png')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [
    require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

 