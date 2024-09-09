import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navyBlue: '#05445e',
        blueGrotto: '#189ab4',
        blueGreen: '#75e6da',
        babyBlue: '#d4f1f4',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeInShort: 'fadeIn 1s ease-in-out',
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeInLong: 'fadeIn 3s ease-in-out',
        shake: 'shake 0.5s ease-in-out',
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: "1" },
          '50%': { opacity: "0" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '75%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        rotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
