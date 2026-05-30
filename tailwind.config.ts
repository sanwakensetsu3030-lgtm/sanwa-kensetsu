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
        ai: {
          green: "#2D5A3D",
          "green-dark": "#1E3D2A",
          "green-light": "#3D7A52",
          straw: "#C8BA6A",
          "straw-light": "#DDD08A",
          "straw-dark": "#A89840",
          cream: "#F5F0DC",
        },
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
