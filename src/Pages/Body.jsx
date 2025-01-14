import React from 'react'
import Herosection from '../Components/HeroSection.jsx/Herosection'
import AboutMe from '../Components/Aboutme/AboutMe';
import Education from '../Components/Education/Education';
import Skills from "../Components/Skills/Skills"; 
import Experience from "../Components/Experience/Experience";
import Projects from '../Components/projects/Projects';
import Services from '../Components/Services/Services';
import Contact from '../Components/Contact/contact';

const Body = () => {
  return (
    <div>
      <Herosection />
          <AboutMe />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Services/>
      <Contact/>
    </div>
  )
}

export default Body