/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ibmPlexMono: ['"IBM Plex Mono"', 'monospace'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        'home-background-image': "linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)),url('/images/pizza-background.png')",
      },
    },
  },
  plugins: [],
}

