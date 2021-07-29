const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
    ], 
  },
  darkMode: 'media',
  theme: {
    extend: {},
  },
variants: {
  extend: {},
  nowyPlugin: ['responsive', 'hover'],
},
plugins: [
plugin(function({ addUtilities, variants }) {
  const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const newUtilities = {
    '.translate-80-80': {
      transform: 'translate(80%, 80%)',
    },
  }

  addUtilities(newUtilities, variants('nowyPlugin'))
}),
    plugin(function({ addComponents }) {
      const buttons = {
        '.button': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#ddd',
        },
      }

      addComponents(buttons)
    }),

    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })

],
}
