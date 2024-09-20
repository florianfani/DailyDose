import React from "react";
import lemon from "../img/hero_1.jpg";
import village from "../img/village1.jpg";

function HomeContent() {
  return (
    <div className="home-content-wrapper px-3 md:px-32">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <img className="mb-8 md:w-[540px]" src={lemon} alt="Home Page Image" />
        <div className="flex flex-col justify-center md:w-[540px] items-center">
          <h1 className="font-bold text-3xl md:text-5xl mb-3">
            The Lounge Bar
          </h1>
          <p className="text-[#868e96] text-lg text-center">
            Daily Dose is a cozy Lounge Bar and Caffee located in Ferizaj at La
            Terrazza, offering a relaxed atmosphere for coffee lovers and food
            enthusiasts. Whether you're stopping by for a morning espresso or
            enjoying an evening cocktail, Daily Dose combines quality drinks
            with a welcoming ambiance. Perfect for casual meetups or unwinding
            after a long day.
          </p>
        </div>
      </div>

      <div className="orangeline w-[100px] my-5 mx-auto border-b border-[1.5px] border-[#ff7404]"></div>

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="font-bold text-3xl md:text-5xl mb-3">
          Best <span className="font-serif">&</span> Good
        </h1>
        <p className="text-[#868e96] text-center md:w-[50%] text-lg">
          Discover the finest selection of expertly crafted drinks and delicious
          bites at Daily Dose. Our commitment to quality ensures that every sip
          and every taste is nothing short of exceptional. Whether you're here
          for a quick coffee or a night out with friends, we promise an
          experience that's simply the best.
        </p>
      </div>

      <img className="mb-10 w-full" src={village} alt="Coctail Image" />

      <div className="flex md:hidden orangeline w-[100px] my-5 mx-auto border-b border-[1.5px] border-[#ff7404]"></div>
    </div>
  );
}
export default HomeContent;
