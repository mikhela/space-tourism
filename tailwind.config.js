/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        mainColor: '#3a3d4d'
      },
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        bar: ['Barlow Condensed', 'sans-serif'],
      },
      backgroundSize: {
        'custom': '100%',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
    },
  },
  plugins: [],
}

