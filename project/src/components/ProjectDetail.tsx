import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = [
  {
    id: 1,
    title: 'Next.js Authentication System',
    description: 'A secure authentication system built with Next.js, Node.js, and MongoDB. Features include user registration, email verification, password reset, JWT-based token authentication, and protected routes.',
    image: 'https://images.pexels.com/photos/27742642/pexels-photo-27742642/free-photo-of-a-person-s-finger-is-touching-a-tablet-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with relevant image
    github: 'https://github.com/SheikhJaveed/NextJS-authentication-system'
  },
  {
    id: 2,
    title: 'One Health Hub',
    description: 'A full-stack healthcare web application developed during Advaya Hackathon 2025. It includes medical data storage, pill tracking, a predictive AI chatbot, and tools for health democratization.',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg', // Replace with relevant image
    github: 'https://github.com/SheikhJaveed/One-health-hub'
  },
  {
    id: 3,
    title: 'TextMorph',
    description: 'A simple React-based text utility tool that enables users to convert text to upper/lowercase, remove extra spaces, copy with one click, and analyze word and character counts.',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg', // Replace with relevant image
    github: 'https://github.com/SheikhJaveed/TextMorph-react'
  },
  {
    id: 4,
    title: 'Cryptography App',
    description: 'A Python-based CLI tool for encrypting and decrypting files securely using cryptographic algorithms. Supports key generation and management with a user-friendly command-line interface.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg', // Replace with relevant image
    github: 'https://github.com/SheikhJaveed/Cryptography-app'
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id === Number(id));

  if (!project) {
    return <div className="text-center text-red-500 mt-10">Project not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darker text-white p-8">
      <div className="max-w-2xl bg-dark p-8 rounded-xl shadow-lg text-center">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
