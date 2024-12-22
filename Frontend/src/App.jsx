import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Freebook from './components/Freebook';

const App = () => {
  return (
    <>
      <div data-theme ="default">
        {" "}
        <Navbar />
        <Banner />
        <Footer />
        <Freebook/>
      </div>
    </>
  );
}

export default App
