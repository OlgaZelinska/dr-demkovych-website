/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Use CSS variables for consistent color rendering across devices
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        },
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        // Brand colors - explicitly sRGB
        orange: 'rgb(var(--color-orange) / <alpha-value>)',
        button: 'rgb(var(--color-button) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-light': 'rgb(var(--color-text-light) / <alpha-value>)',
        'text-black': 'rgb(var(--color-text-black) / <alpha-value>)',
        'gray-1': 'rgb(var(--color-gray-1) / <alpha-value>)',
        'gray-2': 'rgb(var(--color-gray-2) / <alpha-value>)',
        medical: {
          light: 'rgb(var(--color-primary-300) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-primary-600) / <alpha-value>)',
          dark: 'rgb(var(--color-dark) / <alpha-value>)',
        }
      },
    },
  },
  plugins: [],
}
