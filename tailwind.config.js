const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/scenes/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: 'hsl(12, 88%, 59%)',
        blue: 'hsl(228, 39%, 23%)',
        grey: 'hsl(227, 12%, 61%)',
        lightGrey: 'hsl(0, 0%, 98%)',
        darkBlue: 'hsl(233, 12%, 13%)',
        lightPeach: 'hsl(13, 100%, 96%)',
      },
      maxWidth: {
        site: '1200px',
      },
      boxShadow: {
        ctaShadow:
          '0px 2px 2px rgba(242, 95, 58, 0.05), 0px 6px 6px rgba(242, 95, 58, 0.08), 0px 10px 10px rgba(242, 95, 58, 0.12)',
        ctaShadowDark:
          '0px 2px 2px rgba(187, 47, 12, 0.05), 0px 6px 6px rgba(187, 47, 12, 0.08), 0px 10px 10px rgba(187, 47, 12, 0.12), 0px 14px 14px rgba(187, 47, 12, 0.12)',
      },
      fontFamily: {
        sans: ['var(--font-family-sans)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        ctaMobile: "url('/images/bg-simplify-section-mobile.svg')",
        ctaDesktop: "url('/images/bg-simplify-section-desktop.svg')",
      },
      screens: {
        mdlg: '900px',
      },
    },
  },
  plugins: [],
};
