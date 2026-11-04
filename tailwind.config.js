/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#08090B',
        secondary: '#15191F',
        silver: {
          DEFAULT: '#C6CAD0',
          light: '#E2E5EA',
          muted: '#8B929E',
          dark: '#525760',
        },
        electric: {
          DEFAULT: '#287BFF',
          glow: 'rgba(40, 123, 255, 0.4)',
          subtle: 'rgba(40, 123, 255, 0.12)',
        },
        pureWhite: '#F5F6F8',
        borderDark: '#1E232B',
      },
      fontFamily: {
        editorial: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'ultra': '0.35em',
        'mega': '0.5em',
      },
      boxShadow: {
        'electric-glow': '0 0 35px -5px rgba(40, 123, 255, 0.35)',
        'electric-strong': '0 0 50px rgba(40, 123, 255, 0.5)',
        'luxury-card': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}

