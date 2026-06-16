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
          100: '#FAF6EE',
          200: '#F5ECD7',
          300: '#EADBB8',
        },
        mango: {
          50: '#FFF8EB',
          100: '#FFF0D2',
          200: '#FFE1A5',
          300: '#FFCD6E',
          400: '#FFB13B',
          500: '#FF9500', // Core Brand Orange/Yellow
          600: '#E07B00',
          700: '#B85E00',
          800: '#8A4200',
          900: '#5F2A00',
        },
        forest: {
          50: '#F2F8F4',
          100: '#E2EFE7',
          200: '#C2DEC9',
          300: '#94C3A1',
          400: '#62A273',
          500: '#3D7D4F', // Brand Natural Accent Green
          600: '#2E613D',
          700: '#234C30',
          800: '#1A3723',
          900: '#112216',
        },
        bronze: {
          50: '#FBF9F6',
          100: '#F5EEE6',
          200: '#E7D9CA',
          300: '#D5BEA6',
          400: '#BD9E7E',
          500: '#9F7C58',
          600: '#816040',
          700: '#644A32',
          800: '#483524',
          900: '#2C1B0F', // Warm Organic Charcoal/Brown for typography
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1.5deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(-2deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
