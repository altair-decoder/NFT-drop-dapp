import Head from "next/head"
import Header from "../components/Header"
import Welcome from "../components/Welcome"
export default function Home() {
    return (
        <div>
            <Head>
                <title>FlappyOwl || Ascii art nft collections.</title>
                <meta property="og:title" content="Official FlappyOwlNft minting site." />
                <meta property="og:type" content="article" />
                <meta
                    property="og:description"
                    content="🎉️ Mint Price: 0.005Eth | 🎉️ MaxSupply:21000 | 🎉️Twitter: @FlappyOwlNft"
                />
                <meta property="og:image" content="https://flappyowl.vercel.app/newPict400x400-2.png" />
                <meta property="og:url" content="https://opensea.io/collection/flappyowl" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/newPict128x128-4.ico" />
            </Head>
            <Header />
            <Welcome />
        </div>
    )
}
