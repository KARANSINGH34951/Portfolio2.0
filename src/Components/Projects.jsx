import React from "react";
import { motion } from "framer-motion";

// Example list of projects
const projects = [
  { id: 1, title: "Portfolio Website" },
  { id: 2, title: "Blogging Platform" },
  { id: 3, title: "E-Commerce App" },
  { id: 4, title: "Social Media Dashboard" },
];

const Projects = () => {
  // Container animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
      },
    },
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start slightly below
    },
    visible: {
      opacity: 1,
      y: 0, // Animate to the default position
      transition: {
        duration: 0.5, // Animation duration
        ease: "easeOut", // Easing function
      },
    },
  };

  return (
    <motion.div
      className="projects-container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div
          className="project-card"
          key={project.id}
          style={{
            padding: "20px",
            background: "#f3f3f3",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
          variants={cardVariants}
        >
          <h3>{project.title}</h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
