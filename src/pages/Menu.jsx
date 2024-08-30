import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CocktailsMenu from "../components/CocktailsMenu";
import FoodMenu from "../components/FoodMenu";
import SmoothiesMenu from "../components/SmoothiesMenu";

function Menu() {
  const [selectedTab, setSelectedTab] = useState(getInitialTab());

  function getInitialTab() {
    const tabData = localStorage.getItem("MENU_TAB");
    const savedTab = JSON.parse(tabData);
    return savedTab || "Cocktails";
  }

  useEffect(() => {
    const tabData = JSON.stringify(selectedTab);
    localStorage.setItem("MENU_TAB", tabData);
  }, [selectedTab]);

  return (
    <div className="menu-wrapper w-full relative overflow-hidden">
      <Navbar />
      <div className="absolute left-1/2 transform -translate-x-1/2 flex rounded-md w-[324px] mx-auto justify-center z-10 mt-5">
        <div className="">
          <button
            onClick={() => setSelectedTab("Cocktails")}
            className={`font-semibold py-4 px-6 rounded-md ${
              selectedTab === "Cocktails"
                ? "bg-transparent text-[#FFFFFF]"
                : "text-[#FFFFFF]"
            }`}
          >
            Cocktails
          </button>
          {selectedTab === "Cocktails" && (
            <div className="orangeline w-[100%] mx-auto border-b border-[1.5px] border-[#ff7404]"></div>
          )}
        </div>
        <div className="flex flex-col">
          <button
            onClick={() => setSelectedTab("Food")}
            className={`font-semibold py-4 px-6 rounded-md ${
              selectedTab === "Food"
                ? "bg-transparent text-[#FFFFFF]"
                : "text-[#FFFFFF]"
            }`}
          >
            Food
          </button>
          {selectedTab === "Food" && (
            <div className="orangeline w-[100%] mx-auto border-b border-[1.5px] border-[#ff7404]"></div>
          )}
        </div>
        <div className="">
          <button
            onClick={() => setSelectedTab("Smoothies")}
            className={`font-semibold py-4 px-6 rounded-md ${
              selectedTab === "Smoothies"
                ? "bg-transparent text-[#FFFFFF]"
                : "text-[#FFFFFF]"
            }`}
          >
            Smoothies
          </button>
          {selectedTab === "Smoothies" && (
            <div className="orangeline w-[100%] mx-auto border-b border-[1.5px] border-[#ff7404]"></div>
          )}
        </div>
      </div>
      <div className="">
        {selectedTab === "Cocktails" && <CocktailsMenu />}
        {selectedTab === "Food" && <FoodMenu />}
        {selectedTab === "Smoothies" && <SmoothiesMenu />}
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
