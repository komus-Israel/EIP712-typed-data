
import { useEffect, useState } from 'react';
import Sign from './pages/sign';
import Web3 from 'web3';


function App() {

  const [connectState, setConnectState] = useState(false)
  const [hasWallet, setHasWallet] = useState(false)

  const connect=async()=>{

    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

    try {
      const { ethereum } = window

      await ethereum.request({method: 'eth_requestAccounts'})
      const accounts = await web3.eth.getAccounts()
      accounts.length > 0 && setConnectState(true)

    } catch (err) {

      console.log(err)

    }
    
  }

  const checkWallet=async()=>{

    
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    accounts.length > 0 && setConnectState(true)

    try {
      const { ethereum } = window
      ethereum.isMetaMask && setHasWallet(true)
    } catch (err) {
      console.log(err)
    }

    

    


  }

  useEffect(()=>{
    checkWallet()
  })

  

 

  return (
    <div className="App">

      <button onClick={hasWallet ? connect : ()=>alert("install metamask")}>{(connectState && hasWallet) ? "wallet connected" : "connect wallet"}</button>

      <Sign />

    </div>
  );
}

export default App;
