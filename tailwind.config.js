/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image" : "url('./src/assets/purple-stroke-lines-cyber-space-background-loop-animation-free-video.jpg')",
      }
    },
  },
  plugins: [],
}

