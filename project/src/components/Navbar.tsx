import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darker shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="text-3xl font-bold text-white">
              Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-darker rounded-lg mt-4 p-4 shadow-lg slide-up">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
