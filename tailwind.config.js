/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    screens: {
      xs: '375px',
      sm: '576px',

      md: '960px',

      lg: '1440px',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#093C3A',
          200: '#00DFD8',
          300: '#00DFD8',
          400: '#00DFD8',
          500: '#00DFD8',
          600: '#00DFD8',
          700: '#00DFD8',
          800: '#00DFD8',
          900: '#00DFD8',
        },
      },
    },
  },
  plugins: [],
}
