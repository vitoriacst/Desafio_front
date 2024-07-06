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
        'dark-blue':'#1F3B4D',
        'blocky-dark':'#1B2431',
        'soft-purple':'#C1C6FC',
        'black': '#000000',
        'red': '#FF0000',
        'orange': '#FFA500',
        'yellow': '#FFFF00',
        'green': '#008000',
        'blue': '#0000FF',
        'purple': '#800080',
        'pink': '#FFC0CB',
        'teal': '#008080',
        'cyan': '#00FFFF',
        'indigo': '#4B0082',
        'brown': '#A52A2A',
        'gray': '#808080',
        'light-gray': '#D3D3D3',
        'dark-gray': '#A9A9A9',
        'light-blue': '#ADD8E6',
        'light-green': '#90EE90',
        'dark-green': '#006400',
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
