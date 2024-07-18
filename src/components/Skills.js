// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Android Development',
  'IoT Development',
  'Software Development',
  'Flutter Development',
  'Flutter Flow Development',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500 px-4 py-2 rounded-full"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
