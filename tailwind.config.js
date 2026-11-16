/** @type {import('tailwindcss').Config} */
// Tailwind only provides the reset (preflight) now; the design lives in
// src/style.css (tokens) and in each component's scoped styles.
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: { extend: {} },
  plugins: [],
}
