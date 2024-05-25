/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#ffeaea',
        'secondary-pink': '#ffcccc',
        'primary-purple': '#8000ff',
        'secondary-purple': '#9a208c',
        'tertiary-purple': '#f5c6ec'
      },
      background: {
        back: "var('--color-background-back')",
        front: "var('--color-background-front')"
      },
      button: "var('--color-button')",

      typography: {
        base: "var('--base-text-font')",
        header: "var('--header-text-font')",
        introheader: "var('--introheader-text-font')",
        nav: "var('--nav-text-font')"
      }
    }
  },
  plugins: []
}
