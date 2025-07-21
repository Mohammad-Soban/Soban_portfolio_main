import React from 'react';
import { Brain, Code2, Zap } from 'lucide-react';
import { VisibilityState } from '../types/portfolio';
import { SKILLS } from '../constants/portfolioData';
import { SectionHeader } from './common/SectionHeader';
import { SkillCategory } from './skills/SkillCategory';
import { StatsGrid } from './skills/StatsGrid';

interface SkillsSectionProps {
  isVisible: VisibilityState;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
  const categories = [
    {
      key: 'core',
      title: 'Core Skills',
      icon: Brain,
    },
    {
      key: 'library',
      title: 'Libraries & Frameworks',
      icon: Code2,
    },
    {
      key: 'tool',
      title: 'Tools & Platforms',
      icon: Zap,
    },
  ];

  return (
    <section
      id="skills"
      data-animate
      className={`py-20 md:py-32 relative ${isVisible.skills ? "animate-fade-in-up" : ""}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-50 via-white to-orange-50 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-charcoal-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(248,232,200,0.3),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_70%,rgba(248,232,200,0.1),transparent_50%)]"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <SectionHeader
          icon={Code2}
          badge="Technical Expertise"
          title="Skills &"
          subtitle="Technologies"
          description="A comprehensive toolkit spanning the entire data science and AI development ecosystem"
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <SkillCategory
              key={category.key}
              category={category}
              skills={SKILLS.filter((skill) => skill.category === category.key)}
            />
          ))}
        </div>

        <StatsGrid />
      </div>
    </section>
  );
};
