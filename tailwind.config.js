module.exports = {
  theme: {
    extend: {
      inset: {
        'sachin': '-3rem',
        'thuglife-y': '90px',
        'thuglife-x': '57px',
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
