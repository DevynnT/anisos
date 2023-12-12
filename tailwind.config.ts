import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)"],
        serif: ["var(--font-bree)"],
      },
      colors: {
        primary: {
          green: "#B2CC4F",
          "dark-gray": "#4E4E4E",
          "light-gray": "#C4C4C4",
          pink: "#F55253",

        },
      },
      // Add your custom gradient here
      backgroundImage: {
        'green-gradient': 'linear-gradient(to bottom right, #10B981, #6EE7B7)', // Example green gradient
      },
    },
  },
  plugins: [],
};

export default config;
