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
                    content='"Mint Price: 0.005Eth"<br/> "MaxSupply:21000" <br/> "Twitter: @FlappyOwlNft"'
                />
                <meta property="og:image" content="https://openseauserdata.com/files/8193870c76606a2ad728fbcc99d46768.svg" />
                <meta property="og:url" content="https://opensea.io/collection/flappyowl" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/FlappyOwl50.ico" />
            </Head>
            <Header />
            <Welcome />
        </div>
    )
}
