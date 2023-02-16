/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px)
      laptop: '1024px',
      // => @media (min-width: 1024px)
      desktop: '1280px'
      // => @media (min-width: 1280px)
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif']
    },
    colors: {
      white: '#fff',
      black: '#000',
      red: '#ff0000', // for debugging
      platinum: '#e0e1dd',
      wolf: '#cfcfcf',
      night: '#0e0e0e',
      blue: '#0d1b2a',
      violet: '#70566d',
      'dark-violet': '#563c5c'
    },
    variants: {
      typography: ['dark']
    },
    extends: {},
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/line-clamp')
    ]
  }
};
