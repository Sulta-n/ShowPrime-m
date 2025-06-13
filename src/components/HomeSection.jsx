import React from "react";
import Tab from "../../public/images/tab.png";
import Phone from "../../public/images/phone.png";
import { Mail } from "lucide-react";

const HomeSection = () => {
  return (
    <section className="min-h-screen relative mt-20 lg:mt-0">
      {" "}
      <div className="hidden lg:block absolute w-[600px] h-[700px] bg-card1 p-0.5 -top-33 -right-32 rounded-3xl transform -rotate-[34.4deg] translate-y-2 translate-x-5  shadow-xl z-1"></div>
      <div className="hidden lg:block absolute w-[600px] h-[700px] bg-card2 p-0.5 -top-25 -right-35 rounded-3xl transform -rotate-[43deg] -translate-y-1 translate-x-5"></div>
      <div className="container max-w-8xl mx-auto text-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] place-items-center h-screen z-10 w-full  gap-1 ">
          <div className="h-full  flex flex-col  relative  w-full   mt-6 lg:pt-36 lg:px-8  lg:pl-22 space-y-3.5">
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold lg:font-extrabold lg:leading-tight lg:text-left">
              Track your shows <br />
              Automatically
            </h1>
            <p className="text-sm lg:text-left capitalize text-[20px] text-black/40">
              with showPrime you can track your favorite TV shows <br />{" "}
              automatically, so you never loose track of your TV shows <br />{" "}
              ever again
            </p>
            {/* buttons */}
            <div className="flex items-center justify-center md:space-x-4.5 lg:mt-32 lg:justify-start">
              <button className="flex bg-blue-100 p-2.5 rounded-2xl items-center justify-center">
                <Mail className="pr-3" size={30} /> Enter your email
              </button>
              <a className="bg-card1 p-3 rounded-2xl">Start Tracking</a>
            </div>
          </div>
          {/* second */}
          <div className="flex lg:items-end h-full lg:justify-end  md:items-center justify-center  items-start">
            <div className="relative z-30 lg:w-[350px] lg:h-[455px] w-[50%] h-[50%]">
              <img src={Tab} alt="Tablet" />
            </div>
            <div className="absolute z-30 lg:w-[300px] lg:h-[435px] md:-bottom-45  -bottom-25 right-30 lg:right-74 w-[50%] h-[50%]">
              <img src={Phone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
