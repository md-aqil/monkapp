/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, onConnect, accounts }) => {
  return (
    <div className="flex flex-col items-center pt-5 bg-neutral-900">
      <ToastContainer />
      <Header
        accounts={accounts}
        onConnect={onConnect}
        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/6ad18aeb90ab203fe13f6b1c993da801b1a0b7e3e524fd5b6cb5c99a8b7e2ef0?apiKey=b4d1b9e87b084579b1e2475047caf617&"
      />
      <div className="self-stretch mt-5 w-full border border-solid bg-zinc-800 border-zinc-800 min-h-[1px] max-md:max-w-full" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
