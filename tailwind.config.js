/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "320px",
            // => @media (min-width: 320px) { ... }
            sm: "640px",
            // => @media (min-width: 640px) { ... }
            md: "768px",
            // => @media (min-width: 768px) { ... }
            lg: "1024px",
            // => @media (min-width: 1024px) { ... }
            xl: "1280px",
            // => @media (min-width: 1280px) { ... }
            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
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
                VT: ["VT323", "monospace"],
                ps2p: ["Press Start 2P", "cursive"],
                Fira: ["Fira Code", "monospace"],
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: true,
    },
}
