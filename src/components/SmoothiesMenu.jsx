import React from "react";
import mojito from "../img/mojito.jpg";
import lagoon from "../img/lagoon.jpg";

//te divi ku o Hero, provon edhe overflow-hidden

function SmoothiesMenu() {
  return (
    <div className="menu-wrapper w-full">
      <div className="menu-content relative">
        <img
          src={mojito}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            Smoothies
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Dredhëz</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-lg">2.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Karramel</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-lg">2.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Kiwi</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-lg">2.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Banane</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-lg">2.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Fruta Mali</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-lg">2.50€</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SmoothiesMenu;
