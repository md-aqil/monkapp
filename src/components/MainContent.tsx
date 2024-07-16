/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import InfoSection from "./InfoSection";
import PrivateSale from "./PrivateSale";

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center pt-5 bg-neutral-900">
      <Header logo="" />
      <div className="self-stretch mt-5 w-full border border-solid bg-zinc-800 border-zinc-800 min-h-[1px] max-md:max-w-full" />
     
     
      <Hero />

      <Features />


      <div className="flex flex-col items-center px-5 mt-28 container">
        
        <InfoSection
         
        />


       
        <PrivateSale />
      </div>
    </main>
  );
};

export default MainContent;
