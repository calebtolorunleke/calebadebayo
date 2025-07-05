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
      <main className="bg-big-squares fixed w-full ">
        <div className=" max-w-[1250px]  bg-big-squares mx-auto text-white py-4 px-6 md:px-12 flex flex-row justify-between items-center relative">
          <span className="text-sm sm:text-lg  md:text-lg lg:text-lg font-bold flex flex-row  items-center cursor-pointer">
            <span className=" text-blue-500">&lt;</span>
            <span className="">CALEB</span>
            <span className="text-blue-500">/</span>
            <span className="">ADEBAYO</span>
            <span className="text-blue-500">&gt;</span>
          </span>
          <ul className="hidden md:flex lg:flex flex-row justify-between items-center gap-5 lg:gap-10">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Skills</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Education</li>
          </ul>
          <div className="hidden md:flex lg:flex flex-row justify-between items-center gap-5 ">
            <img src={gitLogo} alt="github logo" className="w-7 h-7" />
            <img src={inLogo} alt="linkedin logo" className="w-7 h-7" />
          </div>
          <button
            className="md:hidden lg:hidden "
            type="button"
            value={
              Menu ? (
                <img src={cancel} alt="github logo" className="w-7 h-7" />
              ) : (
                <img src={menuIcon} alt="linkedin logo" className="w-7 h-7" />
              )
            }
            onClick={() => setMenu(!Menu)}
          >
            {Menu ? (
              <img src={cancel} alt="github logo" className="w-7 h-7" />
            ) : (
              <img src={menuIcon} alt="linkedin logo" className="w-7 h-7" />
            )}
          </button>
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
