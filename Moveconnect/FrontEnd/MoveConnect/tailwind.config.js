/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#2bee79",
        "accent-cyan": "#00f0ff",
        "deep-blue": "#0a1122",
        "glass-surface": "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "background-light": "#f6f8f7",
        "background-dark": "#0a1122",
        "midnight": "#050A14",
        "secondary": "#00f0ff",
        "glass": "rgba(255, 255, 255, 0.03)",
        "surface": "#0f1623",
        "glass-light": "rgba(255, 255, 255, 0.05)",
        "neon-cyan": "#00f0ff",
        "primary-glow": "rgba(43, 238, 121, 0.4)",
      },
      fontFamily: {
        "display": ["Spline Sans", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "full": "9999px",
      },
      boxShadow: {
        'neon-green': '0 0 20px -5px rgba(43, 238, 121, 0.5)',
        'neon-cyan': '0 0 20px -5px rgba(0, 240, 255, 0.3)',
        'neon': '0 0 10px rgba(43, 238, 121, 0.3), 0 0 20px rgba(43, 238, 121, 0.1)',
        'neon-strong': '0 0 30px -5px rgba(43, 238, 121, 0.5)',
        'glow': '0 0 15px rgba(43, 238, 121, 0.3)',
        'glow-strong': '0 0 25px rgba(43, 238, 121, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'drift': 'drift 20s linear infinite',
        'blob': 'blob 10s infinite',
        'scan': 'scan 3s infinite ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(43, 238, 121, 0.2), 0 0 20px rgba(43, 238, 121, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(43, 238, 121, 0.6), 0 0 40px rgba(43, 238, 121, 0.4)' },
        },
        drift: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        scan: {
          '0%': { top: '10%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '90%', opacity: '0' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

