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
    
    
    /*let identity = [

        {name: "_from", type: "string"},
        {name: "_to", type: "string"},
        {name: "_amount", type: "uint256"}
    ]*/

    let holder = [

        {name: "firstName", type: "string"},
        {name: "lastName", type: "string"},
        {name: "location", type: "string"},
        {name: "walletAddress", type: "address"}
    ]

    let transfer = [

        {name: "from", type: "Holder"},
        {name: "to", type: "Holder"},
        {name: "amount", type: "uint256"},

    ]
    
    
    let domainData = {
        name: "TANGL CAPITAL PARTNERS",
        version: "1",
        chainId: 4,
        verifyingContract: "0x549f71200b5Ee3F3C04EF5A29e7c70d40E42ed83",
        salt: "0x54132a91a1bafcf3d90beaad0c0d5f0bda635715da5017e515739dbb823f282d"
    }

    let message = {
        from:  {
            firstName: "Israel",
            lastName: "Komolehin",
            location: "University Of Ibadan, Nigeria",
            walletAddress: "0x292072a24aa02b6b0248C9191d46175E11C86270"
        },
        
        to: {
            firstName: "Tommy",
            lastName: "Shelby",
            location: "Ireland",
            walletAddress: "0xa3CfeF02b1D2ecB6aa51B133177Ee29764f25e31"
        },

        amount: 100
    }
    
    /*let message = {

        _from: "Mr Thomas Shelby",
        _to: "Miss Eda Shelby",
        _amount: 100,
    }*/
    
    /*let data = JSON.stringify({
        types : {
            EIP712Domain: domain,
            Identity: identity
        },
    
        domain: domainData,
        primaryType: "Identity",
        message: message
    
    })*/


    let data = JSON.stringify({
        types : {
            EIP712Domain: domain,
            Transfer: transfer,
            Holder: holder
        },
    
        domain: domainData,
        primaryType: "Transfer",
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