import React from "react";
import gitLogo from "../images/githubIcon.png";
import inLogo from "../images/linkedInIcon.png";

const Menubar = () => {
  return (
    <div className="flex flex-col bg-black/80 py-6 gap-5 mx-20 my-5 rounded-xl">
      <ul className="flex flex-col justify-between items-center gap-5">
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Education</li>
      </ul>
      <div className="flex flex-row justify-center items-center gap-5 ">
        <img src={gitLogo} alt="github logo" className="w-5 h-5" />
        <img src={inLogo} alt="linkedin logo" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Menubar;
