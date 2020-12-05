module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   teal: colors.cyan,
    // },
    extend: {
      colors: {
        teal: "#06b6d4",
      },
      backgroundImage: (theme) => ({
        "hero-image": "url('/src/Assets/Images/heroImage.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
