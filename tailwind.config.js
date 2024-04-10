/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Nunito Sans, sans-serif",
    },
    extend: {
      colors: {
        "primary-blue-1": "var(--color-blue-1)",
        "primary-blue-2": "var(--color-blue-2)",
        "neutral-gray-1": "var(--color-gray-1)",
        "neutral-gray-2": "var(--color-gray-2)",
        "neutral-gray-3": "var(--color-gray-3)",
      },
    },
  },
  plugins: [],
};
