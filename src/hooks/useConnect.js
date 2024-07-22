import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Web3 from "web3";
import { getPrivateSaleABI, getPrivateSaleToken } from "../utils/abis";



export default function useConnect() {
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [balance,setBalance] = useState(0)
  async function initWeb3() {
    const ethereumProvider = await detectEthereumProvider();
    if (!ethereumProvider) return toast.error("Please install MetaMask!");
    const web3Instance = new Web3(ethereumProvider);
    setProvider(ethereumProvider);
    setWeb3(web3Instance);
    try {
      await ethereumProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await ethereumProvider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x61",
                chainName: "BSC Smart Chain Test net",
                rpcUrls: [
                  "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
                ],
              },
            ],
          });
        } catch (e) {
          console.log("error");
        }
      }
    }
  }

  async function connect() {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    // const bal = await web3.eth.getBalance(accounts[0])
    // const balance = web3.utils.fromWei(bal, 'ether');
      const privateSaleContract = new web3.eth.Contract(
        getPrivateSaleABI(),
        getPrivateSaleToken()
      );
      try{
        const balance = await privateSaleContract.methods.balanceOf(accounts[0]).call()
        console.log({balance})
      }catch(e){
        console.log({e})
      }
      console.log({balance})
    setBalance(balance)
    setAccounts(accounts);
  }

  useEffect(() => {
    initWeb3();
  }, []);

  return { connect, web3, accounts,balance };
}
