import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

//te divi ku o Hero, provon edhe overflow-hidden

function Home() {
  return (
    <div className="home-wrapper w-full">
      <Navbar />
      <div className="w-full ">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
