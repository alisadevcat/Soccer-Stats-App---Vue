module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 5 column grid
        13: "repeat(5, minmax(100px, 1fr))",
        14: "repeat(3, minmax(200px, 1fr))",
        15: "repeat(2, minmax(100px, 1fr))",
        16: "repeat(2, minmax(100px, 1fr))",
      },
      fontSize: {
        'xs': '.75rem'
      },
      colors: {
        "very-light-gray": "#f1f1f1",
      },
      padding: {
        30: "7rem",
      },
    },
  },
  screens: {
    xs: "440px",
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
};
