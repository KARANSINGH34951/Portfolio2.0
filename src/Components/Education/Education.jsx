import React from "react";
import EducationCard from "./EducationCard";
import img from '../../assets/Education.png'

const educationData = [
  {
    id: 1,
    institution: "Harvard University",
    course: "Bachelor of Computer Science",
    startYear: 2015,
    endYear: 2019,
  },
  {
    id: 2,
    institution: "Stanford University",
    course: "Master of Artificial Intelligence",
    startYear: 2020,
    endYear: 2022,
  },
];

const Education = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-8 px-4 md:px-16">
     
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800  mb-8 text-start">
        Education

        <hr />
      </h1>

      
      <div className="flex mt-5 flex-col md:flex-row gap-8 w-full max-w-7xl">

      <div className="flex-2 w-full md:w-2/5 flex justify-center items-center">
          <img
            src={img}
            alt="Education Illustration"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
    
        <div className="flex-3 w-full md:w-3/5 space-y-6">
  {educationData.map((edu) => (
    <EducationCard
      key={edu.id}
      institution={edu.institution}
      course={edu.course}
      startYear={edu.startYear}
      endYear={edu.endYear}
    />
  ))}


<div className="bg-black p-8 rounded-lg shadow-xl mt-8 space-y-6">

  <h1 className="text-5xl  text-center font-extrabold text-yellow-400 mb-4 leading-tight">
    Self-Taught Programmer
    <br />
    <span className="text-teal-500 text-3xl">Master of Code Magic</span>
  </h1>

  <p className="text-xl text-center font-semibold text-gray-300 mb-4 leading-relaxed">
    Code isn’t just code... it’s a <span className="text-green-500">machine</span>.
  </p>
  <p className="text-lg text-center text-gray-300 mb-6 leading-relaxed">
    From <span className="text-blue-500">React</span> to <span className="text-purple-400">Node.js</span>, I’m always building the next big thing.
  </p>

 
</div>

</div>




  
      </div>
    </div>
  );
};

export default Education;
