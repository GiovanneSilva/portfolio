import ProjectSlide from './Projects/ProjectSlide';
import Carousel from './Projects/Carousel/Carousel';

const Projects = () => {
  const projects = [
    {
      title: 'Samurai-Barbearia',
      description: 'About a hands-on project applying test automation with Cypress and JavaScript in a web application simulating a barbershop.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      tech: ['Javascript', 'Node.js', 'Cypress'],
      githubUrl: '#',
    },
    {
      title: 'Burger-Eats',
      description: 'Acceptance testing project for the BugerEats app.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
      tech: ['Javascript', 'Node.js', 'Cypress'],
      githubUrl: '#',
    },
    {
      title: 'Mark - L Task Manager',
      description: 'Hands-on project applying tests to a local task management application using the Playwright testing framework in TypeScript.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
      tech: ['Yarn', 'TypeScript', 'Playwright'],
      githubUrl: '#',
    }
  ];

  const slides = projects.map((project, index) => (
    <ProjectSlide key={index} project={project} />
  ));

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my career and experience.
          </p>
        </div>
        
        <Carousel slides={slides} />
      </div>
    </section>
  );
};

export default Projects;