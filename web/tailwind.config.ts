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
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: "1" },
          '50%': { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
