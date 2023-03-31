import Head from "next/head"
import Header from "../components/Header"
import Welcome from "../components/Welcome"
export default function Home() {
    return (
        <div>
            <Head>
                <title>NftDrop Testnet</title>
                <meta name="description" content="Goerli testnet minting site" />
                <link rel="icon" href="/Cjdowner-Cryptocurrency-Flat-Ethereum-ETH.ico" />
            </Head>
            <Header />
            <Welcome />
        </div>
    )
}
