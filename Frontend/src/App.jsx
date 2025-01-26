import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/Course"
import Contact from "./components/Contact/Contact";
import About from "./components/About/about";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";
import Contacts from "./components/Contacts";


const App = () => {
  return (
    <>
      <div data-theme="light">
        <div className="pb-20">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
