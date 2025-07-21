import React from 'react';
import { BarChart3, Brain, Target, Zap } from 'lucide-react';
import { VisibilityState } from '../types/portfolio';
import { SectionHeader } from './common/SectionHeader';
import { JourneyCard } from './about/JourneyCard';
import { SpecialtyCard } from './about/SpecialtyCard';

interface AboutSectionProps {
  isVisible: VisibilityState;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isVisible }) => {
  const specialties = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Building intelligent systems with cutting-edge ML and deep learning technologies that adapt and evolve.",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600",
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      description:
        "Transforming raw data into meaningful insights through advanced statistical analysis and visualization.",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600",
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description:
        "Approaching complex challenges with creative, data-driven methodologies and innovative thinking.",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section
      id="about"
      data-animate
      className={`py-20 md:py-32 relative ${isVisible.about ? "animate-fade-in-up" : ""}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-charcoal-900 dark:to-charcoal-800"></div>

      <div className="container-width section-padding relative z-10">
        <SectionHeader
          icon={Target}
          badge="About Me"
          title="Turning Data Into"
          subtitle="Digital Gold"
          description="I'm a passionate Data Scientist and AI Engineer with a relentless drive to transform complex datasets into actionable insights. My expertise spans machine learning, deep learning, and advanced analytics, where I build intelligent systems that solve real-world challenges."
        />

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <JourneyCard />
          </div>

          <div className="space-y-4 md:space-y-6">
            {specialties.map((specialty, index) => (
              <SpecialtyCard
                key={index}
                icon={specialty.icon}
                title={specialty.title}
                description={specialty.description}
                bgColor={specialty.bgColor}
                iconColor={specialty.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
