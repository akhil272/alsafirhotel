const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#C3A47D",
      },
    },
  },

  fontFamily: {
    sans: ["Mark Pro", "mark-pro"],
    serif: ["BrandonGrotesque-Thin", "brandonGrotesque-thin"],
    montserrat: ["Montserrat", "montserrat"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
