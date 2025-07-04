import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import GetStarted from "../components/GetStarted";
import Features from "../components/Features";
import Community from "../components/community";
import FinalSection from "../components/FinalSection";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Home section */}
      <HomeSection />
      {/* GetStarted */}
      <GetStarted />
      {/* Features */}
      <Features />
      {/* commmunity */}
      <Community />
      {/* Final section */}
      <FinalSection />
    </div>
  );
};

export default Home;
