/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px)
        laptop: '1024px',
        // => @media (min-width: 1024px)
        desktop: '1280px'
        // => @media (min-width: 1280px)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        black: {
          100: '#cfcfcf',
          200: '#9f9f9f',
          300: '#6e6e6e',
          400: '#3e3e3e',
          500: '#0e0e0e',
          600: '#0b0b0b',
          700: '#080808',
          800: '#060606',
          900: '#030303'
        },
        'smoky-black': {
          100: '#cfcece',
          200: '#9f9e9c',
          300: '#706d6b',
          400: '#403d39',
          500: '#100c08',
          600: '#0d0a06',
          700: '#0a0705',
          800: '#060503',
          900: '#030202'
        },

        // => https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd
        'rich-blue': {
          100: '#cfd1d4',
          200: '#9ea4aa',
          300: '#6e767f',
          400: '#3d4955',
          500: '#0d1b2a',
          600: '#0a1622',
          700: '#081019',
          800: '#050b11',
          900: '#030508'
        },
        'oxford-blue': {
          100: '#d1d4d8',
          200: '#a4a8b1',
          300: '#767d89',
          400: '#495162',
          500: '#1b263b',
          600: '#161e2f',
          700: '#101723',
          800: '#0b0f18',
          900: '#05080c'
        },
        'dazzled-blue': {
          100: '#d9dee4',
          200: '#b3bdc9',
          300: '#8d9cad',
          400: '#677b92',
          500: '#415a77',
          600: '#34485f',
          700: '#273647',
          800: '#1a2430',
          900: '#0d1218'
        },
        'shadow-blue': {
          100: '#e4e8ee',
          200: '#c9d1dd',
          300: '#adbbcb',
          400: '#92a4ba',
          500: '#778da9',
          600: '#5f7187',
          700: '#475565',
          800: '#303844',
          900: '#181c22'
        },
        platinum: {
          100: '#f9f9f8',
          200: '#f3f3f1',
          300: '#ecedeb',
          400: '#e6e7e4',
          500: '#e0e1dd',
          600: '#b3b4b1',
          700: '#868785',
          800: '#5a5a58',
          900: '#2d2d2c'
        },

        // => https://coolors.co/palette/119da4-0c7489-13505b-040404-d7d9ce
        viridian: {
          100: '#cfebed',
          200: '#a0d8db',
          300: '#70c4c8',
          400: '#41b1b6',
          500: '#119da4',
          600: '#0e7e83',
          700: '#0a5e62',
          800: '#073f42',
          900: '#031f21'
        },
        teal: {
          100: '#cee3e7',
          200: '#9ec7d0',
          300: '#6dacb8',
          400: '#3d90a1',
          500: '#0c7489',
          600: '#0a5d6e',
          700: '#074652',
          800: '#052e37',
          900: '#02171b'
        },
        'midnight-green': {
          100: '#d0dcde',
          200: '#a1b9bd',
          300: '#71969d',
          400: '#42737c',
          500: '#13505b',
          600: '#0f4049',
          700: '#0b3037',
          800: '#082024',
          900: '#041012'
        },
        'rich-black': {
          100: '#cdcdcd',
          200: '#9b9b9b',
          300: '#686868',
          400: '#363636',
          500: '#040404',
          600: '#030303',
          700: '#020202',
          800: '#020202',
          900: '#010101'
        },
        timberwolf: {
          100: '#f7f7f5',
          200: '#eff0eb',
          300: '#e7e8e2',
          400: '#dfe1d8',
          500: '#d7d9ce',
          600: '#acaea5',
          700: '#81827c',
          800: '#565752',
          900: '#2b2b29'
        }
      },
      variants: {
        typography: ['dark']
      },
      plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp')
      ]
    }
  }
};
