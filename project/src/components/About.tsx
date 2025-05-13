import React from 'react';
import { Code, Briefcase, BookOpen } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'C++', level: 65 },
    { name: 'Python', level: 65 },
  ];

  return (
    <section id="about" className="section bg-dark relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading">About <span className="text-primary">Me</span></h2>
          <p className="subheading max-w-2xl mx-auto">
            I'm a Computer Science Engineering student at Ramaiah Institute of Technology,
            passionate about learning and building technology that helps people.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="slide-up">
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
              My Story
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I am passionate about technology and its potential to make a positive impact
              on people's lives. My journey in computer science has been driven by curiosity
              and a desire to create meaningful solutions.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              During my time at Ramaiah Institute of Technology, I've had the opportunity to
              work on various projects and gain practical experience in software development.
              I particularly enjoy working with mobile and web technologies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, working on
              personal projects, or expanding my knowledge through online courses and
              technical documentation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-darker p-6 rounded-xl">
                <Code size={32} className="text-primary mb-3" />
                <h4 className="text-lg font-bold mb-2">Development</h4>
                <p className="text-gray-400 text-sm">
                  Building modern web applications with the latest technologies.
                </p>
              </div>
              
              <div className="bg-darker p-6 rounded-xl">
                <Briefcase size={32} className="text-primary mb-3" />
                <h4 className="text-lg font-bold mb-2">Experience</h4>
                <p className="text-gray-400 text-sm">
                  Experience as a Flutter App Developer at Ramaiah Institute of Technology.
                </p>
              </div>
              
              <div className="bg-darker p-6 rounded-xl">
                <BookOpen size={32} className="text-primary mb-3" />
                <h4 className="text-lg font-bold mb-2">Learning</h4>
                <p className="text-gray-400 text-sm">
                  Continuously learning new technologies and best practices.
                </p>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
              My Skills
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-darker rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.level}%`, 
                        opacity: 0,
                        animation: `fadeIn 1.5s forwards ${index * 0.2}s` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
                Education 
              </h3>
              
              <div className="space-y-6">
                <div className="bg-darker p-6 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-bold">B.E. in Computer Science Engineering</h4>
                      <p className="text-gray-400">Ramaiah Institute of Technology</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      Present
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;