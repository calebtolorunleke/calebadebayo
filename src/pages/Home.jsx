import React from "react";
import Head from "../components/Head";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";

const Home = () => {
  return (
    <div>
      <Head />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
};

export default Home;
