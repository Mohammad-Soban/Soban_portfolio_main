import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="group relative bg-white/90 dark:bg-charcoal-800/90 rounded-3xl overflow-hidden border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}
        ></div>

        {/* Category and Impact badges (responsive layout) */}
        <div className="absolute top-4 md:top-6 left-4 md:left-6 flex flex-col md:flex-row md:items-center md:space-x-2">
          <span className="bg-white/90 dark:bg-charcoal-800/90 backdrop-blur-sm text-charcoal-800 dark:text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg mb-2 md:mb-0">
            {project.category}
          </span>
          <span className="bg-green-500/90 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
            {project.impact}
          </span>
        </div>

        {/* Overlay with links */}
        <div className="absolute inset-0 bg-charcoal-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-3 md:space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-charcoal-800 px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            className="flex items-center space-x-2 bg-golden-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            <span>Demo</span>
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-golden-600 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-charcoal-600 dark:text-charcoal-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-golden-100 dark:bg-charcoal-700 text-golden-700 dark:text-golden-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover:bg-golden-200 dark:hover:bg-charcoal-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-charcoal-600 dark:text-charcoal-300 hover:text-golden-500 transition-colors duration-300 font-medium text-sm md:text-base"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            View Code
          </a>
          <a
            href={project.demo}
            className="flex items-center text-charcoal-600 dark:text-charcoal-300 hover:text-golden-500 transition-colors duration-300 font-medium text-sm md:text-base"
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
