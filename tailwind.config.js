/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {
      colors: {
        'moog-lavender': '#F2DCF1',
        'moog-blue': '#B0D1D9',
        'moog-black': '#010D00',
        'moog-dark-tan': '#BF9663',
        'moog-tan': '#F2C3A7',
      },
      backgroundImage: {
        'banner-image': "url(/public/banner.jpg)",
        'main-headshot-image': "url(/public/headshot.jpg)",
      },
    },
  },
  plugins: [],
}
