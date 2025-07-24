import React from "react";
import { motion } from "framer-motion";
import skill1 from "../skillImages/skill1.png";
import { Skilldb } from "../data/db";

const Skills = () => {
  return (
    <main className="bg-gradient-to-b pt-20 from-[#010610] via-[#0b1a0a] to-[#0f2f56]">
      <div className="py-[3rem] flex flex-col text-white max-w-[1240px] mx-auto px-4 md:px-12 items-center">
        {/* Header */}
        <h1 className="relative inline-block text-xl md:text-3xl lg:text-3xl pb-3 font-bold">
          TECH STACK
          <span className="absolute left-1/2 -bottom-0 w-1/2 h-[3px] bg-blue-500  -translate-x-1/2"></span>
        </h1>

        <p className="text-lg md:px-[10rem] py-2 text-center text-gray-400 font-bold">
          A collection of my technical skills and expertise honed through
          various certifications, projects and experiences
        </p>

        {/* Skill Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 md:gap-20 overflow-hidden ">
          {Skilldb.map((eachSkill, index) => (
            <motion.div
              key={index}
              className="flex flex-col mx-5 border border-gray-700 p-2 md:p-5 rounded-xl items-center gap-4
                transition-all duration-300 ease-in-out 
                hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6aa] hover:scale-[1.01]"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} // 👈 Animate on every scroll into view
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <h1 className="text-md md:text-xl text-center text-gray-400 font-bold">
                {eachSkill.stack}
              </h1>

              <div className="flex flex-wrap gap-2 justify-center">
                {eachSkill.skills.map((skill, subIndex) => (
                  <motion.div
                    key={subIndex}
                    className="flex flex-row items-center justify-center gap-2 px-2 py-1 rounded-3xl border border-gray-600 
                      transition-all duration-300 ease-in-out
                      hover:border-blue-400 hover:bg-blue-950/40 hover:shadow-[0_0_10px_#3b82f680]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: subIndex * 0.05 }}
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-4 h-4 rounded-full"
                    />
                    <span className="text-sm md:text-md">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
