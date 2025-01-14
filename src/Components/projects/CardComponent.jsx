import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const CardComponent = ({ imageUrl, projectName, projectDesc, githubLink, liveLink }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative group">
        <img
          src={imageUrl}
          alt={projectName}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
          View Project
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          {projectName}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4">
          {projectDesc}
        </p>
        <div className="flex justify-center items-center gap-6">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 text-xl sm:text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 text-xl sm:text-2xl"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;