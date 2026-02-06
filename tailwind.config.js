/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                tennis: {
                    DEFAULT: '#D2E603', // Lime green
                    dark: '#A6B800',
                },
                forest: {
                    DEFAULT: '#1A472A', // Deep green
                    light: '#2C5E3F',
                    dark: '#0F2B19',
                },
                dark: {
                    DEFAULT: '#111111',
                    lighter: '#1F1F1F',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Oswald', 'sans-serif'], // Assuming we might want a display font
            },
        },
    },
    plugins: [],
}
