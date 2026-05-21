import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        hyper: {
          orange: "#FC5632",
          "orange-hover": "#E54825",
          blue: "#0B6DFF",
          "blue-dark": "#0242C5",
          text: "#111111",
          muted: "#5B6470",
          soft: "#F6F7F8",
          border: "#E5E7EB",
          dark: "#131314"
        },
        retailer: {
          fpt: "#F37021",
          "fpt-hover": "#E65A00",
          tgdd: "#FFD400",
          "tgdd-hover": "#F3C800"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(17, 17, 17, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
