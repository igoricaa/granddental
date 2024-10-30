import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      screens: {
        '2xl': '1500px',
        'max-w-8xl': '1440px',
      },
      colors: {
        background: 'var(--background)',
        primary: {
          default: 'var(--primary-color)',
          dark: 'var(--primary-color-dark)',
        },
        accent: {
          default: 'var(--accent-color)',
          dark: 'var(--accent-color-dark)',
        },
        bgmain: {
          default: 'var(--bgmain-color)',
          dark: 'var(--bgmain-color-dark)',
        },
        textDark: 'var(--text-dark)',
        buttonTextDark: 'var(--button-text-dark)',
      },
      fontFamily: {
        brandon: ['var(--font-brandon-regular)'],
        brandonBold: ['var(--font-brandon-bold)'],
      },
    },
  },
  plugins: [],
};
export default config;
