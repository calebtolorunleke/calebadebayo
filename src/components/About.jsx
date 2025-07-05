import React from "react";
import profilePic from "../images/aboutme.jpg";
import { name } from "../data/db";
import { desc } from "../data/db";

const About = () => {
  return (
    <main className="bg-big-squares">
      <div className="bg-big-squares grid grid-row  md:grid-cols-2 lg:grid-cols-2 bg-blue-300 pt-30 pb-10 max-w-[1240px]  mx-auto px-12 gap-5 md:gap-20 items-center">
        <div className="order-2 sm:order-2 md:order-1 text-center md:text-start lg:order-1 flex flex-col items-center md:items-start lg:items-start gap-2">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Hi, I am
          </h1>
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {name.middlename}
          </h1>
          <span></span>
          <p className="text-white">{desc.description}</p>
          <p></p>
        </div>
        <div className="flex flex-col order-1 items-center md:items-start lg:items-start">
          <img
            order-1
            src={profilePic}
            alt="Profile"
            className="rounded-full w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] border border-blue-500 border-5 "
          />
        </div>
      </div>
    </main>
  );
};

export default About;
