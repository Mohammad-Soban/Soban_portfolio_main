import React from 'react';
import { Download, Github } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { CONTACT_INFO } from '../../constants/portfolioData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onResumeDownload: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  onResumeDownload 
}) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden py-6 border-t border-golden-200/20 dark:border-charcoal-700/20 bg-white/95 dark:bg-charcoal-900/95 backdrop-blur-xl">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4">
          <NavLinks onLinkClick={onClose} />
        </div>
        
        <button
          onClick={() => {
            onResumeDownload();
            onClose();
          }}
          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-golden-400 to-golden-500 text-white px-6 py-3 rounded-xl font-medium mt-4"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </button>
        
        <a
          href={CONTACT_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-charcoal-800 dark:bg-white text-white dark:text-charcoal-800 px-6 py-3 rounded-xl font-medium mt-2"
          onClick={onClose}
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};
