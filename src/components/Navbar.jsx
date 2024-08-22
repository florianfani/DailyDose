import React from "react";
import { TfiAlignJustify } from "react-icons/tfi";

function Navbar() {
  return (
    <div className="bg-gray-950 py-5 w-full">
      <div className="flex justify-between px-5 md:px-12">
        <h2 className="text-xl font-bold text-white">Daily Dose</h2>
        <TfiAlignJustify size={25} color="white" />
      </div>
    </div>
  );
}
export default Navbar;
