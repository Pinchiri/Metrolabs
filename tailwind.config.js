/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      b612: ["B612", "sans-serif"],
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        manz: {
          100: "#f6fac7",
          200: "#f1f574",
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
  plugins: [],
};
