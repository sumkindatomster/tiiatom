/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./*.hbs", "./**/*.hbs"],
    theme: {
        extend: {
            colors: {
                "champagne-pink": "#ead1c3",
                "rose-dust": "#ab5f6f",
                "winter-green": "#64947e",
                "nectar-orange": "#f5cca3",
            },
            /*fontFamily: {
                sans: ["MavenPro", ...defaultTheme.fontFamily.sans],
                serif: ["Rokkitt", ...defaultTheme.fontFamily.serif],
                display: ["Oranienbaum", ...defaultTheme.fontFamily.serif],
            },*/
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
