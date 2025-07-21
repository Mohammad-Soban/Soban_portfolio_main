import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './navigation/Logo';
import { NavLinks } from './navigation/NavLinks';
import { ThemeToggle } from './navigation/ThemeToggle';
import { ActionButtons } from './navigation/ActionButtons';
import { MobileMenu } from './navigation/MobileMenu';

interface NavigationProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  onResumeDownload: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isDarkMode,
  setIsDarkMode,
  onResumeDownload,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/80 dark:bg-charcoal-900/80 border-b border-golden-200/20 dark:border-charcoal-700/20">
      <div className="container-width section-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
            <ActionButtons onResumeDownload={onResumeDownload} />

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 md:p-3 rounded-xl hover:bg-golden-100 dark:hover:bg-charcoal-800 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={closeMenu}
          onResumeDownload={onResumeDownload}
        />
      </div>
    </nav>
  );
};
