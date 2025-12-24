module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
         roboto: ["'Roboto Condensed'", "sans-serif"],
         satisfy: ['"Satisfy"', 'cursive'],
         londrina: ['"Londrina Solid"', 'cursive'],
      },
    },
  },
  plugins: [],
}
