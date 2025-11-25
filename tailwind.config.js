/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          light: '#dbeafe', // blue-100
          dark: '#1d4ed8', // blue-700
        },
        secondary: {
          DEFAULT: '#10b981', // emerald-500
        },
        dark: '#111827', // gray-900
        light: '#f9fafb', // gray-50
      }
    },
  },
  plugins: [],
}