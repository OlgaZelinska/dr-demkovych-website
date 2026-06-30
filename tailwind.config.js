/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4e8e3',
          100: '#e8d7d3',
          200: '#d6c2bf',
          300: '#b7d3f4',
          400: '#9cc2eb',
          500: '#7db1e3',
          600: '#365a82',
          700: '#2a4563',
          800: '#1e334a',
          900: '#122233',
        },
        dark: '#1e1c1c',
        light: '#f4e8e3',
        accent: '#365a82',
        orange: '#db854f',
        button: '#b7d3f4',
        medical: {
          light: '#b7d3f4',
          DEFAULT: '#365a82',
          dark: '#1e1c1c',
        }
      },
    },
  },
  plugins: [],
}
