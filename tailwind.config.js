/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/layouts/*.ejs"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: '#84cc16',
        secondary: '#64748b',
        third: '#DADE31',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
};
