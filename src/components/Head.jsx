import React, { useState } from "react";
import gitLogo from "../images/githubIcon.png";
import inLogo from "../images/linkedInIcon.png";
import menuIcon from "../images/menuIcon.png";
import cancel from "../images/cancel.png";
import Menubar from "./Menubar";

const Head = () => {
  const [Menu, setMenu] = useState("");

  return (
    <>
      <main className="bg-big-squares fixed w-full z-50">
        <div className="max-w-[1250px] bg-big-squares mx-auto text-white py-4 px-6 md:px-12 flex flex-row justify-between items-center relative">
          {/* Logo */}
          <span
            className="text-sm sm:text-lg md:text-lg lg:text-lg font-bold flex flex-row items-center cursor-pointer
              transition duration-300 ease-in-out hover:text-blue-400 hover:scale-105"
          >
            <span className="text-blue-500">&lt;</span>
            <span className="">CALEB</span>
            <span className="text-blue-500">/</span>
            <span className="">ADEBAYO</span>
            <span className="text-blue-500">&gt;</span>
          </span>

          {/* Navigation Links */}
          <ul className="hidden md:flex lg:flex flex-row justify-between items-center gap-5 lg:gap-10">
            {["About", "Skills", "Experience", "Projects", "Education"].map(
              (item, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition duration-300 ease-in-out 
                  hover:text-blue-400 hover:scale-105"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex lg:flex flex-row justify-between items-center gap-5">
            <img
              src={gitLogo}
              alt="github logo"
              className="w-7 h-7 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_5px_#3b82f6]"
            />
            <img
              src={inLogo}
              alt="linkedin logo"
              className="w-7 h-7 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_5px_#3b82f6]"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden lg:hidden"
            onClick={() => setMenu(!Menu)}
          >
            <img
              src={Menu ? cancel : menuIcon}
              alt="menu icon"
              className="w-7 h-7 transition duration-300 ease-in-out hover:scale-110"
            />
          </button>

          {/* Mobile Menu */}
          {Menu && (
            <div className="absolute w-full top-10 z-50 left-0">
              <Menubar />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Head;
