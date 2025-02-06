import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        breathe: 'breathe 2s infinite ease-in-out',
      },
      keyframes: {
        breathe: {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 10px 50px rgba(151, 217, 229, 0.25)',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 20px 60px rgba(151, 217, 229, 0.5)',
          },
          '100%': {
            transform: 'scale(1)',
            boxShadow: '0 10px 50px rgba(151, 217, 229, 0.25)',
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
