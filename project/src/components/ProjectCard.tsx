import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoLink: string;
  longDescription?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div 
      className="rounded-xl overflow-hidden bg-darker shadow-lg transition-all duration-500 hover:shadow-glow group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 filter brightness-50' : 'scale-100'
          }`}
        />

        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => setShowModal(true)}
            className="p-3 bg-primary rounded-full hover:bg-primary/80 transition-colors"
            aria-label="View Project Details"
          >
            <ExternalLink size={20} className="text-white" />
          </button>
          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="View Repository"
          >
            <Github size={20} className="text-white" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400">
          {project.description}
        </p>
      </div>
      {/* Project Details Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="relative w-full max-w-2xl bg-darker rounded-xl shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="text-white" />
            </button>

            <div className="p-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold mb-4 text-white">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 mb-6">
                {project.longDescription || project.description}
              </p>

              <div className="flex gap-4">
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg hover:bg-primary/80 transition-colors text-white"
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;