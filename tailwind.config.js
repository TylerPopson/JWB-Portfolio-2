/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {
      keyframes:{
        slide:{
          '0%, 100%':{transform: 'scaleX(0)'},
          '50%':{transform: 'scalex(1)'},
        }
      },
      animation:{
        'bar':'slide 2s ease-in-out infinite',
      },
      colors: {
        'moog-lavender': '#F2DCF1',
        'moog-blue': '#B0D1D9',
        'moog-black': '#010D00',
        'moog-dark-tan': '#BF9663',
        'moog-tan': '#F2C3A7',
      },
      backgroundImage: {
        'banner-image': "url(/banner.jpg)",
        'main-headshot-image': "url(/headshot.jpg)",
        'jordan-working-image': "url(/jordan_working.jpg)",
        'piano-image': "url(/piano.jpg)",
        'badge-image': "url(/badge.jpg)",
        'jordan-badge-image': "url(/jordan_badge.jpg)"
      },
      fontFamily:{
        overpassRegular:["overpass-regular"],
        overpassBold:["overpass-bold"],
      }
    },
  },
  plugins: [],
}
