/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: '#0A84FF',
        deepBlue: '#0057FF',
        orangeGold: '#FF9F1C',
        darkNavy: '#08111F',
        charcoal: '#050505',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.02)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 132, 255, 0.05)',
        'glass-thick': '0 8px 32px 0 rgba(10, 132, 255, 0.12)',
        'neon-blue': '0 0 25px rgba(10, 132, 255, 0.3)',
        'neon-gold': '0 0 25px rgba(255, 159, 28, 0.3)',
        'neon-glow': '0 0 40px rgba(0, 87, 255, 0.25)',
      }
    },
  },
  plugins: [],
}
