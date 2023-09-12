/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Humber: ["Humber", "Helvetica", "arial", "sans-serif"],
      },
      colors: {
        Gray: "#8485a3",
        LightRed: "#fbaa9f",
        LightBlue: "#2c2d46",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
