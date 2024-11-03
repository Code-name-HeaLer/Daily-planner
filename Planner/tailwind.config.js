/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // dark gray
        secondary: "#2d3748", // medium gray
      },
    },
  },
  plugins: [],
};
