import React from "react";
import profilePic from "../images/aboutme.jpg";
import { name } from "../data/db";
import { desc } from "../data/db";

const About = () => {
  return (
    <main>
      <div className="grid grid-row  md:grid-cols-2 lg:grid-cols-2 bg-blue-300 pt-30 max-w-[1240px]  mx-auto px-12 ">
        <div className="order-2 sm:order-2 md:order-1 text-center md:text-start lg:order-1 flex flex-col items-center md:items-start lg:items-start">
          <h1 className="">Hi, I am </h1>
          <h1 className="">{name.middlename}</h1>
          <span></span>
          <p>{desc.description}</p>
          <p></p>
        </div>
        <div className="flex flex-col order-1 items-center md:items-start lg:items-start">
          <img
            order-1
            src={profilePic}
            alt="Profile"
            className="rounded-full w-50 h-50 "
          />
        </div>
      </div>
    </main>
  );
};

export default About;
