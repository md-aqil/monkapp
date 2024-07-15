import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Web3 from "web3";

export default function useConnect() {
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  async function initWeb3() {
    const ethereumProvider = await detectEthereumProvider();
    if (!ethereumProvider) return toast.error("Please install MetaMask!");
    const web3Instance = new Web3(ethereumProvider);
    setProvider(ethereumProvider);
    setWeb3(web3Instance);
  }

  async function connect() {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    setAccounts(accounts);
  }

  useEffect(() => {
    initWeb3();
  }, []);
  return { connect, web3, accounts };
}
