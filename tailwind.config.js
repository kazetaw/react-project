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
      fontFamily: {
        noto: ['"Noto Sans"', "sans-serif"],
      },
    },
    screens: {
      xs: { min: "365px" },
      sm: { min: "767px" },
      md: { min: "1023px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
