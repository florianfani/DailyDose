import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";

//te divi ku o Hero, provon edhe overflow-hidden

function Home() {
  return (
    <div className="home-wrapper w-full">
      <Navbar />
      <div className="w-full ">
        <Hero />
      </div>
      <div className="mt-14">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
