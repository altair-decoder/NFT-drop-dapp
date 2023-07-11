/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                text: "text 5s ease infinite",
            },
            keyframes: {
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            colors: {
                yinblue: "#2e7daf",
                liyellow: "#FFE78F",
                houseblue: "#00c0d2",
                pintk: "#8614f8",
                alchemy: "linear-gradient(267.45deg, #05d5ff -34.23%, #53f 99.39%)",
            },
            fontFamily: {
                Rubik: ["Rubik"],
                ams: ["Amatic SC", "cursive"],
                Ubuntu: ["Ubuntu", "sans-serif"],
                Prompt: ["Prompt", "sans-serif"],
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: true,
    },
}
