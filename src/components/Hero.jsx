import React from "react";
import hero1 from "../img/barista1.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

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
        <button
          onClick={() => navigate("/menu")}
          className="text-lg py-3 px-8 mt-5 text-white border-2 border-white hover:bg-white hover:duration-500 duration-500 hover:text-[#ff7404]"
        >
          Menu
        </button>
      </div>
    </div>
  );
}

export default Hero;
