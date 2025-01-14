import React from "react";
import CardComponent from "./CardComponent";

const Projects = () => {
  const projects = [
    {
      imageUrl: "https://th.bing.com/th/id/OIP.6m1bFyudPxwd5yWJDVeJcAHaE8?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      githubLink: "https://github.com/KARANSINGH34951/Empower-Connect",
      liveLink: "https://empower-connect.vercel.app/",
      projectName: "Empower Connect",
      projectDesc: "Empower Connect is a web platform designed to connect low-income individuals with resources, job opportunities, and support services. The platform provides a centralized space for job listings, skills training programs, financial literacy courses, and access to microloans or grants.",
    },
    {
      imageUrl: "https://th.bing.com/th/id/OIP.Ntl5EasKLRtdyCnCDthtEgHaDt?w=307&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      githubLink: "https://github.com/KARANSINGH34951/Blogging-Website",
      liveLink: "https://blogging-website-rbdk.onrender.com/",
      projectName: "Blogging Website",
      projectDesc: "This is a blogging website where users can read, create, and manage blog posts. The website is built using Node.js, Express, MongoDB, and EJS, and is styled with Bootstrap. It is deployed on Render.com.",
    },
    {
      imageUrl: "https://th.bing.com/th/id/OIP.-Pc55P47lUl7hhhj7Tzv1AHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      githubLink: "https://github.com/KARANSINGH34951/ACONEWS",
      liveLink: "https://aconews-585dd.web.app/",
      projectName: "ACO NEWS",
      projectDesc: "ACONEWS is a dynamic news application that provides users with up-to-date news articles, search functionality, and a sleek user interface. The application is built with React, Tailwind CSS, and Node.js, and is designed to offer a seamless and engaging news experience.",
    },
  ];

  return (
    <section className="py-12 bg-black" id="projects">
      <h2 className="text-4xl text-white font-extrabold text-center mb-12 underline decoration-blue-500">
        Projects
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <CardComponent
            key={index}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
