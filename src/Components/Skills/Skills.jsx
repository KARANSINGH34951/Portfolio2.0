import React from "react";
import Card from "./Card";

function Skills() {
  const skills = [
    { name: "JavaScript", image: "https://th.bing.com/th/id/OIP.1Se7tgAnRox2K9H5L77QOAHaEx?w=267&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "React", image: "https://th.bing.com/th/id/OIP.IGAgoFLRQ54R3gtLiW5x2AHaE7?w=301&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Node.js", image: "https://th.bing.com/th/id/OIP.3EI-StQpEeStn9uj2Q3GXAHaFe?w=151&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "MongoDB", image: "https://th.bing.com/th/id/OIP.KHadKZaG_Sfzxn4IL8HscAHaHa?w=181&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Tailwind CSS", image: "https://th.bing.com/th/id/OIP.22tPt9bi1FRyjOYQI8irPQHaD4?w=346&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "GitHub", image: "https://th.bing.com/th?q=GitHub+Logo.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
    { name: "Firebase", image: "https://th.bing.com/th/id/OIP.Y1CtTk-L-6TG8oY495BDqAHaDt?w=320&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Python", image: "https://th.bing.com/th/id/OIP.VB4K3v9jPzQw5A1G0RIrggHaEK?w=276&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 via-gray-900 to-black p-12 flex flex-col items-center">
      <h2 className="text-4xl text-white font-extrabold text-center mb-12 underline decoration-pink-500">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-blue-500 group-hover:border-pink-500"
            />
            <h3 className="text-white text-lg font-semibold text-center group-hover:text-pink-500">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
