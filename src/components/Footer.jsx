import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer-container mt-10 w-full left-0 bottom-0 right-0">
      <div className="footer-data px-3 md:px-28 md:flex justify-around">
        <div className="footer-orari mb-5">
          <h2 className="font-bold text-lg mb-3">Orari i Punes</h2>
          <p className="mb-1">E Hene - E Diel</p>
          <p className="text-[#868e96]">07:00 - 00:00</p>
        </div>
        <div className="footer-adress mb-5">
          <h2 className="font-bold text-lg mb-3">Informata shtese</h2>

          <p className="mb-1">Adresa:</p>
          <p className="text-[#868e96] mb-3">The Village, Ferizaj</p>

          <h2 className="mb-1">Numri i Telefonit</h2>
          <p className="text-[#868e96]">+383 45 000 000</p>
        </div>
        <div className="footer-links mb-5">
          <h2 className="font-bold text-lg mb-3">Links</h2>
          <h2
            onClick={() => navigate("/")}
            className="mb-3 text-[#ff7404] cursor-pointer"
          >
            Home
          </h2>
          <h2
            onClick={() => navigate("/menu")}
            className="mb-3 text-[#ff7404] cursor-pointer"
          >
            Menu
          </h2>
        </div>
      </div>

      <div className="flex justify-center md:mt-16 py-5 bg-slate-100">
        <span>
          Copyright © {new Date().getFullYear()} Influxo. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
export default Footer;
