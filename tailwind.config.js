const { thonUI, thonUIContent } = require('thon-ui/plugin');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.tsx','src/**/*.tsx',thonUIContent()],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'code': ['Courier Prime','monospace']
      }
      
    },
  },
  plugins: [thonUI()],
}
