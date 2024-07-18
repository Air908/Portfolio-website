import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="flex">
          <li><Link to="/" className="mx-2">Home</Link></li>
          <li><Link to="/about" className="mx-2">About</Link></li>
          <li><Link to="/skills" className="mx-2">Skills</Link></li>
          <li><Link to="/projects" className="mx-2">Projects</Link></li>
          <li><Link to="/blog" className="mx-2">Blog</Link></li>
          <li><Link to="/contact" className="mx-2">Contact</Link></li>
          <li><Link to="/resume" className="mx-2">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;