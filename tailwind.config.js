/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "769px", // Ensure this matches expectations
      lg: "1024px",
    },

    extend: {},
  },
  plugins: [],
};
