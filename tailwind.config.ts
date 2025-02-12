import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rosa: "var(--rosa)",
        azul: "var(--azul)",
        fundo: "var(--fundo)",
        fundoClaro: "var(--fundoClaro)",
        hoverRosa: "var(--hoverRosa)",
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      screens: {
        xs: '480px', // Define o breakpoint "xs" para telas menores que 480px
      },
    },
  },
  plugins: [],
} satisfies Config;
