import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SpecialtyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
}) => {
  return (
    <div className="bg-white/90 dark:bg-charcoal-800/90 rounded-2xl p-4 md:p-6 border border-golden-200/50 dark:border-charcoal-700/50 hover:border-golden-400/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start space-x-3 md:space-x-4">
        <div
          className={`p-2 md:p-3 rounded-xl ${bgColor} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-5 h-5 md:w-6 md:h-6 ${iconColor}`} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-base md:text-lg mb-2">
            {title}
          </h4>
          <p className="text-charcoal-600 dark:text-charcoal-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
