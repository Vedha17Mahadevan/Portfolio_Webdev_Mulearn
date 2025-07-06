/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FDFCFA',
          100: '#F9F7F4',
          200: '#F5F3EF',
          300: '#F0EDE8',
          400: '#E8E4DD',
          500: '#DDD8CF',
          600: '#C9C2B6',
          700: '#A69B8A',
          800: '#7A6F5E',
          900: '#4F453A',
        },
        coral: {
          50: '#FFF5F3',
          100: '#FFE8E4',
          200: '#FFD1C9',
          300: '#FFB5A8',
          400: '#FF8976',
          500: '#FF6B52',
          600: '#E5472F',
          700: '#C73520',
          800: '#A32818',
          900: '#7A1F13',
        },
        burnt: {
          50: '#FDF4F1',
          100: '#F9E5DE',
          200: '#F2C8B8',
          300: '#E8A48A',
          400: '#D3674B',
          500: '#C24A2C',
          600: '#A63820',
          700: '#8A2D18',
          800: '#6F2414',
          900: '#541C10',
        },
        grayblue: {
          50: '#F7F8F9',
          100: '#EDEEF1',
          200: '#D8DCE2',
          300: '#B8BFC9',
          400: '#AAB0B8',
          500: '#8B94A0',
          600: '#6B7280',
          700: '#4B5563',
          800: '#374151',
          900: '#1F2937',
        },
        ink: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#202124',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#FF8976' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px -4px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(255, 137, 118, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 137, 118, 0.2)',
      }
    },
  },
  plugins: [],
};