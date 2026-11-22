import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import { VisibilityState } from '../types/portfolio';
import { EXPERIENCES } from '../constants/portfolioData';

interface ExperienceSectionProps {
  isVisible: VisibilityState;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor screen size for responsive 3D adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite cyclic navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % EXPERIENCES.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Calculate circular offset so there is ALWAYS a card on the left (-1) and right (+1)
  const getRelativeOffset = (index: number, current: number, total: number) => {
    let diff = (index - current) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Helper to format project names like "Eris:", "Autopix:", "Orderbot:"
  const renderAchievementText = (text: string) => {
    const colonIndex = text.indexOf(':');
    if (colonIndex > 0 && colonIndex < 25) {
      const prefix = text.slice(0, colonIndex);
      const rest = text.slice(colonIndex + 1);
      return (
        <span className="leading-relaxed">
          <span className="inline-flex items-center px-2 py-0.5 rounded-md font-bold text-xs sm:text-sm bg-golden-100 dark:bg-golden-900/40 text-golden-700 dark:text-golden-300 mr-1.5 shadow-sm">
            {prefix}
          </span>
          <span>{rest}</span>
        </span>
      );
    }
    return <span>{text}</span>;
  };

  // 3D positioning calculation for each card ensuring cards are visible on both left & right
  const getCardStyle = (index: number) => {
    const offset = getRelativeOffset(index, currentIndex, EXPERIENCES.length);

    if (offset === 0) {
      // Center Active Card
      return {
        zIndex: 30,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        x: 0,
        z: 0,
        filter: 'blur(0px)',
        pointerEvents: 'auto' as const,
      };
    } else if (offset === 1) {
      // Next Card (Always displayed on Right)
      return {
        zIndex: 15,
        opacity: isMobile ? 0.25 : 0.55,
        scale: isMobile ? 0.85 : 0.88,
        rotateY: isMobile ? -12 : -24,
        x: isMobile ? '104%' : '52%',
        z: -120,
        filter: isMobile ? 'blur(3px)' : 'blur(0.5px)',
        pointerEvents: 'auto' as const,
      };
    } else if (offset === -1) {
      // Previous Card (Always displayed on Left)
      return {
        zIndex: 15,
        opacity: isMobile ? 0.25 : 0.55,
        scale: isMobile ? 0.85 : 0.88,
        rotateY: isMobile ? 12 : 24,
        x: isMobile ? '-104%' : '-52%',
        z: -120,
        filter: isMobile ? 'blur(3px)' : 'blur(0.5px)',
        pointerEvents: 'auto' as const,
      };
    } else {
      // Hidden cards if total > 3
      return {
        zIndex: 0,
        opacity: 0,
        scale: 0.75,
        rotateY: offset > 0 ? -35 : 35,
        x: offset > 0 ? '140%' : '-140%',
        z: -240,
        filter: 'blur(3px)',
        pointerEvents: 'none' as const,
      };
    }
  };

  return (
    <section
      id="experience"
      data-animate
      className={`py-20 md:py-32 relative overflow-hidden ${isVisible.experience ? 'animate-fade-in-up' : ''
        }`}
    >
      {/* Background Lighting & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-50 via-white to-orange-50 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-charcoal-900"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-golden-400/15 via-orange-400/15 to-golden-500/15 blur-[130px] rounded-full"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20 relative z-20">
          <div className="inline-flex items-center space-x-2 bg-golden-100 dark:bg-charcoal-800 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 shadow-sm">
            <Users className="w-4 h-4 text-golden-600" />
            <span className="text-xs md:text-sm font-medium text-golden-700 dark:text-golden-300">
              Career Trajectory & Impact
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 bg-gradient-to-r from-charcoal-800 to-charcoal-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Professional{' '}
            <span className="bg-gradient-to-r from-golden-500 to-orange-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-charcoal-600 dark:text-charcoal-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A track record of engineering scalable AI systems, high-accuracy computer vision pipelines, and automated data solutions.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-6 md:px-12">
          {/* Navigation Arrows - Circular continuous navigation */}
          <button
            onClick={handlePrev}
            aria-label="Previous Experience"
            className="absolute left-0 sm:left-1 md:-left-4 top-[250px] sm:top-[270px] md:top-[280px] -translate-y-1/2 z-40 p-3 sm:p-3.5 rounded-full backdrop-blur-xl bg-white/90 dark:bg-charcoal-800/90 border border-golden-300/70 dark:border-charcoal-600 shadow-xl transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110 hover:shadow-golden-500/30 hover:border-golden-500 text-charcoal-800 dark:text-white active:scale-95 group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-golden-600 dark:text-golden-400 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Experience"
            className="absolute right-0 sm:right-1 md:-right-4 top-[250px] sm:top-[270px] md:top-[280px] -translate-y-1/2 z-40 p-3 sm:p-3.5 rounded-full backdrop-blur-xl bg-white/90 dark:bg-charcoal-800/90 border border-golden-300/70 dark:border-charcoal-600 shadow-xl transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110 hover:shadow-golden-500/30 hover:border-golden-500 text-charcoal-800 dark:text-white active:scale-95 group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-golden-600 dark:text-golden-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 3D Perspective Viewport */}
          <div
            className="relative w-full min-h-[640px] sm:min-h-[580px] md:min-h-[540px] flex items-start justify-center pt-2 pb-6"
            style={{ perspective: 1400, transformStyle: 'preserve-3d' }}
          >
            {EXPERIENCES.map((exp, index) => {
              const cardStyle = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={cardStyle}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 26,
                  }}
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -45 || info.velocity.x < -200) {
                      handleNext();
                    } else if (info.offset.x > 45 || info.velocity.x > 200) {
                      handlePrev();
                    }
                  }}
                  onClick={() => {
                    if (!isActive) setCurrentIndex(index);
                  }}
                  className={`absolute top-0 w-full max-w-[780px] lg:max-w-[840px] cursor-pointer ${
                    isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer hover:opacity-80'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Glowing halo behind active card */}
                  {isActive && (
                    <div className="absolute -inset-2 bg-gradient-to-r from-golden-400 via-orange-500 to-golden-600 rounded-3xl opacity-25 dark:opacity-35 blur-xl -z-10 transition-opacity" />
                  )}

                  {/* Card Container */}
                  <div className="relative bg-white/95 dark:bg-charcoal-800/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-golden-200/70 dark:border-charcoal-700/80 shadow-2xl overflow-hidden transition-all duration-300">
                    {/* Top gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-golden-400 via-orange-500 to-golden-600" />

                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-5 border-b border-golden-100 dark:border-charcoal-700">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-golden-100 to-orange-100 dark:from-charcoal-700 dark:to-charcoal-600 border border-golden-200 dark:border-charcoal-600 flex items-center justify-center text-3xl sm:text-4xl shadow-sm shrink-0">
                          {exp.companyLogo}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal-800 dark:text-white">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-700/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1" />
                                Current Role
                              </span>
                            )}
                          </div>
                          <p className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-golden-600 to-orange-500 bg-clip-text text-transparent">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs sm:text-sm">
                        <div className="inline-flex items-center space-x-1.5 bg-golden-100/80 dark:bg-charcoal-700/80 text-golden-800 dark:text-golden-200 px-3.5 py-1.5 rounded-full font-medium border border-golden-200/50 dark:border-charcoal-600">
                          <Calendar className="w-3.5 h-3.5 text-golden-600 dark:text-golden-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 text-charcoal-500 dark:text-charcoal-400 px-1 py-0.5">
                          <MapPin className="w-3.5 h-3.5 text-golden-600 dark:text-golden-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Executive Description */}
                    <p className="text-charcoal-600 dark:text-charcoal-300 mb-5 leading-relaxed text-sm sm:text-base md:text-lg">
                      {exp.description}
                    </p>

                    {/* Technologies Pills */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-golden-50/90 dark:bg-charcoal-700/80 text-golden-800 dark:text-golden-200 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium border border-golden-200/50 dark:border-charcoal-600 hover:border-golden-400 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-charcoal-800 dark:text-white uppercase tracking-wider mb-2">
                        <Sparkles className="w-4 h-4 text-golden-600 dark:text-golden-400" />
                        <span>Key Deliverables & Highlights:</span>
                      </div>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start space-x-2.5 group/achievement text-xs sm:text-sm md:text-base"
                        >
                          <div className="p-1.5 rounded-full bg-golden-100 dark:bg-charcoal-700 text-golden-600 dark:text-golden-400 mt-0.5 shrink-0 group-hover/achievement:bg-golden-200 dark:group-hover/achievement:bg-charcoal-600 transition-colors">
                            <ArrowRight className="w-3 h-3 group-hover/achievement:translate-x-0.5 transition-transform" />
                          </div>
                          <div className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                            {renderAchievementText(achievement)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center space-x-2.5">
              {EXPERIENCES.map((_, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to experience ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${isActive
                      ? 'w-8 h-2.5 bg-gradient-to-r from-golden-500 to-orange-500 shadow-md shadow-golden-500/30'
                      : 'w-2.5 h-2.5 bg-golden-200 dark:bg-charcoal-700 hover:bg-golden-300 dark:hover:bg-charcoal-600'
                      }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
