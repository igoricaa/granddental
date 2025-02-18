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
        joan: ['var(--font-joan)'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-250px)' },
        },
        reveal: {
          '0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
          '100%': { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out',
        fadeOut: 'fadeOut 1s ease-out 3.4s forwards',
        slideLeft: 'slideLeft 0.3s ease-out 0.8s forwards',
        reveal: 'reveal 1.5s ease-out 1.5s forwards',
        appear: 'fadeIn 0.7s ease-out, slideLeft 0.3s ease-out 0.8s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
