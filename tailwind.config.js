/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        "header-custom": "var(--heigh-header)",
        "footer-custom": "var(--heigh-footer)",
        "bar-header": "var(--heigh-bar-header)",
        "calc-content":
          "calc(100vh - var(--heigh-header) - var(--heigh-footer) - var(--heigh-bar-header))",
      },
      width: {
        "custom-50": "var(--width-50)",
      },
      backgroundColor: {
        "blue-color-1": "var(--blue-color-1)",
      },
      ringColor: {
        "blue-color-1": "var(--blue-color-1)",
      },
    },
  },
  plugins: [],
};
