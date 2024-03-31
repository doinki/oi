import defaultTheme from 'tailwindcss/defaultTheme';

/**
 *  @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans KR Variable', ...defaultTheme.fontFamily.sans],
    },
  },
};
