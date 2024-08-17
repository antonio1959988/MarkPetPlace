/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFDF5",
          400: "#FFA101",
          300: "#B3DEE5",
          800: "472922",
          200: "#ffffff",
          600: "#f06b30",
          500: "#FF862F",
          700: "#FAE6B1",
          900: "#B3DEE5",
          50: "#7b7b7b92"
        },
        secondary: {
          100: "#472922",
          200: "#61c2d1",
          300: "#949494",
          400: "#"
        }
      },
      maxWidth: {
        md: "375px"
      }
    },
  },
  plugins: [],
}

