import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the src directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If pages are outside src
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // If components are outside src
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If app directory exists
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom CSS variables
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
