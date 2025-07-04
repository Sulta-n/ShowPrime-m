import React from "react";
import { MdWrongLocation } from "react-icons/md";
import { PiWarningOctagonBold } from "react-icons/pi";

const NotFound = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-black text-white">
      <h1 className="text-3xl lg:text-6xl text-white font-extrabold  flex space-x-2 p-3 items-center">
        PAGE NOT FOUND
        <PiWarningOctagonBold size={55} className="pl-2.5 text-red-600" />
      </h1>
    </section>
  );
};

export default NotFound;
