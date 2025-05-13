import React from 'react';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Next.js Authentication System',
      description: 'A secure authentication system with user registration, email verification, password reset, and JWT token-based login.',
      longDescription: 'This project implements a secure authentication system using Next.js, Node.js, and MongoDB. It includes user registration, email verification, password reset, and token-based authentication. Protected routes restrict access to authenticated users only, ensuring privacy and security.',
      image: 'https://images.pexels.com/photos/27742642/pexels-photo-27742642/free-photo-of-a-person-s-finger-is-touching-a-tablet-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'JWT', 'Email Verification'],
      repoLink: 'https://github.com/SheikhJaveed/NextJS-authentication-system',
    },
    {
      id: 2,
      title: 'One Health Hub',
      description: 'A full-stack healthcare web app built during a hackathon to promote health democratization and smart care.',
      longDescription: 'One Health Hub is a full-stack healthcare platform built during the Advaya Hackathon 2025. Features include secure medical data storage, pill tracking reminders, a predictive AI chatbot for health queries, and easy access to healthcare resources.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
      tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'AI Chatbot'],
      repoLink: 'https://github.com/SheikhJaveed/One-health-hub',
    },
    {
      id: 3,
      title: 'TextMorph',
      description: 'A React-based text utility tool for modifying and analyzing text efficiently.',
      longDescription: 'TextMorph is a lightweight React application that provides utility functions for text transformation. Users can convert text to uppercase/lowercase, remove extra spaces, copy content with one click, and get word/character counts instantly.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
      tags: ['React', 'JavaScript', 'Text Utils', 'UI Design'],
      repoLink: 'https://github.com/SheikhJaveed/TextMorph-react',
    },
    {
      id: 4,
      title: 'Cryptography App',
      description: 'A CLI-based Python application for encrypting and decrypting file content using secure algorithms.',
      longDescription: 'This Python-based cryptography app offers a command-line interface for secure file encryption and decryption. It supports key generation and safe handling of encrypted data using Python\'s cryptography library, ensuring data confidentiality.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      tags: ['Python', 'Cryptography', 'CLI Tool', 'Encryption'],
      repoLink: 'https://github.com/SheikhJaveed/Cryptography-app',
    },
  ];

  return (
    <section id="projects" className="section bg-gradient-to-b from-dark to-darker">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading"><span className="text-primary">My</span> Projects</h2>
          <p className="subheading max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges
            and opportunities to learn and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
          <a 
            href="https://github.com/SheikhJaveed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
