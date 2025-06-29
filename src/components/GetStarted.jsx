import { ArrowBigRight, ArrowRightFromLine, Play } from "lucide-react";
import React from "react";
import { BiNotification } from "react-icons/bi";
import { GiAbacus } from "react-icons/gi";

const cards = [
  {
    name: "Automated Tracking",
    text: "Track you favorite shows automatically without switching between apps",
    icon: <Play />,
    bg: "bg-ytube",
  },
  {
    name: "Machine Learning",
    text: "Get recommendations like never before which are truly customized for your taste",
    icon: <GiAbacus />,
    bg: "bg-abacus",
  },
  {
    name: "Smart Notifications",
    text: "Receive smart notifications exactly at the right moments when you need them",
    icon: <BiNotification />,
    bg: "bg-noti",
  },
];

const images = [
  { src: "/images/1.jpg" },
  { src: "/images/2.jpg" },
  { src: "/images/3.jpg" },
  { src: "/images/4.jpg" },
  { src: "/images/5.jpg" },
];

const GetStarted = () => {
  return (
    <section className="min-h-screen relative  py-20 px-4">
      <div className="container mx-auto max-w-8xl text-center">
        {/* center texts */}
        <div className="flex flex-col space-y-3">
          <p className="text-black/40 text-2xl">Get Started</p>
          <h3 className="font-extrabold capitalize text-3xl lg:text-6xl text-textC tracking-wider">
            Built and customized <br /> for your habit
          </h3>
          <p className="text-sm opacity-25">
            ShowPrime's built-in-machine learning and context-aware features
            guarantee <br /> that all the notification and recommendations are
            always delivers to you in <br /> the perfect moment.
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 max-w-5xl mx-auto gap-10">
          {cards.map((card, key) => (
            <div
              className="flex flex-col items-center justify-center space-y-4 w-2xs"
              key={key}
            >
              <div
                className={`p-6 ${card.bg} rounded-lg text-white font-bold text-[30px]`}
              >
                {card.icon}
              </div>
              <h2>{card.name}</h2>
              <p>{card.text}</p>
              <a href="#" className="flex items-center text-red-500">
                Learn More <ArrowRightFromLine className="ml-1.5 " />
              </a>
            </div>
          ))}
        </div>

        {/* images */}
        <div className="hidden lg:flex lg:mt-7 items-center justify-between">
          {images.map((img, key) => (
            <img key={key} src={img.src} alt="image" className="rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
