import React from "react";
import Head from "../components/Head";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Head />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
