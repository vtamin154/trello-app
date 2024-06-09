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
    },
  },
  plugins: [],
};
