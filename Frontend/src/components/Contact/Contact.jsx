import Navbar from "../../Home/Navbar";
import Footer from "../../Home/Footer";
import Contacts from "../Contacts";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
