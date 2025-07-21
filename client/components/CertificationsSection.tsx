import React from 'react';
import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '../constants/portfolioData';

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-charcoal-900 dark:to-charcoal-800"></div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-golden-100 dark:bg-charcoal-800 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
            <Award className="w-4 h-4 text-golden-600" />
            <span className="text-xs md:text-sm font-medium text-golden-700 dark:text-golden-300">
              Achievements
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 bg-gradient-to-r from-charcoal-800 to-charcoal-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Certifications &
            <span className="block bg-gradient-to-r from-golden-500 to-orange-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-4 md:p-6 border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 group text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-golden-400 to-golden-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-2xl group-hover:shadow-golden-500/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-2xl md:text-3xl">{cert.logo}</span>
              </div>

              <h3 className="font-bold text-base md:text-lg mb-2 text-charcoal-800 dark:text-white group-hover:text-golden-600 transition-colors duration-300">
                {cert.name}
              </h3>

              <p className="text-golden-600 font-semibold mb-1 text-sm md:text-base">
                {cert.issuer}
              </p>
              <p className="text-charcoal-500 dark:text-charcoal-400 text-xs md:text-sm mb-3 md:mb-4">
                {cert.year}
              </p>

              <div className="flex flex-wrap gap-1 justify-center">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-golden-100 dark:bg-charcoal-700 text-golden-700 dark:text-golden-300 px-2 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
