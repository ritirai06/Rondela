/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#062B63",
        secondary: "#0A3D91",
        accent: "#C62828",
        background: "#F8FAFC",
        dark: "#081C3A",
        text: "#1A1A1A",
        gray: {
          DEFAULT: "#6B7280",
          light: "#F3F4F6",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
