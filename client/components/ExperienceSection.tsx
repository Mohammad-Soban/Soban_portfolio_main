import React from 'react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { VisibilityState } from '../types/portfolio';
import { EXPERIENCES } from '../constants/portfolioData';

interface ExperienceSectionProps {
  isVisible: VisibilityState;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isVisible }) => {
  return (
    <section
      id="experience"
      data-animate
      className={`py-20 md:py-32 relative ${isVisible.experience ? "animate-fade-in-up" : ""}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-50 via-white to-orange-50 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-charcoal-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(248,232,200,0.3),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(248,232,200,0.1),transparent_50%)]"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-golden-100 dark:bg-charcoal-800 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
            <Users className="w-4 h-4 text-golden-600" />
            <span className="text-xs md:text-sm font-medium text-golden-700 dark:text-golden-300">
              Professional Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 bg-gradient-to-r from-charcoal-800 to-charcoal-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Professional
            <span className="block bg-gradient-to-r from-golden-500 to-orange-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 lg:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-golden-400 via-golden-500 to-golden-600 rounded-full shadow-lg"></div>

            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-4 lg:left-8 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-golden-400 to-golden-500 rounded-full border-4 border-white dark:border-charcoal-900 shadow-2xl flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Experience card */}
                <div className="ml-16 md:ml-20 lg:ml-28 bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-6 md:p-8 border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 md:mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                        <span className="text-2xl md:text-3xl">
                          {exp.companyLogo}
                        </span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-charcoal-800 dark:text-white group-hover:text-golden-600 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-lg md:text-xl font-semibold text-golden-600">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:text-right mt-4 lg:mt-0">
                      <div className="inline-flex items-center space-x-2 bg-golden-100 dark:bg-charcoal-700 rounded-full px-3 md:px-4 py-1 md:py-2 mb-2">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-golden-600" />
                        <span className="text-xs md:text-sm font-medium text-golden-700 dark:text-golden-300">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center text-charcoal-500 dark:text-charcoal-400 text-xs md:text-sm">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-charcoal-600 dark:text-charcoal-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-golden-100 dark:bg-charcoal-700 text-golden-700 dark:text-golden-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="font-semibold text-charcoal-800 dark:text-white mb-2 md:mb-3 text-sm md:text-base">
                      Key Achievements:
                    </h4>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start space-x-2 md:space-x-3 group/achievement"
                      >
                        <div className="p-1 rounded-full bg-golden-100 dark:bg-charcoal-700 mt-0.5 md:mt-1 group-hover/achievement:bg-golden-200 dark:group-hover/achievement:bg-charcoal-600 transition-colors duration-300">
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-golden-600 group-hover/achievement:translate-x-1 transition-transform duration-300" />
                        </div>
                        <span className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed text-sm md:text-base">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
