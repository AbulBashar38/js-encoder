/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4452ed",

          secondary: "#fcd34d",

          accent: "#0096FF",

          neutral: "#272433",

          "base-100": "#f9f9f9",

          info: "#2d313a",

          success: "#3FD5C6",

          warning: "#FBFACD",

          error: "#E12333",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
