import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses/Course1";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <div data-theme="default">
        {" "}
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />}/>
          <Route path="/Contact" element={<Contact/> } />
        </Routes>
      </div>
    </>
  );
};

export default App;
