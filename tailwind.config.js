module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('image/sapi1.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
