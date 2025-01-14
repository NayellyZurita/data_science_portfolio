"use client";

import React from 'react';
import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#DAD7CD] text-gray-800 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.kaggle.com/your-kaggle-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition"
          >
            <FaKaggle size={24} />
          </a>
        </div>
        <p className="text-center text-sm">
          &copy; 2024 Nayelly Zurita - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

