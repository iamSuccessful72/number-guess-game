/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gun-powder': {
          DEFAULT: '#474554',
          50: '#A2A0B1',
          100: '#9795A8',
          200: '#817E95',
          300: '#6D6A81',
          400: '#5A576A',
          500: '#474554',
          600: '#2D2C35',
          700: '#131216',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'logan': {
          DEFAULT: '#ACA7CB',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F5F4F8',
          300: '#DCDAE9',
          400: '#C4C1DA',
          500: '#ACA7CB',
          600: '#8B84B6',
          700: '#6960A1',
          800: '#524B7F',
          900: '#3B365C',
          950: '#302C4A'
        },
        'wild-sand': {
          DEFAULT: '#F5F5F5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F5F5F5',
          600: '#D9D9D9',
          700: '#BDBDBD',
          800: '#A1A1A1',
          900: '#858585',
          950: '#777777'
        },
      },
      fontFamily: {
        "kanit": "'Kanit', sans-serif"
      }
    },
  },
  plugins: [],
}

