import React from 'react';
import { Calendar, Code2, Target, TrendingUp } from 'lucide-react';

export const StatsGrid: React.FC = () => {
  const stats = [
    { number: "15+", label: "Technologies Mastered", icon: Code2 },
    { number: "7+", label: "Projects Completed", icon: Target },
    { number: "80%", label: "Cost Reduction Achieved", icon: TrendingUp },
    { number: "2+", label: "Years Experience", icon: Calendar },
  ];

  return (
    <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center bg-white/90 dark:bg-charcoal-800/90 rounded-2xl p-4 md:p-6 border border-golden-200/50 dark:border-charcoal-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-golden-500 mx-auto mb-2 md:mb-3" />
          <div className="text-2xl md:text-3xl font-bold text-charcoal-800 dark:text-white mb-1">
            {stat.number}
          </div>
          <div className="text-xs md:text-sm text-charcoal-600 dark:text-charcoal-300 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
