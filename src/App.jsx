import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HeroSection from './Components/HeroSection.jsx/Herosection';
import AboutMe from './Components/Aboutme/AboutMe';
import Education from './Components/Education/Education';
import Skills from "./Components/Skills/Skills"; 
import Experience from "./Components/Experience/Experience";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Projects from './Components/projects/Projects';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <Navbar /> 
      <HeroSection />
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Services/>
      <ErrorPage /> 
    </div>
  );
}

export default App;
