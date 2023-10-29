/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        b612: ["B612", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        manz: {
          100: "#f6fac7",
          200: "#FBBC05",
          300: "#f2f152",
          400: "#ece223",
          500: "#ddca15",
          600: "#bea010",
          700: "#987510",
          800: "#7e5d15",
          900: "#6b4c18",
        },
        masala: "#434040",
        stratos: "#02073e",
        oxford: "#343d48",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f1f574",
          "primary-content": "#434040",
          secondary: "#434040",
          "secondary-content": "#fff",
          accent: "#02073e",
          neutral: "#000",
          "base-100": "#fff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
    darkTheme: "light",
  },
};
