import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";
const navItems = [
  { name: "Features", href: "#feature" },
  { name: "Community", href: "#community" },
  { name: "Get Started", href: "#getstarted" },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 transition-all duration-300 ease-in-out py-3 shadow-2xl">
      <div className="container text-center mx-auto ">
        {/* desktop */}
        <div className="hidden md:flex items-center justify-between ">
          <a href="#" className="text-[24px] font-bold">
            <span className="text-primary ">Show</span>Prime
          </a>
          <ul className="flex text-center justify-center space-x-5 lg:space-x-16 text-[20px]">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-blue-500/30  transition-colors duration-300 ease-in-out"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3 text-[20px] font-bold justify-center">
            <a href="">Login</a>
            <a href="" className="btn-p ">
              Get started
            </a>
          </div>
        </div>
        {/* mobile */}
        <div className="flex md:hidden items-center justify-between">
          <a href="#" className="text-[24px] font-bold">
            <span className="text-primary ">Show</span>Prime
          </a>
          <button className="p-2" onClick={() => setIsNavOpen((prev) => !prev)}>
            {isNavOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out   mx-auto mt-4",
            isNavOpen
              ? "opacity-100 scale-100 h-fit pointer-events-auto py-4"
              : "opacity-0 scale-0 h-0 pointer-events-none mt-0"
          )}
        >
          <div className="flex flex-col space-y-3 items-center ">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="list-none py-3 bg-blue-500/30 w-full text-[20px] font-medium tracking-wide text-amber-50 rounded-bl-2xl"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
