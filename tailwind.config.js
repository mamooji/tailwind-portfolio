module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: "#06B6D4",
        tealV2: "#14B8A6",
      },
      backgroundImage: {
        hero: "url('Assets/Images/heroImage.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
