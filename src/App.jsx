import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menubar from "./components/Menubar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menubar" element={<Menubar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
