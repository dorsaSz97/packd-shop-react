/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }
    },

    extend: {
      fontFamily: {
        radial: ['Radial', 'sans-serif'],
        pp: ['PP', 'sans-serif'],
      },
      colors: {
        primary: '#FEF9EF',
        dark: '#0A0A0A',
      },
    },
  },
  plugins: [],
};
