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
    },
  },
  plugins: [],
};
export default config;
