/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#055742',
        accent: '#590F00',
        secondary: '#172EB1',
        background: '#FFFFFF',
        lightBg: '#DADFE1',
      },
    },
  },
  plugins: [],
}

