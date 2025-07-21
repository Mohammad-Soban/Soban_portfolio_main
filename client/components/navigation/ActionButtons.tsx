import React from 'react';
import { Download, Github } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/portfolioData';

interface ActionButtonsProps {
  onResumeDownload: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onResumeDownload }) => {
  return (
    <>
      <button
        onClick={onResumeDownload}
        className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-golden-400 to-golden-500 hover:from-golden-500 hover:to-golden-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
      >
        <Download className="w-4 h-4" />
        <span className="hidden md:inline">Resume</span>
      </button>

      <a
        href={CONTACT_INFO.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center space-x-2 bg-charcoal-800 dark:bg-white hover:bg-charcoal-700 dark:hover:bg-gray-100 text-white dark:text-charcoal-800 px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
      >
        <Github className="w-4 h-4" />
        <span className="hidden md:inline">GitHub</span>
      </a>
    </>
  );
};
