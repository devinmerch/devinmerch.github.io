/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      textColor: {
        'color-main': '#00143d',
      },
      letterSpacing: {
        wider: '0.1em',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
      backgroundColor: { 
        'main': '#00143d',
        'secondary': '#fca791', 
      },
      borderColor: { 
        'main': '#00143d', 
      },
    }
  },
  plugins: [],
}

