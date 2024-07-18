// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="flex justify-center mt-2">
          <a href="https://github.com" className="mx-2">GitHub</a>
          <a href="https://linkedin.com" className="mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
