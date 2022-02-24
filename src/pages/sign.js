import { sign } from "../functions"
import Web3 from "web3"
import { useState } from "react"


const Sign=()=>{

    const [signature, setSignature] = useState('')

    let domain = [
        {name: "name", type: "string"},
        {name: "version", type: "string"},
        {name: "chainId", type: "uint256"},
        {name: "verifyingContract", type: "address"},
        {name: "salt", type: "bytes32"}
    ]
    
    
    let identity = [

        {name: "_from", type: "string"},
        {name: "_to", type: "string"},
        {name: "_amount", type: "uint256"}
    ]
    
    
    let domainData = {
        name: "TANGL",
        version: "1",
        chainId: 4,
        verifyingContract: "0x549f71200b5Ee3F3C04EF5A29e7c70d40E42ed83",
        salt: "0x54132a91a1bafcf3d90beaad0c0d5f0bda635715da5017e515739dbb823f282d"
    }
    
    let message = {

        _from: "Mr Thomas Shelby",
        _to: "Miss Eda Shelby",
        _amount: 100,
    }
    
    let data = JSON.stringify({
        types : {
            EIP712Domain: domain,
            Identity: identity
        },
    
        domain: domainData,
        primaryType: "Identity",
        message: message
    
    })



    
    

    return (
        <div>
            <button onClick={()=>sign(data, setSignature)}>Authorize Transaction</button>
            <p>{signature.length > 0 && "signature: " + signature}</p>
        </div>
    )

}

export default Sign