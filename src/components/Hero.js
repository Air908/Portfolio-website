// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-center text-white"
      >
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__bounce">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl mb-8 animate__animated animate__fadeIn">
          Android Developer | IoT Developer | Software Developer | Flutter Developer | Flutter Flow Developer
        </p>
        <a
          href="#projects"
          className="px-8 py-4 bg-white text-blue-500 font-bold rounded-full hover:bg-gray-200"
        >
          View My Work
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
