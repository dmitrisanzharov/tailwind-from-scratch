module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
         'massive': ['10rem', { lineHeight: '1' }],
      },
      colors: {
        wacky_custom_color: 'lightgray'
      },
      fontFamily: {
        martel: ["Martel Sans"],
        dyna: ["DynaPuff"],
        cherry: ["Cherry Bomb One"],
        modak: ["Modak"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
