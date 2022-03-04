import Web3 from "web3";

export const sign=async(data, setSignature)=>{

    console.log("okay")

    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const signer = accounts[0]

    console.log(web3)
    console.log(signer)
    

    web3.currentProvider.sendAsync(
        {
            method: "eth_signTypedData_v3",
            params: [signer, data],
            from: signer,
            id: 4

            
        },

        function(err, result){
            if(err) {
                console.log(err)
            }

            else {
                const signature = result.result.substring(2)
                console.log(signature)
                const r = "0x" + signature.substring(0, 64)
                const s = "0x" + signature.substring(64, 128)
                const v = parseInt(signature.substring(128, 130), 16)

                console.log("signature -->", signature)
                console.log("r -->", r)
                console.log("s -->", s)
                console.log("v -->", v)
                //console.log(result.result)
                setSignature(result.result)
            }
        }
    )

    
}
