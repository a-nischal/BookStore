import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import About from "../About";

function about() {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default about;
