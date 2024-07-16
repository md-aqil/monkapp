import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import InfoSection from "../components/InfoSection";
import PrivateSale from "../components/PrivateSale";
import useConnect from "../hooks/useConnect";

export default function HomePage(){
  const {connect, web3, accounts} = useConnect()
  return (
    <Layout accounts={accounts} onConnect={connect}>
    <Hero heroImage="https://cdn.builder.io/api/v1/image/assets/TEMP/3573e3280f49cc7f49d59579f22a5afd8e8594c131efc2c0f8782d6613aaf81a?apiKey=b4d1b9e87b084579b1e2475047caf617&" />
    <Features />
    <div className="flex flex-col items-center  mt-28 w-full container max-md:mt-10 max-md:max-w-full gap-[100px]">
      <InfoSection
        title="BlackMonk as DeFI"
        subtitle="Passively saving $UNI for holders"
        description="Unira DeFi protocol works for UNIRA community to save Uniswap ($UNI) tokens passively throughout the year. It is based on a tax economy just like the governments work in countries. There's a 6% fixed tax on every transaction of UNIRA token."
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/0dd04be8cc5244e20e05c7f7dcaa5943d2b4095c7d6629b8a50f24a658d7fb44?apiKey=b4d1b9e87b084579b1e2475047caf617&"
      />
      <InfoSection
        title="BlackMonk as Business DAO"
        subtitle="Passively saving $UNI for holders"
        description="Unira DeFi protocol works for UNIRA community to save Uniswap ($UNI) tokens passively throughout the year. It is based on a tax economy just like the governments work in countries. There's a 6% fixed tax on every transaction of UNIRA token."
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/0dd04be8cc5244e20e05c7f7dcaa5943d2b4095c7d6629b8a50f24a658d7fb44?apiKey=b4d1b9e87b084579b1e2475047caf617&"
        reverse
      />
    </div>
    <PrivateSale web3={web3} accounts={accounts} />
  </Layout>
  )
}


