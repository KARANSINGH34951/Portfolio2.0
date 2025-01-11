import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-white text-2xl font-bold">
          <span className="cursor-pointer hover:scale-105 transform transition">
            LOGO
          </span>
        </div>

        <ul className="flex space-x-8 text-white text-lg">
          <li className="hover:text-gray-300 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition">
            About
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition">
            My Projects
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition">
            Contact Me
          </li>
        </ul>

        <div>
          <button className="bg-white text-indigo-500 font-semibold px-4 py-2 rounded-lg hover:bg-indigo-100 transition">
            Hire Me?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
