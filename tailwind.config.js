/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E1E0CC",
        "owl-bg": "#10131c",
        "owl-surface": "#1d1f28",
        "owl-surface-card": "#161922",
        "owl-outline": "#424656",
        "owl-outline-soft": "#272a33",
        "owl-text": "#e1e2ee",
        "owl-text-muted": "#c2c6d8",
        "owl-blue": "#b3c5ff",
        "owl-blue-bright": "#0066ff",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
}
