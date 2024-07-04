import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'pantone': '#FEFEFA',
      'soft-green':'#B9D9C3',
      'soft-blue':'#D1D1D1',
      'green': '#B5B5B6',
      'gray':'#D8DCD6',
      'dark-blue':'#1F3B4D',
    },
  },
  plugins: [],
};
export default config;
