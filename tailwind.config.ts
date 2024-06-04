import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/sidebarMenu/cardGameFastLaunch/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    theme: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        'mobile': '561px',
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px'
        // => @media (min-width: 1280px) { ... }
      },
    },
    colors: {
      'base-purple':{
        300: '#8a5dd2' 
      },
      'base-black':{
        300: '#232426',
        500: '#1d1d1d'
      }
    },
  },
  plugins: [],
};
export default config;
