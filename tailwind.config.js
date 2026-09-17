/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        encre: {
          DEFAULT: "#12192E",
          50: "#F4F5F8",
          100: "#E4E7EF",
          200: "#B9C1D6",
          300: "#8E9BBC",
          400: "#5B6890",
          500: "#334066",
          600: "#232C4C",
          700: "#1A2140",
          800: "#12192E",
          900: "#0B0F1D",
        },
        parchemin: "#F6F1E7",
        moutarde: {
          DEFAULT: "#E3A23C",
          light: "#F0C87E",
          dark: "#B87A24",
        },
        bordeaux: {
          DEFAULT: "#7C2D3B",
          light: "#A5455A",
          dark: "#5A1F29",
        },
        sauge: {
          DEFAULT: "#4F7566",
          light: "#749685",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        carte: "0 1px 2px rgba(18,25,46,0.06), 0 8px 24px -8px rgba(18,25,46,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
