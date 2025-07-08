import React from "react";
import gitLogo from "../images/githubIcon.png";
import inLogo from "../images/linkedInIcon.png";

const Menubar = () => {
  return (
    <nav className="flex flex-col bg-black/80 backdrop-blur-md py-6 px-4 sm:px-10 mx-4 sm:mx-20 my-5 gap-6 rounded-xl shadow-lg border border-gray-700 text-white">
      {/* Navigation Links */}
      <ul className="flex flex-col sm:flex-row justify-between items-center gap-4 text-base sm:text-lg font-medium tracking-wide">
        <li className="hover:text-blue-400 transition cursor-pointer">
          <a href="/about">About</a>
        </li>
        <li className="hover:text-blue-400 transition cursor-pointer">
          <a href="/skills">Skills</a>
        </li>
        <li className="hover:text-blue-400 transition cursor-pointer">
          <a href="/experience">Experience</a>
        </li>
        <li className="hover:text-blue-400 transition cursor-pointer">
          <a href="/projects">Projects</a>
        </li>
        <li className="hover:text-blue-400 transition cursor-pointer">
          <a href="/education">Education</a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 pt-2">
        <a
          href="https://github.com/calebtolorunleke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={gitLogo}
            alt="GitHub logo"
            className="w-6 h-6 hover:scale-110 transition duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/calebtol/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={inLogo}
            alt="LinkedIn logo"
            className="w-6 h-6 hover:scale-110 transition duration-200"
          />
        </a>
      </div>
    </nav>
  );
};

export default Menubar;
