import defaultTheme from 'tailwindcss/defaultTheme';

/**
 *  @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'var(--color-accent)',
      },
      colors: {
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
      },
    },
    fontFamily: {
      sans: ['Noto Sans KR Variable', ...defaultTheme.fontFamily.sans],
    },
  },
};
