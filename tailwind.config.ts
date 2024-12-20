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
        '3xl': '1700px',
        'max-w-8xl': '1440px',
        'height-750': {
          raw: '(max-height: 750px)',
        },
      },
      padding: {
        containerX: 'var(--padding-container-x)',
        containerY: 'var(--padding-container-y)',
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
        containerBg: {
          default: 'var(--container-bg-color)',
        },
        bgmain: {
          default: 'var(--bgmain-color)',
          dark: 'var(--bgmain-color-dark)',
        },
        textDark: 'var(--text-dark)',
        textLight: 'var(--text-light)',
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
