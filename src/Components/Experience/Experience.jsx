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
        Worked as a Frontend Developer at Axexa, utilizing React.js and Tailwind CSS to design and implement responsive, dynamic user interfaces. Focused on enhancing user experiences and optimizing performance across various web applications.
      </p>
    </div>

    <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Full Stack Developer
      </h2>
      <p>
        Contributed as a Full Stack Developer at WSPL Hosting Solution, delivering end-to-end solutions using the MERN stack. Managed the entire development lifecycle, from conceptualization to deployment, while ensuring scalability and robustness of applications.
      </p>
    </div>

    <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Open Source Contributor
      </h2>
      <p>
        Participated as an active contributor in GSSOC 2024, where I collaborated with developers to build innovative solutions. Leveraged skills in React.js and Node.js to enhance project functionalities and improve overall user experience.
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
