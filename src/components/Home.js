import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const skills = [
    {
      icon: 'mobile-alt',
      name: 'Android Development',
      description: 'Expertise in building scalable and efficient Android apps.',
    },
    {
      icon: 'robot',
      name: 'IoT Development',
      description: 'Experience in developing innovative IoT solutions.',
    },
    {
      icon: 'code',
      name: 'Software Development',
      description: 'Proficient in building robust and scalable software applications.',
    },
    {
      icon: 'mobile-alt',
      name: 'Flutter Development',
      description: 'Skilled in building fast and beautiful Flutter apps.',
    },
    {
      icon: 'chart-line',
      name: 'Flutter Flow Development',
      description: 'Expertise in building efficient and scalable Flutter Flow apps.',
    },
  ];

  return (
    <div className="container mx-auto p-4 pt-20 md:pt-32 lg:pt-40">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl font-bold text-center mb-4 md:text-6xl lg:text-7xl">
          Welcome to My Portfolio
        </h1>
        <p className="text-center text-lg mb-8 md:text-xl lg:text-2xl">
          I am an Android Developer, IoT Developer, Software Developer, Flutter Developer, and Flutter Flow Developer.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded shadow-md transition duration-300 ease-in-out"
        >
          Explore My Projects
        </motion.button>
      </motion.div>

      {/* Skills Section */}
      <div className="skills grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="skill bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center"
          >
            <i className={`fas fa-${skill.icon} text-4xl text-blue-500 mb-4`} />
            <h2 className="text-xl font-bold mb-2">{skill.name}</h2>
            <p className="text-gray-600 text-center">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
