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
