module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 5 column grid
        '13': 'repeat(5, minmax(100px, 1fr))',
        '14': 'repeat(3, minmax(200px, 1fr))',
      },
      colors: {
        'very-light-gray': '#f1f1f1',
      },
      padding: {
        '30': '7rem',
      }
    },
  },
  plugins: [],
}
