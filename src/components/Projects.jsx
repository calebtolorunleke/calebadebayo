import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../data/db";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideInterval = useRef(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval.current);
  }, []);

  // Swipe event handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <main className="bg-gradient-to-b from-[#010610] via-[#0b1a0a] to-[#0f2f56] text-white overlap-hidden pt-20">
      <div className="py-[3rem] flex flex-col text-white max-w-[1240px] mx-auto px-4 md:px-12 items-center ">
        <h1 className="text-xl md:text-4xl lg:text-4xl font-bold flex flex-row gap-2">
          <span className="text-white">FEATURED</span>
          <span className="text-blue-600">PROJECTS</span>
        </h1>

        <p className="text-lg py-5 md:px-[10rem] text-center text-gray-400 font-bold">
          Deep dive into some of my recent projects and their impact
        </p>

        {/* Slide Container */}
        <div className="relative w-full overflow-hidden md:overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${projects.length * 100}%`,
              transform: `translateX(-${
                activeIndex * (100 / projects.length)
              }%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((projectData, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`
                    py-10
                    w-full
                    flex
                    justify-center
                    transition-all duration-500 ease-in-out
                    md:relative
                    ${
                      isActive
                        ? "md:z-10 md:filter-none md:scale-100"
                        : "md:z-0 md:filter blur-sm md:scale-90"
                    }
                  `}
                >
                  <div className="grid grid-col-1 md:grid-cols-2 border p-4 mx:2 md:p-7 gap-5 md:gap-10 rounded-xl border-blue-500 md:max-w-2xl items-center transition-all duration-300 hover:shadow-[0_0_80px_rgba(0,123,255,0.4)]">
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
                          {projectData.techStack.map((techStackData, idx) => (
                            <span
                              className="text-blue-500 py-1 px-2 bg-blue-300 rounded-xl"
                              key={idx}
                            >
                              {techStackData.stack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col ">
                      <img
                        src={projectData.img}
                        alt=""
                        className="w-full h-[13rem] rounded-xl object-cover"
                      />

                      <div className="flex flex-col mt-5">
                        <h3 className="text-blue-500 font-bold">Outcome</h3>
                        <p>{projectData.outcome}</p>
                      </div>
                      <div className="flex flex-col md:flex-row gap-3 items-start py-3">
                        <a
                          href={projectData.github}
                          className="text-sm bg-blue-500 px-3 rounded-lg text-black py-1 hover:bg-white transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            style={{ color: "#050505" }}
                          />
                          {"  "}
                          View Code
                        </a>
                        <a
                          href={projectData.live}
                          className="text-sm border border-blue-500 px-3 rounded-lg text-white py-1 hover:bg-blue-600 transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
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
              );
            })}
          </div>

          {/* Slide Controls */}
          <div className="mt-6 flex gap-3 justify-center">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-4 h-4 rounded-full transition-all ${
                  activeIndex === idx
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-500 hover:bg-blue-400"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
