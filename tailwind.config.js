/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"'],
        firago: ['"Firago"'],
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  // safelist: [{ pattern: /(bg|text|border|font)-./ }],
  plugins: [],
};
