/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE6',
        sand: '#E8DFCA',
        bone: '#FAF7F2',
        stone: '#DED4CD',
        clay: '#C8A98A',
        terracotta: '#7D2411',
        rust: '#9A3B22',
        espresso: '#2A1F1A',
        cocoa: '#4A352A',
        mocha: '#6B4E3D',
        ash: '#8A7A6B',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.3em',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
