/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "presets/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: "#57CC99",
        secondarycolor: "#80ED99",
        thirdcolor: "#22577A"
      },
    },
    fontFamily: {
      display: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};