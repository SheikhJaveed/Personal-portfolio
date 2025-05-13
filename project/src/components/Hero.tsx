import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textArray = ['Developer', 'CS Undergrad', 'Tech Enthusiast'];
  const typingDelay = 150;
  const deletingDelay = 100;
  const pauseDelay = 1500;

  useEffect(() => {
    const currentText = textArray[currentTextIndex];
    
    const timeout = setTimeout(() => {
      // Handle typing and deleting logic
      if (!isDeleting) {
        if (typedText.length < currentText.length) {
          setTypedText(currentText.substring(0, typedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseDelay);
          return;
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentText.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
        }
      }
    }, isDeleting ? deletingDelay : typingDelay);
    
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentTextIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-7/12 mb-10 md:mb-0 slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Hello, I'm a <br />
              <span className="text-primary inline-block min-h-[1.5em]">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
              I create elegant solutions to complex problems through clean code and 
              beautiful design. Let's build something amazing together.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="button-primary">
                View My Work
              </a>
              <a href="#contact" className="button-secondary">
                Get In Touch
              </a>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="https://github.com/SheikhJaveed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sheikh-javeed/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              
            </div>
          </div>
          
          <div className="w-full md:w-5/12 flex justify-center fade-in">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-primary to-secondary rounded-full relative overflow-hidden shadow-glow ">
            <div className="absolute inset-2 bg-darker rounded-full flex items-center justify-center">
              <img
                src="/my_image.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a
            href="#projects"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center animate-bounce hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;