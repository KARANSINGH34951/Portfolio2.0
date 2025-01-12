import React from "react";
import logo from "../../utils/logo.png"

const Navbar = () => {
  return (
    <nav className="h-16 bg-black flex items-center px-6 shadow-lg ">
      
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 rounded-full mr-3"
        />
        <h1 className="text-white text-xl font-bold">DevWithKaran</h1>
      </div>


      <ul className="flex-1 flex justify-center space-x-10 text-white text-lg">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Projects</li>
        <li className="hover:text-gray-300 cursor-pointer">Services</li>
        <li className="hover:text-gray-300 cursor-pointer">Resume</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>

      
      <div>
        <button className="bg-white text-indigo-500 px-4 py-2 rounded-full shadow-md hover:bg-gray-200">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
