/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FDFBF7",
        card: "#FFFFFF",
        ink: "#5C1D24",
        "ink-soft": "#6E6156",
        accent: "#C87D55",
        "accent-dark": "#A85F3B",
        "accent-soft": "#F3E3D6",
        line: "#EFE8DE",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "22px",
      },
      boxShadow: {
        card: "0 10px 30px -14px #5C1D24",
        fab: "0 14px 28px -10px rgba(29,174,84,0.55)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise .35s ease both",
      },
    },
  },
  plugins: [],
};
