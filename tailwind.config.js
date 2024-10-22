/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#0B0D17",
          300: "#D0D6F9",
        },
      },
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        condensed: ["Barlow Condensed", ...defaultTheme.fontFamily.sans],
        serif: ["Bellefair", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        base: [
          "1.125rem",
          {
            lineHeight: "1.8",
            letterSpacing: "0",
            fontWeight: 400,
          },
        ],
        sm: [
          "1rem",
          {
            lineHeight: "1.05",
            letterSpacing: "2px",
            fontWeight: 400,
          },
        ],
        xs: [
          "0.875rem",
          {
            lineHeight: "1.05",
            letterSpacing: "2px",
            fontWeight: 400,
          },
        ],
        md: [
          "1.75rem",
          {
            lineHeight: "2.00625",
            letterSpacing: "0",
            fontWeight: 400,
          },
        ],
        lg: [
          "1.75rem",
          {
            lineHeight: "2.1",
            letterSpacing: "4px",
            fontWeight: 400,
          },
        ],
        xl: [
          "2rem",
          {
            lineHeight: "1.146875",
            letterSpacing: "0",
            fontWeight: 400,
          },
        ],
        "2xl": [
          "3.5rem",
          {
            lineHeight: "1.146875",
            letterSpacing: "0",
            fontWeight: 400,
          },
        ],
        "3xl": [
          "6.25rem",
          {
            lineHeight: "1.146875",
            letterSpacing: "0",
            fontWeight: 400,
          },
        ],
        "4xl": [
          "9rem",
          {
            lineHeight: "1.146875",
            letterSpacing: "0",
            fontWeight: 400,
          },
        ],
      },
    },
    spacing: {
      1600: "8rem",
      1200: "6rem",
      1000: "5rem",
      800: "4rem",
      600: "3rem",
      500: "2.5rem",
      400: "2rem",
      300: "1.5rem",
      200: "1rem",
      150: "0.75rem",
      100: "0.5rem",
      50: "0.25rem",
      25: "0.125rem",
    },
  },
  plugins: [],
};
