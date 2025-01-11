import React from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";
import img from '../../utils/imgkaran.jpg';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">
          Take Energy <motion.span animate={{ scale: 1.1 }}>Just Now</motion.span>
        </h1>
        <p className="hero-text">Building solutions with passion and creativity.</p>
        <div className="hero-buttons">
          <motion.button whileHover={{ scale: 1.1 }} className="button detail">
            Detail
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="button buy">
            Buy Now
          </motion.button>
        </div>
      </div>
      <div className="hero-image">
        <img src={img} alt="Energize Drink" />
      </div>
    </div>
  );
};

export default HeroSection;
