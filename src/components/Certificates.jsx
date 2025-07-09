import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { Certified } from "../data/db";

const Certificates = () => {
  return (
    <main className="bg-gradient-to-b from-[#010610] via-[#0b1a0a] to-[#010610] pt-16 pb-20">
      <div className="max-w-[1240px] mx-auto px-4 md:px-10 text-white">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold relative inline-block">
            Certificates
            <span className="block w-16 h-[3px] bg-blue-500 rounded-full mx-auto mt-2"></span>
          </h1>
          <p className="text-gray-400 text-sm mt-3">
            My recent certifications and learning achievements.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Certified.map((cert, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-xl shadow-lg p-6 flex flex-col justify-between transition transform hover:-translate-y-1 hover:shadow-blue-600/40 duration-300"
            >
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-1">
                  {cert.title}
                </h2>
                <p className="text-sm text-gray-400">{cert.date}</p>
              </div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-4">
                {/* Course Link */}
                <a
                  href={cert.course}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Course
                </a>

                {/* PDF Link */}
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium border border-gray-600 hover:border-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                  <FontAwesomeIcon icon={faFilePdf} className="text-red-500" />
                  View PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Certificates;
