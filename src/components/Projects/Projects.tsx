import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import Carousel from './Carousel/Carousel';
import ProjectSlide from './ProjectSlide';
import { projects } from './projectsData';

const Projects = () => {
  const { t } = useLanguage();

  const projectSlides = projects.map((project, index) => (
    <ProjectSlide key={index} project={project} />
  ));

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="h-[400px]">
          <Carousel slides={projectSlides} />
        </div>
      </div>
    </section>
  );
};

export default Projects;