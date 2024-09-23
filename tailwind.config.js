/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './blog.html'
  ],
  theme: {
    extend: {
      colors: {
        'btn-primary': '#B4F461',
        'btn-secondary': 'rgba(17, 17, 17, 0.3)',
        'cd-section-bg' :'rgba(17, 17, 17, 0.1)',
      },
    },
  },
  plugins: [require('daisyui')],
}
