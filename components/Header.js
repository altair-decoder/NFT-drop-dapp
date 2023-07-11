import { ConnectButton } from "@rainbow-me/rainbowkit"
import styles from "../styles/Home.module.css"
export default function Header() {
    return (
        <div>
            <nav className={styles.navBar}>
                <div className="flex items-center ">
                    <div className="brand-name font-ps2p font-bold lg:text-2xl sm:text-2xl xs:text-md">
                        {/* <img className={styles.imgFlappy}></img> */}
                        FlappyOwl
                    </div>
                </div>
                <div className="lg:text-md md:text-sm sm:text-sm">
                    <ConnectButton
                        // showBalance={{ smallScreen: true }}
                        chainStatus={{ smallScreen: "icon" }}
                        accountStatus={{
                            smallScreen: "avatar",
                            largeScreen: "address",
                        }}
                    />
                </div>
            </nav>
        </div>
    )
}
