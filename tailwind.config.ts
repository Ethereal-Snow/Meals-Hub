import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm restaurant palette, matched to the Meals' Hub brand mark
        hub: {
          orange: "#EF6C1D",
          "orange-light": "#FF8A3D",
          "orange-dark": "#C4520F",
          black: "#1A1512",
          charcoal: "#2A2220",
          cream: "#FFF6EC",
          tan: "#F3E3D3",
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        warm: "0 10px 30px -10px rgba(196, 82, 15, 0.35)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(26,21,18,0.35) 0%, rgba(26,21,18,0.75) 65%, rgba(26,21,18,0.95) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
