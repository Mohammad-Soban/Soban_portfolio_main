import React from 'react';
import { ArrowRight, Eye, Github } from 'lucide-react';
import { VisibilityState } from '../types/portfolio';
import { PROJECTS, CONTACT_INFO } from '../constants/portfolioData';
import { SectionHeader } from './common/SectionHeader';
import { ProjectCard } from './projects/ProjectCard';

interface ProjectsSectionProps {
  isVisible: VisibilityState;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible }) => {
  return (
    <section
      id="projects"
      data-animate
      className={`py-20 md:py-32 relative ${isVisible.projects ? "animate-fade-in-up" : ""}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-charcoal-900 dark:to-charcoal-800"></div>

      <div className="container-width section-padding relative z-10">
        <SectionHeader
          icon={Eye}
          badge="Featured Work"
          title="Featured"
          subtitle="Projects"
          description="Innovative solutions across computer vision, time-series analysis, and machine learning"
        />

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-charcoal-800 to-charcoal-600 hover:from-charcoal-700 hover:to-charcoal-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm md:text-base"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
            <span>View All Projects on GitHub</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
