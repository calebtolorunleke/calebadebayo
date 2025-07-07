import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../data/db";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <main className="bg-gradient-to-b from-[#010610] via-[#0b1a0a] to-[#0f2f56] text-white ">
      <div className="py-[3rem] flex flex-col text-white max-w-[1240px] mx-auto px-4 md:px-12 items-center ">
        <h1 className="text-xl md:text-4xl lg:text-4xl font-bold flex flex-row gap-2">
          <span className="text-white">FEATURED</span>
          <span className="text-blue-600">PROJECTS</span>
        </h1>

        <p className="text-lg py-5 md:px-[10rem] text-center text-gray-400 font-bold">
          Deep dive into some of my recent projects and their impact
        </p>

        {projects.map((projectData, index) => (
          <div className="py-10">
            <div className="grid grid-col-1 md:grid-cols-2 border p-4 mx:2 md:p-7 gap-5 md:gap-10 rounded-xl border-blue-500 md:max-w-2xl items-center">
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="text-white text-lg md:text-xl font-bold">
                    {projectData.title}
                  </h1>
                  <p className="text-blue-500">{projectData.subTitle}</p>
                </div>
                <div>
                  <h3 className="text-blue-500 font-bold">Goal</h3>
                  <p>{projectData.goal}</p>
                </div>
                <div>
                  <h3 className="text-blue-500 font-bold">My Role</h3>
                  <p>{projectData.myRole}</p>
                </div>
                <div>
                  <h3 className="text-blue-500 font-bold">Tech Stack</h3>

                  <div className="mt-1 flex flex-wrap gap-1">
                    {projectData.techStack.map((techStackData, index) => (
                      <span
                        className="text-blue-500 py-1 px-2 bg-blue-300 rounded-xl"
                        key={index}
                      >
                        {techStackData.stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-justify ">
                <img
                  src={projectData.img}
                  alt=""
                  className="w-full h-[13rem] rounded-xl"
                />

                <div className="flex flex-col mt-5">
                  <h3 className="text-blue-500 font-bold">Outcome</h3>
                  <p>{projectData.outcome}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-3 items-start py-3">
                  <a
                    href=""
                    className="text-sm bg-blue-500 px-3 rounded-lg text-black py-1"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#050505" }}
                    />
                    {"  "}
                    View Code
                  </a>
                  <a
                    href=""
                    className="text-sm border border-blue-500 px-3 rounded-lg text-white py-1"
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      style={{ color: "#fafafa" }}
                    />
                    {"  "}
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
