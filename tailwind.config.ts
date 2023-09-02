import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cursive: ["var(--font-blackOps)"],
      },
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b1e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
