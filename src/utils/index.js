import { BUSD_ABI, BUSD_ADDRESS } from "./busd";
import { PRIVATE_SALE_ABI, PRIVATE_SALE_ADDRESS } from "./privateSale";

export const TEST_CHAIN_ID = 97;
export const MAIN_CHAIN_ID = 56;

export const REFERRAL_ADDRESS = "0x0000000000000000000000000000000000000000";



export const getBusdABI = (chainId = "") => {
    return BUSD_ABI
    // if(chainId==MAIN_CHAIN_ID) return BUSD_ABI
    // return BUSD_ABI_TEST;
  };
  
  export const getBusdToken = (chainId = "") => {
    // if(chainId==MAIN_CHAIN_ID) return BUSD_ADDRESS
    // return BUSD_ADDRESS_TEST;
    return BUSD_ADDRESS
  };
  
  export const getPrivateSaleABI = (chainId = "") => {
    // if(chainId==MAIN_CHAIN_ID) return TOKEN_ABI
    return PRIVATE_SALE_ABI;
  };
  
  export const getPrivateSaleToken = (chainId = "") => {
    // return '0x0227587AC1E0A153e4B71aD81f398CC31e8B2a7e'
    // return "0xD546d2c43363C1299b136D7b0bdC7C0c685c388b";
    // if(chainId==MAIN_CHAIN_ID) return PRIVATE_SALE_ADDRESS
    return PRIVATE_SALE_ADDRESS;
  };