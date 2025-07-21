import React from 'react';
import { Award, Calendar, Globe, MapPin } from 'lucide-react';

export const JourneyCard: React.FC = () => {
  const achievements = [
    {
      icon: Calendar,
      text: "Student at PDEU",
      color: "text-blue-500",
    },
    {
      icon: MapPin,
      text: "Based in India",
      color: "text-green-500",
    },
    {
      icon: Award,
      text: "4+ Certifications",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-6 md:p-8 border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center space-x-3">
        <Globe className="w-5 h-5 md:w-6 md:h-6 text-golden-500" />
        <span>My Journey</span>
      </h3>
      
      <p className="text-charcoal-600 dark:text-charcoal-300 mb-4 md:mb-6 leading-relaxed">
        I recently graduated as a Bachelors in Computer Science and Engineering from PDEU. I've gained hands-on
        experience through strategic internships at Medkart Pharmacy and
        BMV Systems. I enjoy gaining impactful insights from the data and using them to drive business success.
        My work has led to significant cost reductions and efficiency improvements through data-driven solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {achievements.map(({ icon: Icon, text, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-3 md:p-4 rounded-2xl bg-golden-50 dark:bg-charcoal-700 transition-transform duration-300 hover:scale-105"
          >
            <Icon className={`w-5 h-5 md:w-6 md:h-6 ${color} mb-2`} />
            <span className="text-xs md:text-sm font-medium">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
