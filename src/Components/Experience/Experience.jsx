import React from "react";

const Experience = () => {
  return (
    <div className="bg-gray-900 p-10 text-white">
      <h1 className="text-4xl font-semibold mb-6 text-center lg:text-left">
        My Experience
      </h1>
      <hr className="border-t-2 border-yellow-400 mb-6" />

      <div className="flex flex-col lg:flex-row justify-between gap-4 px-10">
       
        <div className="w-full lg:w-2/5 space-y-6">
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Frontend Developer
            </h2>
            <p>
              Worked with React.js and Tailwind CSS to develop responsive and
              dynamic user interfaces. Focused on improving user experience and
              optimizing frontend performance.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Backend Developer
            </h2>
            <p>
              Developed REST APIs with Node.js and integrated databases like
              MongoDB for smooth data operations. Ensured the scalability and
              security of backend services.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Full Stack Developer
            </h2>
            <p>
              Collaborated across both frontend and backend to build full-stack
              applications. Managed the entire development cycle from concept to
              deployment using the MERN stack.
            </p>
          </div>
        </div>

       
        <div className="w-full lg:w-3/5 flex justify-center items-center">
          <img
            src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
            alt="Experience GIF"
            className="w-full max-w-xs sm:max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
