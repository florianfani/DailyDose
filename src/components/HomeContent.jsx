import React from "react";
import lemon from "../img/hero_1.jpg";
import coctail from "../img/hero_2.jpg";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit
            blanditiis laborum commodi deleniti ipsa minus ipsum vitae corrupti
            laudantium sunt saepe, ut nisi officiis modi sed cupiditate vel
            consequatur?
          </p>
        </div>
      </div>

      <div className="orangeline w-[100px] my-5 mx-auto border-b border-[1.5px] border-[#ff7404]"></div>

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="font-bold text-3xl md:text-5xl mb-3">Best & Good</h1>
        <p className="text-[#868e96] text-center md:w-[50%] text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit
          blanditiis laborum commodi deleniti ipsa minus ipsum vitae corrupti
          laudantium sunt saepe, ut nisi officiis modi sed cupiditate vel
          consequatur?
        </p>
      </div>

      <img className="mb-10" src={coctail} alt="Coctail Image" />

      <div className="flex md:hidden orangeline w-[100px] my-5 mx-auto border-b border-[1.5px] border-[#ff7404]"></div>
    </div>
  );
}
export default HomeContent;
