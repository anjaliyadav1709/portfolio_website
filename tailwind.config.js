/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom animations here
      animation: {
        blob: "blob 10s infinite",
      },
      // Define what the "blob" animation actually does
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      backgroundImage:{
        'skills-gardient':'linear-gradient(38,73deg,rgba(204,0,107,0,15) 0%, rgba(201,32,104,0) 50%),linear-gradient(141.27deg,rgba(0,70,200,0) 50% rgba(0,70,209,0.15) 100%)'
      }
    },
  },
  plugins: [],
}