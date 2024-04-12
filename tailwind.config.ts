import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      portfolio: {
        color01: "#142530",
        color02: "#132C32",
        color03: "#02EA5F",
        color04: "#D9D9D9",
        color05: "#6dd200",
      },
    },
    screens: {
      mobile: "320px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      dropShadow: {
        top: "0 -5px 5px rgba(76, 209, 55,.3)",
        bottom: "0 5px 5px rgba(76, 209, 55,.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
