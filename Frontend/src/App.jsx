import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses/Course1";

const App = () => {
  return (
    <>
      <div data-theme="default">
        {" "}
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
