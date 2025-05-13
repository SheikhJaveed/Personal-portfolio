import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darker py-12 border-t border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white flex items-center">
              <span className="text-primary">Port</span>
              <span>folio</span>
            </a>
            <p className="text-gray-400 mt-2">
              Building beautiful digital experiences
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm flex items-center">
            Made with 
            <Heart size={16} className="text-primary mx-1" fill="currentColor" /> 
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;