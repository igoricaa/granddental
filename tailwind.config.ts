import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          default: 'rgba(238, 192, 136, 1)',
          dark: 'rgba(235, 180, 114, 1)',
        },
        accent: {
          default: 'rgba(41, 160, 165, 1)',
          dark: 'rgba(36, 140, 145, 1)',
        },
        bgmain: {
          default: 'rgba(78, 78, 78, 1)',
          dark: 'rgba(78, 78, 78, 0.8)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
