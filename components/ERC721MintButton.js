import styles from "../styles/Home.module.css"
import Image from "next/image"
import { useState, useEffect } from "react"
import abiJson from "../constants/erc721abi.json"
import {
    usePrepareContractWrite,
    useAccount,
    useContractRead,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi"
import { ethers } from "ethers"
import { useToasts } from "react-toast-notifications"
export default function ERC721MintButton(props) {
    const [price, setprice] = useState(0)
    const [value, setvalue] = useState(0)
    const [mintNum, setmintNum] = useState(0)
    const [mintCountdata, setmintCountdata] = useState(0)
    const { addToast } = useToasts()
    const { address } = useAccount()
    const [mintLimit, setMintLimit] = useState(0)
    const [mintCostAmount, setMintCostAmount] = useState("0")
    const { data: mintLimitData } = useContractRead({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainid,
        functionName: "maxMintPerWallet",
        watch: true,
    })
    useEffect(() => {
        if (mintLimitData) {
            // setMintLimit("21")
            setMintLimit(mintLimitData.toString())
        }
    }, [mintLimit])

    // mint Cost
    const { data: mintCostData } = useContractRead({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainid,
        functionName: "mintCost",
        watch: true,
    })
    useEffect(() => {
        if (mintCostData) {
            setMintCostAmount(mintCostData.toString())
        }
    }, [mintCostData])

    // mint Count
    const { data: mintCount } = useContractRead({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainID,
        functionName: "mintCount",
        watch: true,
        args: props.address,
    })
    useEffect(() => {
        if (mintCount) {
            setmintCountdata(mintCount.toNumber())
        }
    }, [mintCount])

    const { config } = usePrepareContractWrite({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainID,
        functionName: "mint",
        overrides: {
            from: props.address,
            value: price,
        },
        args: mintNum,
    })
    const { data: mintresults, write: mint } = useContractWrite(config)
    const {
        isLoading: mintisLoading,
        isError: minterror,
        isSuccess: mintisSuccess,
    } = useWaitForTransaction({
        hash: mintresults?.hash,
    })
    useEffect(() => {
        if (minterror) {
            addToast("Transaction error...", { appearance: "error" })
        }
    }, [minterror])
    useEffect(() => {
        if (mintisLoading) {
            addToast("minting...", { appearance: "success" })
        }
    }, [mintisLoading])
    useEffect(() => {
        if (mintisSuccess) {
            addToast("minted successful!", { appearance: "success" })
        }
    }, [mintisSuccess])
    function connectwalletnotice() {
        addToast("Please connect wallet", { appearance: "error" })
    }
    function zeromintnum() {
        addToast("Mint number could not be 0", { appearance: "error" })
    }
    function increase() {
        if (mintNum + 1 < mintLimit + 1) {
            if (mintNum >= mintLimit - mintCountdata) {
                addToast("Exceed Mint Limit", { appearance: "error" })
            } else {
                setmintNum(mintNum + 1)
                if (mintNum == 1) setprice(ethers.utils.parseEther("0.1"))
            }
        } else {
            addToast("Exceed Mint Limit", { appearance: "error" })
        }
    }
    function decrease() {
        if (mintNum > 0) {
            setmintNum(mintNum - 1)
            setprice(ethers.utils.parseEther("0.1"))
        }
    }
    useEffect(() => {
        if (mintNum) {
            setprice((mintCostAmount * mintNum).toString())
            setvalue((ethers.utils.formatEther(mintCostAmount) * mintNum).toString())
        }
    }, [mintNum])
    return (
        <div>
            {address && (
                <div>
                    <div className="flex justify-center ...">
                        <table className="border-separate border-spacing-2 ...">
                            <tbody>
                                <tr>
                                    <td className="font-light xs:text-[8.5px] sm:text-[10px]">You Minted</td>
                                    <td className="font-bold xs:text-[8.5px] sm:text-[10px]">{mintCountdata}</td>
                                    <td className="font-bold xs:text-[8.5px] sm:text-[10px]">/</td>
                                    <td className="font-light xs:text-[8.5px] sm:text-[10px]">Max Mint</td>
                                    <td className="font-bold xs:text-[8.5px] sm:text-[10px]">{mintLimit}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-5 items-center justify-center text-center">
                        <button className={styles.mintButton} onClick={decrease}>
                            -
                        </button>
                        <div className="">{mintNum}</div>
                        <button className={styles.mintButton} onClick={increase}>
                            +
                        </button>
                    </div>
                    <div className="mt-2 xs:text-[8px] sm:text-[10px]" />
                    {mintNum == 0 ? (
                        <button className={styles.mintButton} onClick={zeromintnum}>
                            mint
                        </button>
                    ) : (
                        <button className={styles.mintButton} onClick={mint}>
                            {value} {props.symbol}
                        </button>
                    )}
                    <div className="mt-4 grid grid-cols-2 gap-30">
                        <a target="_blank" href={`${props.scan}${props.contractaddress}`}>
                            <button className="">
                                <Image
                                    src="/etherscan.png"
                                    width="30"
                                    height="30"
                                    title="view on etherscan"
                                ></Image>
                            </button>
                        </a>
                        <a target="_blank" href={`https://opensea.io/collection/${props.opensea}`}>
                            <button className="">
                                <Image
                                    src="/opensea.png"
                                    width="30"
                                    height="30"
                                    title="view on opensea"
                                ></Image>
                            </button>
                        </a>
                    </div>
                </div>
            )}
            {!address && (
                <div>
                    <div className="xs:text-[8px] sm:text-[10px]">You Minted ? / Mint Limit {mintLimit}</div>

                    <div className="mt-8  grid grid-cols-3 gap-5 items-center justify-center text-center">
                        <button className={styles.mintButton} onClick={connectwalletnotice}>
                            -
                        </button>
                        <div className="">{mintNum}</div>
                        <button className={styles.mintButton} onClick={connectwalletnotice}>
                            +
                        </button>
                    </div>
                    <div className="mt-2 xs:text-[8px] sm:text-[10px]" />
                    <button className={styles.mintButton} onClick={connectwalletnotice}>
                        mint
                    </button>
                    <div className="mt-4 grid grid-cols-2 gap-30">
                        <a target="_blank" href={`${props.scan}${props.contractaddress}`}>
                            <button className="">
                                <Image
                                    src="/etherscan.png"
                                    width="30"
                                    height="30"
                                    title="view on etherscan"
                                ></Image>
                            </button>
                        </a>
                        <a target="_blank" href={`https://opensea.io/collection/${props.opensea}`}>
                            <button className="">
                                <Image
                                    src="/opensea.png"
                                    width="30"
                                    height="30"
                                    title="view on opensea"
                                ></Image>
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}
