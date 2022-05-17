module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    colors: {
      blue: '#3CAAB1',
      'gray-light': '#EAEBEE',
      black: '#373F41',
      gray: '#C0C0C0',
      'dark-gray': '#70797B',
      'dark-blue': '#115D62',
      white: '#FFF',
    },
    fontFamily: {
      sans: ['archivo-regular', 'sans-serif'],
      inter: ['inter', 'sans-serif'],
    },
  },
  plugins: [],
}
