/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#ded4cd',
        sand: '#e6ddd4',
        paper: '#eee6dc',
        cream: '#f4ede3',
        maroon: '#7d2411',
        rust: '#5a1a0a',
        terracotta: '#c4724d',
        ember: '#d97136',
        clay: '#a8563a',
        sage: '#9fab95',
        gold: '#d4af6a',
        ink: '#1a0d07',
        charcoal: '#3a2a24',
        mocha: '#5e3a2a',
        ash: '#8a7a6b',
        y2kpink: '#ffb7ce',
        y2kblue: '#9ddaff',
        y2klime: '#c5f25c',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        wordmark: ['"Abril Fatface"', '"Fraunces"', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        pixel: ['"VT323"', 'ui-monospace', 'monospace'],
        pixelbold: ['"Silkscreen"', '"VT323"', 'monospace'],
        pixeltiny: ['"Press Start 2P"', '"Silkscreen"', 'monospace'],
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.3em',
        widest3: '0.42em',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'grain-texture':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/></svg>\")",
        'pixel-stripes':
          "repeating-linear-gradient(45deg, #7d2411 0 4px, #7d2411 4px 4px, transparent 4px 8px)",
        'pixel-check':
          "linear-gradient(45deg, #7d2411 25%, transparent 25%), linear-gradient(-45deg, #7d2411 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #7d2411 75%), linear-gradient(-45deg, transparent 75%, #7d2411 75%)",
      },
      keyframes: {
        blink: {
          '0%,49%': { opacity: '1' },
          '50%,100%': { opacity: '0.2' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        sparkle: {
          '0%,100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.3) rotate(15deg)', opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(2) infinite',
        wiggle: 'wiggle 0.9s ease-in-out infinite',
        sparkle: 'sparkle 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
