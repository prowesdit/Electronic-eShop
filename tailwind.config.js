/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeYellow: "#f5e60d",
        themePurple: "#502ec3",
      },
    },
  },
  plugins: [],
};
