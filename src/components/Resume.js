// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div className="container mx-auto p-4 pt-12 md:pt-20 lg:pt-24">
      <h1 className="text-4xl font-bold mb-4 animate__fadeInDown">Resume</h1>
      <p className="mt-4 text-lg leading-relaxed animate__fadeInUp">[Your online resume details]</p>
      <a
        href="./Resume.pdf"
        download
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-block mt-4 animate__fadeInUp"
      >
        Download Resume
      </a>
      <div className="flex justify-center mt-12">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mr-4 animate__fadeInUp"
          onClick={() => console.log('Edit Resume')}
        >
          Edit Resume
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block animate__fadeInUp"
          onClick={() => console.log('Delete Resume')}
        >
          Delete Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;