import Head from "next/head"
import Header from "../components/Header"
import Welcome from "../components/Welcome"
export default function Home() {
    return (
        <div>
            <Head>
                <title>FlappyOwl || Collections</title>
                <meta name="description" content="official flappyOwl minting site" />
                <link rel="icon" href="/FlappyOwl50.ico" />
            </Head>
            <Header />
            <Welcome />
        </div>
    )
}
