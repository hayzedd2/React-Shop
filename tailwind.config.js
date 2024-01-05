/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      lg: "976px",
      xl: "1200px",

    },
    extend: {
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
        crimson: ["Crimson Text", "serif"],
      },
    },
  },
  plugins: [],
};
