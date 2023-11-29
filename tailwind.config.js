/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      zIndex: {
        999: 999,
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
