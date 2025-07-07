import React, { useState, useEffect } from "react";
import profilePic from "../images/aboutme.jpg";
import { motion } from "framer-motion";
import { aboutme, name, desc } from "../data/db";

const About = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const current = aboutme[index].stack;

    if (subIndex === current.length + 1 && !deleting) {
      // Pause before deleting
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % aboutme.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(current.substring(0, subIndex));
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      setTypingSpeed(deleting ? 50 : 150);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <main className="bg-big-squares">
      <div className="grid md:grid-cols-2 bg-square pt-30 pb-10 max-w-[1240px] mx-auto px-12 gap-5 items-center">
        {/* Left Text Section */}
        <div className="order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start gap-5">
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            Hi, I am
          </h1>
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {name.middlename}
          </h1>

          <h1 className="text-xl md:text-4xl text-white font-bold">
            <span className="text-xl md:text-4xl  text-white font-bold">
              I am a{" "}
            </span>
            <span className="text-xl md:text-4xl text-blue-500">{text}</span>
            <motion.span
              className="inline-block ml-1 text-xl md:text-4xl text-blue-500"
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              |
            </motion.span>
          </h1>
          <p className="text-white text-xl">{desc.description}</p>
          <button className="text-white bg-blue-500 mt-10 rounded-4xl shadow px-4 md:px-8 py-3 font-bold text-lg md:text-xl">
            DOWNLOAD CV
          </button>
        </div>

        {/* Right Image Section */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-full w-[13rem] h-[13rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] border-5 border-blue-500 img-cover"
            style={{
              boxShadow: "10px 10px 80px 40px rgba(0.9, 0.9, 0.9, 0.9)",
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default About;
