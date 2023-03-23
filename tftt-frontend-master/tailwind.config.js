/** @type {import('tailwindcss').Config} */
/* 
"engines": {
    "node": "16.13.0",
    "npm": "8.1.0"
  },
*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  jit: true,
  theme: {
    extend: {
      // Add any custom colors here (e.g. primary, secondary, etc.)
      colors: {
        // Alert Colors
        success: "#00B74A",
        error: "#FF3D71",
        warning: "#FFC400",
        info: "#00B8D9",
        //
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        // Custom Color Palette
        "custom-gray": "#ABA8A9",
        "custom-brown": "#a79360",
        "custom-green": "#62b16e",
        "custom-navygreen": "#8D8741",
        "custom-offwhite": "#F4F0E8",
        "custom-whitegray": "#C3C1AB",
        "custom-blue": "#659DBD",
        "custom-whiteblue": "#D8DFEE",
        "custom-lightbrown": "#FBEEC1",
        "custom-silver": "#5b5b5b",
        "custom-darkgray": "#808080",
      },
    },
  },
  plugins: [],
};
