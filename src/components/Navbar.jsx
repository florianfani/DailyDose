import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-950 py-5 w-full">
      <div className="flex justify-between px-5 md:px-64">
        <h2 className="text-3xl font-bold font-playfair text-white">
          Daily Dose
        </h2>
        <div className="hidden md:flex items-center">
          <h2
            onClick={() => navigate("/")}
            className="text-white mr-7 cursor-pointer hover:text-[#ff7404] hover:duration-500 duration-500 font-playfair"
          >
            Home
          </h2>
          <h2
            onClick={() => navigate("/menu")}
            className="text-white cursor-pointer hover:text-[#ff7404] hover:duration-500 duration-500 font-playfair"
          >
            Menu
          </h2>
        </div>
        <div className="flex md:hidden items-center">
          <AiOutlineMenu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            color="white"
            size={30}
          />
        </div>
      </div>
      <div className="h-[1px] w-full overflow-hidden">
        <div
          className={`whiteline w-full mx-auto border-b border-[1px] border-white transition-transform duration-300 ease-out ${
            isMenuOpen === true ? "scale-x-100" : "scale-x-0"
          }`}
        ></div>
      </div>
      {/* Mobile dropdown menu */}
      <div
        className={`relative top-full left-0 w-full bg-gray-950 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }  md:hidden`}
      >
        <div className="flex flex-col items-center pt-2">
          <h2
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
            className="text-white py-4 pt-6 cursor-pointer hover:text-[#ff7404] hover:duration-500 duration-500 font-playfair"
          >
            Home
          </h2>
          <h2
            onClick={() => {
              navigate("/menu");
              setIsMenuOpen(false);
            }}
            className="text-white py-4 cursor-pointer hover:text-[#ff7404] hover:duration-500 duration-500 font-playfair"
          >
            Menu
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
