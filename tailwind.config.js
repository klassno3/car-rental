/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'one':[ 'Croissant One','sans-serif'],
        'pop':[ 'Poppins', 'sans-serif']

      },
      colors: {
        'primary-100':'#FA4226',
        'primary-200':'#FF4D30',
        'secondary-100':'#000',
        'secondary-200':'#333',
        'secondary-300':'#666',
        'secondary-400':'#777',
        'secondary-500':'#888',
      },
        backgroundImage: {
     "book":"url('https://car-rental-ten.vercel.app/static/media/book-bg.6f629a1041e9fd9c6685.png')"
      }
    },
  },
  plugins: [],
}