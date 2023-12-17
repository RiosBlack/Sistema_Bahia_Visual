import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        natal: "url('https://img.freepik.com/vetores-gratis/cartao-de-feliz-natal-com-itens-decorativos_1017-28943.jpg')",
    },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
