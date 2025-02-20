/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      keyframes: {
        floatOrb: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
      },
      animation: {
        floatOrb: "floatOrb 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
