/** @type {import('tailwindcss').Config} */




import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#0346F2",
      secondary: "#00D455",
      green: "#00D455",
      dark: "#1A1E2C",
      blue: {
        light: "#F2F5FE",
        DEFAULT: "#0346F2",
      },
      gray: {
        DEFAULT: "#8E94A7",
      },
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ['"Poppins",sans-serif', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      borderRadius: {
        DEFAULT: "1.25rem",
      },

      spacing: {
        base: "1.875rem",
      },
      fontSize: {
        paragraph: [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        title: [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
        subtitle: [
          "0.75rem",
          {
            lineHeight: "1.25rem",
            fontFamily: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
