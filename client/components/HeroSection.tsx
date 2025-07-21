import React from 'react';
import { ChevronDown } from 'lucide-react';
import { MousePosition } from '../types/portfolio';
import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';
import { RoleCycler } from './hero/RoleCycler';
import { SocialLinks } from './hero/SocialLinks';

interface HeroSectionProps {
  currentRole: string;
  mousePosition: MousePosition;
  isDarkMode: boolean;
  onResumeDownload: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentRole,
  mousePosition,
  isDarkMode,
  onResumeDownload,
}) => {
  const backgroundStyle = isDarkMode
    ? {
        background: `
          radial-gradient(circle at 20% 80%, rgba(248, 232, 200, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(240, 223, 167, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%)
        `,
      }
    : {
        background: `
          radial-gradient(circle at 20% 80%, rgba(248, 232, 200, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(240, 223, 167, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #f8f9fa 0%, #fff8e7 100%)
        `,
      };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
      style={backgroundStyle}
    >
      {/* Animated Background Elements */}
      <HeroBackground mousePosition={mousePosition} />

      {/* Content */}
      <div className="container-width section-padding text-center relative z-10">
        <HeroContent onResumeDownload={onResumeDownload} />
        
        {/* Role Cycler */}
        <RoleCycler currentRole={currentRole} />
        
        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 md:p-3 rounded-full bg-white/80 dark:bg-charcoal-800/80 backdrop-blur-xl border border-golden-200/50">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-golden-500" />
        </div>
      </div>
    </section>
  );
};
