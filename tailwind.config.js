const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
const { getThemeReplacementsValues } = require("./utils/convert");

const themeReplacementsValues = getThemeReplacementsValues("global.css");

let customColors = {
  transparent: "transparent",
  "semi-10": "hsla(0, 0%, 0%, 0.1)",
  "semi-20": "hsla(0, 0%, 0%, 0.2)",
  "semi-25": "hsla(0, 0%, 0%, 0.25)",
  "semi-30": "hsla(0, 0%, 0%, 0.3)",
  "semi-40": "hsla(0, 0%, 0%, 0.4)",
  "semi-50": "hsla(0, 0%, 0%, 0.5)",
  "semi-60": "hsla(0, 0%, 0%, 0.6)",
  "semi-70": "hsla(0, 0%, 0%, 0.7)",
  "semi-75": "hsla(0, 0%, 0%, 0.75)",
  "semi-80": "hsla(0, 0%, 0%, 0.8)",
  "semi-90": "hsla(0, 0%, 0%, 0.9)",
  white: "hsl(0, 0%, 100%)",
  grey: "hsl(0, 0%, 50%)",
  black: "hsl(0, 0%, 0%)",
  l1: "hsl(0, 0%, 90%)",
  l2: "hsl(0, 0%, 80%)",
  l3: "hsl(0, 0%, 70%)",
  l4: "hsl(0, 0%, 60%)",
  l5: "hsl(0, 0%, 50%)",
  l6: "hsl(0, 0%, 40%)",
  l7: "hsl(0, 0%, 30%)",
  l8: "hsl(0, 0%, 20%)",
  l9: "hsl(0, 0%, 10%)",
  manoj: "var(--primary-color)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    `src/**/*.{html,js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{html,js,ts,jsx,tsx}",
    "../../packages/wmx-ui/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: ["class", ".theme-dark"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "765px",
      },
      colors: customColors,

      fontSize: {
        "xs-regular": ["0.75rem", { lineHeight: "14.52px", fontWeight: "400" }],
        "xs-bold": ["0.75rem", { lineHeight: "14.52px", fontWeight: "700" }],
        "sm-regular": [
          "0.875rem",
          { lineHeight: "16.94px", fontWeight: "400" },
        ],
        "sm-bold": ["0.875rem", { lineHeight: "16.94px", fontWeight: "700" }],
        "base-regular": ["1rem", { lineHeight: "19.36px", fontWeight: "400" }],
        "base-medium": ["1rem", { lineHeight: "19.36px", fontWeight: "500" }],
        "base-bold": ["1rem", { lineHeight: "19.36px", fontWeight: "700" }],
        "lg-regular": ["1.25rem", { lineHeight: "24.2px", fontWeight: "400" }],
        "lg-medium": ["1.25rem", { lineHeight: "24.2px", fontWeight: "500" }],
        "lg-bold": ["1.25rem", { lineHeight: "24.2px", fontWeight: "700" }],
        "xl-regular": ["1.5rem", { lineHeight: "29.05px", fontWeight: "400" }],
        "xl-bold": ["1.5rem", { lineHeight: "29.05px", fontWeight: "700" }],
        "2xl-regular": ["2rem", { lineHeight: "38.73px", fontWeight: "400" }],
        "2xl-bold": ["2rem", { lineHeight: "38.73px", fontWeight: "700" }],
      },
      fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        book: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontFamily: {
        inter: ["Inter"],
        borel: ["Borel", ...fontFamily.sans],
      },
      boxShadow: {
        md: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        1: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        2: "0px 4px 8px 0px rgba(0, 0, 0, 0.20)",
        3: "0px 8px 16px 0px rgba(0, 0, 0, 0.15)",
        4: "0px 16px 24px 0px rgba(0, 0, 0, 0.10)",
      },
      dropShadow: {
        md: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      },
      width: {
        sidebar: "272px",
      },

      // Viewer Config
      configViewer: {
        typographyExample:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        fonts: [
          "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
          "https://fonts.googleapis.com/css2?family=Borel&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        ],
        themeReplacements: themeReplacementsValues,
      },
    },
  },
};
