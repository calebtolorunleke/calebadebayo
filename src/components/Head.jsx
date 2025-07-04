import React from "react";

const Head = () => {
  return (
    <>
      <main className="bg-green-300">
        <div className="max-w-[1300px] bg-red-500 mx-auto">
          <span className="text-lg sm:text-xl  med:text-2xl lg:text-3xl font-semibold">
            <span className=" text-blue-900">&lt;</span>
            <span className="">CALEB</span>
            <span className="text-blue-900">/</span>
            <span className="">ADEBAYO</span>
            <span className="text-blue-900">&gt;</span>
          </span>
          <nav>
            <ul>
              <li>About</li>
              <li>Skills</li>
              <li>Experience</li>
              <li>Porjects</li>
              <li>Education</li>
            </ul>
            <div>
              <img src="" alt="github logo" />
              <img src="" alt="linkedin logo" />
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Head;
