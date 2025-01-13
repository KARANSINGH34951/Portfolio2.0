import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import img from "../../assets/imgkaran.jpg";

const Herosection = () => {
  const greetings = [
    "नमस्ते 🙏",
    "வணக்கம் 🙏",
    "Hello 👋",
    "Hola 👋",
    "How's it? 🫵",
  ];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreeting((prevGreeting) => {
        const currentIndex = greetings.indexOf(prevGreeting);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600">
 <motion.div
  className="absolute flex justify-center items-center rounded-full bg-gray-400 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
  style={{
    top: "50%",
    left: "40%",
    transform: "translate(-50%, -50%)",
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <img
    className="object-cover w-full h-full rounded-full"
    src={img}
    alt="Profile"
  />
</motion.div>


  <div className="w-full h-screen flex flex-col sm:flex-row">
    <div className="bg-green-600 w-full sm:w-2/5 p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between shadow-lg">
      <div className="mr-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">
          {currentGreeting},
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
          When it comes to coding, I’m like a magician who makes bugs disappear! 💻🔥
        </p>
      </div>

      <div className="flex justify-start items-center gap-4 mt-8">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-4xl hover:text-yellow-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-4xl hover:text-yellow-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-4xl hover:text-yellow-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-4xl hover:text-yellow-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-4xl hover:text-yellow-400"
        >
          <FaFacebook />
        </a>
      </div>
    </div>

    <div className="bg-black text-white w-full sm:w-3/5 p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between shadow-lg">
      <div className="flex flex-col justify-center h-full ml-24 mb-5">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            About Me – The Fun Version 😎
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Hey there! I'm{" "}
            <span className="text-3xl sm:text-4xl text-yellow-400">Karan</span>
            —a developer, a dreamer, and a lover of chai ☕. Whether it's turning
            ideas into interactive experiences or diving into the latest tech
            trends, I'm always up for a challenge. 🚀
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <button className="px-4 py-2 bg-yellow-400 rounded-xl hover:bg-yellow-500 text-lg sm:text-xl transition-all">
            Download CV
          </button>
          <button className="px-4 py-2 bg-red-500 rounded-xl hover:bg-red-600 text-lg sm:text-xl transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Herosection;
