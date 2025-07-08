import React from "react";
import { motion } from "framer-motion";
import skill1 from "../skillImages/skill1.png";
import { Skilldb } from "../data/db";

const Skills = () => {
  return (
    <main className="bg-gradient-to-b from-[#010610] via-[#0b1a0a] to-[#0f2f56]">
      <div className="py-[3rem] flex flex-col text-white max-w-[1240px] mx-auto px-4 md:px-12 items-center">
        {/* Header */}
        <h1 className="text-xl md:text-3xl lg:text-3xl underline decoration-blue-500 underline-offset-10 pb-5 decoration-dash font-bold decoration-[5px]">
          SKILLS
        </h1>

        <p className="text-lg md:px-[10rem] text-center text-gray-400 font-bold">
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
              <h1 className="text-lg md:text-3xl text-center text-gray-400 font-bold">
                {eachSkill.stack}
              </h1>

              <div className="flex flex-wrap gap-3 justify-center">
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
                    <img src={skill.img} alt={skill.name} className="w-5 h-5" />
                    <span className="text-sm md:text-lg">{skill.name}</span>
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
