// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate developer with experience in Android, IoT, Software, Flutter, and Flutter Flow development. I love creating dynamic and user-friendly applications. Let's build something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
