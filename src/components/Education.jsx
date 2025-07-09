import React from "react";
import oau from "../images/oauLogo.png";
import { education } from "../data/db";
import Certificates from "./Certificates";
import { useLocation } from "react-router-dom";

const Education = () => {
  const location = useLocation();
  return (
    <main className="bg-gradient-to-b from-[#0f2f56] via-[#0b1a0a] to-[#010610] pt-10">
      {location.pathname === "/education" && <Certificates />}
      <div className="py-[3rem] flex flex-col text-white max-w-[1240px] mx-auto px-4 md:px-12 items-center ">
        <h1 className="relative inline-block text-xl md:text-3xl lg:text-3xl pb-3 font-bold">
          EDUCATION
          <span className="absolute left-1/2 -bottom-0 w-1/2 h-[3px] bg-blue-500  -translate-x-1/2"></span>
        </h1>

        <p className="text-lg md:px-[10rem] text-center text-gray-400 font-bold pt-3 pb-5">
          I continuously invest in expanding my technical knowledge and staying
          updated with modern development practices, which is well-supported by
          my academic background.
        </p>
        {education.map((eduData, index) => (
          <div
            className=" flex flex-col gap-10 w-full py-5 md:px-20"
            key={index}
          >
            <div className="flex flex-row items-center gap-2 md:gap-5">
              <img
                src={eduData.img}
                alt=""
                className="bg-white w-[3rem] h-[3rem] rounded-full p-1 border border-gray-500 border-3"
              />
              <div className="w-full">
                <div className="flex flex-row justify-between">
                  <h1 className="text-lg md:text-2xl font-bold">
                    {eduData.sch}
                  </h1>
                  <span>{eduData.date}</span>
                </div>
                <span className="text-gray-400">{eduData.cert}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Education;
