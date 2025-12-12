/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        white: '#ffffff',
        cream: '#fdfcfa',
        accent: {
          DEFAULT: '#FFD23F',
          light: '#FFE47A',
          dark: '#E5BC38',
          glow: 'rgba(255, 210, 63, 0.4)',
        },
        gray: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#a0a0a0',
          500: '#6b6b6b',
          600: '#4a4a4a',
          700: '#333333',
          800: '#1f1f1f',
          900: '#141414',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        '2xs': '0.25rem',
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
        '4xl': '8rem',
        '5xl': '10rem',
        '6xl': '14rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '28px',
        '2xl': '40px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'md': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'lg': '0 12px 48px rgba(0, 0, 0, 0.08)',
        'xl': '0 24px 80px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 60px rgba(255, 210, 63, 0.4)',
        'accent': '0 4px 20px rgba(255, 210, 63, 0.3)',
        'accent-lg': '0 8px 30px rgba(255, 210, 63, 0.4)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'float': 'float 2s ease-in-out infinite',
        'gradient': 'gradient 5s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
