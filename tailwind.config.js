// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "1920px",
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
