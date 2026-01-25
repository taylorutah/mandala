/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#c2410c", // orange-700 - more subtle/professional
          hover: "#9a3412",   // orange-800 - darker on hover
          light: "#ea580c",   // orange-600 - for accents
        },
      },
    },
  },
  plugins: [],
};
export default config;