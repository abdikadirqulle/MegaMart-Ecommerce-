/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors:{
      'primary': "#008ECC",
      "Text":"#666666",
      "Heading" : "#222222",
      "Black": "#000000",
      "Light": "#888888",
      "Border": "#EDEDED",
      "Background1": "#F5F5F5",
      "Background2": "#F6F6FC",
      "Yellow" : "#F3BC01",
      "Background3": "#F3F9FB",
      "Line" : "#D9D9D9",
      "White": "#FFFFFF",
      "Green": "#249B3E"
    },
    extend: {},
  },
  plugins: [],
};
