// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "1400px",
      // => @media (min-width: 960px) { ... }

      lg: "2400px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
