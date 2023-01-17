/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        monospace:["space mono"],
        body: ['"space mono"']
       },
    },
  },
  plugins: [],
}
