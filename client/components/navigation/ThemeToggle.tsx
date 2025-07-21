import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 md:p-3 rounded-xl hover:bg-golden-100 dark:hover:bg-charcoal-800 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-4 h-4 md:w-5 md:h-5 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};
