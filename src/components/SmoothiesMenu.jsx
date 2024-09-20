import React from "react";
import nuts from "../img/nuts.jpg";

//te divi ku o Hero, provon edhe overflow-hidden

function SmoothiesMenu() {
  return (
    <div className="menu-wrapper w-full">
      <div className="menu-content relative">
        <img
          src={nuts}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-[1000px] object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col mt-32 md:mt-52 gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            Nuts
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Lajthi</h2>
              <h2 className="text-white text-xs">100gr</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Badem</h2>
              <h2 className="text-white text-xs">100gr</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Kikirik</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">1.50€</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SmoothiesMenu;
