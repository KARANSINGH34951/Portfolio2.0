import React from "react";
import CardComponent from "./CardComponent";

const Projects = () => {
  const projects = [
    {
      imageUrl: "https://via.placeholder.com/300x200", // Replace with your image URL
      githubLink: "https://github.com/your-repo-1",
      liveLink: "https://your-live-link-1.com",
      projectName: "Project 1",
      projectDesc: "This is a description for Project 1.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200", // Replace with your image URL
      githubLink: "https://github.com/your-repo-2",
      liveLink: "https://your-live-link-2.com",
      projectName: "Project 2",
      projectDesc: "This is a description for Project 2.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200", // Replace with your image URL
      githubLink: "https://github.com/your-repo-3",
      liveLink: "https://your-live-link-3.com",
      projectName: "Project 3",
      projectDesc: "This is a description for Project 3.",
    },
  ];

  return (
    <section className="py-12 bg-black" id="projects">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
