/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        astra: {
          primary: '#FF4DFF',
          secondary: '#B537F2',
          accent: '#8A2BE2',
          background: '#0F1923',
          surface: '#1F2933',
          text: '#F5F5F5',
        },
        light: {
          background: '#FFFFFF',
          surface: '#F8F9FA',
          text: '#1A1A1A',
          primary: '#FF4DFF',
        },
        dark: {
          background: '#121212',
          surface: '#1E1E1E',
          text: '#E0E0E0',
          primary: '#8A2BE2',
        },
      },
      animation: {
        'cosmic-pulse': 'cosmicPulse 3s infinite',
        'star-float': 'starFloat 4s ease-in-out infinite',
        'nebula-glow': 'nebulaGlow 5s infinite',
      },
      keyframes: {
        cosmicPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        starFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        nebulaGlow: {
          '0%, 100%': { boxShadow: '0 0 20px #FF4DFF' },
          '50%': { boxShadow: '0 0 40px #B537F2' },
        },
      },
      backgroundImage: {
        'astra-pattern': "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=1000')",
      },
    },
  },
  plugins: [],
};