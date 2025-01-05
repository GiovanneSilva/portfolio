import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Project } from './types';

interface ProjectSlideProps {
  project: Project;
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            className="inline-flex items-center px-4 py-2 border border-gray-900 text-gray-900 text-sm rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Github className="w-4 h-4 mr-1.5" />
            {t('projects.sourceCode')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;