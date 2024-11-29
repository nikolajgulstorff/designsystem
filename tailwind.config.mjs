/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', // Projektets filer
    './node_modules/flowbite/**/*.js', // Flowbite-modulindhold
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        orange: {
          50: '#FFEEE5',
          100: '#FFDECC',
          200: '#FFBD99',
          300: '#FF9C66',
          400: '#FF7A33',
          500: '#FF5900',
          600: '#CC4700',
          700: '#993600',
          800: '#662400',
          900: '#331200',
        },
        blue: {
          50: '#F5FBFF',
          100: '#EBF8FF',
          200: '#D6F1FF',
          300: '#C2EAFF',
          400: '#ADE2FF',
          500: '#99DBFF',
          600: '#47BFFF',
          700: '#009FF5',
          800: '#006AA3',
          900: '#003552',
        },
        black: {
          50: '#EBEBEB',
          100: '#D6D6D6',
          200: '#ADADAD',
          300: '#858585',
          400: '#5C5C5C',
          500: '#333333',
          600: '#292929',
          700: '#1F1F1F',
          800: '#141414',
          900: '#0A0A0A',
        },
      },
      spacing: {
        xxs: '8px',
        xs: '16px',
        s: '24px',
        m: '32px',
        ml: '48px',
        lg: '64px',
        xl: '80px',
        '2xl': '96px',
        '3xl': '112px',
        '4xl': '128px',
        '5xl': '176px',
        '6xl': '208px',
        '7xl': '240px',
        '8xl': '272px',
        '9xl': '304px',
      },
      fontFamily: {
        body: ['Kiro', 'sans-serif'],
        title: ['Noka', 'sans-serif'],
      },
      fontSize: {
        small: ['0.625rem', { lineHeight: '16px' }],
        base: ['1rem', { lineHeight: '24px' }],
        medium: ['1.625rem', { lineHeight: '32px' }],
        large: ['2.625rem', { lineHeight: '40px' }],
        xlarge: ['4.25rem', { lineHeight: '48px' }],
        x2large: ['6.875rem', { lineHeight: '48px' }],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        bold: '600',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderRadius: {
        DEFAULT: '1.25rem',
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '32px',
        x2large: '64px',
        x3l: '96px',
      },
      boxShadow: {
        drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('flowbite/plugin'),
  ],
};
