/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0000",
          200: "#ffff",
          300: "#fffc",
        },
      },
    },
    screens: {
      lg: { min: "1024px" },
      // md: { max: "992" },
      // sm: { max: "768" },
      // xs: { max: "576" },
    },
  },
  plugins: [],
};
