import { useState } from "react";
import { toast } from "react-toastify";
import { BUSD_ABI, BUSD_ADDRESS, getPrivateSaleABI, getPrivateSaleToken, REFERRAL_ADDRESS } from "../utils/abis";
import Web3 from "web3";

export default function useSwap(web3,accounts){
    const [amount,setAmount] = useState('')


async function enableBusd(){
  if (amount === '') return toast.error('Please enter a valid amount');
  if (+amount > 6250) return toast.error('Please enter amount less than 6250');
  if (accounts.length < 1) return  toast.error('Please connect to your wallet');
  try {
    const busdContract = new web3.eth.Contract(BUSD_ABI, BUSD_ADDRESS); 
    const res = await busdContract.methods.approve(
      getPrivateSaleToken(),
      Web3.utils.toWei(+amount, 'ether')
    ).send({ from: accounts[0] });
  } catch (e) {
    alert(e);
  }
}

async function swap(){
  console.log("buy")
  if (accounts.length < 1) return toast.error('Please connect to your wallet');
  const privateSaleContract = new web3.eth.Contract(getPrivateSaleABI(), getPrivateSaleToken());
  try {
    const res = await privateSaleContract.methods.buy(
      REFERRAL_ADDRESS,
      Web3.utils.toWei(amount, 'ether')
    ).send({ from: accounts[0] })
    .on('transactionHash', function (hash) {
      console.log(hash)
      // Handle transaction hash
    });
    toast.success('Transaction Successfull')
    // Show success modal
  } catch (e) {
    // Handle error
  }
}
return {amount,enableBusd,swap,setAmount}
}