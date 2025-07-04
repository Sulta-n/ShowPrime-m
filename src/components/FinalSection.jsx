import { Facebook, Twitter, Youtube } from "lucide-react";
import React from "react";
import { MdEmail } from "react-icons/md";

const FinalSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden" id="final">
      <div className="container max-w-7xl relative">
        <div className="flex items-center justify-center space-y-3.5 flex-col mt-[100px] max-w-3xl mx-auto ">
          <p className="text-textC/40 font-bold text-2xl">Get Started</p>
          <div className="text-left lg:text-center">
            <h2 className="text-4xl text-textB font-extrabold lg:text-6xl mb-2">
              Start tracking your <br /> TV shows for free
            </h2>
            <p className="text-textC text-sm lg:text-md">
              In order to start tracking your TV shows, all you have to do{" "}
              <br /> is enter your email address, everything else will be taken{" "}
              <br /> care of by us. All you have to do is sit back, relax and
              enjoy <br /> your TV shows
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex bg-textC/40 p-3 rounded-2xl items-center justify-center space-x-1">
              <MdEmail size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none border-none placeholder-textC w-[80%]"
              />
            </div>
            <a href="" className="bg-card1 p-3 rounded-2xl whitespace-nowrap">
              Start Tracking
            </a>
          </div>
          <div className=" flex flex-col items-center justify-end relative  mt-60">
            <div className="flex items-center justify-between space-x-2.5 ">
              <Facebook size={30} />
              <Twitter size={30} />
              <Youtube size={30} />
            </div>
            <p className="text-textC text-sm">
              Copyright 2022. All right reserved - Design by MightGuy, Developed
              By Phantom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
