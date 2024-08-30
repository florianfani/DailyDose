import React from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-950 py-5 w-full">
      <div className="flex justify-between px-5 md:px-64">
        <h2 className="text-3xl font-bold text-white">Daily Dose</h2>
        <div className="flex items-center">
          <h2
            onClick={() => navigate("/")}
            className="text-white mr-7 cursor-pointer"
          >
            Home
          </h2>
          <h2
            onClick={() => navigate("/menu")}
            className="text-white cursor-pointer"
          >
            Menu
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
