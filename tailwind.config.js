/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
          theme: {
            extend: {
              spacing: {
                13:'50px'
              },
              fontFamily: {
                aclonica: 'Aclonica'
              },
              colors: {
                tema: 'rgb(var(--warna-tema) / <alpha-value>',
                ijo: 'green',
                langit: 'blue'
              },
              animation: {
                'spin-slow':'spin 10s linear infinite',
                'geter': 'geter 3s infinite'
              },
              Keyframes: {
                geter: {
                  '0%, 100%' : { transform: ' translatex(-50px)'},
                  '50%' : { transform: ' translatex(50px)' },
                },
              },
            },
          },
  plugins: [],
}