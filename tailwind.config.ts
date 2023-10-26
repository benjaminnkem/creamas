import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // container: { screens: { xxl: "2400px" } },
      colors: {
        primaryColor: "#4b2f28",
        primaryColorLight: "#5d3a32",
        primaryColorDark: "#3d2721",
      },
    },
  },
  plugins: [],
};
export default config;
