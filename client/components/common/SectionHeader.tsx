import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  badge,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center space-x-2 bg-golden-100 dark:bg-charcoal-800 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
        <Icon className="w-4 h-4 text-golden-600" />
        <span className="text-xs md:text-sm font-medium text-golden-700 dark:text-golden-300">
          {badge}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 bg-gradient-to-r from-charcoal-800 to-charcoal-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        {title}
        {subtitle && (
          <span className="block bg-gradient-to-r from-golden-500 to-orange-500 bg-clip-text text-transparent">
            {subtitle}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-lg md:text-xl text-charcoal-600 dark:text-charcoal-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
