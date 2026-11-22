import React from 'react';
import { Briefcase, Globe, GraduationCap, Rocket } from 'lucide-react';

export const JourneyCard: React.FC = () => {
  const achievements = [
    {
      icon: Briefcase,
      text: "2+ Years of Experience",
      color: "text-blue-500",
      bgHover: "hover:border-blue-300 dark:hover:border-blue-700",
    },
    {
      icon: Rocket,
      text: "Delivered 2 Freelance Projects",
      color: "text-purple-500",
      bgHover: "hover:border-purple-300 dark:hover:border-purple-700",
    },
    {
      icon: GraduationCap,
      text: "PDEU Graduate (9.48 CGPA)",
      color: "text-golden-500",
      bgHover: "hover:border-golden-300 dark:hover:border-golden-700",
    },
  ];

  return (
    <div className="bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-6 md:p-8 border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center space-x-3 text-charcoal-800 dark:text-white">
        <Globe className="w-5 h-5 md:w-6 md:h-6 text-golden-500" />
        <span>My Journey</span>
      </h3>
      
      <p className="text-charcoal-600 dark:text-charcoal-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
        Currently working as a <strong className="text-charcoal-800 dark:text-white font-semibold">Data Scientist at Hitech Digital Solutions</strong>, where I develop production-grade computer vision, vision-language, and document intelligence pipelines. I have already graduated with a B.Tech in Computer Science and Engineering from <strong className="text-charcoal-800 dark:text-white font-semibold">PDEU</strong> (Pandit Deendayal Energy University) with a stellar <strong className="text-golden-600 font-semibold">9.48/10 CGPA</strong>. Having worked across enterprise environments including Medkart Pharmacy and BMV Systems, I specialize in architecting scalable machine learning workflows and deep learning models that drive measurable business impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {achievements.map(({ icon: Icon, text, color, bgHover }, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center p-3.5 md:p-4 rounded-2xl bg-golden-50/70 dark:bg-charcoal-700/70 border border-golden-200/40 dark:border-charcoal-600/40 transition-all duration-300 hover:scale-105 hover:shadow-md ${bgHover}`}
          >
            <div className="p-2 rounded-xl bg-white dark:bg-charcoal-800 shadow-sm mb-2">
              <Icon className={`w-5 h-5 md:w-6 md:h-6 ${color}`} />
            </div>
            <span className="text-xs md:text-sm font-semibold text-charcoal-800 dark:text-gray-100 leading-snug">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
