import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bauhaus: {
          primary: "#e63946",
          secondary: "#ffd60a",
          tertiary: "#457b9d",
          accent: "#1d3557",
          neutral: "#f1faee"
        }
      },
      fontFamily: {
        bauhaus: ["'Futura PT'", "Futura", "Trebuchet MS", "Arial", "sans-serif"],
        geometric: ["'Bauhaus 93'", "Orbitron", "sans-serif"]
      },
      boxShadow: {
        "bauhaus-bold": "12px 12px 0px 0px rgba(0,0,0,0.85)"
      },
      rotate: {
        5: "5deg"
      }
    }
  },
  plugins: []
};

export default config;
