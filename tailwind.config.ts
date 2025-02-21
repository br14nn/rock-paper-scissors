import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        screen: "100svh",
      },
      boxShadow: {
        paper: "0px 8px #2945C2",
        "paper-2": "0px 6px #2945C2",
        scissors: "0px 8px #C76C1D",
        "scissors-2": "0px 6px #C76C1D",
        rock: "0px 8px #9F1536",
        "rock-2": "0px 6px #9F1536",
        multiple:
          "0px 0px 0px 20px rgba(255,255,255,0.15), 0px 0px 0px 60px rgba(255,255,255,0.10), 0px 0px 0px 100px rgba(255,255,255,0.05)",
        "multiple-md":
          "0px 0px 0px 50px rgba(255,255,255,0.15), 0px 0px 0px 120px rgba(255,255,255,0.10), 0px 0px 0px 210px rgba(255,255,255,0.05)",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-gradient":
          "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        "rock-gradient":
          "linear-gradient(180deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        "paper-gradient":
          "linear-gradient(180deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "scissors-gradient":
          "linear-gradient(180deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
      },
      colors: {
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
      },
    },
  },
  plugins: [],
};
export default config;
