import React from "react";
import NavBar from "../../../Components/NavBar";

const Stocks = () => {
  return (
    <>
      <div className="bg-slate-700 h-screen">
        <NavBar />
        <p className="text-cyan-100 font-mono text-6xl px-10 pt-10 font-extrabold text-center">
          Stocks
        </p>
      </div>
    </>
  );
};

export default Stocks;
