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
          100: "",
          200: "#FAE6B1",
          400: "#FFA101",
          //300: "#B3DEE5",
          800: "472922",
          700: "#ffffff",
          600: "#f06b30",
          300: "#FBB72C",
          500: "#FF862F",  // orange
          900: "#B3DEE5",
          50: "#7b7b7b92"
        },
        secondary: {
          50: "#CCCCCC", // Category
          100: "#999999", // Author
          200: "#FFFDF5", // bg
          300: "#fffdf521", // bg-menu
          500: "#949494",
          400: "#61c2d1", 
          900: "#472922", // Text big
        }
      },
      maxWidth: {
        md: "375px"
      }
    },
  },
  plugins: [],
}

