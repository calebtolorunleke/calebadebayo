import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Head from "./components/Head";
import Education from "./components/Education";
import NotFound from "./components/NotFound";

const Layout = ({ children }) => (
  <>
    <Head />
    {children}
    <Contact />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All valid pages wrapped in Head + Contact */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/skills"
          element={
            <Layout>
              <Skills />
            </Layout>
          }
        />
        <Route
          path="/experience"
          element={
            <Layout>
              <Experience />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/education"
          element={
            <Layout>
              <Education />
            </Layout>
          }
        />

        {/* NotFound page WITHOUT Head and Contact */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
