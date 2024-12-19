import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div data-theme ="default">
        {" "}
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

export default App
