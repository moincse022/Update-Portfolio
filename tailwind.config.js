/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "nav-hover": "var(--nav-hover)",
        "middle": "var(--middle)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: ["class", '[data-mode="dark"]'],
};
