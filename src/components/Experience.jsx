import React from "react";
import { workExp } from "../data/db";

const Experience = () => {
  return (
    <main className="bg-gradient-to-b from-[#0f2f56] via-[#0b1a0a] to-[#010610] text-white ">
      <div className="py-[3rem] flex flex-col text-white max-w-[1240px] mx-auto px-4 md:px-12 items-center ">
        <h1 className="relative text-xl md:text-3xl lg:text-3xl font-bold pb-4 md:pb-6 text-white text-center">
          WORK EXPERIENCE
          <span className="absolute left-1/2 bottom-0 w-[80%] h-[20px] -translate-x-1/2">
            <svg
              viewBox="0 0 400 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M0 15 Q50 0, 100 15 T200 15 T300 15 T400 15"
                stroke="#3B82F6"
                strokeWidth="10"
                fill="transparent"
              />
            </svg>
          </span>
        </h1>

        <p className="mt-2 text-lg md:px-[10rem] text-center text-gray-400 font-bold mb-10">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>

        <div className="flex flex-col gap-10 md:gap-15">
          {workExp.map((workExpData, index) => (
            <div
              className="py-5 flex flex-col gap-3 border border-3 px-4 rounded-2xl  md:px-12 md:mx-20"
              key={index}
            >
              <div className="flex flex-row justify-between items-start">
                <h2 className="flex flex-col items-start">
                  <span className="text-lg md:text-2xl">
                    {workExpData.jobTitle}
                  </span>
                  <span className="text-md md:text-xl text-gray-400">
                    {workExpData.companyName}
                  </span>
                </h2>
                <div className="bg-gray-400 rounded-lg py-1 px-2 md:px-3">
                  <span className="text-sm md:text-lg">{workExpData.date}</span>
                </div>
              </div>

              <p>{workExpData.role}</p>

              <div className="flex flex-wrap gap-3">
                {workExpData.toolsUsed.map((toolsData, index) => (
                  <div
                    className="flex flex-row items-center justify-center gap-2 px-3 py-2 rounded-3xl border border-gray-600"
                    key={index}
                  >
                    <span className="text-sm">{toolsData.name}</span>
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

export default Experience;
