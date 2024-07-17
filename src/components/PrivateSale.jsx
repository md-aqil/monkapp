/**
 * This code was generated by Builder.io.
 */
import React from "react";
import useSwap from "../hooks/useSwap";

const PrivateSale = ({web3,accounts}) => {

  
  console.log({web3,accounts})
  const {amount,enableBusd,swap,setAmount} = useSwap(web3,accounts)
  return (
    <section className="mt-36 max-md:mt-10 max-md:max-w-full container relative">

      <h2 className="text-6xl text-center text-white leading-[80px] text-center heading">
        Participate In The BMONK Token <br />
        <span className="text-lime-300">Private Sale</span>
      </h2>

      <div className="w-full  max-md:max-w-full px-28">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">



            <form className="flex flex-col mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between text-sm max-md:flex-wrap max-md:max-w-full">
                <label
                  htmlFor="busdAmount"
                  className="font-semibold text-white leading-[114%]"
                >
                  Enter USDT Amount
                </label>
                {/* <div className="my-auto font-medium text-right text-lime-300 leading-[171%]">
                  Amount: 100
                </div> */}
              </div>
              <div className="flex gap-5 p-2 mt-3.5 bg-white rounded-lg border border-solid shadow-sm border-zinc-950 max-md:flex-wrap max-md:max-w-full">
                <input

                onChange={(e)=>setAmount(e.target.value)}

                  type="number"
                  id="busdAmount"
                  className="flex-auto my-auto text-base leading-6  p-3 text-neutral-600"
                  placeholder="Enter USDT Amount"
                />
               
              </div>

              <div className="flex gap-5 mt-5 text-base leading-4 text-center text-black max-md:flex-wrap">
                <button
                onClick={enableBusd}
                  type="button"
                  className="flex-1 justify-center px-10 py-3.5 bg-lime-300 rounded border border-black border-solid shadow-sm max-md:px-5"
                >
                  Enable USDT
                </button>


                <button
                onClick={swap}
                  type="button"
                  className="flex-1 justify-center px-10 py-3.5 whitespace-nowrap bg-white rounded border border-black border-solid shadow-sm max-md:px-5"
                >
                  Buy
                </button>


              </div>
              <div className="justify-center px-12 py-3.5 mt-6 text-xl leading-6 text-center text-lime-300 rounded border border-dashed border-lime-300 border-opacity-40 max-md:px-5 max-md:max-w-full">
              {/* 1 USDT = (1/0.6) BMONK */} You will get: 
              </div>
              {!accounts.length&&<p className="mt-3 text-xs leading-4 text-stone-300 max-md:max-w-full">
                *Web3 wallet not connected. Open this site in Trust <br />{" "}
                wallet or Metamask dApp browser.
              </p>}
            </form>




          </div>
          <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow items-start px-12 py-20 max-md:px-5 max-md:max-w-full">
              
              <div className="flex relative flex-col justify-center items-start py-2 pl-6 mt-2 max-w-full text-base leading-7 text-neutral-200 w-[662px] max-md:pl-5">
                <ul>
                  <li className="flex gap-2.5">
                    <div className="shrink-0 my-auto w-3 h-3 bg-lime-400 rounded-full"></div>
                    <span>Minimum buy= 60 USDT, Maximum buy= Unlimited</span>
                  </li>
                  <li className="flex gap-2.5 mt-6">
                    <div className="shrink-0 my-auto w-3 h-3 bg-lime-400 rounded-full"></div>
                    <span>Total token supply: 330,000,000 BMONK</span>
                  </li>
                  <li className="flex gap-2.5 mt-6">
                    <div className="shrink-0 my-auto w-3 h-3 bg-lime-400 rounded-full"></div>
                    <span>
                    Tokens allocated for private sale: 29,700,000 BMONK
                    </span>
                  </li>
                  <li className="flex gap-2.5 mt-6">
                    <div className="shrink-0 my-auto w-3 h-3 bg-lime-400 rounded-full"></div>
                    <span>
                    Note: Earn 10% referral rewards in USDT by inviting your friends to buy BMONK tokens.
                    </span>
                  </li>
                </ul>
              </div>
              <button className="flex relative gap-2 justify-center px-5 py-3 mt-4 ml-7 text-sm leading-4 bg-white border border-solid border-slate-800 rounded-[999px] text-slate-800 max-md:ml-2.5">
                <span>Click to view Rates</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8819bfb2b02b753ae5e23840aafd27affb08928997fd5a23fb909622e9ad524?apiKey=b4d1b9e87b084579b1e2475047caf617&"
                  alt=""
                  className="shrink-0 my-auto aspect-[0.63] w-[5px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </section>


    
  );
};

export default PrivateSale;
