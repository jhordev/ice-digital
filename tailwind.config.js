const plugin = require("tailwindcss/plugin");
const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Primary Colors */
        "color-primary-900": "#00346B",
        "color-primary-800": "#00448C",
        "color-primary-700": "#0057B5",
        "color-primary-600": "#0070E8",
        "color-primary-500": "#007BFF",
        "color-primary-400": "#3395FF",
        "color-primary-300": "#54A7FF",
        "color-primary-200": "#8AC2FF",
        "color-primary-100": "#B0D6FF",
        "color-primary-50": "#E6F2FF",
        /* Gray Colors */
        "color-gray-900": "#454545",
        "color-gray-800": "#5A5A5A",
        "color-gray-700": "#747474",
        "color-gray-600": "#959595",
        "color-gray-500": "#A4A4A4",
        "color-gray-400": "#B6B6B6",
        "color-gray-300": "#C2C2C2",
        "color-gray-200": "#D5D5D5",
        "color-gray-100": "#E3E3E3",
        "color-gray-50": "#F6F6F6",
        /* Background Colors */
        "color-bg-1": "#101010",
        "color-bg-2": "#1A1A1A",
        "color-bg-3": "#282828",

        "color-purple": "#C0F",
        "color-bluess": "#007BFF",
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".desktop-heading-1": {
          fontSize: "64px",
          fontWeight: "700",
          lineHeight: "86px",
          letterSpacing: "0",
        },
        ".desktop-heading-2": {
          fontSize: "40px",
          fontWeight: "700",
          lineHeight: "54px",
          letterSpacing: "0",
        },
        ".desktop-heading-3": {
          fontSize: "28px",
          fontWeight: "700",
          lineHeight: "38px",
          letterSpacing: "0",
        },
        ".desktop-heading-4": {
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "32px",
          letterSpacing: "0",
        },
        ".desktop-heading-5": {
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "27px",
          letterSpacing: "0",
        },
        ".desktop-body": {
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "36px",
          letterSpacing: "0.36px",
        },
        ".desktop-caption": {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "27px",
          letterSpacing: "0.32px",
        },
        /* Mobile Fonts */
        ".mobile-heading-1": {
          fontSize: "36px",
          fontWeight: "700",
          lineHeight: "49px",
          letterSpacing: "0",
        },
        ".mobile-heading-2": {
          fontSize: "30px",
          fontWeight: "700",
          lineHeight: "41px",
          letterSpacing: "0",
        },
        ".mobile-heading-3": {
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "32px",
          letterSpacing: "0",
        },
        ".mobile-heading-4": {
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "27px",
          letterSpacing: "0",
        },
        ".mobile-heading-5": {
          fontSize: "18px",
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "0",
        },
        ".mobile-body": {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "28px",
          letterSpacing: "0.32px",
        },
        ".mobile-caption": {
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
          letterSpacing: "0.28px",
        },
      });
    }),
  ],
};
