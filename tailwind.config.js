const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#C3A47D",
        secondary: "#C3B193",
      },
      fontFamily: {
        mark: "'MarkPro-Light',serif",
        brandon: "'Brandon Grotesque',serif",
        markbook: "'MarkPro-Book',serif",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-rtl"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
