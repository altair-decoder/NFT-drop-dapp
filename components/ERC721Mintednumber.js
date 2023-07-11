import { useState, useEffect } from "react"
import abiJson from "../constants/erc721abi.json"
import { useContractRead } from "wagmi"
import { ethers } from "ethers"
export default function ERC721Mintednumber(props) {
    const [msupply, setMsupply] = useState("0")
    const [isOwner, setOwner] = useState(false)
    const [tsupply, setTsupply] = useState("0")
    const [mintCostAmount, setMintCostAmount] = useState("0")
    const { data: contractOwnerData } = useContractRead({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainid,
        functionName: "owner",
        watch: true,
    })
    useEffect(() => {
        if (contractOwnerData) {
            console.log(contractOwnerData.toString())
            // setOwner(true)
        }
    }, [isOwner])
    const { data: totalSupplydata } = useContractRead({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainid,
        functionName: "totalSupply",
        watch: true,
    })
    const { data: maxSupplydata } = useContractRead({
        addressOrName: props.contractaddress,
        contractInterface: abiJson.abi,
        chains: props.chainid,
        functionName: "maxSupply",
        watch: true,
    })
    useEffect(() => {
        if (totalSupplydata) {
            // console.log(totalSupplydata.toString())
            setTsupply(totalSupplydata.toString())
        }
    }, [totalSupplydata])
    useEffect(() => {
        if (maxSupplydata) {
            // console.log(maxSupplydata.toString())
            setMsupply(maxSupplydata.toString())
        }
    }, [maxSupplydata])

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
    return (
        <div>
            <div className="flex justify-center outline-dashed rounded-2xl ...">
                <div className="p-2 subpixel-antialiased xs:text-[8px] sm:text-[10px] md:text-[11px] tracking-[1px] text-[##a6ff00">
                {/* <div className="font-bold text-md animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"> */}
                    {ethers.utils.formatEther(mintCostAmount).toString()} ethers / flappyowl
                </div>
            </div>
            <div className="flex justify-center ...">
                <table className="border-separate border-spacing-2 ...">
                    <tbody>
                        <tr>
                            <td className="font-light xs:text-[8px] sm:text-[10px]">Minted</td>
                            <td className="font-bold xs:text-[8px] sm:text-[10px]">{tsupply}</td>
                            <td className="font-light xs:text-[8px] sm:text-[10px]">/</td>
                            <td className="font-light xs:text-[8px] sm:text-[10px]">MaxSupply</td>
                            <td className="font-bold xs:text-[8px] sm:text-[10px]">{msupply}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
