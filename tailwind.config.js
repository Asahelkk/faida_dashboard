/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary_color: "#8E7CFB",
        primary_color_faded: "#A79AF5",
        secondary_color: "#161433",
        primary_red: "#F86969",
        primary_color_light: "#CDD7DE",
        primary_green: "#29FF7B",
      }
    },
  },
  plugins: [],
}
