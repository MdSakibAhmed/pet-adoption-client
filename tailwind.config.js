/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.2rem",
        sm: "0.5rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
  },
  plugins: [],
};
