import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#e8eef7",
          100: "#c5d4ea",
          200: "#9eb8db",
          300: "#779bcb",
          400: "#5a85bf",
          500: "#3d6fb3",
          600: "#2e5a99",
          700: "#1d4178",
          800: "#0e2d5c",
          900: "#0C2C57",
          950: "#071a36",
        },
        ember: {
          50:  "#fdf0f0",
          100: "#fad7d7",
          200: "#f5aaaa",
          300: "#ee7878",
          400: "#e54f4f",
          500: "#C0272D",
          600: "#a82025",
          700: "#8b181d",
          800: "#6e1115",
          900: "#510c0f",
        },
        mist: {
          50:  "#f4f6f9",
          100: "#e8ecf2",
          200: "#d0d9e5",
          300: "#b8c6d8",
          400: "#9fb3cb",
          500: "#87a0be",
          600: "#5e7da2",
          700: "#4a6485",
          800: "#374b63",
          900: "#253242",
        },
        ink: {
          50:  "#f5f5f5",
          100: "#e5e5e5",
          200: "#d4d4d4",
          300: "#a3a3a3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#1a1a1a",
          900: "#0d0d0d",
        },
      },
      fontFamily: {
        sans:  ["var(--font-archivo)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono:  ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
