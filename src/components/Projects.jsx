import React from "react";

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

        <div className="py-10">
          <div className="grid grid-cols-2 border p-1 md:p-3 gap-5 md:gap-10 rounded-xl border-blue-500 md:max-w-2xl">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-blue-500 font-bold">Clotify</h1>
                <h3>Clothing E-commerce Site</h3>
              </div>
              <div>
                <h3 className="text-blue-500 font-bold">Goal</h3>
                <p>Create a stylish online shop with cart, checkout</p>
              </div>
              <div>
                <h3 className="text-blue-500 font-bold">My Role</h3>
                <p>
                  Built complete frontend, handled cart logic, and made the site
                  fully responsive
                </p>
              </div>
              <div>
                <h3 className="text-blue-500 font-bold">Tech Stack</h3>
                <p>
                  Built complete frontend, handled cart logic, and made the site
                  fully responsive
                </p>
              </div>
            </div>
            <div>
              <img src="" alt="" />

              <div>
                <h3 className="text-blue-500 font-bold">Outcome</h3>
                <p>Ready-to-launch shopping site for small businesses.</p>
              </div>
              <div className="flex flex-row gap-2">
                <a href="">
                  <img src="" alt="" />
                  View Code
                </a>
                <a href="">
                  <img src="" alt="" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
