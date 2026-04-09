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
        cream: "#EFECE3",
        "blue-light": "#8FABD4",
        "blue-mid": "#4A70A9",
        space: "#000000",
        "space-900": "#050810",
        "space-800": "#080f1a",
        "space-700": "#0d1829",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        body: ["var(--font-barlow)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        scanline: "scanline 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.8)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(74, 112, 169, 0.6)",
        "glow-blue-lg": "0 0 60px rgba(74, 112, 169, 0.4)",
        "glow-cream": "0 0 30px rgba(239, 236, 227, 0.3)",
        "glow-light": "0 0 20px rgba(143, 171, 212, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
