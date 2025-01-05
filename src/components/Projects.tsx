import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Samurai-Barbearia',
      description: 'About a hands-on project applying test automation with Cypress and JavaScript in a web application simulating a barbershop.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      tech: ['Javascript', 'Node.js', 'Cypress'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Burger-Eats',
      description: 'Acceptance testing project for the BugerEats app.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
      tech: ['Javascript', 'Node.js', 'Cypress'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Mark - L Task Manager',
      description: 'Hands-on project applying tests to a local task management application using the Playwright testing framework in TypeScript.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
      tech: ['Yarn', 'TypeScript', 'Playwright'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my career and experience.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-[600px] overflow-hidden rounded-xl bg-white shadow-lg">
            {/* Project Slide */}
            <div 
              className="h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="absolute inset-0">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="h-1/2 w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentIndex].tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projects[currentIndex].liveUrl}
                      className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={projects[currentIndex].githubUrl}
                      className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;