import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero1 from "../img/hero_1.jpg";

function Home() {
  return (
    <div className="home-wrapper w-full">
      <Navbar />
      <div className="w-[1150px] md:w-full">
        <img
          src={hero1}
          alt="Hero Image"
          className="overflow-auto brightness-75"
        />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
