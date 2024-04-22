/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'off-white-shadow': '0 0px 4px 0 rgba(255, 255, 255, 0.2), 0 1px 2px 0 rgba(255, 255, 255, 0.1)',
        'custom-shadow': '0px 0px 2px 0px rgba(0,0,0,0.2)',
      },
      colors: {
        "primary": "#F93A0B",
        'secondary': '#145650',
        "tertiary": "#F72B50",
        "dark-gray": "#464646",
        "light-gray": "#888897",
        "gray": "#888888",
        "success": "#68E365",
        'danger': "#F72B50",
        "dark-primary": "#212130",
        "dark-secondary": "#17171E"
      }
    },
  },
  plugins: [],
}

