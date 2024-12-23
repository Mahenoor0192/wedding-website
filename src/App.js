import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Footer from "./components/Footer";
import './styles/global.css';
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery/Gallery";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <br/>
      <br/>
      <br/>
      <br/>
      <Footer /> */}
      <br></br>
      <br></br>
      <br></br>
      <Countdown/>
      <Gallery/>
    </div>
  );
}

export default App;
