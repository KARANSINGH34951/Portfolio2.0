import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HeroSection from './Components/HeroSection.jsx/Herosection';
import AboutMe from './Components/Aboutme/AboutMe';
import Education from './Components/Education/Education';
import Skills from "./Components/Skills/Skills"; 
import Experience from "./Components/Experience/Experience"
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  return (
   <div>
    <ErrorPage/>
      <Navbar />
      <HeroSection/>
      <AboutMe/>
      <Education/>
      <Skills/>
      <Experience/>
      
   </div>
  );
}

export default App;
