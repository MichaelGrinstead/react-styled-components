import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        retro: {
          green: "#8ec07c",
          blue: "	#458588",
          yellow: "#e9c46a",
          orange: "#d79921",
          red: "#cc241d",
          brown: "#3c3836",
        },
        clean: {
          seaSalt: "#F8F9FA",
          antiFlashWhite: "#E9ECEF",
          platinum: "#DEE2E6",
          lightFrenchGrey: "#D0D4DC",
          frenchGrey: "#ADB5BD",
          githubGrey: "#adbac7",
          slateGrey: "#6C757D",
          outerSpace: "#495057",
          onyx: "#343A40",
          eerieBlack: "#212529",
          night: "#121417",
        },

        blueBackground: "#e2eafc",
        purpleBackground: "#001d3d",
        whiteBackground: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
export default config;
