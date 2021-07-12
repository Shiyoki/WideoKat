module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      placeholderColor: ['hover', 'active'],
      textColor: ['hover', 'active'],
      placeholderOpacity: ['hover', 'active'],
      backgroundColor: ['focus', 'active'],
      borderColor: ['hover', 'focus', 'active'],
    },
    scrollbar: ['rounded'],
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
