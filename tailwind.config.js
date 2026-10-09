/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F5F2EB',
          200: '#EBE6DC',
          300: '#DDD7CC',
          400: '#D6CEC0',
        },
        onyx: {
          800: '#2E2A27',
          900: '#1C1917',
        },
        amber: {
          700: '#B45309',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
