import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses/Course1";
import Contact from "./components/Contact/Contact";
import About from "./components/About/about";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;