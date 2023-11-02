import Head from "next/head"
import Header from "../components/Header"
import Welcome from "../components/Welcome"
export const metadata = {
    title: "FlappyOwl NFT",
    keywords: [
        "NFT",
        "FlappyOwl NFT",
        "Ethereum",
        "Crypto",
        "Opensea",
        "Flappyowl",
        "Onchain Nft",
    ],
    twitter: {
        card: "summary_large_image",
        title: "FlappyOwl || Ascii art nft collections.",
        description: "🎉️ Mint Price: 0.005Eth | 🎉️ MaxSupply:21000 | 🎉️Twitter: @FlappyOwlNft",
        creator: "@flappyowl.lab",
        images: ["https://flappyowl.vercel.app/newPict400x400-2.png"],
    },
}
export default function Home() {
    return (
        <div>
            <Head>
                {/* <title>FlappyOwl || Ascii art nft collections.</title>
                <meta property="og:title" content="Official FlappyOwlNft minting site." />
                <meta property="og:type" content="article" />
                <meta
                    property="og:description"
                    content="🎉️ Mint Price: 0.005Eth | 🎉️ MaxSupply:21000 | 🎉️Twitter: @FlappyOwlNft"
                />
                <meta property="og:image" content="https://flappyowl.vercel.app/newPict400x400-2.png" />
                <meta name="twitter:card" content="summary_large_image" /> */}
                <meta property="og:url" content="https://opensea.io/collection/flappyowl" />
                <link rel="icon" href="/newPict128x128-4.ico" />
            </Head>
            <Header />
            <Welcome />
        </div>
    )
}
