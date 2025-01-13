import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 shadow-lg">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full mr-3"
          />
          <h1 className="text-lg font-bold">DevWithKaran</h1>
        </div>

        <ul className="hidden md:flex flex-1 justify-center space-x-8 text-sm lg:text-base">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Projects</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Resume</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <button className="bg-white text-indigo-500 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 text-sm lg:text-base">
            Hire Me
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-gray-800 text-white py-6 px-4 rounded-lg shadow-lg">
          <ul>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </li>
          </ul>

          {/* Close Button (Optional for better UX) */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Close Menu
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
