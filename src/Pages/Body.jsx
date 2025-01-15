import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Herosection from '../Components/HeroSection.jsx/Herosection';
import AboutMe from '../Components/Aboutme/AboutMe';
import Education from '../Components/Education/Education';
import Skills from "../Components/Skills/Skills"; 
import Experience from '../Components/Experience/Experience';
import Projects from '../Components/projects/Projects';
import Services from '../Components/Services/Services';
import Contact from '../Components/Contact/contact';

const Body = () => {
  return (
    <div>
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Herosection />
              <AboutMe />
              <Education />
              <Skills />
              <Experience />
              <Projects />
              <Services />
              <Contact />
            </>
          }
        />
       
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Body;
