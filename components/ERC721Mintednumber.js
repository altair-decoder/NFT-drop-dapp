import { useState, useEffect } from "react"
import abiJson from "../constants/erc721abi.json"
import { useContractRead } from "wagmi"
import { ethers } from "ethers"
export default function ERC721Mintednumber(props) {
    const [msupply, setMsupply] = useState("10000")
    const [tsupply, setTsupply] = useState("0")
    const [mintCostAmount, setMintCostAmount] = useState("0")
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
        <div className="flex justify-center ...">
            {/* <div> */}
            <table className="border-separate border-spacing-2 ...">
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        {/* <td className="font-light text-sm">MintCost</td> */}
                        <td className="font-bold text-sm text-slate-700 border-2 rounded">
                            {ethers.utils.formatEther(mintCostAmount).toString()} eth / item
                        </td>
                    </tr>
                    <tr>
                        <td className="font-light text-sm">Minted</td>
                        <td className="font-bold text-sm">{tsupply}</td>
                        <td className="font-light text-sm">/</td>
                        <td className="font-light text-sm">MaxSupply</td>
                        <td className="font-bold text-sm">{msupply}</td>
                    </tr>
                </tbody>
            </table>
            {/* </div> */}
        </div>
    )
}
