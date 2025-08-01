import React from "react";
import { motion } from "framer-motion";
import { workExp } from "../data/db";

const Experience = () => {
  return (
    <main className="bg-gradient-to-b from-[#0f2f56] via-[#0b1a0a] to-[#010610] text-white pt-10 md:pt-15 ">
      <div className="py-[3rem] flex flex-col text-white max-w-[1240px] mx-auto px-4 md:px-12 items-center">
        {/* Header */}
        <h1 className="relative inline-block text-xl md:text-2xl lg:text-2xl pb-3 font-bold">
          WORK EXPERIENCE
          <span className="absolute left-1/2 -bottom-0 w-1/2 h-[3px] bg-blue-500  -translate-x-1/2"></span>
        </h1>

        {/* Subheading */}
        <p className="mt-2 text-sm md:text-xl md:px-[10rem] text-center text-gray-400 font-bold mb-10 w-[]">
          A collection of my work experience and the roles I have taken in
          various organizations in Banking and Technology industries.
        </p>

        {/* Experience Cards */}
        <div className="flex flex-col gap-10 md:gap-15 w-full">
          {workExp.map((workExpData, index) => (
            <motion.div
              key={index}
              className="py-5 flex flex-col gap-3 border border-gray-700 px-4 rounded-2xl md:px-12 md:mx-20
                transition-all duration-300 ease-in-out
                hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6aa] hover:scale-[1.01]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} // 🔄 Animates on every scroll into view
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {/* Header Row */}
              <div className="flex flex-row justify-between items-start">
                <h2 className="flex flex-col items-start">
                  <span className="text-md md:text-lg font-semibold text-white">
                    {workExpData.jobTitle}
                  </span>
                  <span className="text-md md:text-lg text-gray-400">
                    {workExpData.companyName}
                  </span>
                </h2>
                <div className="bg-gray-400 text-black font-semibold rounded-lg py-1 px-2 md:px-3">
                  <span className="text-sm md:text-md">{workExpData.date}</span>
                </div>
              </div>

              {/* Role Description */}
              {/* <p className="text-gray-300">{workExpData.role}</p> */}
              {workExpData.role && Array.isArray(workExpData.role) ? (
                <ul className="text-gray-300 list-disc ml-6">
                  {workExpData.role.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300">{workExpData.role}</p>
              )}

              {/* Tools Used */}
              <div className="flex flex-wrap gap-3 mt-2">
                {workExpData.toolsUsed.map((toolsData, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    className="flex flex-row items-center justify-center gap-2 px-3 py-2 rounded-3xl border border-gray-600
                      transition-all duration-300 ease-in-out
                      hover:border-blue-400 hover:bg-blue-950/40 hover:shadow-[0_0_10px_#3b82f680]"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: toolIndex * 0.05 }}
                  >
                    <span className="text-sm text-white">{toolsData.name}</span>
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

export default Experience;
