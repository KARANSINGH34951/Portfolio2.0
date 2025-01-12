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
    <div className="App bg-gray-900 p-12 flex flex-col items-center">
      <h2 className="text-3xl text-white mb-8 font-semibold">Skills</h2>
      <div className="skills-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {skills.map((skill, i) => (
          <Card key={i} text={skill.name} index={i} image={skill.image} />
        ))}
      </div>
    </div>
  );
}
export default Skills;