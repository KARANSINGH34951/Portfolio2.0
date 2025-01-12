import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HeroSection from './Components/HeroSection.jsx/Herosection';
import AboutMe from './Components/Aboutme/AboutMe';
import Education from './Components/Education/Education';
import Skills from "./Components/Skills/Skills"; 

function App() {
  return (
   <div>
      <Navbar />
      <HeroSection/>
      <AboutMe/>
      <Education/>
      <Skills/>
      
   </div>
  );
}

export default App;
