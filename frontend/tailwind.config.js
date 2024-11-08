/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },

      colors: {
        light_purple: "#B469FF",
        medium_dark_purple: "#4D2C86",
        dark_purple: "#01002F",
        inp_purple: "#5e4787",
        dark_trans_purple: "#38206e",
        light_trans_purple: "#9076A9",
      },
    },
  },
  plugins: [],
};
