import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Skill } from '../../types/portfolio';

interface SkillCategoryProps {
  category: {
    key: string;
    title: string;
    icon: LucideIcon;
  };
  skills: Skill[];
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => {
  return (
    <div className="bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-6 md:p-8 border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="text-center mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-golden-400 to-golden-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
          <category.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <h3 className="text-lg md:text-2xl font-bold">
          {category.title}
        </h3>
      </div>

      <div className="space-y-4 md:space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between items-center mb-2 md:mb-3">
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-lg md:text-2xl">
                  {skill.icon}
                </span>
                <span className="font-semibold text-sm md:text-base text-charcoal-800 dark:text-white group-hover:text-golden-600 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm md:text-lg font-bold text-golden-600">
                  {skill.level}%
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="w-full bg-golden-100 dark:bg-charcoal-700 rounded-full h-2 md:h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-golden-400 to-golden-500 h-2 md:h-3 rounded-full transition-all duration-1000 shadow-lg relative overflow-hidden"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
