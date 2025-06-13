import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Home section */}
      <HomeSection />
    </div>
  );
};

export default Home;
