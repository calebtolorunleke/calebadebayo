import React from "react";
import profilePic from "../images/aboutme.jpg";
import { name } from "../data/db";

const About = () => {
  return (
    <main>
      <div className="grid bg-blue-300 pt-20 max-w-[1240px]  mx-auto px-12 ">
        <div className="order-2">
          <h1>Hi, I am </h1>
          <h1>{name.middlename}</h1>
        </div>
        <img
          order-1
          src={profilePic}
          alt="Profile"
          className="rounded-full w-50 h-50 order-1"
        />
      </div>
    </main>
  );
};

export default About;
