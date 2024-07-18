import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './components/Header.js';
import './components/Footer.js';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Blog/>
      <Home/>
      <Projects />
      <Skills />
      <Contact />
      <Resume/>
    </div>
  );
};
export default App;