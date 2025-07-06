import React from "react";

const Experience = () => {
  return (
    <main className="bg-gradient-to-b from-[#60abff] via-[#0b1a0a] to-[#010610] text-white ">
      <div className="py-[3rem] flex flex-col text-white max-w-[1240px] mx-auto px-4 md:px-12 items-center ">
        <h1 className="text-xl md:text-3xl lg:text-3xl underline decoration-blue-500 underline-offset-10 pb-5 decoration-dash font-bold decoration-[5px] ">
          WORK EXPERIENCE
        </h1>
        <div className="">
          <div className="flex flex-row justify-between gap-10 items-start">
            <h2 className="flex flex-col items-start">
              <span className="text-2xl">Software Engineer</span>
              <span className="text-xl text-gray-400">Prospera AI</span>
            </h2>
            <div className="bg-gray-400 rounded-xl py-1 px-3">
              <span>Apr 2025</span> - <span>Jun 2025</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
