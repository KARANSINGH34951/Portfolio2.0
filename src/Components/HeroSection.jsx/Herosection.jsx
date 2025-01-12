import { motion } from "framer-motion";
import img from "../../assets/imgkaran.jpg";
import { useState, useEffect } from "react";

const Herosection = () => {
  const greetings = ["नमस्ते", "வணக்கம்", "Hello", "Hola", "How's it?"];
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
        className="absolute flex justify-center items-center h-72 w-72 rounded-full bg-white shadow-lg"
        style={{ top: "50%", left: "40%", transform: "translate(-50%, -50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <img
            className="object-cover h-64 w-64 rounded-full"
            src={img}
            alt="Profile"
          />
        </div>
      </motion.div>

      
      <div className="flex min-w-full h-screen">
      
        <div className="bg-green-500 w-2/5 p-8 flex flex-col justify-center shadow-lg">
          <h1 className="text-6xl font-extrabold text-yellow-400 mb-4">
            {currentGreeting}, 🚀
          </h1>
          <p className="text-white text-lg leading-relaxed">
            When it comes to coding, I’m like a magician who makes bugs
            disappear! 💻🔥
          </p>
          <p className="text-white text-lg mt-4 leading-relaxed">
            Whether it's React, Tailwind, or any other tech-stack, my motto is:
            <strong> "Keep Learning, Keep Growing!"</strong> 🌱 Yes, a little
            bit of fun and innovation are also part of my toolkit.
          </p>
        </div>

        
        <div className="bg-black text-white w-3/5 p-8 flex flex-col justify-center shadow-lg">
          <h1 className="text-4xl font-extrabold mb-4">
            About Me – The Fun Version 😎
          </h1>
          <p className="text-lg leading-relaxed">
            Hey there! I'm Karan—a developer, a dreamer, and a lover of chai ☕.
            Whether it's turning ideas into interactive experiences or diving
            into the latest tech trends, I'm always up for a challenge. 🚀
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            My code is like biryani: perfectly layered, full of flavor, and a
            little spicy 🌶️! From building sleek interfaces to solving
            real-world problems, I aim to make a meaningful impact—one line of
            code at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
