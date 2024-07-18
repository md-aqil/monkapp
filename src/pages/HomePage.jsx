import React, { useRef } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import InfoSection from "../components/InfoSection";
import PrivateSale from "../components/PrivateSale";
import Offer from "../components/Offer";
import useConnect from "../hooks/useConnect";

export default function HomePage() {
  const { connect, web3, accounts } = useConnect();
  const params = useRef(new URLSearchParams(window.location.search));
  // console.log('params.',paramsRef.current.get('start'))
  return (
    <Layout accounts={accounts} onConnect={connect}>
      <Hero heroImage="https://cdn.builder.io/api/v1/image/assets/TEMP/3573e3280f49cc7f49d59579f22a5afd8e8594c131efc2c0f8782d6613aaf81a?apiKey=b4d1b9e87b084579b1e2475047caf617&" />
      <Features />

      <PrivateSale web3={web3} accounts={accounts} />

      <Offer />

      <InfoSection />

      <section className="flex justify-center items-center px-16 py-20 bg-neutral-900 max-md:px-5">
        <div className="flex flex-col px-1.5 pt-2 mt-5 max-w-full w-[694px]">
          <h2 className="self-center text-6xl tracking-tighter text-center text-white leading-[67.2px] max-md:text-4xl">
            Tokenomics
          </h2>

          <p className="mt-10 text-xl text-center text-stone-300 max-md:max-w-full">
            The economic principles and mechanisms behind a cryptocurrency or
            blockchain-based token.
          </p>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-8 py-5 w-full rounded-none border-l-2 border-lime-300 border-solid bg-white bg-opacity-10 max-md:px-5 max-md:mt-10">
                  <h3 className="text-base text-white">Token Name</h3>
                  <p className="mt-4 text-xl  text-lime-300">BLACKMONK</p>
                </div>
              </article>

              <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-8 py-5 w-full rounded-none border-l-2 border-lime-300 border-solid bg-white bg-opacity-10 max-md:px-5 max-md:mt-10">
                  <h3 className="text-base text-white">Token Type</h3>
                  <p className="mt-4 text-xl  text-lime-300">
                    BEP20 (Binance Smartchain)
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="px-12 py-9 mt-8 rounded-xl bg-zinc-300 bg-opacity-10 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base text-white max-md:mt-10">
                  <h3>Total Supply </h3>
                  <p className="mt-2 text-xl text-lime-300">330,000,000</p>

                  <h3 className="mt-6">Seed Round </h3>
                  <p className="mt-2 text-xl  text-lime-300">3,300,000</p>

                  <h3 className="mt-6">Private Round </h3>
                  <p className="mt-2 text-xl  text-lime-300">29,700,000</p>

                  <h3 className="mt-6">Strategic Round </h3>
                  <p className="mt-2 text-xl  text-lime-300">3,300,000</p>

                  <h3 className="mt-6">Public Round (IDO)</h3>
                  <p className="mt-2 text-xl  text-lime-300">115,500,000</p>

                  <h3 className="mt-6">CEX Listing </h3>
                  <p className="mt-2 text-xl  text-lime-300">9,900,000</p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base text-white max-md:mt-10">
                  <h3>Airdrop </h3>
                  <p className="mt-2 text-xl  text-lime-300">16,500,000</p>
                  <h3 className="mt-6">Team and Advisors </h3>
                  <p className="mt-2 text-xl  text-lime-300">49,500,000</p>
                  <h3 className="mt-6">Liquidity </h3>
                  <p className="mt-2 text-xl  text-lime-300">52,800,000</p>
                  <h3 className="mt-6">Marketing and Partnerships </h3>
                  <p className="mt-2 text-xl  text-lime-300"> 33,000,000</p>
                  <h3 className="mt-6">Reserve </h3>
                  <p className="mt-2 text-xl  text-lime-300"> 16,500,000</p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex gap-2 justify-center self-end p-2 mt-6 text-sm text-white border-b border-white border-solid max-md:mr-2.5"
          >
            <span className="my-auto">Learn More</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3251f42dabc4a6917854414a7b5a68fc6f73eda3056ce306b4ffe31d5f266447?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
          </a>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center p-20 bg-neutral-900 max-md:px-5">
        <h2 className="mt-5 text-6xl tracking-tighter text-center text-lime-300 leading-[67.2px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Shortlisted <span className="text-lime-300">NFTs</span>
        </h2>
        <div className="flex gap-5 justify-between px-px mt-12 max-md:flex-wrap max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a73b1e10cd5fdc88a13b2439070b05a48c5c2b916d5ad1af5b89961264f74815?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="aspect-[3.85] w-[236px]"
            alt="NFT artwork 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31098d6edba5cc8b30aba0d272d57725b72fb1217c46487861b5007c21eb207e?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="aspect-[5.88] w-[351px]"
            alt="NFT artwork 2"
          />
        </div>
        <div className="flex gap-5 justify-between px-px mt-6 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a6d7a25da666d78c89eb68b4f293aa35fbe3c10e451ce241401614fb31ac822?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 aspect-[0.99] w-[95px]"
            alt="NFT artwork 3"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/947076b919908b23dee8f65952f9bb5cef209f0216553fc05650ff4b79125bc7?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 max-w-full aspect-[1.79] w-[172px]"
            alt="NFT artwork 4"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d7e185055ce3b9207a069cf7708250a4795687d634cb691de9c4b0d1db10d3c?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="aspect-[2.56] w-[249px]"
            alt="NFT artwork 5"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e263a8f07c912080d60669329e4825b1d4b77aded3c25b1236df2e316f99c1bc?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 w-24 aspect-square"
            alt="NFT artwork 6"
          />
        </div>
        <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a273506801c14920b9023c475832e30afbf2805b89526bf97e3e7ef1456f0d9?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 max-w-full aspect-[0.99] w-[105px]"
            alt="NFT artwork 7"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ffea2208d8e2a6435c91ef24dfbf30275d3911129c2bdfbf10807969b84b8f?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 max-w-full aspect-square w-[106px]"
            alt="NFT artwork 8"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6135884f776c8d548e8303545bf5a5795a1f32e6c5ddc1a68b5453b97870cf?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 max-w-full aspect-[0.99] w-[105px]"
            alt="NFT artwork 9"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc7257cdff1ccb2f7fe4e7bc634c73fa5dc32a41d9a61e2815705c8e3fae7f71?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 max-w-full aspect-square w-[106px]"
            alt="NFT artwork 10"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e706e43ee26c4e49d26f4d0d0213ed44d6dd2621756f8e367afb9c31fb80a49d?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 max-w-full aspect-square w-[104px]"
            alt="NFT artwork 11"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/290728a253fffcd44ea1173391ccf16d38bf166e60ffe9dcfb5237c14f982943?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 max-w-full aspect-[1.28] w-[136px]"
            alt="NFT artwork 12"
          />
        </div>
        <div className="flex gap-5 justify-between items-center px-px mt-6 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b43d4d4a296da212dc57308c4d96ac71def1423759f7512ad993b9d4e329a2e6?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 self-stretch max-w-full aspect-[2.44] w-[225px]"
            alt="NFT artwork 13"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c68a7811f5d85d1dc15a88b5df01346e62f1e52887144980cbf9919c830ca9c?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="self-stretch my-auto aspect-[2.94] w-[257px]"
            alt="NFT artwork 14"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/acc0938cf21b9cc58538a569e1c5a169e29d9dee2d068e36541d7dbdcecb99a4?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[2.04] w-[179px]"
            alt="NFT artwork 15"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c7251d64420c9c4f0a902d4d6eb9f8dd2cab0e473ef17b7bb7bb7b40e8d72ac?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 self-stretch my-auto aspect-[0.99] w-[86px]"
            alt="NFT artwork 16"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b15a088597a40fd85e984c1fcc9f9708c3165f3b969697bcb8216a43a3a05fd1?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[1.75] w-[153px]"
            alt="NFT artwork 17"
          />
        </div>
      </section>

      <section className="flex justify-center items-center px-16 py-20 bg-neutral-900 max-md:px-5">
        <div className="flex gap-5 justify-between items-start px-px py-1.5 mt-5 w-full max-w-[1236px] max-md:flex-wrap max-md:max-w-full">
          <article className="flex flex-col self-stretch w-[40%]">
            <h2 className="text-base font-bold leading-6 text-white">
              About BMONK
            </h2>
            <p className="mt-10 text-sm leading-6 text-stone-300 max-md:mt-10">
              Explore the magic of Treasury backed DeFi, driving profitable Web3
              businesses like NFT IPs, RWA, Liquidity provider as node
              validators, and acquiring promising projects.
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/957d3b459981acc29077012857db6b990730dd42ed38c456658b57602efd366a?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              className="mt-10 max-w-full aspect-[9.09] w-[166px] max-md:mt-10"
              alt="Rareblocks logo or related image"
            />
          </article>
          <nav className="flex flex-col text-white">
            <h3 className="text-base font-bold leading-6">Company</h3>
            <ul className="mt-9 text-sm leading-10">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#career">Career</a>
              </li>
            </ul>
          </nav>
          <nav className="flex flex-col text-white">
            <h3 className="text-base font-bold leading-6">Help</h3>
            <ul className="mt-10 text-sm leading-10">
              <li>
                <a href="#support">Customer Support</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </nav>
          <nav className="flex flex-col text-white">
            <h3 className="text-base font-bold leading-6">Resources</h3>
            <ul className="mt-10 text-sm leading-10 max-md:mt-10">
              <li>
                <a href="#blog">How to - Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  );
}
