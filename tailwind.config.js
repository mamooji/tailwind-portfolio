module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
