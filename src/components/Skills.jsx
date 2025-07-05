import React from "react";
import skill1 from "../skillImages/skill1.png";
import { Skilldb } from "../data/db";
import { div } from "framer-motion/client";

const Skills = () => {
  return (
    <main className="bg-[#010610]">
      <div className="py-[3rem] flex flex-col text-white max-w-[1240px] mx-auto px-4 md:px-12 items-center ">
        <h1 className="text-xl md:text-3xl lg:text-3xl underline decoration-blue-500 underline-offset-10 pb-5 decoration-dash font-bold decoration-[5px] ">
          SKILLS
        </h1>

        <p className="text-lg md:px-[10rem] text-center text-gray-400 font-bold">
          A collection of my technical skills and expertise honed through
          various certifications, projects and experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 md:gap-20">
          {Skilldb.map((eachSkill, index) => (
            <div
              className="flex flex-col border p-5 rounded-xl items-center gap-4"
              key={index}
            >
              <h1 className="text-lg md:text-3xl text-center text-gray-400 font-bold">
                {eachSkill.stack}
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {eachSkill.skills.map((skill, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex flex-row items-center justify-center gap-2 px-3 py-2 rounded-3xl border border-gray-600"
                  >
                    <img src={skill.img} alt={skill.name} className="w-7 h-7" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
