import React from "react";
import hero1 from "../img/barista1.jpg";

function Hero() {
  return (
    <div className="hero-wrapper relative bg-center bg-cover overflow-hidden">
      <img
        src={hero1}
        alt="Hero Image"
        className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-3xl md:text-5xl font-bold text-white">
          Your Daily Dose of Caffee
        </p>
        <button className="text-lg py-3 px-8 mt-5 text-white border-2 border-white">
          Menu
        </button>
      </div>
    </div>
  );
}

export default Hero;
